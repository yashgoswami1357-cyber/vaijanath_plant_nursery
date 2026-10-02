import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  X, 
  SlidersHorizontal, 
  Sprout, 
  Check,
  ChevronDown,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ALL_PLANTS } from '../data/allPlants';
import { PLANT_CATEGORIES } from '../data/categories';
import { PlantCard } from '../components/PlantCard';

interface PlantsPageProps {
  initialCategory?: string;
  onSelectPlant: (slug: string) => void;
}

export const PlantsPage: React.FC<PlantsPageProps> = ({ 
  initialCategory = '',
  onSelectPlant 
}) => {
  const { t, language } = useLanguage();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSunlight, setSelectedSunlight] = useState<string>('');
  const [selectedWater, setSelectedWater] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedPlantType, setSelectedPlantType] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'name-asc' | 'name-desc'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [showCategoryGrid, setShowCategoryGrid] = useState(false);

  // Filter options
  const sunlightOptions = ['Full Sun', 'Partial Shade', 'Indirect Bright Light'];
  const waterOptions = ['Low', 'Moderate', 'High', 'Very Low'];
  const difficultyOptions = ['Easy', 'Moderate', 'Challenging'];
  const plantTypeOptions = ['Herb', 'Shrub', 'Tree', 'Climber', 'Succulent'];

  const filteredPlants = useMemo(() => {
    return ALL_PLANTS.filter(plant => {
      // Search matches
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = plant.commonName.toLowerCase().includes(q) ||
          plant.scientificName.toLowerCase().includes(q) ||
          plant.category.toLowerCase().includes(q) ||
          (plant.regionalNames.hi && plant.regionalNames.hi.toLowerCase().includes(q)) ||
          (plant.regionalNames.gu && plant.regionalNames.gu.toLowerCase().includes(q)) ||
          (plant.regionalNames.mr && plant.regionalNames.mr.toLowerCase().includes(q)) ||
          plant.uses.medicinal.some(u => u.toLowerCase().includes(q));
        if (!matchesName) return false;
      }

      // Category
      if (selectedCategory && plant.category !== selectedCategory) {
        return false;
      }

      // Sunlight
      if (selectedSunlight && !plant.growingConditions.sunlight.toLowerCase().includes(selectedSunlight.toLowerCase())) {
        return false;
      }

      // Water
      if (selectedWater && plant.wateringGuide.requirement !== selectedWater) {
        return false;
      }

      // Difficulty
      if (selectedDifficulty && plant.difficulty !== selectedDifficulty) {
        return false;
      }

      // Plant Type
      if (selectedPlantType && plant.plantType !== selectedPlantType) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      }
      if (sortBy === 'name-asc') {
        return a.commonName.localeCompare(b.commonName);
      }
      if (sortBy === 'name-desc') {
        return b.commonName.localeCompare(a.commonName);
      }
      return 0;
    });
  }, [search, selectedCategory, selectedSunlight, selectedWater, selectedDifficulty, selectedPlantType, sortBy]);

  const clearAllFilters = () => {
    setSearch('');
    setSelectedCategory('');
    setSelectedSunlight('');
    setSelectedWater('');
    setSelectedDifficulty('');
    setSelectedPlantType('');
    setSortBy('popular');
  };

  const hasActiveFilters = !!(search || selectedCategory || selectedSunlight || selectedWater || selectedDifficulty || selectedPlantType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2EDE3] pb-6">
        <div>
          <span className="text-xs font-bold text-[#176B36] uppercase tracking-wider block mb-1">
            Indian Botanical Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B]">
            {selectedCategory ? `${selectedCategory}` : 'Plants of India Directory'}
          </h1>
          <p className="text-sm text-[#718078] mt-1">
            Showing {filteredPlants.length} of {ALL_PLANTS.length} botanical profiles adapted for Indian climate
          </p>
        </div>

        {/* View Mode & Category Grid Toggle & Mobile Filter Trigger */}
        <div className="flex items-center gap-2 flex-wrap">
          
          <button
            onClick={() => setShowCategoryGrid(!showCategoryGrid)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              showCategoryGrid 
                ? 'bg-[#176B36] text-white border-[#176B36]' 
                : 'bg-white text-[#183426] border-[#E2EDE3] hover:border-[#176B36]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{showCategoryGrid ? 'Hide Category Grid' : 'Browse All 20 Categories'}</span>
          </button>

          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-white border border-[#E2EDE3] rounded-xl text-xs font-semibold text-[#183426]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#176B36]" />
            Filters {hasActiveFilters && `(Active)`}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 bg-white border border-[#E2EDE3] rounded-xl text-xs font-semibold text-[#183426] appearance-none pr-8 focus:outline-none focus:border-[#176B36]"
            >
              <option value="popular">Sort: Popular First</option>
              <option value="name-asc">Sort: Name (A-Z)</option>
              <option value="name-desc">Sort: Name (Z-A)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#718078] absolute right-2.5 top-3 pointer-events-none" />
          </div>

          {/* Grid vs List toggle */}
          <div className="hidden sm:flex items-center border border-[#E2EDE3] bg-white rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#EAF6E9] text-[#176B36]' : 'text-[#718078]'
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-[#EAF6E9] text-[#176B36]' : 'text-[#718078]'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* QUICK HORIZONTAL CATEGORIES CAROUSEL BAR */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-[#718078]">
          <span className="font-semibold uppercase tracking-wider text-[#176B36] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Plant Categories:
          </span>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory('')}
              className="text-[#176B36] font-semibold hover:underline cursor-pointer"
            >
              Show All Plants
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === ''
                ? 'bg-[#176B36] text-white shadow-xs scale-102'
                : 'bg-white text-[#183426] border border-[#E2EDE3] hover:bg-[#EAF6E9]'
            }`}
          >
            All Categories ({ALL_PLANTS.length})
          </button>
          {PLANT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? '' : cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.name
                  ? 'bg-[#176B36] text-white shadow-xs scale-102'
                  : 'bg-white text-[#183426] border border-[#E2EDE3] hover:bg-[#EAF6E9]'
              }`}
            >
              {cat.name} ({cat.plantCount})
            </button>
          ))}
        </div>
      </div>

      {/* EXPANDABLE VISUAL CATEGORY GRID */}
      {showCategoryGrid && (
        <div className="p-6 bg-[#F8FBF7] rounded-3xl border border-[#E2EDE3] space-y-5 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">
                Explore Botanical Categories ({PLANT_CATEGORIES.length})
              </h3>
              <p className="text-xs text-[#718078] mt-0.5">
                Click any category card to immediately filter the catalog below.
              </p>
            </div>
            <button
              onClick={() => setShowCategoryGrid(false)}
              className="text-xs font-semibold text-[#176B36] hover:underline"
            >
              Close Grid ✕
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {PLANT_CATEGORIES.map(cat => (
              <div
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setShowCategoryGrid(false);
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer group flex items-center gap-3.5 ${
                  selectedCategory === cat.name
                    ? 'bg-[#EAF6E9] border-[#176B36] shadow-sm'
                    : 'bg-white border-[#E2EDE3] hover:border-[#176B36]/50 hover:shadow-xs'
                }`}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-12 h-12 rounded-xl object-cover shrink-0" 
                />
                <div className="min-w-0">
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-[#064E2B] group-hover:text-[#176B36] truncate">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] text-[#718078]">
                    {cat.plantCount} plants
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Layout: Filter Sidebar + Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* DESKTOP FILTER SIDEBAR */}
        <aside className={`md:block ${mobileFilterOpen ? 'block' : 'hidden'} md:col-span-1 bg-white p-5 rounded-3xl border border-[#E2EDE3] shadow-xs space-y-6`}>
          
          <div className="flex items-center justify-between pb-3 border-b border-[#E2EDE3]">
            <h3 className="font-serif text-base font-bold text-[#064E2B] flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#176B36]" />
              Filter Plants
            </h3>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-red-500 hover:underline cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Search Box in Filter */}
          <div>
            <label className="block text-xs font-semibold text-[#183426] mb-1.5">Search Name / Uses</label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Tulsi, cough, shade..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl focus:outline-none focus:border-[#176B36]"
              />
              <Search className="w-3.5 h-3.5 text-[#718078] absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-xs font-semibold text-[#183426] mb-1.5">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl focus:outline-none focus:border-[#176B36]"
            >
              <option value="">All Categories ({PLANT_CATEGORIES.length})</option>
              {PLANT_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Sunlight Requirement */}
          <div>
            <label className="block text-xs font-semibold text-[#183426] mb-1.5">Sunlight</label>
            <div className="space-y-1">
              {sunlightOptions.map(sun => (
                <button
                  key={sun}
                  onClick={() => setSelectedSunlight(selectedSunlight === sun ? '' : sun)}
                  className={`w-full text-left px-2.5 py-1 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    selectedSunlight === sun ? 'bg-[#EAF6E9] text-[#176B36] font-semibold' : 'text-[#183426] hover:bg-[#F8FBF7]'
                  }`}
                >
                  <span>{sun}</span>
                  {selectedSunlight === sun && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Water Requirement */}
          <div>
            <label className="block text-xs font-semibold text-[#183426] mb-1.5">Watering</label>
            <div className="space-y-1">
              {waterOptions.map(water => (
                <button
                  key={water}
                  onClick={() => setSelectedWater(selectedWater === water ? '' : water)}
                  className={`w-full text-left px-2.5 py-1 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    selectedWater === water ? 'bg-[#EAF6E9] text-[#176B36] font-semibold' : 'text-[#183426] hover:bg-[#F8FBF7]'
                  }`}
                >
                  <span>{water} Water</span>
                  {selectedWater === water && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block text-xs font-semibold text-[#183426] mb-1.5">Difficulty</label>
            <div className="space-y-1">
              {difficultyOptions.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? '' : diff)}
                  className={`w-full text-left px-2.5 py-1 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    selectedDifficulty === diff ? 'bg-[#EAF6E9] text-[#176B36] font-semibold' : 'text-[#183426] hover:bg-[#F8FBF7]'
                  }`}
                >
                  <span>{diff} Care</span>
                  {selectedDifficulty === diff && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Plant Type */}
          <div>
            <label className="block text-xs font-semibold text-[#183426] mb-1.5">Growth Type</label>
            <div className="space-y-1">
              {plantTypeOptions.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedPlantType(selectedPlantType === type ? '' : type)}
                  className={`w-full text-left px-2.5 py-1 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    selectedPlantType === type ? 'bg-[#EAF6E9] text-[#176B36] font-semibold' : 'text-[#183426] hover:bg-[#F8FBF7]'
                  }`}
                >
                  <span>{type}</span>
                  {selectedPlantType === type && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

        </aside>

        {/* PLANTS GRID / LIST CONTAINER */}
        <main className="md:col-span-3 space-y-6">
          
          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs text-[#718078] font-medium">Active Filters:</span>
              {search && (
                <span className="inline-flex items-center gap-1 text-xs bg-[#EAF6E9] text-[#176B36] px-2.5 py-1 rounded-full font-medium">
                  Search: "{search}"
                  <button onClick={() => setSearch('')} className="hover:text-red-500">✕</button>
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 text-xs bg-[#EAF6E9] text-[#176B36] px-2.5 py-1 rounded-full font-medium">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('')} className="hover:text-red-500">✕</button>
                </span>
              )}
              {selectedSunlight && (
                <span className="inline-flex items-center gap-1 text-xs bg-[#EAF6E9] text-[#176B36] px-2.5 py-1 rounded-full font-medium">
                  Sun: {selectedSunlight}
                  <button onClick={() => setSelectedSunlight('')} className="hover:text-red-500">✕</button>
                </span>
              )}
              {selectedWater && (
                <span className="inline-flex items-center gap-1 text-xs bg-[#EAF6E9] text-[#176B36] px-2.5 py-1 rounded-full font-medium">
                  Water: {selectedWater}
                  <button onClick={() => setSelectedWater('')} className="hover:text-red-500">✕</button>
                </span>
              )}
              {selectedDifficulty && (
                <span className="inline-flex items-center gap-1 text-xs bg-[#EAF6E9] text-[#176B36] px-2.5 py-1 rounded-full font-medium">
                  Difficulty: {selectedDifficulty}
                  <button onClick={() => setSelectedDifficulty('')} className="hover:text-red-500">✕</button>
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#718078] hover:text-[#183426] underline ml-2 cursor-pointer"
              >
                Reset All
              </button>
            </div>
          )}

          {/* Plant Cards Display */}
          {filteredPlants.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#E2EDE3] p-12 text-center space-y-4">
              <Sprout className="w-16 h-16 text-[#176B36]/30 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">
                No matching plants found
              </h3>
              <p className="text-sm text-[#718078] max-w-md mx-auto">
                We couldn't find any botanical records matching your selected filters. Try broadening your criteria or reset the filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 bg-[#176B36] text-white rounded-xl text-xs font-semibold hover:bg-[#064E2B] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }>
              {filteredPlants.map(plant => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onSelect={onSelectPlant}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}

        </main>

      </div>

    </div>
  );
};
