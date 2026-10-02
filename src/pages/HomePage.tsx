import React from 'react';
import { 
  Sprout, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Leaf, 
  ShieldCheck, 
  Award, 
  Sun, 
  Droplets, 
  Heart,
  ChevronRight,
  TrendingUp,
  Clock,
  Compass
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PLANT_CATEGORIES } from '../data/categories';
import { ALL_PLANTS } from '../data/allPlants';
import { FERTILIZERS } from '../data/fertilizers';
import { PlantCard } from '../components/PlantCard';
import { FertilizerCard } from '../components/FertilizerCard';
import { SeasonalCalendar } from '../components/SeasonalCalendar';

interface HomePageProps {
  onNav: (tab: string, param?: string) => void;
  onSelectPlant: (slug: string) => void;
  onSelectFertilizer: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNav,
  onSelectPlant,
  onSelectFertilizer
}) => {
  const { t, language } = useLanguage();

  // Popular plants to display on homepage
  const popularPlants = ALL_PLANTS.filter(p => p.isPopular).slice(0, 8);
  const previewFertilizers = FERTILIZERS.slice(0, 6);

  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF6E9]/60 via-[#F8FBF7] to-white pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-[#E2EDE3]/80">
        
        {/* Subtle Botanical Leaf Background Decor */}
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#3F9B45]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#176B36]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline, Subtitle & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF6E9] border border-[#176B36]/20 text-xs sm:text-sm font-semibold text-[#176B36] shadow-2xs">
                <Leaf className="w-4 h-4 text-[#3F9B45]" />
                <span>India’s Authentic Botanical & Organic Gardening Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#064E2B] leading-[1.15]">
                {t.hero.headline}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#183426]/80 max-w-2xl leading-relaxed">
                {t.hero.subheading}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNav('plants')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#176B36] hover:bg-[#064E2B] text-white font-semibold rounded-2xl text-base transition-all shadow-lg shadow-[#176B36]/25 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Sprout className="w-5 h-5 text-[#EAF6E9]" />
                  <span>{t.hero.explorePlants}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNav('ai-assistant')}
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#EAF6E9] text-[#176B36] font-semibold rounded-2xl text-base border-2 border-[#176B36]/30 transition-all shadow-xs flex items-center justify-center gap-3 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-[#176B36]/40 bg-[#EAF6E9]">
                    <img 
                      src="/images/montu_avatar.png" 
                      alt="Montu" 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                      }}
                    />
                  </div>
                  <span>{t.hero.askAi}</span>
                </button>
              </div>

              {/* Quick Stat Badges */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#E2EDE3]">
                <div className="text-center lg:text-left">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#064E2B]">20+</p>
                  <p className="text-xs text-[#718078] font-medium">Indian Plants</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#795334]">15+</p>
                  <p className="text-xs text-[#718078] font-medium">Organic Recipes</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#176B36]">4</p>
                  <p className="text-xs text-[#718078] font-medium">Indian Languages</p>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Botanical Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-4/5 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80"
                    alt="Indian Botanical Oasis - Vaijanath Nursery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-semibold bg-[#176B36] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1.5">
                      Kukarwada, Gujarat
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-snug">
                      Vaijanath Plant Nursery
                    </h3>
                    <p className="text-xs text-[#EAF6E9]/90">
                      Curated by Yash Goswami for sustainable green living
                    </p>
                  </div>
                </div>

                {/* Floating Feature Card: Montu AI Gardening */}
                <div 
                  onClick={() => onNav('ai-assistant')}
                  className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E2EDE3] flex items-center gap-3.5 max-w-xs cursor-pointer hover:border-[#176B36] transition-all hover:scale-102"
                >
                  <div className="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-[#176B36]/30 bg-[#EAF6E9] shadow-xs">
                    <img 
                      src="/images/montu_avatar.png" 
                      alt="Montu" 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#064E2B] flex items-center gap-1.5">
                      Montu – AI Assistant
                      <span className="w-2 h-2 rounded-full bg-[#3F9B45] animate-ping"></span>
                    </h4>
                    <p className="text-[11px] text-[#718078] leading-tight mt-0.5">
                      Get instant advice for plant pests & fertilizers
                    </p>
                  </div>
                </div>

                {/* Floating Feature Card: Desi Fertilizers */}
                <div 
                  onClick={() => onNav('fertilizers')}
                  className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#E2EDE3] flex items-center gap-2.5 cursor-pointer hover:border-[#176B36] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#795334]/15 text-[#795334] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#183426]">જીવામૃત & પંચગવ્ય</p>
                    <p className="text-[10px] text-[#718078]">100% Organic Recipes</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: EXPLORE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176B36] mb-1">
              <Compass className="w-4 h-4" />
              <span>Plant Types & Habitats</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B]">
              {t.categoriesSection.title}
            </h2>
            <p className="text-sm text-[#718078] max-w-xl mt-1.5">
              {t.categoriesSection.subtitle}
            </p>
          </div>

          <button
            onClick={() => onNav('categories')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#176B36] hover:text-[#064E2B] transition-colors cursor-pointer group"
          >
            <span>{t.categoriesSection.viewAll}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid (Top 8 for homepage) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PLANT_CATEGORIES.slice(0, 8).map(cat => (
            <div
              key={cat.id}
              onClick={() => onNav('plants', cat.name)}
              className="bg-white rounded-3xl border border-[#E2EDE3] overflow-hidden hover:shadow-lg hover:border-[#176B36]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-36 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                  {cat.plantCount} {t.categoriesSection.plantsCount}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#064E2B] group-hover:text-[#176B36] transition-colors leading-tight mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#718078] line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: SEASONAL CALENDAR (INDIAN RITU & SEASONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SeasonalCalendar
          onSelectPlant={onSelectPlant}
          onSelectFertilizer={onSelectFertilizer}
        />
      </section>

      {/* SECTION C: POPULAR INDIAN PLANTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176B36] mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Native Flora of India</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B]">
              {t.popularPlants.title}
            </h2>
            <p className="text-sm text-[#718078] max-w-xl mt-1.5">
              {t.popularPlants.subtitle}
            </p>
          </div>

          <button
            onClick={() => onNav('plants')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#176B36] hover:text-[#064E2B] transition-colors cursor-pointer group"
          >
            <span>View All {ALL_PLANTS.length} Plants</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Popular Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPlants.map(plant => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onSelect={onSelectPlant}
            />
          ))}
        </div>
      </section>

      {/* SECTION D: ORGANIC FERTILIZERS PREVIEW */}
      <section className="bg-gradient-to-b from-white via-[#F8FBF7] to-white py-16 border-y border-[#E2EDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795334] mb-1">
                <Sparkles className="w-4 h-4 text-[#795334]" />
                <span>Zero Budget Natural Farming</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B]">
                {t.fertilizersSection.title}
              </h2>
              <p className="text-sm text-[#718078] max-w-xl mt-1.5">
                {t.fertilizersSection.subtitle}
              </p>
            </div>

            <button
              onClick={() => onNav('fertilizers')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#176B36] hover:text-[#064E2B] transition-colors cursor-pointer group"
            >
              <span>{t.fertilizersSection.viewAll} ({FERTILIZERS.length} Recipes)</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewFertilizers.map(fert => (
              <FertilizerCard
                key={fert.id}
                fertilizer={fert}
                onSelect={onSelectFertilizer}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION E: MONTU AI ASSISTANT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#064E2B] via-[#176B36] to-[#064E2B] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative foliage circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F9B45]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#EAF6E9] backdrop-blur-xs">
                <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/40">
                  <img 
                    src="/images/montu_avatar.png" 
                    alt="Montu" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                    }}
                  />
                </div>
                <span>Meet Montu • Botanical AI Specialist</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t.aiBanner.title}
              </h2>

              <p className="text-base text-[#EAF6E9]/85 leading-relaxed">
                {t.aiBanner.subtitle}
              </p>

              {/* Quick prompt chips */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full text-[#EAF6E9]">
                  💡 {t.aiBanner.chip1}
                </span>
                <span className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full text-[#EAF6E9]">
                  🌱 {t.aiBanner.chip2}
                </span>
                <span className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full text-[#EAF6E9]">
                  🌿 {t.aiBanner.chip3}
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNav('ai-assistant')}
                  className="px-8 py-3.5 bg-white text-[#176B36] hover:bg-[#EAF6E9] font-semibold rounded-2xl text-sm transition-all shadow-lg flex items-center gap-2.5 cursor-pointer hover:scale-102"
                >
                  <Sparkles className="w-4 h-4 text-[#3F9B45]" />
                  <span>{t.aiBanner.button}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Montu Portrait Visual */}
            <div className="hidden lg:flex lg:col-span-4 justify-center">
              <div className="w-48 h-48 rounded-3xl bg-white/10 backdrop-blur-md p-3 border-2 border-white/20 shadow-2xl relative group hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/montu_avatar.png"
                  alt="Montu AI Guide"
                  className="w-full h-full object-cover object-top rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                  }}
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#176B36] border border-white/30 text-white text-[11px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap shadow-md">
                  Montu (મોન્ટુ)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VAIJANATH NURSERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#064E2B]">
            Why Vaijanath Plant Nursery?
          </h2>
          <p className="text-sm text-[#718078] mt-2">
            Founded by Yash Goswami in Kukarwada, Gujarat, our digital platform bridges ancient Indian botanical wisdom with modern gardening science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-[#E2EDE3] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF6E9] text-[#176B36] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#064E2B]">100% India-Specific Climate</h3>
            <p className="text-xs text-[#718078] leading-relaxed">
              Every watering schedule, soil blend, and pruning advice is calibrated for Indian monsoons, peak 45°C summers, and sub-tropical winters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E2EDE3] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#795334]/10 text-[#795334] flex items-center justify-center mx-auto">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#064E2B]">Zero Chemical Fertilizers</h3>
            <p className="text-xs text-[#718078] leading-relaxed">
              Master the exact recipes for Jeevamrut, Panchagavya, and Vermicompost using cow dung, neem, and kitchen waste without synthetic salts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E2EDE3] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border border-[#176B36]/30 bg-[#EAF6E9] shadow-xs mx-auto">
              <img 
                src="/images/montu_avatar.png" 
                alt="Montu" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                }}
              />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#064E2B]">Montu Multilingual AI Assistant</h3>
            <p className="text-xs text-[#718078] leading-relaxed">
              Ask gardening doubts in Gujarati, Hindi, Marathi, or English and get immediate, respectful, and ecologically grounded remedies.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
