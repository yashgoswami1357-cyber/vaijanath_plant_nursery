import React, { useState, useMemo } from 'react';
import { Sparkles, Search, Filter, Clock, Sprout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FERTILIZERS } from '../data/fertilizers';
import { FertilizerCard } from '../components/FertilizerCard';

interface FertilizersPageProps {
  onSelectFertilizer: (slug: string) => void;
  initialCategory?: string;
}

export const FertilizersPage: React.FC<FertilizersPageProps> = ({ 
  onSelectFertilizer,
  initialCategory = ''
}) => {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = [
    'Compost',
    'Animal-based',
    'Plant-based',
    'Kitchen-waste',
    'Traditional Indian',
    'Liquid organic',
    'Soil amendment'
  ];

  const filteredFertilizers = useMemo(() => {
    return FERTILIZERS.filter(f => {
      if (search.trim()) {
        const q = search.toLowerCase();
        const matches = f.name.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q) ||
          (f.localNames.hi && f.localNames.hi.toLowerCase().includes(q)) ||
          (f.localNames.gu && f.localNames.gu.toLowerCase().includes(q)) ||
          f.shortDescription.toLowerCase().includes(q);
        if (!matches) return false;
      }

      if (selectedCategory && f.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [search, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E2EDE3] pb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#795334] uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4 text-[#795334]" />
          <span>Vedic Natural Farming Knowledge</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B]">
          Traditional Indian Organic Fertilizers
        </h1>
        <p className="text-sm text-[#718078] max-w-2xl mt-1.5 leading-relaxed">
          Explore complete step-by-step preparation guides, fermentation recipes, and application dosages for 15 essential Indian natural fertilizers—from Jeevamrut and Panchagavya to Kitchen Compost and Neem Cake.
        </p>
      </div>

      {/* Search & Category Pills Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fertilizer by name or ingredients..."
            className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-[#E2EDE3] rounded-2xl focus:outline-none focus:border-[#176B36]"
          />
          <Search className="w-4 h-4 text-[#718078] absolute left-3 top-3" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === '' 
                ? 'bg-[#176B36] text-white shadow-xs' 
                : 'bg-white text-[#183426] border border-[#E2EDE3] hover:bg-[#EAF6E9]'
            }`}
          >
            All Recipes ({FERTILIZERS.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#176B36] text-white shadow-xs' 
                  : 'bg-white text-[#183426] border border-[#E2EDE3] hover:bg-[#EAF6E9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Fertilizers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFertilizers.map(fert => (
          <FertilizerCard
            key={fert.id}
            fertilizer={fert}
            onSelect={onSelectFertilizer}
          />
        ))}
      </div>

    </div>
  );
};
