import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  Sun, 
  Droplets, 
  MapPin, 
  Sparkles, 
  Bot, 
  AlertTriangle, 
  HelpCircle, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Scissors, 
  ArrowLeft,
  ShieldCheck,
  Check,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Plant } from '../types';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { ALL_PLANTS } from '../data/allPlants';

interface PlantDetailPageProps {
  plant: Plant;
  onBack: () => void;
  onSelectPlant: (slug: string) => void;
  onOpenAiWithContext: (plantName: string) => void;
}

export const PlantDetailPage: React.FC<PlantDetailPageProps> = ({
  plant,
  onBack,
  onSelectPlant,
  onOpenAiWithContext
}) => {
  const { language, t } = useLanguage();
  const { isPlantFavorite, toggleFavoritePlant } = useAuth();
  const isFav = isPlantFavorite(plant.id);

  const [activeTab, setActiveTab] = useState<'overview' | 'uses' | 'growing' | 'planting' | 'watering' | 'fertilizer' | 'maintenance' | 'problems' | 'faqs'>('overview');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>(plant.primaryImage);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${plant.commonName} - Vaijanath Plant Nursery`,
        text: plant.shortIntro,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const localizedName = plant.regionalNames[language] || plant.regionalNames.en || plant.commonName;

  // Related plants
  const relatedPlants = ALL_PLANTS.filter(p => 
    p.id !== plant.id && (p.category === plant.category || plant.relatedPlantSlugs?.includes(p.slug))
  ).slice(0, 3);

  const tabs = [
    { id: 'overview', label: 'Overview & Botany' },
    { id: 'uses', label: 'Uses & Importance' },
    { id: 'growing', label: 'Growing Conditions' },
    { id: 'planting', label: 'Planting Guide' },
    { id: 'watering', label: 'Watering & Irrigation' },
    { id: 'fertilizer', label: 'Fertilizer & Nutrition' },
    { id: 'maintenance', label: 'Care & Maintenance' },
    { id: 'problems', label: 'Problems & Organic Remedies' },
    { id: 'faqs', label: 'FAQs' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#718078] flex-wrap">
        <button onClick={onBack} className="hover:text-[#176B36] cursor-pointer">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={onBack} className="hover:text-[#176B36] cursor-pointer">Plants</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#176B36] font-medium">{plant.category}</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#183426] font-semibold">{localizedName}</span>
      </nav>

      {/* Main Top Header & Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Gallery */}
        <div className="lg:col-span-5 space-y-4">
          <div className="aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-[#F8FBF7] border border-[#E2EDE3] shadow-lg relative">
            <img 
              src={selectedGalleryImg} 
              alt={plant.commonName}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#064E2B] text-xs font-semibold px-3 py-1 rounded-full shadow-xs border border-[#E2EDE3]">
              {plant.category}
            </span>
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[plant.primaryImage, ...plant.galleryImages].map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGalleryImg(img)}
                className={`w-18 h-18 rounded-2xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  selectedGalleryImg === img ? 'border-[#176B36] ring-2 ring-[#176B36]/20' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Plant Details & Quick Summary */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF6E9] text-[#176B36]">
                  {plant.plantType}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#795334]/10 text-[#795334]">
                  {plant.difficulty} Care
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E2B] leading-tight">
                {localizedName}
              </h1>

              <p className="text-sm font-serif italic text-[#718078] mt-1">
                {plant.scientificName} • Family: <span className="font-medium text-[#183426]">{plant.family}</span>
              </p>
            </div>

            {/* Favorite & Share Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => toggleFavoritePlant(plant.id)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer shadow-xs ${
                  isFav 
                    ? 'bg-red-50 border-red-200 text-red-500' 
                    : 'bg-white border-[#E2EDE3] text-[#183426] hover:border-[#176B36]'
                }`}
                title="Save to favorites"
              >
                <Heart className={`w-5 h-5 ${isFav ? 'fill-red-500' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-3 rounded-2xl bg-white border border-[#E2EDE3] text-[#183426] hover:border-[#176B36] transition-all cursor-pointer shadow-xs relative"
                title="Share this plant"
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

          {/* Regional Indian Names Pill Grid */}
          <div className="bg-[#F8FBF7] border border-[#E2EDE3] p-4 rounded-2xl space-y-2">
            <span className="text-xs font-semibold text-[#718078] uppercase tracking-wider block">
              Regional Names in India:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-white border border-[#E2EDE3] px-3 py-1 rounded-xl text-[#183426]">
                <strong>Hindi:</strong> {plant.regionalNames.hi || 'उपलब्ध नहीं'}
              </span>
              <span className="bg-white border border-[#E2EDE3] px-3 py-1 rounded-xl text-[#183426]">
                <strong>Gujarati:</strong> {plant.regionalNames.gu || 'ઉપલબ્ધ નથી'}
              </span>
              <span className="bg-white border border-[#E2EDE3] px-3 py-1 rounded-xl text-[#183426]">
                <strong>Marathi:</strong> {plant.regionalNames.mr || 'उपलब्ध नाही'}
              </span>
            </div>
          </div>

          {/* Short Introduction */}
          <p className="text-base text-[#183426]/85 leading-relaxed">
            {plant.shortIntro}
          </p>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white border border-[#E2EDE3] p-3 rounded-2xl text-center">
              <Sun className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <p className="text-[11px] text-[#718078]">Sunlight</p>
              <p className="text-xs font-bold text-[#183426] truncate">{plant.growingConditions.sunlight}</p>
            </div>
            <div className="bg-white border border-[#E2EDE3] p-3 rounded-2xl text-center">
              <Droplets className="w-4 h-4 text-blue-500 mx-auto mb-1" />
              <p className="text-[11px] text-[#718078]">Watering</p>
              <p className="text-xs font-bold text-[#183426] truncate">{plant.wateringGuide.requirement}</p>
            </div>
            <div className="bg-white border border-[#E2EDE3] p-3 rounded-2xl text-center">
              <MapPin className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <p className="text-[11px] text-[#718078]">Location</p>
              <p className="text-xs font-bold text-[#183426] truncate">{plant.growingConditions.indoorOutdoor}</p>
            </div>
            <div className="bg-white border border-[#E2EDE3] p-3 rounded-2xl text-center">
              <Calendar className="w-4 h-4 text-purple-500 mx-auto mb-1" />
              <p className="text-[11px] text-[#718078]">Best Season</p>
              <p className="text-xs font-bold text-[#183426] truncate">{plant.plantingGuide.bestSeason.split(' ')[0]}</p>
            </div>
          </div>

          {/* Ask Montu Contextual Button */}
          <div className="pt-2">
            <button
              onClick={() => onOpenAiWithContext(plant.commonName)}
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
              <span>Ask Montu about {plant.commonName}</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>
          </div>

        </div>

      </div>

      {/* COMPREHENSIVE STRUCTURED DETAIL TABS */}
      <div className="bg-white rounded-3xl border border-[#E2EDE3] shadow-xs overflow-hidden">
        
        {/* Navigation Tabs Bar */}
        <div className="flex border-b border-[#E2EDE3] overflow-x-auto bg-[#F8FBF7] scrollbar-none">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-4 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#176B36] text-[#176B36] bg-white'
                  : 'border-transparent text-[#718078] hover:text-[#183426]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="p-6 sm:p-8">
          
          {/* TAB 1: OVERVIEW & BOTANY */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#064E2B] mb-3">Botanical Description</h3>
                <p className="text-sm text-[#183426]/85 leading-relaxed">
                  {plant.detailedDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-[#E2EDE3]">
                <div className="bg-[#F8FBF7] p-4 rounded-2xl border border-[#E2EDE3]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Botanical Family</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.family}</p>
                </div>
                <div className="bg-[#F8FBF7] p-4 rounded-2xl border border-[#E2EDE3]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Genus & Species</p>
                  <p className="text-sm font-bold text-[#183426] italic mt-0.5">{plant.genus} {plant.species}</p>
                </div>
                <div className="bg-[#F8FBF7] p-4 rounded-2xl border border-[#E2EDE3]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Native Region</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.nativeRegion}</p>
                </div>
              </div>

              <div className="bg-[#EAF6E9]/50 border border-[#E2EDE3] p-4 rounded-2xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#176B36] mb-1">
                  Distribution Across India
                </h4>
                <p className="text-sm text-[#183426]/80 leading-relaxed">
                  {plant.distributionInIndia}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: USES & IMPORTANCE */}
          {activeTab === 'uses' && (
            <div className="space-y-6">
              
              {/* Disclaimer */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-xs text-amber-800">
                <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
                <span>
                  <strong>Ethnobotanical Note:</strong> Traditional and Ayurvedic uses are documented for cultural preservation. They do not constitute formal medical prescriptions. Consult healthcare specialists for health conditions.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Medicinal */}
                <div className="bg-[#F8FBF7] p-5 rounded-2xl border border-[#E2EDE3] space-y-2">
                  <h4 className="font-serif text-base font-bold text-[#064E2B] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#176B36]" />
                    Medicinal & Therapeutic
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#183426]/80">
                    {plant.uses.medicinal.map((u, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#176B36] font-bold">•</span>
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Traditional & Cultural */}
                <div className="bg-[#F8FBF7] p-5 rounded-2xl border border-[#E2EDE3] space-y-2">
                  <h4 className="font-serif text-base font-bold text-[#064E2B] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Cultural & Sacred Significance
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#183426]/80">
                    {plant.uses.cultural.map((u, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Culinary */}
                <div className="bg-[#F8FBF7] p-5 rounded-2xl border border-[#E2EDE3] space-y-2">
                  <h4 className="font-serif text-base font-bold text-[#064E2B]">Culinary Uses</h4>
                  <ul className="space-y-1.5 text-xs text-[#183426]/80">
                    {plant.uses.culinary.map((u, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#3F9B45] font-bold">•</span>
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Environmental & Wildlife */}
                <div className="bg-[#F8FBF7] p-5 rounded-2xl border border-[#E2EDE3] space-y-2">
                  <h4 className="font-serif text-base font-bold text-[#064E2B]">Environmental & Biodiversity</h4>
                  <ul className="space-y-1.5 text-xs text-[#183426]/80">
                    {plant.uses.environmental.map((u, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#176B36] font-bold">•</span>
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: GROWING CONDITIONS */}
          {activeTab === 'growing' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">Ideal Indian Climate & Environment</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Climate</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.growingConditions.climate}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Temperature Range</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.growingConditions.temperatureRange}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Sunlight</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.growingConditions.sunlight}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Soil Type</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.growingConditions.soilType}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Preferred Soil pH</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.growingConditions.soilPh}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] uppercase font-semibold">Drainage & Humidity</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.growingConditions.drainage}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase text-[#718078] mb-2">Suitable Indian States / Growing Regions</p>
                <div className="flex flex-wrap gap-2">
                  {plant.growingConditions.indianRegions.map(reg => (
                    <span key={reg} className="text-xs bg-[#EAF6E9] text-[#176B36] font-medium px-3 py-1 rounded-full border border-[#E2EDE3]">
                      📍 {reg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PLANTING GUIDE */}
          {activeTab === 'planting' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">Step-by-Step Planting Guide</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F8FBF7] p-5 rounded-2xl border border-[#E2EDE3]">
                <div>
                  <p className="text-xs text-[#718078] font-semibold uppercase">Best Season</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.plantingGuide.bestSeason}</p>
                </div>
                <div>
                  <p className="text-xs text-[#718078] font-semibold uppercase">Germination / Rooting</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.plantingGuide.germinationTime}</p>
                </div>
                <div>
                  <p className="text-xs text-[#718078] font-semibold uppercase">Spacing</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.plantingGuide.recommendedSpacing}</p>
                </div>
              </div>

              {/* Numbered Steps */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#064E2B]">Planting Instructions</h4>
                {plant.plantingGuide.stepByStepInstructions.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl border border-[#E2EDE3] bg-white">
                    <span className="w-6 h-6 rounded-full bg-[#176B36] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-[#183426]/85 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#EAF6E9]/40 border border-[#E2EDE3] rounded-2xl">
                <p className="text-xs font-bold text-[#176B36] uppercase mb-1">Initial Care After Planting</p>
                <p className="text-xs text-[#183426]/80">{plant.plantingGuide.initialCare}</p>
              </div>
            </div>
          )}

          {/* TAB 5: WATERING & IRRIGATION */}
          {activeTab === 'watering' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">Watering & Irrigation Schedule</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7] space-y-3">
                  <h4 className="text-sm font-bold text-[#064E2B]">Watering Routine</h4>
                  <p className="text-sm text-[#183426]/85">
                    <strong>Frequency:</strong> {plant.wateringGuide.frequency}
                  </p>
                  <p className="text-sm text-[#183426]/85">
                    <strong>Method:</strong> {plant.wateringGuide.irrigationMethod}
                  </p>
                  <p className="text-xs text-[#718078]">
                    <strong>Seasonal Adjustments:</strong> {plant.wateringGuide.seasonalAdjustments}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7] space-y-3">
                  <h4 className="text-sm font-bold text-[#064E2B]">Signs of Stress</h4>
                  <div className="space-y-2 text-xs">
                    <p className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                      <strong>Underwatering:</strong> {plant.wateringGuide.underwateringSigns}
                    </p>
                    <p className="p-2.5 rounded-xl bg-red-50 text-red-800 border border-red-200">
                      <strong>Overwatering:</strong> {plant.wateringGuide.overwateringSigns}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: FERTILIZER & NUTRITION */}
          {activeTab === 'fertilizer' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">Recommended Organic Nutrition</h3>

              <div>
                <h4 className="text-xs font-semibold uppercase text-[#718078] mb-2">Suitable Organic Fertilizers</h4>
                <div className="flex flex-wrap gap-2">
                  {plant.fertilizerGuide.recommendedOrganic.map(fert => (
                    <span key={fert} className="text-xs bg-[#795334]/10 text-[#795334] font-semibold px-3 py-1 rounded-full border border-[#795334]/20">
                      🌱 {fert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs font-semibold text-[#718078] uppercase">Application Frequency</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.fertilizerGuide.frequency}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs font-semibold text-[#718078] uppercase">Application Method</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.fertilizerGuide.applicationMethod}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-red-100 bg-red-50/50 space-y-1">
                <p className="text-xs font-bold uppercase text-red-700">Precautions</p>
                <p className="text-xs text-red-900">{plant.fertilizerGuide.precautions}</p>
              </div>
            </div>
          )}

          {/* TAB 7: CARE & MAINTENANCE */}
          {activeTab === 'maintenance' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">Maintenance & Pruning</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] font-semibold uppercase">Growth Rate</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.maintenance.growthRate}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] font-semibold uppercase">Mature Height</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.maintenance.matureHeight}</p>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs text-[#718078] font-semibold uppercase">Expected Lifespan</p>
                  <p className="text-sm font-bold text-[#183426] mt-0.5">{plant.maintenance.expectedLifespan}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-white">
                  <h4 className="text-xs font-bold text-[#064E2B] uppercase mb-1">Pruning Technique</h4>
                  <p className="text-sm text-[#183426]/85">{plant.maintenance.pruning}</p>
                </div>
                {plant.maintenance.harvesting && (
                  <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-white">
                    <h4 className="text-xs font-bold text-[#064E2B] uppercase mb-1">Harvesting Instructions</h4>
                    <p className="text-sm text-[#183426]/85">{plant.maintenance.harvesting}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 8: PROBLEMS & ORGANIC REMEDIES */}
          {activeTab === 'problems' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#064E2B]">Pest Management & Natural Cures</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs font-semibold text-[#718078] uppercase mb-1">Common Pests</p>
                  <div className="flex flex-wrap gap-1.5">
                    {plant.problems.pests.map(p => (
                      <span key={p} className="text-xs bg-white px-2.5 py-1 rounded-lg border border-[#E2EDE3] text-red-600 font-medium">
                        ⚠️ {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7]">
                  <p className="text-xs font-semibold text-[#718078] uppercase mb-1">Common Diseases</p>
                  <div className="flex flex-wrap gap-1.5">
                    {plant.problems.diseases.map(d => (
                      <span key={d} className="text-xs bg-white px-2.5 py-1 rounded-lg border border-[#E2EDE3] text-amber-700 font-medium">
                        🍄 {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EAF6E9]/60 border border-[#E2EDE3] space-y-3">
                <h4 className="text-sm font-bold text-[#176B36] uppercase flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#3F9B45]" />
                  Natural Organic Remedies (No Synthetic Chemicals)
                </h4>
                <ul className="space-y-2 text-xs text-[#183426]">
                  {plant.problems.organicRemedies.map((rem, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E2EDE3]">
                      <Check className="w-4 h-4 text-[#176B36] shrink-0 mt-0.5" />
                      <span>{rem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 9: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#064E2B] mb-4">Frequently Asked Questions</h3>
              {plant.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl border border-[#E2EDE3] bg-[#F8FBF7] space-y-2">
                  <h4 className="text-sm font-bold text-[#064E2B] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#176B36]" />
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#183426]/80 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* RELATED PLANTS SECTION */}
      {relatedPlants.length > 0 && (
        <section className="pt-8 border-t border-[#E2EDE3]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#064E2B]">
              Related Plants in this Category
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-[#176B36] hover:underline cursor-pointer"
            >
              Browse All Plants →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPlants.map(rel => (
              <div 
                key={rel.id}
                onClick={() => onSelectPlant(rel.slug)}
                className="bg-white rounded-3xl border border-[#E2EDE3] p-4 hover:shadow-lg transition-all cursor-pointer group flex items-center gap-4"
              >
                <img 
                  src={rel.primaryImage} 
                  alt={rel.commonName} 
                  className="w-20 h-20 rounded-2xl object-cover group-hover:scale-105 transition-transform" 
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#064E2B] group-hover:text-[#176B36] transition-colors leading-snug">
                    {rel.regionalNames[language] || rel.commonName}
                  </h4>
                  <p className="text-xs text-[#718078] italic font-serif">
                    {rel.scientificName}
                  </p>
                  <span className="inline-block mt-1.5 text-[10px] bg-[#EAF6E9] text-[#176B36] px-2 py-0.5 rounded-full font-medium">
                    {rel.category}
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
