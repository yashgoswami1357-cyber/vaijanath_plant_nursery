import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PlantsPage } from './pages/PlantsPage';
import { PlantDetailPage } from './pages/PlantDetailPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { FertilizersPage } from './pages/FertilizersPage';
import { FertilizerDetailPage } from './pages/FertilizerDetailPage';
import { AiAssistantPage } from './pages/AiAssistantPage';
import { AboutPage } from './pages/AboutPage';
import { FavoritesModal } from './components/FavoritesModal';
import { AuthModal } from './components/AuthModal';
import { ALL_PLANTS } from './data/allPlants';
import { FERTILIZERS } from './data/fertilizers';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedPlantSlug, setSelectedPlantSlug] = useState<string | null>(null);
  const [selectedFertilizerSlug, setSelectedFertilizerSlug] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [aiContextSubject, setAiContextSubject] = useState<string>('');
  
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const { addRecentlyViewedPlant } = useAuth();

  // Navigation handlers
  const handleNav = (tab: string, param?: string) => {
    setSelectedPlantSlug(null);
    setSelectedFertilizerSlug(null);
    if (tab === 'plants' && param) {
      setSelectedCategory(param);
    } else if (tab === 'plants') {
      setSelectedCategory('');
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlant = (slug: string) => {
    const found = ALL_PLANTS.find(p => p.slug === slug);
    if (found) {
      addRecentlyViewedPlant(found.id);
    }
    setSelectedPlantSlug(slug);
    setSelectedFertilizerSlug(null);
    setCurrentTab('plant-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFertilizer = (slug: string) => {
    setSelectedFertilizerSlug(slug);
    setSelectedPlantSlug(null);
    setCurrentTab('fertilizer-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAiWithContext = (subject: string) => {
    setAiContextSubject(subject);
    setSelectedPlantSlug(null);
    setSelectedFertilizerSlug(null);
    setCurrentTab('ai-assistant');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPlant = selectedPlantSlug
    ? ALL_PLANTS.find(p => p.slug === selectedPlantSlug) || ALL_PLANTS[0]
    : null;

  const currentFertilizer = selectedFertilizerSlug
    ? FERTILIZERS.find(f => f.slug === selectedFertilizerSlug) || FERTILIZERS[0]
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBF7] text-[#183426]">
      {/* Global Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleNav}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onSelectPlant={handleSelectPlant}
        onSelectFertilizer={handleSelectFertilizer}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNav={handleNav}
            onSelectPlant={handleSelectPlant}
            onSelectFertilizer={handleSelectFertilizer}
          />
        )}

        {currentTab === 'plants' && (
          <PlantsPage
            initialCategory={selectedCategory}
            onSelectPlant={handleSelectPlant}
          />
        )}

        {currentTab === 'plant-detail' && currentPlant && (
          <PlantDetailPage
            plant={currentPlant}
            onBack={() => handleNav('plants')}
            onSelectPlant={handleSelectPlant}
            onOpenAiWithContext={handleOpenAiWithContext}
          />
        )}

        {currentTab === 'categories' && (
          <CategoriesPage
            onSelectCategory={(categoryName) => {
              setSelectedCategory(categoryName);
              handleNav('plants', categoryName);
            }}
          />
        )}

        {currentTab === 'fertilizers' && (
          <FertilizersPage
            onSelectFertilizer={handleSelectFertilizer}
          />
        )}

        {currentTab === 'fertilizer-detail' && currentFertilizer && (
          <FertilizerDetailPage
            fertilizer={currentFertilizer}
            onBack={() => handleNav('fertilizers')}
            onSelectFertilizer={handleSelectFertilizer}
            onOpenAiWithContext={handleOpenAiWithContext}
          />
        )}

        {currentTab === 'ai-assistant' && (
          <AiAssistantPage
            initialSubject={aiContextSubject}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNav={handleNav} />

      {/* Modals */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        onSelectPlant={handleSelectPlant}
        onSelectFertilizer={handleSelectFertilizer}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSelectPlant={handleSelectPlant}
        onSelectFertilizer={handleSelectFertilizer}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}
