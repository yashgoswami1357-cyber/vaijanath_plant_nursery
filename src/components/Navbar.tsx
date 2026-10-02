import React, { useState, useRef, useEffect } from 'react';
import { 
  Sprout, 
  Search, 
  Globe, 
  Heart, 
  User, 
  Menu, 
  X, 
  Bot, 
  ChevronDown,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Settings,
  LogOut,
  Check,
  Download
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { ALL_PLANTS } from '../data/allPlants';
import { FERTILIZERS } from '../data/fertilizers';
import { Language } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenFavorites: () => void;
  onOpenAuth: () => void;
  onSelectPlant: (slug: string) => void;
  onSelectFertilizer: (slug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenFavorites,
  onOpenAuth,
  onSelectPlant,
  onSelectFertilizer
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { user, isPlantFavorite, isFertilizerFavorite, logout } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // Close search suggestions and profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languagesList: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' }
  ];

  const totalFavoritesCount = ALL_PLANTS.filter(p => isPlantFavorite(p.id)).length + 
    FERTILIZERS.filter(f => isFertilizerFavorite(f.id)).length;

  // Quick search filtered list
  const filteredPlants = searchQuery.trim().length > 1
    ? ALL_PLANTS.filter(p => 
        p.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.regionalNames.hi && p.regionalNames.hi.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.regionalNames.gu && p.regionalNames.gu.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 4)
    : [];

  const filteredFertilizers = searchQuery.trim().length > 1
    ? FERTILIZERS.filter(f => 
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (f.localNames.hi && f.localNames.hi.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (f.localNames.gu && f.localNames.gu.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 3)
    : [];

  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2EDE3] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Title Only (Logo removed as requested) */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center cursor-pointer group"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#064E2B] hover:text-[#176B36] transition-colors leading-tight">
              {t.appName}
            </span>
          </div>

          {/* Desktop Search Bar */}
          <div ref={searchRef} className="hidden lg:block relative flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                placeholder={t.nav.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 text-sm bg-[#F8FBF7] border border-[#E2EDE3] rounded-full focus:outline-none focus:border-[#176B36] focus:ring-2 focus:ring-[#176B36]/10 transition-all text-[#183426] placeholder-[#718078]"
              />
              <Search className="w-4 h-4 text-[#718078] absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-[#718078] hover:text-[#183426]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dropdown Suggestions */}
            {searchFocused && (filteredPlants.length > 0 || filteredFertilizers.length > 0) && (
              <div className="absolute top-12 left-0 right-0 bg-white rounded-2xl shadow-xl border border-[#E2EDE3] p-3 z-50 max-h-96 overflow-y-auto">
                {filteredPlants.length > 0 && (
                  <div className="mb-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#718078] px-3 py-1">
                      Plants ({filteredPlants.length})
                    </div>
                    {filteredPlants.map(plant => (
                      <div
                        key={plant.id}
                        onClick={() => {
                          onSelectPlant(plant.slug);
                          setSearchFocused(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#EAF6E9]/60 cursor-pointer transition-colors"
                      >
                        <img 
                          src={plant.primaryImage} 
                          alt={plant.commonName} 
                          className="w-9 h-9 rounded-lg object-cover" 
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#183426] truncate">{plant.commonName}</p>
                          <p className="text-xs text-[#718078] italic truncate">{plant.scientificName}</p>
                        </div>
                        <span className="text-[10px] bg-[#EAF6E9] text-[#176B36] font-medium px-2 py-0.5 rounded-full">
                          {plant.category}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {filteredFertilizers.length > 0 && (
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#718078] px-3 py-1 border-t border-[#E2EDE3] pt-2">
                      Organic Fertilizers ({filteredFertilizers.length})
                    </div>
                    {filteredFertilizers.map(fert => (
                      <div
                        key={fert.id}
                        onClick={() => {
                          onSelectFertilizer(fert.slug);
                          setSearchFocused(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#EAF6E9]/60 cursor-pointer transition-colors"
                      >
                        <img 
                          src={fert.image} 
                          alt={fert.name} 
                          className="w-9 h-9 rounded-lg object-cover" 
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#183426] truncate">{fert.name}</p>
                          <p className="text-xs text-[#718078] truncate">{fert.category}</p>
                        </div>
                        <span className="text-[10px] bg-[#795334]/10 text-[#795334] font-medium px-2 py-0.5 rounded-full">
                          Recipe
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop Nav Links (Categories moved to Plants page) */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {[
              { id: 'home', label: t.nav.home },
              { id: 'plants', label: t.nav.plants },
              { id: 'fertilizers', label: t.nav.fertilizers },
              { id: 'ai-assistant', label: t.nav.aiAssistant, isAi: true },
              { id: 'about', label: t.nav.aboutUs }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  currentTab === item.id
                    ? 'bg-[#EAF6E9] text-[#176B36] font-semibold shadow-xs'
                    : 'text-[#183426] hover:text-[#176B36] hover:bg-[#F8FBF7]'
                } ${item.isAi ? 'border border-[#176B36]/30 bg-[#EAF6E9]/50 shadow-2xs' : ''}`}
              >
                {item.isAi && (
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-[#176B36]/40 shadow-2xs bg-[#EAF6E9]">
                    <img 
                      src="/images/montu_avatar.png" 
                      alt="Montu" 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                      }}
                    />
                  </div>
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action: User Profile Button with Comprehensive Dropdown Menu */}
          <div ref={profileDropdownRef} className="hidden sm:block relative">
            <button
              onClick={() => setProfileDropdownOpen(prev => !prev)}
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all cursor-pointer shadow-xs ${
                profileDropdownOpen 
                  ? 'border-[#176B36] bg-[#EAF6E9]/60 ring-2 ring-[#176B36]/15' 
                  : 'border-[#E2EDE3] hover:border-[#176B36] bg-white hover:bg-[#EAF6E9]/40 text-[#183426]'
              }`}
              title="Profile, Language & Saved Items"
              aria-expanded={profileDropdownOpen}
              aria-haspopup="true"
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-[#EAF6E9] text-[#176B36] flex items-center justify-center font-bold text-xs shadow-2xs border border-[#176B36]/20">
                  {user ? user.name.charAt(0).toUpperCase() : <User className="w-4 h-4 text-[#176B36]" />}
                </div>
                {totalFavoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white"></span>
                )}
              </div>

              <div className="text-left">
                <span className="text-xs font-bold block leading-tight text-[#064E2B]">
                  {user ? user.name.split(' ')[0] : 'Account'}
                </span>
                <span className="text-[10px] text-[#718078] font-semibold flex items-center gap-1">
                  <span className="inline-block uppercase tracking-wider">{language}</span>
                  {totalFavoritesCount > 0 && (
                    <span className="text-rose-600 font-bold">• {totalFavoritesCount} saved</span>
                  )}
                </span>
              </div>

              <ChevronDown 
                className={`w-4 h-4 text-[#718078] transition-transform duration-200 ${
                  profileDropdownOpen ? 'rotate-180 text-[#176B36]' : ''
                }`} 
              />
            </button>

            {/* Profile Dropdown Menu */}
            {profileDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-3xl shadow-2xl border border-[#E2EDE3] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-3">
                
                {/* 1. Account Section */}
                <div className="p-3 bg-[#F8FBF7] rounded-2xl border border-[#E2EDE3]/70">
                  {user ? (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#176B36] text-white flex items-center justify-center font-bold text-base shadow-xs">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-[#064E2B] truncate">{user.name}</p>
                          <p className="text-xs text-[#718078] truncate">{user.email}</p>
                          {user.location && (
                            <span className="inline-block mt-0.5 text-[10px] font-semibold text-[#176B36] bg-[#EAF6E9] px-2 py-0.2 rounded-full">
                              📍 {user.location}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#E2EDE3]">
                        <button
                          onClick={() => {
                            setProfileDropdownOpen(false);
                            onOpenAuth();
                          }}
                          className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white hover:bg-[#EAF6E9] text-[#176B36] border border-[#E2EDE3] rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <Settings className="w-3.5 h-3.5" />
                          <span>Settings</span>
                        </button>

                        <button
                          onClick={() => {
                            logout();
                            setProfileDropdownOpen(false);
                          }}
                          className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#EAF6E9] text-[#176B36] flex items-center justify-center font-bold">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#064E2B]">Welcome, Plant Lover!</p>
                          <p className="text-[11px] text-[#718078]">Sign in to sync your saved plants</p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenAuth();
                        }}
                        className="w-full py-2 bg-[#176B36] hover:bg-[#064E2B] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5" />
                        <span>Sign In / Create Account</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* 2. Favorites Shortcut */}
                <div className="px-1">
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onOpenFavorites();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-rose-50/70 border border-transparent hover:border-rose-200 transition-all cursor-pointer group text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 group-hover:bg-rose-100 flex items-center justify-center transition-colors">
                        <Heart className="w-4 h-4 fill-rose-500" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#183426] group-hover:text-rose-700 transition-colors">
                          Saved Favorites
                        </p>
                        <p className="text-[10px] text-[#718078]">
                          Bookmarked plants & fertilizer recipes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                        {totalFavoritesCount}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#718078] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </div>

                {/* 2b. Download Project ZIP */}
                <div className="px-1">
                  <a
                    href="/vaijanath-plant-nursery.zip"
                    download="vaijanath-plant-nursery.zip"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#EAF6E9]/70 border border-transparent hover:border-[#176B36]/20 transition-all cursor-pointer group text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#EAF6E9] text-[#176B36] group-hover:bg-[#176B36] group-hover:text-white flex items-center justify-center transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#183426] group-hover:text-[#176B36] transition-colors">
                          Download Project ZIP
                        </p>
                        <p className="text-[10px] text-[#718078]">
                          Complete source code & assets (.zip)
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF6E9] text-[#176B36]">
                      ZIP
                    </span>
                  </a>
                </div>

                {/* 3. Language Switcher */}
                <div className="pt-2 border-t border-[#E2EDE3] px-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#176B36] flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Language / ભાષા / भाषा</span>
                    </span>
                    <span className="text-[10px] text-[#718078] uppercase font-semibold">
                      Current: {language.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {languagesList.map(lang => {
                      const isActive = language === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className={`flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#EAF6E9] text-[#176B36] font-bold border border-[#176B36]/30 shadow-2xs'
                              : 'bg-[#F8FBF7] text-[#183426] hover:bg-[#EAF6E9]/50 border border-transparent'
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold leading-tight">{lang.native}</p>
                            <p className="text-[10px] text-[#718078] leading-tight">{lang.label}</p>
                          </div>
                          {isActive && <Check className="w-3.5 h-3.5 text-[#176B36] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAuth}
              className="p-2 rounded-xl border border-[#E2EDE3] text-[#176B36] bg-white"
              title="Profile & Settings"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-[#E2EDE3] text-[#183426] hover:text-[#176B36] bg-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2EDE3] px-4 pt-2 pb-6 space-y-3">
          
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.nav.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl text-[#183426]"
            />
            <Search className="w-4 h-4 text-[#718078] absolute left-3 top-2.5" />
          </div>

          {/* Mobile Navigation Links */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {[
              { id: 'home', label: t.nav.home },
              { id: 'plants', label: t.nav.plants },
              { id: 'fertilizers', label: t.nav.fertilizers },
              { id: 'ai-assistant', label: t.nav.aiAssistant, isAi: true },
              { id: 'about', label: t.nav.aboutUs }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`p-2.5 rounded-xl text-sm font-medium text-left transition-colors flex items-center gap-2 ${
                  currentTab === item.id
                    ? 'bg-[#EAF6E9] text-[#176B36] font-semibold'
                    : 'bg-[#F8FBF7] text-[#183426]'
                }`}
              >
                {item.isAi ? (
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-[#176B36]/30">
                    <img 
                      src="/images/montu_avatar.png" 
                      alt="Montu" 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                      }}
                    />
                  </div>
                ) : null}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Profile & Saved Items & Language Section */}
          <div className="pt-3 border-t border-[#E2EDE3] space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 bg-[#EAF6E9] hover:bg-[#EAF6E9]/80 text-[#176B36] rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span className="truncate">{user ? user.name.split(' ')[0] : 'Sign In / Profile'}</span>
              </button>

              <button
                onClick={() => {
                  onOpenFavorites();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 bg-rose-50 hover:bg-rose-100/80 text-rose-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-rose-500" />
                <span>Saved ({totalFavoritesCount})</span>
              </button>
            </div>

            {/* Mobile Project ZIP Download */}
            <a
              href="/vaijanath-plant-nursery.zip"
              download="vaijanath-plant-nursery.zip"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-3 bg-[#EAF6E9] hover:bg-[#176B36] text-[#176B36] hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Project ZIP (Complete Codebase)</span>
            </a>

            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-[#E2EDE3]">
              <div className="flex items-center justify-between mb-1.5 px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#176B36] flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Language / ભાષા</span>
                </span>
                <span className="text-[10px] text-[#718078] uppercase font-bold">
                  {language}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {languagesList.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`py-1.5 px-1 rounded-lg text-center text-xs font-semibold transition-colors cursor-pointer ${
                      language === lang.code
                        ? 'bg-[#176B36] text-white shadow-2xs'
                        : 'bg-[#F8FBF7] text-[#183426] border border-[#E2EDE3]'
                    }`}
                  >
                    {lang.native}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
