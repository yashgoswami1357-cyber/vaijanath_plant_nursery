import React, { useState } from 'react';
import { X, Heart, Trash2, ArrowRight, Sprout, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { ALL_PLANTS } from '../data/allPlants';
import { FERTILIZERS } from '../data/fertilizers';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlant: (slug: string) => void;
  onSelectFertilizer: (slug: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  onSelectPlant,
  onSelectFertilizer
}) => {
  const { t, language } = useLanguage();
  const { user, isPlantFavorite, toggleFavoritePlant, toggleFavoriteFertilizer, isFertilizerFavorite } = useAuth();
  const [activeTab, setActiveTab] = useState<'plants' | 'fertilizers'>('plants');

  if (!isOpen) return null;

  const favoritePlants = ALL_PLANTS.filter(p => isPlantFavorite(p.id));
  const favoriteFertilizers = FERTILIZERS.filter(f => isFertilizerFavorite(f.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#E2EDE3] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E2EDE3] flex items-center justify-between bg-[#F8FBF7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-red-500" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-[#064E2B]">
                {t.nav.favorites}
              </h2>
              <p className="text-xs text-[#718078]">
                {favoritePlants.length} plants • {favoriteFertilizers.length} fertilizers saved
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-[#718078] hover:text-[#183426] hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#E2EDE3] px-6 pt-3 gap-6 bg-white">
          <button
            onClick={() => setActiveTab('plants')}
            className={`pb-3 text-sm font-semibold relative transition-colors cursor-pointer ${
              activeTab === 'plants' ? 'text-[#176B36]' : 'text-[#718078] hover:text-[#183426]'
            }`}
          >
            Favorite Plants ({favoritePlants.length})
            {activeTab === 'plants' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176B36] rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('fertilizers')}
            className={`pb-3 text-sm font-semibold relative transition-colors cursor-pointer ${
              activeTab === 'fertilizers' ? 'text-[#176B36]' : 'text-[#718078] hover:text-[#183426]'
            }`}
          >
            Organic Fertilizers ({favoriteFertilizers.length})
            {activeTab === 'fertilizers' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176B36] rounded-full"></span>
            )}
          </button>
        </div>

        {/* List Content */}
        <div className="p-6 overflow-y-auto flex-1 divide-y divide-[#E2EDE3]">
          {activeTab === 'plants' && (
            favoritePlants.length === 0 ? (
              <div className="py-12 text-center text-[#718078]">
                <Sprout className="w-12 h-12 text-[#176B36]/30 mx-auto mb-3" />
                <p className="text-sm font-medium">No saved favorite plants yet.</p>
                <p className="text-xs mt-1">Browse the plant directory and tap the heart icon to save your favorites!</p>
              </div>
            ) : (
              favoritePlants.map(plant => (
                <div key={plant.id} className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                  <div 
                    onClick={() => {
                      onSelectPlant(plant.slug);
                      onClose();
                    }}
                    className="flex items-center gap-3.5 cursor-pointer flex-1 min-w-0"
                  >
                    <img 
                      src={plant.primaryImage} 
                      alt={plant.commonName} 
                      className="w-14 h-14 rounded-2xl object-cover shrink-0" 
                    />
                    <div className="truncate">
                      <h4 className="font-serif text-base font-bold text-[#064E2B] hover:text-[#176B36] truncate">
                        {plant.regionalNames[language] || plant.commonName}
                      </h4>
                      <p className="text-xs text-[#718078] italic truncate">
                        {plant.scientificName}
                      </p>
                      <span className="inline-block mt-1 text-[10px] bg-[#EAF6E9] text-[#176B36] px-2 py-0.5 rounded-full font-medium">
                        {plant.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleFavoritePlant(plant.id)}
                      className="p-2 text-[#718078] hover:text-red-500 rounded-xl hover:bg-red-50 transition-colors"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectPlant(plant.slug);
                        onClose();
                      }}
                      className="p-2 bg-[#EAF6E9] text-[#176B36] hover:bg-[#176B36] hover:text-white rounded-xl transition-all"
                      title="View details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )
          )}

          {activeTab === 'fertilizers' && (
            favoriteFertilizers.length === 0 ? (
              <div className="py-12 text-center text-[#718078]">
                <Sparkles className="w-12 h-12 text-[#795334]/30 mx-auto mb-3" />
                <p className="text-sm font-medium">No saved fertilizer recipes yet.</p>
                <p className="text-xs mt-1">Explore our 15 traditional Indian organic fertilizers and save your preferred preparations!</p>
              </div>
            ) : (
              favoriteFertilizers.map(fert => (
                <div key={fert.id} className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                  <div 
                    onClick={() => {
                      onSelectFertilizer(fert.slug);
                      onClose();
                    }}
                    className="flex items-center gap-3.5 cursor-pointer flex-1 min-w-0"
                  >
                    <img 
                      src={fert.image} 
                      alt={fert.name} 
                      className="w-14 h-14 rounded-2xl object-cover shrink-0" 
                    />
                    <div className="truncate">
                      <h4 className="font-serif text-base font-bold text-[#064E2B] hover:text-[#176B36] truncate">
                        {fert.localNames[language] || fert.name}
                      </h4>
                      <p className="text-xs text-[#718078] truncate">
                        {fert.category} • Prep: {fert.preparation.fermentationTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleFavoriteFertilizer(fert.id)}
                      className="p-2 text-[#718078] hover:text-red-500 rounded-xl hover:bg-red-50 transition-colors"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectFertilizer(fert.slug);
                        onClose();
                      }}
                      className="p-2 bg-[#EAF6E9] text-[#176B36] hover:bg-[#176B36] hover:text-white rounded-xl transition-all"
                      title="View recipe"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8FBF7] border-t border-[#E2EDE3] flex items-center justify-between">
          <p className="text-xs text-[#718078]">
            {user ? `Saved to ${user.name}'s account` : 'Stored locally in your browser'}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#E2EDE3] text-sm font-semibold rounded-xl text-[#183426] hover:bg-[#EAF6E9] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
