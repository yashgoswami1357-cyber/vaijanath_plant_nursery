import React from 'react';
import { PLANT_CATEGORIES } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Compass } from 'lucide-react';

interface CategoriesPageProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E2EDE3] pb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#176B36] uppercase tracking-wider mb-1">
          <Compass className="w-4 h-4" />
          <span>Botanical Classification</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B]">
          Explore All Plant Categories ({PLANT_CATEGORIES.length})
        </h1>
        <p className="text-sm text-[#718078] max-w-2xl mt-1.5 leading-relaxed">
          From Ayurvedic medicinal shrubs and sacred Hindu worship flora to terrace garden herbs and rooftop fruit cultivars, browse specialized categories curated for Indian conditions.
        </p>
      </div>

      {/* Grid of 20 categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PLANT_CATEGORIES.map(cat => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.name)}
            className="bg-white rounded-3xl border border-[#E2EDE3] overflow-hidden hover:shadow-xl hover:border-[#176B36]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="h-44 overflow-hidden relative">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full">
                {cat.plantCount} Plants Archived
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#064E2B] group-hover:text-[#176B36] transition-colors leading-tight mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#718078] leading-relaxed line-clamp-3 mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2EDE3] flex items-center justify-between text-xs font-semibold text-[#176B36]">
                <span>Browse {cat.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
