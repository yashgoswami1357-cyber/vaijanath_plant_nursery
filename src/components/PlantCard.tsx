import React from 'react';
import { Heart, Sun, Droplets, ArrowRight, ShieldCheck } from 'lucide-react';
import { Plant } from '../types';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

interface PlantCardProps {
  plant: Plant;
  onSelect: (slug: string) => void;
  viewMode?: 'grid' | 'list';
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant, onSelect, viewMode = 'grid' }) => {
  const { isPlantFavorite, toggleFavoritePlant } = useAuth();
  const { language, t } = useLanguage();
  const isFav = isPlantFavorite(plant.id);

  // Get localized name if available
  const localizedName = plant.regionalNames[language] || plant.regionalNames.en || plant.commonName;

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl border border-[#E2EDE3] p-4 sm:p-5 hover:shadow-lg transition-all duration-300 hover:border-[#176B36]/30 flex flex-col sm:flex-row gap-5 items-center group">
        <div className="w-full sm:w-44 h-44 rounded-xl overflow-hidden relative shrink-0">
          <img 
            src={plant.primaryImage} 
            alt={plant.commonName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavoritePlant(plant.id);
            }}
            className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 backdrop-blur-xs text-[#183426] hover:text-red-500 transition-colors shadow-xs"
            title="Save to favorites"
          >
            <Heart className={`w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : ''}`} />
          </button>
          <span className="absolute bottom-2.5 left-2.5 bg-[#064E2B]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
            {plant.category}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 
              onClick={() => onSelect(plant.slug)} 
              className="font-serif text-lg font-bold text-[#064E2B] hover:text-[#176B36] cursor-pointer transition-colors"
            >
              {localizedName}
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF6E9] text-[#176B36]">
              {plant.difficulty}
            </span>
          </div>

          <p className="text-xs text-[#718078] italic font-serif mb-2">
            {plant.scientificName} • {plant.family}
          </p>

          <p className="text-sm text-[#183426]/80 line-clamp-2 mb-4 leading-relaxed">
            {plant.shortIntro}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E2EDE3]">
            <div className="flex items-center gap-4 text-xs text-[#718078]">
              <span className="flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                {plant.growingConditions.sunlight}
              </span>
              <span className="flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-blue-500" />
                {plant.wateringGuide.requirement} Water
              </span>
            </div>

            <button
              onClick={() => onSelect(plant.slug)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#EAF6E9] text-[#176B36] hover:bg-[#176B36] hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-2xs"
            >
              {t.popularPlants.viewDetails}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E2EDE3] overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#176B36]/40 flex flex-col group h-full">
      {/* Plant Image Container */}
      <div className="h-56 relative overflow-hidden bg-[#F8FBF7]">
        <img 
          src={plant.primaryImage} 
          alt={plant.commonName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category Pill */}
        <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#064E2B] text-xs font-semibold px-3 py-1 rounded-full shadow-xs border border-[#E2EDE3]">
          {plant.category}
        </span>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavoritePlant(plant.id);
          }}
          className="absolute top-3.5 right-3.5 p-2.5 rounded-full bg-white/95 backdrop-blur-xs text-[#183426] hover:text-red-500 hover:scale-110 transition-all shadow-md cursor-pointer"
          title="Save to favorites"
        >
          <Heart className={`w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : ''}`} />
        </button>

        {/* Difficulty Badge bottom right */}
        <span className="absolute bottom-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#064E2B]/80 text-white backdrop-blur-xs">
          {plant.difficulty} Care
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Plant Title & Scientific */}
          <div className="mb-2">
            <h3 
              onClick={() => onSelect(plant.slug)} 
              className="font-serif text-xl font-bold text-[#064E2B] hover:text-[#176B36] cursor-pointer transition-colors leading-snug line-clamp-1"
            >
              {localizedName}
            </h3>
            <p className="text-xs text-[#718078] italic font-serif truncate mt-0.5">
              {plant.scientificName}
            </p>
          </div>

          {/* Short description */}
          <p className="text-sm text-[#183426]/75 line-clamp-2 leading-relaxed mb-4">
            {plant.shortIntro}
          </p>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-2 mb-4 text-xs bg-[#F8FBF7] p-2.5 rounded-xl border border-[#E2EDE3]">
            <div className="flex items-center gap-1.5 text-[#183426]">
              <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{plant.growingConditions.sunlight}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#183426]">
              <Droplets className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate">{plant.wateringGuide.requirement} Water</span>
            </div>
          </div>
        </div>

        {/* View Details Action Button */}
        <button
          onClick={() => onSelect(plant.slug)}
          className="w-full py-2.5 px-4 bg-[#EAF6E9] hover:bg-[#176B36] text-[#176B36] hover:text-white rounded-2xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn"
        >
          <span>{t.popularPlants.viewDetails}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
