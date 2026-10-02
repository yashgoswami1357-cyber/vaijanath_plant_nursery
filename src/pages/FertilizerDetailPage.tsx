import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Share2, 
  Heart, 
  Bot, 
  ChevronRight,
  ShieldCheck,
  Check,
  Sprout
} from 'lucide-react';
import { Fertilizer } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { FERTILIZERS } from '../data/fertilizers';

interface FertilizerDetailPageProps {
  fertilizer: Fertilizer;
  onBack: () => void;
  onSelectFertilizer: (slug: string) => void;
  onOpenAiWithContext: (name: string) => void;
}

export const FertilizerDetailPage: React.FC<FertilizerDetailPageProps> = ({
  fertilizer,
  onBack,
  onSelectFertilizer,
  onOpenAiWithContext
}) => {
  const { language, t } = useLanguage();
  const { isFertilizerFavorite, toggleFavoriteFertilizer } = useAuth();
  const isFav = isFertilizerFavorite(fertilizer.id);

  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${fertilizer.name} - Organic Fertilizer Recipe`,
        text: fertilizer.shortDescription,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const localizedName = fertilizer.localNames[language] || fertilizer.localNames.en || fertilizer.name;

  const relatedFertilizers = FERTILIZERS.filter(f => 
    f.id !== fertilizer.id && (f.category === fertilizer.category || fertilizer.relatedFertilizerSlugs?.includes(f.slug))
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#718078] flex-wrap">
        <button onClick={onBack} className="hover:text-[#176B36] cursor-pointer">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={onBack} className="hover:text-[#176B36] cursor-pointer">Organic Fertilizers</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#183426] font-semibold">{localizedName}</span>
      </nav>

      {/* Main Top Overview Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Fertilizer Image */}
        <div className="lg:col-span-5">
          <div className="aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-[#F8FBF7] border border-[#E2EDE3] shadow-lg relative">
            <img 
              src={fertilizer.image} 
              alt={fertilizer.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#795334] text-xs font-semibold px-3 py-1 rounded-full shadow-xs border border-[#E2EDE3]">
              {fertilizer.category}
            </span>
          </div>
        </div>

        {/* Details & Controls */}
        <div className="lg:col-span-7 space-y-5">
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#795334]/10 text-[#795334]">
                Traditional Indian Organic Recipe
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B] mt-1.5 leading-tight">
                {localizedName}
              </h1>
              <p className="text-xs text-[#718078] mt-1">
                {fertilizer.localNames.hi && `Hindi: ${fertilizer.localNames.hi} • `}
                {fertilizer.localNames.gu && `Gujarati: ${fertilizer.localNames.gu}`}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => toggleFavoriteFertilizer(fertilizer.id)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer shadow-xs ${
                  isFav 
                    ? 'bg-red-50 border-red-200 text-red-500' 
                    : 'bg-white border-[#E2EDE3] text-[#183426] hover:border-[#176B36]'
                }`}
                title="Save recipe"
              >
                <Heart className={`w-5 h-5 ${isFav ? 'fill-red-500' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-3 rounded-2xl bg-white border border-[#E2EDE3] text-[#183426] hover:border-[#176B36] transition-all cursor-pointer shadow-xs relative"
                title="Share recipe"
              >
                <Share2 className="w-5 h-5 text-[#176B36]" />
                {copiedLink && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#064E2B] text-white text-[10px] px-2 py-0.5 rounded-md whitespace-nowrap">
                    Link Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          <p className="text-base text-[#183426]/85 leading-relaxed">
            {fertilizer.detailedIntro}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#F8FBF7] border border-[#E2EDE3] p-3 rounded-2xl">
              <span className="text-[11px] text-[#718078] font-semibold uppercase block">Prep Time</span>
              <span className="text-sm font-bold text-[#183426]">{fertilizer.preparation.prepTime}</span>
            </div>
            <div className="bg-[#F8FBF7] border border-[#E2EDE3] p-3 rounded-2xl">
              <span className="text-[11px] text-[#718078] font-semibold uppercase block">Fermentation</span>
              <span className="text-sm font-bold text-[#064E2B]">{fertilizer.preparation.fermentationTime}</span>
            </div>
            <div className="bg-[#F8FBF7] border border-[#E2EDE3] p-3 rounded-2xl">
              <span className="text-[11px] text-[#718078] font-semibold uppercase block">Estimated Cost</span>
              <span className="text-sm font-bold text-[#795334]">{fertilizer.preparation.estimatedCost}</span>
            </div>
          </div>

          {/* Montu AI Assistance CTA */}
          <div className="pt-2">
            <button
              onClick={() => onOpenAiWithContext(fertilizer.name)}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#176B36] to-[#064E2B] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/50 bg-[#EAF6E9] shadow-xs group-hover:scale-110 transition-transform">
                <img 
                  src="/images/montu_avatar.png" 
                  alt="Montu" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                  }}
                />
              </div>
              <span>Ask Montu How to Prepare {fertilizer.name}</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>
          </div>

        </div>

      </div>

      {/* INGREDIENTS & MATERIALS SECTION */}
      <section className="bg-white rounded-3xl border border-[#E2EDE3] p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#064E2B]">
          Materials & Ingredients Required
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fertilizer.ingredients.map((ing, i) => (
            <div key={i} className="flex items-start justify-between p-3.5 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3]">
              <div>
                <p className="text-sm font-bold text-[#183426]">{ing.name}</p>
                <p className="text-xs text-[#718078] mt-0.5">{ing.purpose}</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-[#EAF6E9] text-[#176B36] shrink-0">
                {ing.quantity}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#F8FBF7] rounded-2xl border border-[#E2EDE3]">
          <p className="text-xs font-bold text-[#064E2B] uppercase mb-1.5">Tools & Equipment Needed</p>
          <div className="flex flex-wrap gap-2">
            {fertilizer.preparation.toolsRequired.map((tool, idx) => (
              <span key={idx} className="text-xs bg-white border border-[#E2EDE3] text-[#183426] px-3 py-1 rounded-full font-medium">
                🛠️ {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP PREPARATION METHOD */}
      <section className="bg-white rounded-3xl border border-[#E2EDE3] p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#064E2B]">
          Step-by-Step Preparation Method
        </h2>

        <div className="space-y-3">
          {fertilizer.preparation.steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3]">
              <span className="w-7 h-7 rounded-full bg-[#176B36] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-sm text-[#183426]/90 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-[#EAF6E9]/40 border border-[#E2EDE3]">
            <p className="text-xs font-bold text-[#176B36] uppercase mb-1">Signs of Successful Preparation</p>
            <p className="text-xs text-[#183426]">{fertilizer.preparation.signsOfSuccess}</p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
            <p className="text-xs font-bold text-amber-800 uppercase mb-1">Common Mistakes to Avoid</p>
            <ul className="text-xs text-amber-900 space-y-1">
              {fertilizer.preparation.commonMistakes.map((m, i) => (
                <li key={i}>• {m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW TO APPLY & DOSAGE GUIDE */}
      <section className="bg-white rounded-3xl border border-[#E2EDE3] p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#064E2B]">
          Application Guide & Dosages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3] space-y-3">
            <h3 className="text-sm font-bold text-[#064E2B] uppercase">Dosage & Frequency</h3>
            <p className="text-sm text-[#183426]">
              <strong>Recommended Quantity:</strong> {fertilizer.application.recommendedQuantity}
            </p>
            <p className="text-sm text-[#183426]">
              <strong>Dilution Ratio:</strong> {fertilizer.application.dilutionRatio}
            </p>
            <p className="text-sm text-[#183426]">
              <strong>Frequency:</strong> {fertilizer.application.applicationFrequency}
            </p>
            <p className="text-xs text-[#718078]">
              <strong>Best Time to Apply:</strong> {fertilizer.application.bestTime}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3] space-y-3">
            <h3 className="text-sm font-bold text-[#064E2B] uppercase">Suitable Plants</h3>
            <div className="flex flex-wrap gap-1.5">
              {fertilizer.application.suitablePlants.map((sp, idx) => (
                <span key={idx} className="text-xs bg-white text-[#176B36] border border-[#E2EDE3] px-2.5 py-1 rounded-full font-medium">
                  🌿 {sp}
                </span>
              ))}
            </div>
            {fertilizer.application.avoidPlants.length > 0 && (
              <p className="text-xs text-red-600 mt-2">
                <strong>Avoid on:</strong> {fertilizer.application.avoidPlants.join(', ')}
              </p>
            )}
          </div>
        </div>

        {/* Nutritional Contribution */}
        <div className="p-5 rounded-2xl bg-[#064E2B] text-white space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAF6E9]">
            Nutritional Profile & Soil Benefits
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/10 p-2.5 rounded-xl">
              <span className="text-[#EAF6E9]/70 block">Nitrogen (N)</span>
              <span className="font-bold text-white text-sm">{fertilizer.nutritionalContribution.nitrogen}</span>
            </div>
            <div className="bg-white/10 p-2.5 rounded-xl">
              <span className="text-[#EAF6E9]/70 block">Phosphorus (P)</span>
              <span className="font-bold text-white text-sm">{fertilizer.nutritionalContribution.phosphorus}</span>
            </div>
            <div className="bg-white/10 p-2.5 rounded-xl">
              <span className="text-[#EAF6E9]/70 block">Potassium (K)</span>
              <span className="font-bold text-white text-sm">{fertilizer.nutritionalContribution.potassium}</span>
            </div>
          </div>
          <p className="text-xs text-[#EAF6E9]/85 pt-1">
            <strong>Microbiology:</strong> {fertilizer.nutritionalContribution.microbialActivity}
          </p>
        </div>
      </section>

      {/* FAQS */}
      {fertilizer.faqs.length > 0 && (
        <section className="bg-white rounded-3xl border border-[#E2EDE3] p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#064E2B] mb-2">
            Frequently Asked Questions
          </h2>
          {fertilizer.faqs.map((faq, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3] space-y-1.5">
              <h3 className="text-sm font-bold text-[#064E2B] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#176B36]" />
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-[#183426]/80 pl-6 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* RELATED FERTILIZERS */}
      {relatedFertilizers.length > 0 && (
        <section className="pt-6 border-t border-[#E2EDE3]">
          <h3 className="font-serif text-2xl font-bold text-[#064E2B] mb-6">
            Related Organic Fertilizers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedFertilizers.map(rel => (
              <div 
                key={rel.id}
                onClick={() => onSelectFertilizer(rel.slug)}
                className="bg-white rounded-3xl border border-[#E2EDE3] p-4 hover:shadow-lg transition-all cursor-pointer group flex items-center gap-4"
              >
                <img 
                  src={rel.image} 
                  alt={rel.name} 
                  className="w-18 h-18 rounded-2xl object-cover group-hover:scale-105 transition-transform" 
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#064E2B] group-hover:text-[#176B36] transition-colors leading-snug">
                    {rel.localNames[language] || rel.name}
                  </h4>
                  <p className="text-[11px] text-[#718078] mt-0.5">
                    {rel.category}
                  </p>
                  <span className="inline-block mt-1 text-[10px] bg-[#795334]/10 text-[#795334] px-2 py-0.5 rounded-full font-medium">
                    Recipe
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
