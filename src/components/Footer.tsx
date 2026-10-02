import React from 'react';
import { 
  Sprout, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Heart, 
  ShieldCheck, 
  Leaf,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNav: (tab: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNav }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#064E2B] text-white pt-16 pb-8 border-t border-[#176B36]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3F9B45] flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6 text-[#EAF6E9]" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {t.appName}
                </span>
                <span className="text-xs text-[#EAF6E9]/70 font-medium">
                  Owned by {t.ownerName}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-[#EAF6E9]/80 leading-relaxed">
              {t.footer.description}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-[#EAF6E9]">
                <Leaf className="w-3.5 h-3.5 text-[#3F9B45]" />
                100% Indian Native Plant & Fertilizer Archive
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90 mb-4 font-sans">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EAF6E9]/80">
              <li>
                <button onClick={() => onNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNav('plants')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.plants} Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNav('categories')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.categories}
                </button>
              </li>
              <li>
                <button onClick={() => onNav('fertilizers')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.fertilizers} (15 Recipes)
                </button>
              </li>
              <li>
                <button onClick={() => onNav('ai-assistant')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3F9B45]"></span>
                  {t.nav.aiAssistant}
                </button>
              </li>
              <li>
                <button onClick={() => onNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.aboutUs}
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90 mb-4 font-sans">
              {t.footer.plantCategories}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EAF6E9]/80">
              <li>
                <button onClick={() => onNav('plants', 'Medicinal Plants')} className="hover:text-white transition-colors cursor-pointer">
                  Medicinal Plants (તુલસી, લીમડો, અશ્વગંધા)
                </button>
              </li>
              <li>
                <button onClick={() => onNav('plants', 'Indoor Plants')} className="hover:text-white transition-colors cursor-pointer">
                  Indoor & Air-Purifying (Money Plant, Snake Plant)
                </button>
              </li>
              <li>
                <button onClick={() => onNav('plants', 'Fruits')} className="hover:text-white transition-colors cursor-pointer">
                  Fruit Trees (કેરી, લીંબુ, જમરૂખ, આમળાં)
                </button>
              </li>
              <li>
                <button onClick={() => onNav('plants', 'Flowers')} className="hover:text-white transition-colors cursor-pointer">
                  Sacred Flowers (ગુલાબ, જાસૂદ, મોગરો, ગલગોટો)
                </button>
              </li>
              <li>
                <button onClick={() => onNav('plants', 'Trees')} className="hover:text-white transition-colors cursor-pointer">
                  Sacred Trees (વડ, પીપળો, અશોક)
                </button>
              </li>
              <li>
                <button onClick={() => onNav('fertilizers', 'Traditional Indian')} className="hover:text-white transition-colors cursor-pointer text-[#3F9B45] font-medium">
                  જીવામૃત અને પંચગવ્ય ખાતર →
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Owner Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90 mb-4 font-sans">
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-3.5 text-sm text-[#EAF6E9]/85">
              
              {/* Address with Google Maps link */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#3F9B45] shrink-0 mt-0.5" />
                <div>
                  <p className="leading-snug">{t.footer.address}</p>
                  <a
                    href="https://maps.app.goo.gl/2AxM5Zaa7QJe24di7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#3F9B45] hover:text-white underline mt-1 font-medium"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>

              {/* WhatsApp Link */}
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-[#3F9B45] shrink-0" />
                <div>
                  <a
                    href="https://wa.me/917383958595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors font-medium flex items-center gap-1 text-xs sm:text-sm"
                  >
                    WhatsApp: 7383958595
                    <span className="text-[10px] bg-[#3F9B45] px-1.5 py-0.2 rounded text-white font-semibold">Active</span>
                  </a>
                </div>
              </li>

              {/* Email Link */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#3F9B45] shrink-0" />
                <a
                  href="mailto:montugoswami1357@gmail.com"
                  className="hover:text-white transition-colors break-all text-xs sm:text-sm"
                >
                  montugoswami1357@gmail.com
                </a>
              </li>

              {/* Owner attribution */}
              <li className="pt-2 border-t border-white/10 text-xs text-[#EAF6E9]/70">
                Founder & Owner: <strong className="text-white font-semibold">{t.ownerName}</strong>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAF6E9]/60 gap-4">
          <p>
            © {new Date().getFullYear()} {t.appName} (Yash Goswami). {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => alert("Vaijanath Plant Nursery Privacy Policy:\n\nWe prioritize plant enthusiast privacy. All gardening queries and preferences are stored securely. We do not sell your personal data. For inquiries, email montugoswami1357@gmail.com.")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button 
              onClick={() => alert("Vaijanath Plant Nursery Terms & Guidelines:\n\nAll plant information is curated based on authentic Indian horticultural and Ayurvedic knowledge. Traditional uses are distinguished from clinical medical advice. Grown in Kukarwada, Gujarat.")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
            <span>•</span>
            <span className="flex items-center gap-1">
              Grown with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Gujarat, India
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
