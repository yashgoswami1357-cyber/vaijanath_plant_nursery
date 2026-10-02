import React, { useState } from 'react';
import { 
  Sprout, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Leaf, 
  Award, 
  Heart,
  MessageCircle,
  CheckCircle2,
  Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formQuery, setFormQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormQuery('');
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Hero Editorial Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6E9] text-xs font-semibold text-[#176B36]">
          <Leaf className="w-4 h-4 text-[#3F9B45]" />
          <span>Our Vision & Heritage</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#064E2B] leading-tight">
          About Vaijanath Plant Nursery
        </h1>
        <p className="text-base sm:text-lg text-[#183426]/80 leading-relaxed font-sans">
          "Vaijanath Plant Nursery is a digital platform dedicated to promoting Indian plants, sustainable gardening, and organic farming knowledge. Our goal is to make reliable plant information and practical gardening guidance accessible to everyone."
        </p>
      </section>

      {/* Owner Profile Card */}
      <section className="bg-gradient-to-br from-[#064E2B] via-[#176B36] to-[#064E2B] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 text-center">
            <div className="w-36 h-36 mx-auto rounded-3xl bg-white/10 border-2 border-white/20 p-2 shadow-inner flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#3F9B45] to-[#176B36] flex items-center justify-center text-5xl font-serif font-bold text-white shadow-lg">
                YG
              </div>
            </div>
            <h2 className="font-serif text-2xl font-bold text-white mt-4">{t.ownerName}</h2>
            <p className="text-xs text-[#EAF6E9]/80 font-medium">Founder & Proprietor</p>
            <span className="inline-block mt-2 text-[11px] bg-white/10 px-3 py-1 rounded-full text-[#EAF6E9]">
              Kukarwada, Mehsana, Gujarat
            </span>
          </div>

          <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EAF6E9]">
              A Message from Yash Goswami
            </h3>
            <p className="text-sm text-[#EAF6E9]/90 leading-relaxed">
              "Growing up in Gujarat, I observed firsthand how chemical fertilizers and synthetic pesticides were exhausting our fertile soil, while ancient knowledge about indigenous plants like Neem, Tulsi, and Banyan was fading from everyday memory.
            </p>
            <p className="text-sm text-[#EAF6E9]/90 leading-relaxed">
              We established Vaijanath Plant Nursery to revive true Desi gardening wisdom. Whether you have a small balcony in an apartment or acres of agricultural land, this platform provides actionable, scientifically verified, and culturally rooted guidance to grow green without synthetic chemicals."
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/917383958595"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-[#176B36] hover:bg-[#EAF6E9] rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Chat on WhatsApp (+91 73839 58595)
              </a>
              <a
                href="mailto:montugoswami1357@gmail.com"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" />
                montugoswami1357@gmail.com
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#E2EDE3] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF6E9] text-[#176B36] flex items-center justify-center">
            <Sprout className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#064E2B]">Native Indian Biodiversity</h3>
          <p className="text-sm text-[#718078] leading-relaxed">
            Preserving and cultivating indigenous Indian trees and herbs that are naturally resilient to local pest outbreaks, extreme heat, and seasonal monsoons.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#E2EDE3] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#795334]/15 text-[#795334] flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#064E2B]">Vedic Zero-Budget Organic</h3>
          <p className="text-sm text-[#718078] leading-relaxed">
            Eliminating expensive synthetic chemical urea and toxic sprays. We promote living fermented bio-fertilizers like Jeevamrut, Beejamrut, and Panchagavya.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#E2EDE3] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#3F9B45]/15 text-[#3F9B45] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#064E2B]">Verified Practical Knowledge</h3>
          <p className="text-sm text-[#718078] leading-relaxed">
            Every plant and fertilizer record contains precise, battle-tested dosages, preparation methods, and water requirements tailored specifically for Indian home growers.
          </p>
        </div>
      </section>

      {/* Location & Inquiry Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Details Card */}
        <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E2EDE3] shadow-xs space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#064E2B]">
            Visit Us & Connect
          </h2>
          <p className="text-sm text-[#718078]">
            We welcome plant lovers, farmers, students, and home gardeners to reach out or visit our nursery base in Kukarwada, Gujarat.
          </p>

          <div className="space-y-4 pt-2">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3]">
              <MapPin className="w-5 h-5 text-[#176B36] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#718078] uppercase">Address</p>
                <p className="text-sm font-bold text-[#183426] mt-0.5">{t.footer.address}</p>
                <a
                  href="https://maps.app.goo.gl/2AxM5Zaa7QJe24di7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#176B36] font-semibold hover:underline mt-2"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3]">
              <MessageCircle className="w-5 h-5 text-[#3F9B45] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#718078] uppercase">WhatsApp Contact</p>
                <p className="text-sm font-bold text-[#183426] mt-0.5">+91 73839 58595</p>
                <a
                  href="https://wa.me/917383958595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#176B36] font-semibold hover:underline mt-1"
                >
                  Send a WhatsApp Message <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FBF7] border border-[#E2EDE3]">
              <Mail className="w-5 h-5 text-[#176B36] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#718078] uppercase">Official Email</p>
                <a
                  href="mailto:montugoswami1357@gmail.com"
                  className="text-sm font-bold text-[#183426] hover:text-[#176B36] mt-0.5 block"
                >
                  montugoswami1357@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Nursery Inquiry Form */}
        <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E2EDE3] shadow-xs">
          <h2 className="font-serif text-2xl font-bold text-[#064E2B] mb-2">
            Send a Plant Inquiry
          </h2>
          <p className="text-xs text-[#718078] mb-6">
            Have a question about plant availability, organic fertilizers, or gardening techniques? Write to Yash Goswami directly.
          </p>

          {submitted ? (
            <div className="p-6 bg-[#EAF6E9] border border-[#176B36]/30 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-[#176B36] mx-auto" />
              <h3 className="font-serif text-lg font-bold text-[#064E2B]">Thank you for your message!</h3>
              <p className="text-xs text-[#183426]">
                Yash Goswami will respond to your gardening inquiry via WhatsApp or Email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#183426] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Ramesh Bhai"
                  className="w-full px-4 py-2.5 bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl text-xs focus:outline-none focus:border-[#176B36]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#183426] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl text-xs focus:outline-none focus:border-[#176B36]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#183426] mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl text-xs focus:outline-none focus:border-[#176B36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#183426] mb-1">Your Question / Plant Request</label>
                <textarea
                  rows={4}
                  required
                  value={formQuery}
                  onChange={(e) => setFormQuery(e.target.value)}
                  placeholder="Ask about specific plant varieties, Jeevamrut preparation, or order inquiries..."
                  className="w-full px-4 py-2.5 bg-[#F8FBF7] border border-[#E2EDE3] rounded-xl text-xs focus:outline-none focus:border-[#176B36]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#176B36] hover:bg-[#064E2B] text-white font-semibold rounded-2xl text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry to Nursery
              </button>
            </form>
          )}

        </div>

      </section>

    </div>
  );
};
