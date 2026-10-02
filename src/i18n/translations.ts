import { Language } from '../types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  ownerName: string;
  nav: {
    home: string;
    plants: string;
    categories: string;
    fertilizers: string;
    aiAssistant: string;
    aboutUs: string;
    searchPlaceholder: string;
    favorites: string;
    profile: string;
    login: string;
    logout: string;
  };
  hero: {
    headline: string;
    subheading: string;
    explorePlants: string;
    askAi: string;
    statPlants: string;
    statFertilizers: string;
    statNative: string;
  };
  categoriesSection: {
    title: string;
    subtitle: string;
    viewAll: string;
    plantsCount: string;
  };
  popularPlants: {
    title: string;
    subtitle: string;
    viewDetails: string;
    favoriteAdded: string;
    favoriteRemoved: string;
  };
  fertilizersSection: {
    title: string;
    subtitle: string;
    learnMore: string;
    viewAll: string;
    prepTime: string;
  };
  aiBanner: {
    title: string;
    subtitle: string;
    button: string;
    chip1: string;
    chip2: string;
    chip3: string;
  };
  common: {
    loading: string;
    error: string;
    emptyResults: string;
    resetFilters: string;
    filterBy: string;
    sortBy: string;
    all: string;
    sunlight: string;
    water: string;
    soil: string;
    difficulty: string;
    climate: string;
    uses: string;
    viewGrid: string;
    viewList: string;
    back: string;
    share: string;
    copied: string;
    comingSoon: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    plantCategories: string;
    fertilizers: string;
    contactUs: string;
    address: string;
    phone: string;
    email: string;
    privacy: string;
    terms: string;
    allRightsReserved: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    appName: 'Vaijanath Plant Nursery',
    tagline: 'Discover the Plants of India',
    ownerName: 'Yash Goswami',
    nav: {
      home: 'Home',
      plants: 'Plants',
      categories: 'Categories',
      fertilizers: 'Organic Fertilizers',
      aiAssistant: 'Montu AI',
      aboutUs: 'About Us',
      searchPlaceholder: 'Search plants, scientific names, fertilizers...',
      favorites: 'Saved Favorites',
      profile: 'My Profile',
      login: 'Sign In',
      logout: 'Sign Out'
    },
    hero: {
      headline: 'Discover the Plants of India',
      subheading: 'Explore authentic Indian plants, master organic gardening secrets, and bring sustainable green vitality into your living space.',
      explorePlants: 'Explore Plants',
      askAi: 'Ask Montu AI',
      statPlants: '20+ Indian Plants',
      statFertilizers: '15+ Organic Fertilizers',
      statNative: '100% Desi Organic Wisdom'
    },
    categoriesSection: {
      title: 'Explore Categories',
      subtitle: 'Browse diverse botanical species tailored to Indian climate, spaces, and agricultural traditions.',
      viewAll: 'View All Categories',
      plantsCount: 'plants'
    },
    popularPlants: {
      title: 'Popular Indian Plants',
      subtitle: 'Beloved household species across India renowned for spiritual significance, fragrance, and Ayurvedic vitality.',
      viewDetails: 'View Details',
      favoriteAdded: 'Added to your favorites',
      favoriteRemoved: 'Removed from favorites'
    },
    fertilizersSection: {
      title: 'Traditional Organic Fertilizers',
      subtitle: 'Ancient Vedic formulations, kitchen composts, and natural plant boosters for chemical-free gardening.',
      learnMore: 'Preparation & Usage',
      viewAll: 'Explore All Fertilizers',
      prepTime: 'Prep Time'
    },
    aiBanner: {
      title: 'Need expert advice? Ask Montu!',
      subtitle: 'Montu is your expert AI gardening guide, ready to diagnose plant health, pests, care schedules, and traditional fertilizer recipes.',
      button: 'Chat with Montu Now',
      chip1: 'Why are my lemon leaves curling?',
      chip2: 'How to prepare Jeevamrut at home?',
      chip3: 'How to care for Tulsi in winter?'
    },
    common: {
      loading: 'Loading botanical knowledge...',
      error: 'Something went wrong. Please try again.',
      emptyResults: 'No botanical records found matching your filters.',
      resetFilters: 'Clear All Filters',
      filterBy: 'Filter By',
      sortBy: 'Sort By',
      all: 'All',
      sunlight: 'Sunlight',
      water: 'Water Requirement',
      soil: 'Soil Type',
      difficulty: 'Difficulty',
      climate: 'Climate',
      uses: 'Uses & Importance',
      viewGrid: 'Grid View',
      viewList: 'List View',
      back: 'Back',
      share: 'Share',
      copied: 'Link copied to clipboard!',
      comingSoon: 'Coming Soon'
    },
    footer: {
      description: 'Vaijanath Plant Nursery is a digital platform dedicated to promoting Indian plants, sustainable gardening, and traditional organic farming knowledge.',
      quickLinks: 'Quick Links',
      plantCategories: 'Plant Categories',
      fertilizers: 'Organic Fertilizers',
      contactUs: 'Contact & Location',
      address: 'Khadalpur Mahadev, Kukarwada, Gujarat, India',
      phone: '+91 73839 58595 (WhatsApp)',
      email: 'montugoswami1357@gmail.com',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      allRightsReserved: 'All rights reserved.'
    }
  },
  gu: {
    appName: 'વૈજનાથ પ્લાન્ટ નર્સરી',
    tagline: 'ભારતના વૃક્ષો અને વનસ્પતિઓની ઓળખ',
    ownerName: 'યશ ગોસ્વામી',
    nav: {
      home: 'મુખ્ય પૃષ્ઠ',
      plants: 'છોડ અને વૃક્ષો',
      categories: 'વર્ગો (કેટેગરી)',
      fertilizers: 'કુદરતી ખાતર',
      aiAssistant: 'મોન્ટુ AI',
      aboutUs: 'અમારા વિશે',
      searchPlaceholder: 'છોડ, વૈજ્ઞાનિક નામ, ખાતર શોધો...',
      favorites: 'સાચવેલા છોડ',
      profile: 'મારી પ્રોફાઇલ',
      login: 'પ્રવેશ કરો (Login)',
      logout: 'બહાર નીકળો (Logout)'
    },
    hero: {
      headline: 'ભારતના પવિત્ર અને દેશી છોડની ઓળખ',
      subheading: 'ભારતીય આબોહવાને અનુકૂળ છોડ, વૃક્ષો અને દેશી ખાતર બનાવવાની સરળ રીતો શીખો અને ઘરમાં હરિયાળી લાવો.',
      explorePlants: 'છોડ જુઓ',
      askAi: 'મોન્ટુને પૂછો',
      statPlants: '૨૦+ દેશી છોડ',
      statFertilizers: '૧૫+ ઓર્ગેનિક ખાતરો',
      statNative: '૧૦૦% દેશી જ્ઞાન'
    },
    categoriesSection: {
      title: 'છોડના વિવિધ વર્ગો',
      subtitle: 'ઘરની અંદર, બહાર, બગીચા અને ખેતી માટે યોગ્ય છોડની શ્રેણીઓ.',
      viewAll: 'બધા વર્ગો જુઓ',
      plantsCount: 'છોડ'
    },
    popularPlants: {
      title: 'ભારતના લોકપ્રિય છોડ',
      subtitle: 'તુલસી, લીમડો, આંબો, જાસૂદ અને ગુલાબ જેવા દરેક ઘરમાં પ્રિય છોડ.',
      viewDetails: 'વિગતો જુઓ',
      favoriteAdded: 'પસંદીદામાં ઉમેર્યું',
      favoriteRemoved: 'પસંદીદામાંથી હટાવ્યું'
    },
    fertilizersSection: {
      title: 'દેશી અને ઓર્ગેનિક ખાતર',
      subtitle: 'જીવામૃત, પંચગવ્ય, વર્મીકમ્પોસ્ટ અને રસોડાના કચરામાંથી ઘરબેઠા ખાતર બનાવવાની રીત.',
      learnMore: 'બનાવવાની રીત',
      viewAll: 'બધા ખાતર જુઓ',
      prepTime: 'તૈયારીનો સમય'
    },
    aiBanner: {
      title: 'છોડની સંભાળ વિશે મૂંઝવણ છે?',
      subtitle: 'અમારા AI ગાર્ડનિંગ સહાયકને પૂછો અને તરત જ ઘરગથ્થુ અને વૈજ્ઞાનિક માર્ગદર્શન મેળવો!',
      button: 'AI ને અત્યારે જ પૂછો',
      chip1: 'લીંબુના પાંદડા કેમ વળી જાય છે?',
      chip2: 'ઘરે જીવામૃત કેવી રીતે બનાવવું?',
      chip3: 'શિયાળામાં તુલસીની સંભાળ કેવી રીતે લેવી?'
    },
    common: {
      loading: 'માહિતી લોડ થઈ રહી છે...',
      error: 'કંઈક ભૂલ થઈ. કૃપા કરીને ફરી પ્રયાસ કરો.',
      emptyResults: 'કોઈ પરિણામ મળ્યું નથી.',
      resetFilters: 'ફિલ્ટર્સ રીસેટ કરો',
      filterBy: 'ફિલ્ટર',
      sortBy: 'ક્રમ અનુસાર',
      all: 'બધા',
      sunlight: 'સૂર્યપ્રકાશ',
      water: 'પાણીની જરૂરિયાત',
      soil: 'માટીનો પ્રકાર',
      difficulty: 'ઉછેરવામાં સરળતા',
      climate: 'આબોહવા',
      uses: 'ઉપયોગ અને મહત્વ',
      viewGrid: 'ગ્રીડ વ્યુ',
      viewList: 'લિસ્ટ વ્યુ',
      back: 'પાછા જાઓ',
      share: 'શેર કરો',
      copied: 'લિંક કોપી થઈ ગઈ!',
      comingSoon: 'ટૂંક સમયમાં ઉપલબ્ધ'
    },
    footer: {
      description: 'વૈજનાથ પ્લાન્ટ નર્સરી ભારતીય છોડ, વૃક્ષો અને દેશી કુદરતી ખેતીની વિશ્વસનીય માહિતી પૂરી પાડતું ડિજિટલ મંચ છે.',
      quickLinks: 'ઝડપી લિંક્સ',
      plantCategories: 'છોડના વર્ગો',
      fertilizers: 'ઓર્ગેનિક ખાતર',
      contactUs: 'સંપર્ક અને સરનામું',
      address: 'ખડાલપુર મહાદેવ, કૂકરવાડા, ગુજરાત, ભારત',
      phone: '+91 73839 58595 (WhatsApp)',
      email: 'montugoswami1357@gmail.com',
      privacy: 'ગોપનીયતા નીતિ',
      terms: 'નિયમો અને શરતો',
      allRightsReserved: 'સર્વાધિકાર સુરક્ષિત.'
    }
  },
  hi: {
    appName: 'वैजनाथ प्लांट नर्सरी',
    tagline: 'भारत के पौधे एवं प्राकृतिक बागवानी',
    ownerName: 'यश गोस्वामी',
    nav: {
      home: 'होम',
      plants: 'पौधे एवं वृक्ष',
      categories: 'श्रेणियां',
      fertilizers: 'जैविक खाद',
      aiAssistant: 'मोंटू AI',
      aboutUs: 'हमारे बारे में',
      searchPlaceholder: 'पौधे, वैज्ञानिक नाम, खाद खोजें...',
      favorites: 'पसंदीदा पौधे',
      profile: 'मेरी प्रोफाइल',
      login: 'साइन इन (Login)',
      logout: 'लॉग आउट'
    },
    hero: {
      headline: 'भारत के पेड़-पौधों को जानें और अपनाएं',
      subheading: 'भारतीय जलवायु के अनुकूल पौधे, उनके औषधीय गुण, उगाने की तकनीक और पारंपरिक देशी खाद बनाने की संपूर्ण जानकारी।',
      explorePlants: 'पौधे देखें',
      askAi: 'मोंटू से पूछें',
      statPlants: '20+ भारतीय पौधे',
      statFertilizers: '15+ जैविक खाद',
      statNative: '100% देशी प्राकृतिक ज्ञान'
    },
    categoriesSection: {
      title: 'पौधों की श्रेणियां',
      subtitle: 'घर के अंदर, बालकनी, छत, और बगीचे के लिए उपयुक्त भारतीय वनस्पतियां।',
      viewAll: 'सभी श्रेणियां देखें',
      plantsCount: 'पौधे'
    },
    popularPlants: {
      title: 'भारत के लोकप्रिय पौधे',
      subtitle: 'तुलसी, नीम, एलोवेरा, आम, अमरूद और गुलाब जैसे पारंपरिक एवं उपयोगी पौधे।',
      viewDetails: 'पूरी जानकारी देखें',
      favoriteAdded: 'पसंदीदा में जोड़ा गया',
      favoriteRemoved: 'पसंदीदा से हटाया गया'
    },
    fertilizersSection: {
      title: 'पारंपरिक जैविक खाद',
      subtitle: 'जीवामृत, पंचगव्य, वर्मीकम्पोस्ट, सरसों खली और घरेलू कचरे से बनी शुद्ध खाद।',
      learnMore: 'बनाने की विधि देखें',
      viewAll: 'सभी खाद देखें',
      prepTime: 'बनाने का समय'
    },
    aiBanner: {
      title: 'पौधों की बीमारी या देखभाल में संशय है?',
      subtitle: 'हमारे मोंटू AI बागवानी मार्गदर्शक से पूछें और तुरंत सटीक भारतीय बागवानी सलाह पाएं!',
      button: 'मोंटू से बात करें',
      chip1: 'नींबू के पत्ते क्यों मुड़ रहे हैं?',
      chip2: 'घर पर जीवामृत कैसे बनाएं?',
      chip3: 'सर्दियों में तुलसी की देखभाल कैसे करें?'
    },
    common: {
      loading: 'जानकारी लोड हो रही है...',
      error: 'कुछ गड़बड़ हुई। कृपया पुनः प्रयास करें।',
      emptyResults: 'कोई परिणाम नहीं मिला।',
      resetFilters: 'फ़िल्टर हटाएं',
      filterBy: 'फ़िल्टर करें',
      sortBy: 'क्रमबद्ध करें',
      all: 'सभी',
      sunlight: 'धूप की आवश्यकता',
      water: 'पानी की आवश्यकता',
      soil: 'मिट्टी का प्रकार',
      difficulty: 'कठिनाई स्तर',
      climate: 'जलवायु',
      uses: 'उपयोग एवं महत्व',
      viewGrid: 'ग्रिड व्यू',
      viewList: 'सूची व्यू',
      back: 'वापस जाएं',
      share: 'साझा करें',
      copied: 'लिंक कॉपी हो गया!',
      comingSoon: 'जल्द आ रहा है'
    },
    footer: {
      description: 'वैजनाथ प्लांट नर्सरी भारतीय वनस्पतियों, टिकाऊ बागवानी और प्राकृतिक जैविक खाद के ज्ञान को समर्पित एक डिजिटल मंच है।',
      quickLinks: 'त्वरित लिंक',
      plantCategories: 'पौधों की श्रेणियां',
      fertilizers: 'जैविक खाद',
      contactUs: 'संपर्क एवं पता',
      address: 'खडालपुर महादेव, कुकरवाड़ा, गुजरात, भारत',
      phone: '+91 73839 58595 (WhatsApp)',
      email: 'montugoswami1357@gmail.com',
      privacy: 'गोपनीयता नीति',
      terms: 'नियम एवं शर्तें',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।'
    }
  },
  mr: {
    appName: 'वैजनाथ प्लांट नर्सरी',
    tagline: 'भारतातील वनस्पती आणि सेंद्रिय शेती',
    ownerName: 'यश गोस्वामी',
    nav: {
      home: 'मुख्यपृष्ठ',
      plants: 'झाडे आणि वनस्पती',
      categories: 'वर्गवारी',
      fertilizers: 'सेंद्रिय खते',
      aiAssistant: 'मोंटू AI',
      aboutUs: 'आमच्याबद्दल',
      searchPlaceholder: 'झाडे, शास्त्रीय नाव, खते शोधा...',
      favorites: 'आवडती झाडे',
      profile: 'माझे प्रोफाइल',
      login: 'साइन इन करा',
      logout: 'बाहेर पडा'
    },
    hero: {
      headline: 'भारतातील पारंपरिक वनस्पती जाणून घ्या',
      subheading: 'भारतीय हवामानास अनुकूल झाडे, त्यांची योग्य निगा आणि घरच्या घरी सेंद्रिय खत बनवण्याची संपूर्ण माहिती.',
      explorePlants: 'झाडे पहा',
      askAi: 'मोंटू ला विचारा',
      statPlants: '२०+ भारतीय झाडे',
      statFertilizers: '१५+ सेंद्रिय खते',
      statNative: '१००% देशी सेंद्रिय ज्ञान'
    },
    categoriesSection: {
      title: 'वनस्पतींच्या श्रेणी',
      subtitle: 'घरातील, बाल्कनीतील, बागेतील आणि शेतातील विविध वनस्पतींचे वर्गीकरण.',
      viewAll: 'सर्व श्रेणी पहा',
      plantsCount: 'झाडे'
    },
    popularPlants: {
      title: 'भारतातील लोकप्रिय वनस्पती',
      subtitle: 'तुळस, कडुनिंब, कोरफड, आंबा, पेरू आणि जास्वंद यांसारखी प्रत्येक अंगणातील झाडे.',
      viewDetails: 'तपशील पहा',
      favoriteAdded: 'आवडत्या यादीत जोडले',
      favoriteRemoved: 'आवडत्या यादीतून काढले'
    },
    fertilizersSection: {
      title: 'पारंपरिक सेंद्रिय खते',
      subtitle: 'जीवामृत, शेणखत, गांडूळ खत आणि ताकाचे पाणी बनवण्याची शास्त्रीय पद्धत.',
      learnMore: 'वापर व कृती पहा',
      viewAll: 'सर्व खते पहा',
      prepTime: 'तयारीचा वेळ'
    },
    aiBanner: {
      title: 'झाडांच्या आरोग्याबद्दल शंका आहे?',
      subtitle: 'आमच्या AI बागकाम सहाय्यकाला विचारा आणि तात्काळ देशी उपाय मिळवा!',
      button: 'AI ला आत्ताच विचारा',
      chip1: 'लिंबाची पाने का वाकडी होत आहेत?',
      chip2: 'घरी जीवामृत कसे तयार करावे?',
      chip3: 'हिवाळ्यात तुळशीची काळजी कशी घ्यावी?'
    },
    common: {
      loading: 'माहिती लोड होत आहे...',
      error: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.',
      emptyResults: 'कोणतीही नोंद सापडली नाही.',
      resetFilters: 'फिल्टर हटवा',
      filterBy: 'फिल्टर करा',
      sortBy: 'क्रमवारी लावा',
      all: 'सर्व',
      sunlight: 'सूर्यप्रकाशाची गरज',
      water: 'पाण्याची गरज',
      soil: 'मातीचा प्रकार',
      difficulty: 'कठिणता पातळी',
      climate: 'हवामान',
      uses: 'उपयोग व महत्त्व',
      viewGrid: 'ग्रिड व्ह्यू',
      viewList: 'यादी व्ह्यू',
      back: 'मागे जा',
      share: 'शेअर करा',
      copied: 'लिंक कॉपी केली!',
      comingSoon: 'लवकरच येत आहे'
    },
    footer: {
      description: 'वैजनाथ प्लांट नर्सरी हे भारतीय वनस्पती आणि सेंद्रिय खतांच्या ज्ञानाला समर्पित डिजिटल व्यासपीठ आहे.',
      quickLinks: 'द्रुत दुवे',
      plantCategories: 'वनस्पतींच्या श्रेणी',
      fertilizers: 'सेंद्रिय खते',
      contactUs: 'संपर्क आणि पत्ता',
      address: 'खडालपूर महादेव, कुकरवाडा, गुजरात, भारत',
      phone: '+91 73839 58595 (WhatsApp)',
      email: 'montugoswami1357@gmail.com',
      privacy: 'गोपनीयता धोरण',
      terms: 'नियम आणि अटी',
      allRightsReserved: 'सर्व हक्क राखीव.'
    }
  }
};
