import React, { useState, useMemo } from 'react';
import { 
  CloudRain, 
  Snowflake, 
  Sun, 
  Flower2, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Droplets, 
  Leaf, 
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ALL_PLANTS } from '../data/allPlants';
import { PlantCard } from './PlantCard';
import { Plant } from '../types';

interface SeasonalCalendarProps {
  onSelectPlant: (slug: string) => void;
  onSelectFertilizer?: (slug: string) => void;
}

type SeasonId = 'monsoon' | 'winter' | 'summer' | 'spring';

interface SeasonInfo {
  id: SeasonId;
  name: {
    en: string;
    gu: string;
    hi: string;
    mr: string;
  };
  traditionalRitu: {
    en: string;
    gu: string;
    hi: string;
    mr: string;
  };
  months: {
    en: string;
    gu: string;
    hi: string;
    mr: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  tempRange: string;
  gardeningTips: {
    en: string[];
    gu: string[];
    hi: string[];
    mr: string[];
  };
  recommendedFertilizers: {
    name: string;
    slug: string;
    benefit: string;
  }[];
  plantSlugs: string[];
}

export const SeasonalCalendar: React.FC<SeasonalCalendarProps> = ({ 
  onSelectPlant,
  onSelectFertilizer 
}) => {
  const { language, t } = useLanguage();

  // Helper to determine the current Indian agricultural season based on current date
  const getCurrentIndianSeason = (): SeasonId => {
    const month = new Date().getMonth(); // 0 = Jan, 1 = Feb, ..., 9 = Oct, 11 = Dec
    if (month >= 5 && month <= 8) {
      return 'monsoon'; // June to September
    } else if (month >= 9 || month === 0) {
      return 'winter'; // October to January
    } else if (month === 1 || month === 2) {
      return 'spring'; // February to March
    } else {
      return 'summer'; // April to May
    }
  };

  const detectedSeason = useMemo(() => getCurrentIndianSeason(), []);
  const [activeSeason, setActiveSeason] = useState<SeasonId>(detectedSeason);

  const seasonsData: SeasonInfo[] = [
    {
      id: 'winter',
      name: {
        en: 'Winter / Post-Monsoon',
        gu: 'શિયાળો (Winter)',
        hi: 'शीत ऋतु (Winter)',
        mr: 'हिवाळा (Winter)'
      },
      traditionalRitu: {
        en: 'Hemant & Shishir Ritu',
        gu: 'હેમંત અને શિશિર ઋતુ',
        hi: 'हेमंत एवं शिशिर ऋतु',
        mr: 'हेमंत आणि शिशिर ऋतू'
      },
      months: {
        en: 'October – February',
        gu: 'ઓક્ટોબર – ફેબ્રુઆરી',
        hi: 'अक्टूबर – फरवरी',
        mr: 'ऑक्टोबर – फेब्रुवारी'
      },
      icon: Snowflake,
      color: 'text-sky-700',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      tempRange: '12°C – 28°C',
      gardeningTips: {
        en: [
          'Annual hard pruning of Roses and Hibiscus in October to trigger massive winter flower flushes.',
          'Feed heavy doses of Mustard Cake (Sarson Khali) liquid tea every 15 days for abundant prize-winning blooms.',
          'Protect cold-sensitive Tulsi from chilly night drafts by moving containers to sunny, sheltered spots.',
          'Harvest sweet winter Guavas (Hast Bahar crop) and Vitamin-C packed Amla fruits.'
        ],
        gu: [
          'ઓક્ટોબરમાં ગુલાબ અને જાસૂદની કાપણી (Pruning) કરો જેથી શિયાળામાં અઢળક ફૂલો આવે.',
          'દર ૧૫ દિવસે સરસવના ખોળનું (Mustard Cake) પ્રવાહી ખાતર આપો.',
          'ઠંડા પવનોથી તુલસીના છોડને બચાવવા માટે હુંફાળા તડકાવાળી જગ્યાએ રાખો.',
          'મીઠા શિયાળુ જમરૂખ અને આમળાંની લણણી કરવાનો શ્રેષ્ઠ સમય.'
        ],
        hi: [
          'अक्टूबर में गुलाब एवं गुड़हल की छंटाई (Pruning) करें जिससे सर्दियों में बंपर फूल आएं।',
          'हर 15 दिन में सरसों की खली की पतली खाद (Liquid tea) पौधों की जड़ों में दें।',
          'सर्द हवाओं से तुलसी को बचाने के लिए रात में ढकें या धूप वाले कोने में रखें।',
          'सर्दियों के मीठे अमरूद और विटामिन-सी से भरपूर आंवला तोड़ने का सर्वोत्तम समय।'
        ],
        mr: [
          'ऑक्टोबरमध्ये गुलाब आणि जास्वंदाची छाटणी करा जेणेकरून हिवाळ्यात भरपूर फुले येतील.',
          'दर १५ दिवसांनी मोहरीच्या पेंडीचे पातळ खत झाडांना द्या.',
          'थंड हवेपासून तुळशीचे रक्षण करण्यासाठी उबदार जागी ठेवा.',
          'गोड पेरू आणि आवळ्याची काढणी करण्याचा उत्तम हंगाम.'
        ]
      },
      recommendedFertilizers: [
        { name: 'Mustard Cake (Sarson Khali)', slug: 'mustard-cake-fertilizer', benefit: 'Super-fuel for winter flowering flushes' },
        { name: 'Vermicompost', slug: 'vermicompost', benefit: 'Root zone insulation and soil warmth' },
        { name: 'Banana Peel Potassium Tea', slug: 'banana-peel-fertilizer', benefit: 'Prevents unopened flower bud drop' }
      ],
      plantSlugs: ['desi-rose', 'marigold', 'amla', 'guava', 'lemon', 'ashwagandha', 'tulsi']
    },
    {
      id: 'summer',
      name: {
        en: 'Summer / Pre-Monsoon',
        gu: 'ઉનાળો (Summer)',
        hi: 'ग्रीष्म ऋतु (Summer)',
        mr: 'उन्हाळा (Summer)'
      },
      traditionalRitu: {
        en: 'Grishma Ritu',
        gu: 'ગ્રીષ્મ ઋતુ',
        hi: 'ग्रीष्म ऋतु',
        mr: 'ग्रीष्म ऋतू'
      },
      months: {
        en: 'March – May',
        gu: 'માર્ચ – મે',
        hi: 'मार्च – मई',
        mr: 'मार्च – मे'
      },
      icon: Sun,
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      tempRange: '28°C – 44°C',
      gardeningTips: {
        en: [
          'Heavy mulching with dry leaves, coconut husk, or sugarcane bagasse to prevent soil moisture loss.',
          'Water plants early morning (before 8 AM) or late evening to prevent root boil in scorching midday heat.',
          'Spray diluted seaweed extract or sour buttermilk to protect leaf cells against sunburn and dehydration.',
          'Peak fragrance and harvest season for Arabian Jasmine (Mogra) and tender Moringa drumsticks.'
        ],
        gu: [
          'સૂકા પાંદડા અથવા શેરડીના કૂચા વડે કૂંડામાં મલ્ચિંગ (Mulching) કરો જેથી ભેજ જળવાઈ રહે.',
          'સવારે વહેલા અથવા સાંજે સૂર્યાસ્ત પછી જ પાણી આપો; બપોરના તડકામાં પાણી ન આપવું.',
          'ગરમી સામે રક્ષણ આપવા દરિયાઈ શેવાળ (Seaweed) અથવા ખાટી છાશનો છંટકાવ કરો.',
          'મોગરાના સુગંધિત ફૂલો અને સરગવાની શીંગો મેળવવાનો શ્રેષ્ઠ સમય.'
        ],
        hi: [
          'मिट्टी में नमी बनाए रखने के लिए सूखे पत्तों या भूसे से मल्चिंग (Mulching) अवश्य करें।',
          'सुबह 8 बजे से पहले या शाम ढलने के बाद ही पानी दें, तेज धूप में पानी न डालें।',
          'भीषण गर्मी से बचाने के लिए सीवीड एक्सट्रैक्ट या छाछ का पर्णीय छिड़काव करें।',
          'मोगरे के महकते फूलों और सहजन (सहजना) की फलियों का भरपूर मौसम।'
        ],
        mr: [
          'मातीतील ओलावा टिकवण्यासाठी सुक्या पानांचे आच्छादन (Mulching) करा.',
          'सकाळी लवकर किंवा संध्याकाळी पाणी द्या; भर दुपारी पाणी देणे टाळा.',
          'उष्णतेपासून संरक्षणासाठी आंबट ताकाची किंवा सीवीडची फवारणी करा.',
          'मोगऱ्याची सुगंधित फुले आणि शेवग्याच्या शेंगांचा बहराचा काळ.'
        ]
      },
      recommendedFertilizers: [
        { name: 'Seaweed Organic Extract', slug: 'seaweed-fertilizer', benefit: 'Heat stress protector and cellular hydration' },
        { name: 'Wood Ash (Raakh)', slug: 'wood-ash', benefit: 'Potassium boost and pest repulsion' },
        { name: 'Sour Buttermilk Spray', slug: 'buttermilk-spray', benefit: 'Prevents powdery mildew in dry heat' }
      ],
      plantSlugs: ['jasmine', 'lemon', 'moringa', 'aloe-vera', 'snake-plant', 'neem']
    },
    {
      id: 'monsoon',
      name: {
        en: 'Monsoon / Rainy Season',
        gu: 'ચોમાસું (Monsoon)',
        hi: 'वर्षा ऋतु (Monsoon)',
        mr: 'पावसाळा (Monsoon)'
      },
      traditionalRitu: {
        en: 'Varsha Ritu',
        gu: 'વર્ષા ઋતુ',
        hi: 'वर्षा ऋतु',
        mr: 'वर्षा ऋतू'
      },
      months: {
        en: 'June – September',
        gu: 'જૂન – સપ્ટેમ્બર',
        hi: 'जून – सितम्बर',
        mr: 'जून – सप्टेंबर'
      },
      icon: CloudRain,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      tempRange: '24°C – 34°C',
      gardeningTips: {
        en: [
          'The golden window for planting new saplings (Neem, Mango, Guava, Ashoka, Banyan, and Peepal).',
          'Ensure all container drainage holes are clear to prevent standing water and fatal fungal root rot.',
          'Drench soil with freshly brewed Jeevamrut to activate billions of beneficial soil microbes.',
          'Ideal humidity for stem cuttings and air-layering (Gooti) propagation.'
        ],
        gu: [
          'નવા વૃક્ષો (લીમડો, આંબો, જમરૂખ, વડ, પીપળો) વાવવા માટેનો સુવર્ણ સમય.',
          'કૂંડાના નિકાલ છિદ્રો (Drainage holes) તપાસો જેથી પાણી ભરાઈ ન રહે અને મૂળ સડી ન જાય.',
          'માટીમાં અબજો સૂક્ષ્મ જીવાણુઓ જાગૃત કરવા તાજું જીવામૃત આપો.',
          'ડાળીઓની કલમ (Cuttings) અને એર-લેયરિંગ કરવા માટે અનુકૂળ ભેજવાળું વાતાવરણ.'
        ],
        hi: [
          'नए पेड़-पौधे (नीम, आम, अमरूद, बड़, पीपल, अशोक) लगाने का सबसे उत्तम समय।',
          'गमलों के ड्रेनेज होल साफ रखें ताकि पानी न भरे और जड़ें सड़ने से बच सकें।',
          'मिट्टी में करोड़ों लाभदायक जीवाणु बढ़ाने के लिए ताजा जीवामृत डालें।',
          'कलम लगाने (Stem cuttings) और गूटी बांधने के लिए सर्वश्रेष्ठ आर्द्रता।'
        ],
        mr: [
          'नवीन झाडे (कडुनिंब, आंबा, वड, पिंपळ) लावण्यासाठी सर्वोत्तम काळ.',
          'कुंड्यांमध्ये पाणी साचणार नाही याची काळजी घ्या जेणेकरून मुळे कुजणार नाहीत.',
          'मातीतील सूक्ष्मजीव वाढवण्यासाठी ताजे जीवामृत द्या.',
          'फांद्यांची कलमे लावण्यासाठी अनुकूल दमट हवामान.'
        ]
      },
      recommendedFertilizers: [
        { name: 'Jeevamrut (Live Bio-Culture)', slug: 'jeevamrut', benefit: 'Multiplies billions of beneficial soil microbes' },
        { name: 'Neem Cake (Neem Khali)', slug: 'neem-cake', benefit: 'Kills subterranean grubs and soil nematodes' },
        { name: 'Beejamrut (Seed Inoculant)', slug: 'beejamrut', benefit: 'Protects emerging monsoon seeds from damping off' }
      ],
      plantSlugs: ['neem', 'banyan', 'peepal', 'ashoka', 'betel-leaf', 'mango', 'hibiscus', 'curry-leaf']
    },
    {
      id: 'spring',
      name: {
        en: 'Spring / Vasant',
        gu: 'વસંત ઋતુ (Spring)',
        hi: 'वसंत ऋतु (Spring)',
        mr: 'वसंत ऋतू (Spring)'
      },
      traditionalRitu: {
        en: 'Vasant Ritu',
        gu: 'વસંત ઋતુ',
        hi: 'वसंत ऋतु',
        mr: 'वसंत ऋतू'
      },
      months: {
        en: 'February – March',
        gu: 'ફેબ્રુઆરી – માર્ચ',
        hi: 'फरवरी – मार्च',
        mr: 'फेब्रुवारी – मार्च'
      },
      icon: Flower2,
      color: 'text-rose-700',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      tempRange: '18°C – 32°C',
      gardeningTips: {
        en: [
          'The season of rebirth: Mango trees burst into fragrant blossom panicles (Mor / Manjari).',
          'Repot rootbound house plants (Money Plant, Areca Palm, Snake Plant) into fresh soil and compost.',
          'Pinch Curry Leaf plant tips to stimulate multi-branched bushy growth.',
          'Feed generous doses of Panchagavya and Vermicompost as plants awaken from winter dormancy.'
        ],
        gu: [
          'નવજીવનની ઋતુ: આંબા પર મબલખ મંજરી (મોર) બેસવાનો સમય.',
          'કૂંડા બદલવા (Repotting) અને નવી માટી-ખાતર ભરવાનો શ્રેષ્ઠ સમય.',
          'મીઠા લીમડાની ટોચ કાપવી (Pinching) જેથી છોડ ઘાટો અને ઘટાદાર બને.',
          'સુષુપ્તતામાંથી બહાર આવતા છોડને પંચગવ્ય અને અળસિયાનું ખાતર આપો.'
        ],
        hi: [
          'नवजीवन का मौसम: आम के पेड़ों पर सुगंधित बौर (मंजरी) आने का समय।',
          'इंडोर और बालकनी पौधों की रिपोर्टिंग (Repotting) एवं नई खाद देने का सबसे सही समय।',
          'कढ़ी पत्ते की छंटाई करें जिससे वह घना और झाड़ीदार बने।',
          'पौधों की नई वृद्धि के लिए पंचगव्य और वर्मीकम्पोस्ट का भरपूर पोषण दें।'
        ],
        mr: [
          'नवचैतन्याचा काळ: आंब्याला मोहर येण्याचा आणि नवी पालवी फुटण्याचा ऋतू.',
          'झाडांचे पुनर्रोपण (Repotting) करण्यासाठी सर्वोत्तम वेळ.',
          'कढीपत्त्याची शेंडे खुडा जेणेकरून झाड अधिक दाट होईल.',
          'झाडांना नवी ऊर्जा मिळण्यासाठी पंचगव्य आणि गांडूळ खत द्या.'
        ]
      },
      recommendedFertilizers: [
        { name: 'Panchagavya (5-Cow Biostimulant)', slug: 'panchagavya', benefit: 'Hormonal trigger for flowering panicles and branching' },
        { name: 'Cow Dung Manure (Gobar Khad)', slug: 'cow-dung-manure', benefit: 'Baseline nutrition for spring vegetative awakening' },
        { name: 'Kitchen Waste Compost', slug: 'kitchen-waste-compost', benefit: 'Rich trace minerals for fresh spring leaves' }
      ],
      plantSlugs: ['mango', 'guava', 'desi-rose', 'jasmine', 'curry-leaf', 'hibiscus']
    }
  ];

  const currentSeasonData = seasonsData.find(s => s.id === activeSeason) || seasonsData[0];

  // Filter plants based on the active season
  const seasonalPlants = useMemo(() => {
    return ALL_PLANTS.filter(plant => currentSeasonData.plantSlugs.includes(plant.slug));
  }, [currentSeasonData]);

  return (
    <section className="bg-white rounded-3xl border border-[#E2EDE3] p-6 sm:p-10 shadow-xs space-y-8">
      
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2EDE3] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176B36] mb-1.5">
            <Calendar className="w-4 h-4 text-[#3F9B45]" />
            <span>Indian Ritu & Gardening Calendar</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#064E2B] leading-tight">
            Seasonal Plant & Gardening Guide
          </h2>
          <p className="text-xs sm:text-sm text-[#718078] max-w-2xl mt-1 leading-relaxed">
            Gardening in India is governed by traditional Ritus (Seasons). Discover which plants flourish, bloom, or need planting right now based on temperature and monsoon patterns.
          </p>
        </div>

        {/* Current Active Season Live Indicator Badge */}
        <div className="shrink-0 bg-[#EAF6E9] border border-[#176B36]/20 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xs">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3F9B45] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#176B36]"></span>
          </span>
          <div>
            <p className="text-[10px] uppercase font-bold text-[#176B36] tracking-wider">Current Season in India</p>
            <p className="text-xs font-bold text-[#064E2B]">
              {seasonsData.find(s => s.id === detectedSeason)?.name[language] || 'Winter Season'}
            </p>
          </div>
        </div>
      </div>

      {/* Season Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {seasonsData.map(season => {
          const Icon = season.icon;
          const isSelected = activeSeason === season.id;
          const isCurrentRealSeason = detectedSeason === season.id;

          return (
            <button
              key={season.id}
              onClick={() => setActiveSeason(season.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                isSelected 
                  ? 'bg-[#176B36] text-white border-[#176B36] shadow-md shadow-[#176B36]/20 scale-102' 
                  : 'bg-[#F8FBF7] text-[#183426] border-[#E2EDE3] hover:border-[#176B36]/40 hover:bg-[#EAF6E9]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#176B36] shadow-2xs'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isCurrentRealSeason && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white text-[#176B36]' : 'bg-[#176B36] text-white'
                    }`}>
                      Live Now
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-sm sm:text-base font-bold leading-tight">
                  {season.name[language] || season.name.en}
                </h3>
                <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-[#EAF6E9]/90' : 'text-[#718078]'}`}>
                  {season.months[language] || season.months.en}
                </p>
              </div>

              <div className={`pt-3 mt-3 border-t text-[11px] font-medium flex items-center justify-between ${
                isSelected ? 'border-white/20 text-white' : 'border-[#E2EDE3] text-[#718078]'
              }`}>
                <span>{season.tempRange}</span>
                <span>{season.plantSlugs.length} Plants</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Season Climate & Practical Gardening Tips Banner */}
      <div className={`rounded-3xl border p-6 sm:p-8 ${currentSeasonData.bgColor} ${currentSeasonData.borderColor}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Season Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${currentSeasonData.color}`}>
                {currentSeasonData.traditionalRitu[language] || currentSeasonData.traditionalRitu.en}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#064E2B] mt-1">
                {currentSeasonData.name[language] || currentSeasonData.name.en} Care
              </h3>
              <p className="text-xs text-[#718078] mt-1">
                Typical Indian Temperature Range: <strong>{currentSeasonData.tempRange}</strong>
              </p>
            </div>

            {/* Recommended Season Fertilizers */}
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#E2EDE3] space-y-2.5">
              <h4 className="text-xs font-bold text-[#064E2B] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Recommended Organic Food for this Season
              </h4>
              <div className="space-y-2">
                {currentSeasonData.recommendedFertilizers.map((fert, idx) => (
                  <div 
                    key={idx}
                    onClick={() => onSelectFertilizer && onSelectFertilizer(fert.slug)}
                    className="p-2 rounded-xl bg-[#F8FBF7] hover:bg-[#EAF6E9] border border-[#E2EDE3] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#183426] group-hover:text-[#176B36]">
                      <span>🌱 {fert.name}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-[11px] text-[#718078] mt-0.5">
                      {fert.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Seasonal Gardening Tasks */}
          <div className="lg:col-span-8 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#064E2B] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#176B36]" />
              Essential Gardening Activities for this Season
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(currentSeasonData.gardeningTips[language] || currentSeasonData.gardeningTips.en).map((tip, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E2EDE3] flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#176B36] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-[#183426]/90 leading-relaxed font-medium">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Plants Grid for Selected Season */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#064E2B] flex items-center gap-2">
            <Leaf className="w-5 h-5 text-[#3F9B45]" />
            Plants Thriving in {currentSeasonData.name[language] || currentSeasonData.name.en} ({seasonalPlants.length})
          </h3>
          <span className="text-xs text-[#718078]">
            Filtered for current seasonal climate
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {seasonalPlants.map(plant => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onSelect={onSelectPlant}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
