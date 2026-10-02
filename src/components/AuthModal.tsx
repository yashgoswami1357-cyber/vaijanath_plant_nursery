import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  MapPin, 
  Sparkles, 
  LogOut, 
  CheckCircle2, 
  Globe, 
  Heart, 
  Trash2, 
  ArrowRight,
  Sprout
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { ALL_PLANTS } from '../data/allPlants';
import { FERTILIZERS } from '../data/fertilizers';
import { Language } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlant?: (slug: string) => void;
  onSelectFertilizer?: (slug: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose,
  onSelectPlant,
  onSelectFertilizer
}) => {
  const { user, login, register, logout, isPlantFavorite, isFertilizerFavorite, toggleFavoritePlant, toggleFavoriteFertilizer } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'profile' | 'saved' | 'language'>('profile');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateRegion, setStateRegion] = useState('Gujarat');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Medicinal Plants',
    'Organic Fertilizers'
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const languagesList: { code: Language; label: string; native: string; desc: string }[] = [
    { code: 'en', label: 'English', native: 'English', desc: 'Indian English with familiar botanical terms' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી', desc: 'સંપૂર્ણ ગુજરાતી ભાષાંતર અને સ્થાનિક નામો' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी', desc: 'शुद्ध हिन्दी शब्दावली एवं पारंपरिक नाम' },
    { code: 'mr', label: 'Marathi', native: 'मराठी', desc: 'मराठी भाषा आणि स्थानिक वनस्पती' }
  ];

  const indianStates = [
    'Gujarat', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh', 
    'Madhya Pradesh', 'Karnataka', 'Tamil Nadu', 'Kerala', 
    'Punjab', 'West Bengal', 'Haryana', 'Andhra Pradesh'
  ];

  const interestOptions = [
    'Medicinal Plants', 'Organic Fertilizers', 'Terrace Gardening', 
    'Fruit Trees', 'Indoor Houseplants', 'Vedic Zero-Budget Farming', 
    'Sacred Flowers', 'Bonsai Art'
  ];

  const favoritePlants = ALL_PLANTS.filter(p => isPlantFavorite(p.id));
  const favoriteFertilizers = FERTILIZERS.filter(f => isFertilizerFavorite(f.id));

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (authMode === 'login') {
        await login(email, password);
        setMessage('Welcome back to Vaijanath Plant Nursery!');
      } else {
        await register(name, email, password, stateRegion, selectedInterests);
        setMessage('Your gardening account has been created successfully!');
      }
      setTimeout(() => {
        setMessage('');
        setActiveTab('profile');
      }, 800);
    } catch {
      setMessage('Session updated locally.');
      setTimeout(() => setActiveTab('profile'), 800);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-[#E2EDE3] overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E2EDE3] flex items-center justify-between bg-[#F8FBF7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF6E9] text-[#176B36] flex items-center justify-center font-bold text-sm">
              {user ? user.name.charAt(0).toUpperCase() : <User className="w-5 h-5 text-[#176B36]" />}
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#064E2B] leading-tight">
                {user ? user.name : 'User Profile & Settings'}
              </h2>
              <p className="text-xs text-[#718078]">
                {user ? user.email : 'Language, Saved Favorites & Nursery Account'}
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

        {/* Navigation Tabs Inside Profile: Account / Saved Favorites / Language */}
        <div className="flex border-b border-[#E2EDE3] px-6 pt-2 bg-white gap-4 sm:gap-6 shrink-0">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 text-xs sm:text-sm font-semibold relative transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'profile' ? 'text-[#176B36]' : 'text-[#718078] hover:text-[#183426]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>{user ? 'My Profile' : 'Sign In / Join'}</span>
            {activeTab === 'profile' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176B36] rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`pb-3 text-xs sm:text-sm font-semibold relative transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'saved' ? 'text-[#176B36]' : 'text-[#718078] hover:text-[#183426]'
            }`}
          >
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>Saved Favorites ({favoritePlants.length + favoriteFertilizers.length})</span>
            {activeTab === 'saved' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176B36] rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('language')}
            className={`pb-3 text-xs sm:text-sm font-semibold relative transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'language' ? 'text-[#176B36]' : 'text-[#718078] hover:text-[#183426]'
            }`}
          >
            <Globe className="w-4 h-4 text-[#176B36]" />
            <span>Language ({language.toUpperCase()})</span>
            {activeTab === 'language' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176B36] rounded-full"></span>
            )}
          </button>
        </div>

        {/* Tab 1: Profile Dashboard or Sign In/Register */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {activeTab === 'profile' && (
            user ? (
              <div className="space-y-5">
                <div className="bg-[#EAF6E9]/60 border border-[#E2EDE3] rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#176B36] text-white flex items-center justify-center text-xl font-bold font-serif shrink-0 shadow-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#064E2B]">{user.name}</h3>
                    <p className="text-xs text-[#718078] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#176B36]" />
                      {user.location || 'Gujarat, India'}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-medium text-[#176B36] bg-white px-2 py-0.5 rounded-full border border-[#E2EDE3]">
                      Member since {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Quick Shortcuts to Saved Items */}
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setActiveTab('saved')}
                    className="bg-[#F8FBF7] border border-[#E2EDE3] hover:border-[#176B36] p-3.5 rounded-2xl text-center cursor-pointer transition-all"
                  >
                    <span className="text-2xl font-bold font-serif text-[#176B36]">
                      {user.favoritePlantIds.length}
                    </span>
                    <p className="text-xs text-[#718078] mt-0.5 font-medium flex items-center justify-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      Saved Plants
                    </p>
                  </div>
                  <div 
                    onClick={() => setActiveTab('saved')}
                    className="bg-[#F8FBF7] border border-[#E2EDE3] hover:border-[#176B36] p-3.5 rounded-2xl text-center cursor-pointer transition-all"
                  >
                    <span className="text-2xl font-bold font-serif text-[#795334]">
                      {user.favoriteFertilizerIds.length}
                    </span>
                    <p className="text-xs text-[#718078] mt-0.5 font-medium flex items-center justify-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Saved Recipes
                    </p>
                  </div>
                </div>

                {/* Language Shortcut */}
                <div className="bg-[#F8FBF7] border border-[#E2EDE3] p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-5 h-5 text-[#176B36]" />
                    <div>
                      <p className="text-xs font-bold text-[#183426]">Interface Language</p>
                      <p className="text-[11px] text-[#718078]">
                        Active: {languagesList.find(l => l.code === language)?.native} ({languagesList.find(l => l.code === language)?.label})
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('language')}
                    className="text-xs font-semibold text-[#176B36] hover:underline cursor-pointer"
                  >
                    Change Language →
                  </button>
                </div>

                {/* Gardening Interests */}
                <div>
                  <p className="text-xs font-semibold text-[#718078] uppercase mb-2">My Gardening Interests</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(user.gardeningInterests || ['Medicinal Plants', 'Organic Fertilizers']).map(interest => (
                      <span key={interest} className="text-xs bg-[#EAF6E9] text-[#176B36] px-2.5 py-1 rounded-full font-medium">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Logout Button */}
                <div className="pt-2 border-t border-[#E2EDE3] flex items-center justify-between">
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="py-2.5 px-4 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>

                  <button
                    onClick={onClose}
                    className="py-2 px-5 bg-[#176B36] text-white rounded-xl text-xs font-semibold hover:bg-[#064E2B] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* Sign In / Registration Form */
              <div className="space-y-4">
                <div className="flex p-1 bg-[#F8FBF7] border border-[#E2EDE3] rounded-2xl mb-4">
                  <button
                    onClick={() => setAuthMode('login')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      authMode === 'login' ? 'bg-white text-[#176B36] shadow-xs' : 'text-[#718078]'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setAuthMode('register')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      authMode === 'register' ? 'bg-white text-[#176B36] shadow-xs' : 'text-[#718078]'
                    }`}
                  >
                    Create Account
                  </button>
                </div>

                {message && (
                  <div className="p-3 bg-[#EAF6E9] text-[#176B36] text-xs rounded-xl flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    {message}
                  </div>
                )}

                <form onSubmit={handleAuthSubmit} className="space-y-3.5">
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-[#183426] mb-1">Full Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Bhai"
                          className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl focus:outline-none focus:border-[#176B36]"
                        />
                        <User className="w-4 h-4 text-[#718078] absolute left-3 top-2.5" />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#183426] mb-1">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl focus:outline-none focus:border-[#176B36]"
                      />
                      <Mail className="w-4 h-4 text-[#718078] absolute left-3 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#183426] mb-1">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl focus:outline-none focus:border-[#176B36]"
                      />
                      <Lock className="w-4 h-4 text-[#718078] absolute left-3 top-2.5" />
                    </div>
                  </div>

                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-[#183426] mb-1">State / Region</label>
                      <select
                        value={stateRegion}
                        onChange={(e) => setStateRegion(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl focus:outline-none focus:border-[#176B36]"
                      >
                        {indianStates.map(st => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#176B36] hover:bg-[#064E2B] text-white font-semibold rounded-2xl text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : authMode === 'login' ? 'Sign In to Nursery' : 'Create Free Account'}
                  </button>
                </form>

                <div className="pt-2 text-center">
                  <p className="text-xs text-[#718078]">
                    {authMode === 'login' ? "Don't have an account yet?" : "Already have an account?"}{' '}
                    <button
                      onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                      className="text-[#176B36] font-semibold hover:underline cursor-pointer"
                    >
                      {authMode === 'login' ? 'Register here' : 'Sign in here'}
                    </button>
                  </p>
                </div>
              </div>
            )
          )}

          {/* Tab 2: Saved Favorites (Liked Plants & Fertilizers) */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              
              {/* Plants Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#064E2B] flex items-center gap-1.5">
                    <Sprout className="w-4 h-4 text-[#176B36]" />
                    Liked Plants ({favoritePlants.length})
                  </h3>
                </div>

                {favoritePlants.length === 0 ? (
                  <div className="p-6 text-center bg-[#F8FBF7] border border-[#E2EDE3] rounded-2xl text-[#718078]">
                    <p className="text-xs">No saved plants yet. Tap the heart icon on any plant card to save it here!</p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {favoritePlants.map(plant => (
                      <div 
                        key={plant.id}
                        className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3] hover:border-[#176B36] transition-colors"
                      >
                        <div 
                          onClick={() => {
                            if (onSelectPlant) onSelectPlant(plant.slug);
                            onClose();
                          }}
                          className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                        >
                          <img 
                            src={plant.primaryImage} 
                            alt={plant.commonName} 
                            className="w-12 h-12 rounded-xl object-cover shrink-0" 
                          />
                          <div className="truncate">
                            <p className="text-sm font-bold text-[#064E2B] truncate">{plant.regionalNames[language] || plant.commonName}</p>
                            <p className="text-xs text-[#718078] italic truncate">{plant.scientificName}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => toggleFavoritePlant(plant.id)}
                            className="p-1.5 text-[#718078] hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (onSelectPlant) onSelectPlant(plant.slug);
                              onClose();
                            }}
                            className="p-1.5 bg-[#EAF6E9] text-[#176B36] hover:bg-[#176B36] hover:text-white rounded-lg transition-all"
                            title="View Details"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Fertilizers Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#795334] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#795334]" />
                    Liked Organic Fertilizers ({favoriteFertilizers.length})
                  </h3>
                </div>

                {favoriteFertilizers.length === 0 ? (
                  <div className="p-6 text-center bg-[#F8FBF7] border border-[#E2EDE3] rounded-2xl text-[#718078]">
                    <p className="text-xs">No saved fertilizers yet. Tap the heart icon on any fertilizer recipe to save it here!</p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {favoriteFertilizers.map(fert => (
                      <div 
                        key={fert.id}
                        className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3] hover:border-[#176B36] transition-colors"
                      >
                        <div 
                          onClick={() => {
                            if (onSelectFertilizer) onSelectFertilizer(fert.slug);
                            onClose();
                          }}
                          className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                        >
                          <img 
                            src={fert.image} 
                            alt={fert.name} 
                            className="w-12 h-12 rounded-xl object-cover shrink-0" 
                          />
                          <div className="truncate">
                            <p className="text-sm font-bold text-[#064E2B] truncate">{fert.localNames[language] || fert.name}</p>
                            <p className="text-xs text-[#718078] truncate">{fert.category}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => toggleFavoriteFertilizer(fert.id)}
                            className="p-1.5 text-[#718078] hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (onSelectFertilizer) onSelectFertilizer(fert.slug);
                              onClose();
                            }}
                            className="p-1.5 bg-[#EAF6E9] text-[#176B36] hover:bg-[#176B36] hover:text-white rounded-lg transition-all"
                            title="View Recipe"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* Tab 3: Language Settings */}
          {activeTab === 'language' && (
            <div className="space-y-4">
              <div className="border-b border-[#E2EDE3] pb-3">
                <h3 className="font-serif text-base font-bold text-[#064E2B]">Select Your Indian Language</h3>
                <p className="text-xs text-[#718078] mt-0.5">
                  Translates all plant names, care guides, fertilizer recipes, and AI gardening assistant.
                </p>
              </div>

              <div className="space-y-2.5">
                {languagesList.map(item => {
                  const isSelected = language === item.code;
                  return (
                    <div
                      key={item.code}
                      onClick={() => setLanguage(item.code)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'bg-[#EAF6E9] border-[#176B36] text-[#064E2B] shadow-xs' 
                          : 'bg-[#F8FBF7] border-[#E2EDE3] hover:border-[#176B36]/40 text-[#183426]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                          isSelected ? 'bg-[#176B36] text-white' : 'bg-white border border-[#E2EDE3] text-[#718078]'
                        }`}>
                          {item.code.toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">{item.native}</span>
                            <span className="text-xs text-[#718078]">({item.label})</span>
                          </div>
                          <p className="text-[11px] text-[#718078] mt-0.5">{item.desc}</p>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-[#176B36] text-white flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8FBF7] border-t border-[#E2EDE3] flex items-center justify-between text-xs text-[#718078]">
          <span>Current Language: <strong>{language.toUpperCase()}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#E2EDE3] font-semibold rounded-xl text-[#183426] hover:bg-[#EAF6E9] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
