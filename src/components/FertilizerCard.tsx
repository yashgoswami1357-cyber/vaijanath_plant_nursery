import React from 'react';
import { ArrowRight, Clock, Sparkles, Heart } from 'lucide-react';
import { Fertilizer } from '../types';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

interface FertilizerCardProps {
  fertilizer: Fertilizer;
  onSelect: (slug: string) => void;
}

export const FertilizerCard: React.FC<FertilizerCardProps> = ({ fertilizer, onSelect }) => {
  const { isFertilizerFavorite, toggleFavoriteFertilizer } = useAuth();
  const { language, t } = useLanguage();
  const isFav = isFertilizerFavorite(fertilizer.id);

  const localizedName = fertilizer.localNames[language] || fertilizer.localNames.en || fertilizer.name;

  return (
    <div className="bg-white rounded-3xl border border-[#E2EDE3] overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#176B36]/40 flex flex-col group h-full">
      
      {/* Fertilizer Image */}
      <div className="h-52 relative overflow-hidden bg-[#F8FBF7]">
        <img 
          src={fertilizer.image} 
          alt={fertilizer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category Badge */}
        <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#795334] text-xs font-semibold px-3 py-1 rounded-full shadow-xs border border-[#E2EDE3]">
          {fertilizer.category}
        </span>

        {/* Favorite Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavoriteFertilizer(fertilizer.id);
          }}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/95 backdrop-blur-xs text-[#183426] hover:text-red-500 hover:scale-110 transition-all shadow-md cursor-pointer"
          title="Save fertilizer recipe"
        >
          <Heart className={`w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : ''}`} />
        </button>

        {/* Prep Time pill */}
        <span className="absolute bottom-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#064E2B]/85 text-white backdrop-blur-xs flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#EAF6E9]" />
          {fertilizer.preparation.fermentationTime}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 
            onClick={() => onSelect(fertilizer.slug)}
            className="font-serif text-lg sm:text-xl font-bold text-[#064E2B] hover:text-[#176B36] cursor-pointer transition-colors leading-snug line-clamp-1 mb-1"
          >
            {localizedName}
          </h3>

          <p className="text-xs text-[#718078] mb-2.5">
            {fertilizer.localNames.hi || fertilizer.localNames.gu || fertilizer.category}
          </p>

          <p className="text-sm text-[#183426]/75 line-clamp-2 leading-relaxed mb-4">
            {fertilizer.shortDescription}
          </p>

          {/* Key Benefit Highlights */}
          <div className="mb-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#176B36] mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#3F9B45]" />
              <span>Key Organic Benefit:</span>
            </div>
            <p className="text-xs text-[#718078] line-clamp-1 pl-5 italic">
              "{fertilizer.mainBenefits[0]}"
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <button
          onClick={() => onSelect(fertilizer.slug)}
          className="w-full py-2.5 px-4 bg-[#EAF6E9] hover:bg-[#176B36] text-[#176B36] hover:text-white rounded-2xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn"
        >
          <span>{t.fertilizersSection.learnMore}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>

      </div>

    </div>
  );
};
