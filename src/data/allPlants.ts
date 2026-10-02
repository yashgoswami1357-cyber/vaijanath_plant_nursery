import { Plant } from '../types';
import { PLANTS } from './plants';
import { MORE_PLANTS } from './morePlants';

const EXTRA_PLANTS: Plant[] = [
  {
    id: 'plant-ashwagandha',
    slug: 'ashwagandha',
    commonName: 'Ashwagandha (Indian Ginseng)',
    scientificName: 'Withania somnifera',
    regionalNames: {
      en: 'Indian Ginseng / Winter Cherry',
      hi: 'अश्वगंधा (Ashwagandha)',
      gu: 'અશ્વગંધા / આસોપાલવ મૂળ (Ashwagandha)',
      mr: 'अश्वगंधा (Ashwagandha)'
    },
    family: 'Solanaceae',
    genus: 'Withania',
    species: 'W. somnifera',
    category: 'Medicinal Plants',
    plantType: 'Shrub',
    nativeRegion: 'India, Middle East, and parts of Africa',
    distributionInIndia: 'Cultivated extensively in Madhya Pradesh (Neemuch/Mandsaur), Gujarat, and Rajasthan.',
    primaryImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The celebrated King of Ayurvedic Adaptogens, renowned for calming stress, rejuvenating vigor, and boosting natural vitality.',
    detailedDescription: 'Ashwagandha is a stout evergreen perennial shrub with dull green elliptic leaves, bell-shaped greenish-yellow flowers, and orange-red berries enclosed in a papery calyx. Its fleshy tuberous roots carry the scent of a horse ("Ashwa"), signifying strength.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: false,
    isPopular: false,
    uses: {
      medicinal: ['Root powder (Churna) reduces cortisol, anxiety, and enhances sleep quality.', 'Boosts vitality, endurance, and immune modulation in Ayurvedic Rasayana therapy.'],
      traditional: ['Consumed at bedtime stirred into warm milk with ghee and honey.'],
      culinary: ['Herbal teas and restorative tonics.'],
      agricultural: ['Excellent dryland crop that flourishes in marginal sandy soils.'],
      environmental: ['Drought-hardy soil protector in semi-arid zones.'],
      cultural: ['Cornerstone of classical Ayurveda dating back over 3,000 years.'],
      economic: ['Huge international nutraceutical and wellness export commodity.'],
      wildlife: ['Berries attract garden birds.']
    },
    growingConditions: {
      climate: 'Subtropical dry, warm semi-arid climate.',
      temperatureRange: '20°C - 38°C.',
      sunlight: 'Full Sun',
      soilType: 'Sandy loam or light red soil with pH 7.5 to 8.0.',
      soilPh: '7.5 - 8.0',
      drainage: 'Porous drainage; waterlogging rots roots completely.',
      humidity: 'Low to moderate.',
      indianRegions: ['Madhya Pradesh', 'Gujarat', 'Rajasthan', 'Punjab'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Sunny terrace pots (12 inch)', 'Backyard dry borders', 'Herb garden beds']
    },
    plantingGuide: {
      bestSeason: 'Late monsoon (August-September) with receding rains.',
      idealLocation: 'Unobstructed full sun exposure.',
      seedPreparation: 'Soak seeds in water for 12 hours before sowing.',
      germinationTime: '8 to 14 days.',
      potOrGround: '12-inch terracotta pots or garden soil.',
      stepByStepInstructions: [
        'Use well-drained sandy loam soil with 20% vermicompost.',
        'Broadcast seeds and cover with thin 0.5 cm soil layer.',
        'Keep lightly moist until germination, then water sparingly.'
      ],
      recommendedSpacing: '30 cm between plants.',
      plantingDepth: '0.5 cm.',
      transplanting: 'Transplant at 25-30 days.',
      initialCare: 'Do not overwater seedlings.'
    },
    wateringGuide: {
      requirement: 'Low',
      frequency: 'Every 5-7 days; allow soil to dry completely between waterings.',
      dripSuitability: true,
      irrigationMethod: 'Light furrow or pot drenching.',
      underwateringSigns: 'Slight leaf wilting.',
      overwateringSigns: 'Root rot and yellowing leaves.',
      seasonalAdjustments: 'Keep dry during winter root maturity.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Well-aged cow manure', 'Neem cake', 'Wood ash'],
      frequency: 'Once at planting time.',
      applicationMethod: 'Incorporate into basal soil mix.',
      deficiencySymptoms: 'Rare.',
      precautions: 'Excessive nitrogen produces giant leaves but thin, low-potency roots.'
    },
    maintenance: {
      pruning: 'Minimal pruning.',
      weedControl: 'Weed twice during early growth.',
      mulching: 'Straw mulch in dry heat.',
      growthRate: 'Moderate',
      matureHeight: '60 cm - 120 cm',
      matureSpread: '40 cm - 60 cm',
      expectedLifespan: 'Perennial (cultivated as 150-180 day annual for root harvest).',
      propagationMethods: ['Seeds'],
      floweringSeason: 'Autumn to early winter.',
      fruitingSeason: 'Winter (berries turn red).',
      harvesting: 'Harvest roots 150-180 days after sowing when leaves begin to yellow and berries turn red.'
    },
    problems: {
      pests: ['Aphids', 'Mites'],
      diseases: ['Seedling rot in damp conditions'],
      symptoms: 'Curled leaves.',
      prevention: 'Avoid overwatering.',
      organicRemedies: ['Neem oil spray (5ml/L).']
    },
    faqs: [
      {
        question: 'How do I harvest and prepare Ashwagandha roots at home?',
        answer: 'Uproot mature plants after 5-6 months when leaves dry, wash roots thoroughly to remove soil, slice into 2-inch pieces, dry under shade for 10 days, and grind into fine Churna.'
      }
    ],
    relatedPlantSlugs: ['tulsi', 'amla', 'aloe-vera']
  },
  {
    id: 'plant-betel-leaf',
    slug: 'betel-leaf',
    commonName: 'Betel Leaf Vine (Paan)',
    scientificName: 'Piper betle',
    regionalNames: {
      en: 'Betel Leaf Vine',
      hi: 'पान (Paan)',
      gu: 'નાગરવેલ / પાન (Nagarvel / Paan)',
      mr: 'नागवेल / पान (Nagvel)'
    },
    family: 'Piperaceae',
    genus: 'Piper',
    species: 'P. betle',
    category: 'Climbers',
    plantType: 'Climber',
    nativeRegion: 'South Asia and Southeast Asia',
    distributionInIndia: 'Cultivated in Gujarat (Mahuva Nagarvel), West Bengal (Mecheda), UP (Banarasi Paan), and Tamil Nadu.',
    primaryImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The celebrated heart-shaped glossy sacred leaf of India, enjoyed after meals for digestion, oral freshness, and auspicious rituals.',
    detailedDescription: 'Betel leaf is a lush, evergreen shade-loving perennial climber with glossy heart-shaped leaves and distinctive spicy-peppery aroma. In Indian tradition, a tray of Paan offered after grand feasts symbolizes hospitality, affection, and digestive grace.',
    difficulty: 'Moderate',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Warmed betel leaves coated with castor oil applied on chest for infant phlegm and cough.', 'Powerful natural carminative and breath freshener.'],
      traditional: ['Key component of sacred Puja offerings (Tambula) in weddings, Havans, and festive feasts.'],
      culinary: ['Banarasi Paan, Meetha Paan, Paan shots, and digestion mouth freshener.'],
      agricultural: ['Climbs symbiotic shade trees like Areca nut and Moringa.'],
      environmental: ['Vibrant evergreen foliage cools shaded corridors.'],
      cultural: ['Signifies respect and cordiality; given with betel nut and coins to elders.'],
      economic: ['Immense daily cash-crop economy across Pan-Indian betel markets (Bareja).'],
      wildlife: ['Provides sheltered canopy for small garden birds.']
    },
    growingConditions: {
      climate: 'Humid, warm tropical shade.',
      temperatureRange: '18°C - 35°C (needs protection from dry summer scorching winds).',
      sunlight: 'Partial Shade',
      soilType: 'Rich, loose, humus-rich loamy soil with compost.',
      soilPh: '6.5 - 7.5',
      drainage: 'Porous drainage; roots love moisture but hate waterlogging.',
      humidity: '65% - 85%.',
      indianRegions: ['Gujarat (Mahuva/Saurashtra)', 'West Bengal', 'Uttar Pradesh (Varanasi)', 'Tamil Nadu'],
      indoorOutdoor: 'Both',
      suitableLocations: ['Shaded balcony corners with a moss stick', 'Under tree canopies', 'Covered verandahs']
    },
    plantingGuide: {
      bestSeason: 'Monsoon (July to September) or early Spring (February).',
      idealLocation: 'Bright indirect light or gentle morning sun; shaded from 11 AM onwards.',
      seedPreparation: 'Propagated exclusively from stem cuttings with root nodes.',
      germinationTime: 'Roots strike within 10 to 14 days.',
      potOrGround: '12-14 inch pots with a moist moss stick.',
      stepByStepInstructions: [
        'Mix 40% garden soil, 30% cocopeat, 20% vermicompost, and 10% neem cake.',
        'Insert stem cutting with at least 2 nodes into the soil.',
        'Train the emerging vine gently onto a damp coco coir pole.',
        'Water lightly and keep in warm dappled shade.'
      ],
      recommendedSpacing: '40 cm apart.',
      plantingDepth: '3 to 5 cm.',
      transplanting: 'Monsoon season.',
      initialCare: 'Mist leaves daily during hot dry weather.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 1-2 days in warm weather; every 3-4 days in winter.',
      dripSuitability: true,
      irrigationMethod: 'Keep potting medium and moss stick consistently moist.',
      underwateringSigns: 'Limp leaves, loss of glossy sheen, curling edges.',
      overwateringSigns: 'Yellowing leaves and fungal stem collar rot.',
      seasonalAdjustments: 'Keep soil moist; protect from hot dry summer loo winds with daily leaf misting.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Mustard cake liquid tea (diluted 1:10)', 'Vermicompost', 'Sour buttermilk spray'],
      frequency: 'Every 20 days.',
      applicationMethod: 'Top-dress with 1 handful of vermicompost and spray diluted buttermilk on leaves.',
      deficiencySymptoms: 'Smaller leaves and pale green color.',
      precautions: 'Never spray chemical pesticides on leaves intended for chewing.'
    },
    maintenance: {
      pruning: 'Pinch top growth to encourage bushy lateral leaves; tie vines gently to support.',
      weedControl: 'Keep pot surface clean.',
      mulching: 'Cocopeat or leaf mold mulch preserves humidity.',
      growthRate: 'Fast in warm humid months',
      matureHeight: '2 - 5 meters climbing on poles.',
      matureSpread: '1 - 2 meters',
      expectedLifespan: 'Perennial (10+ years with care).',
      propagationMethods: ['Stem node cuttings in water or soil'],
      floweringSeason: 'Rarely flowers in domestic gardens.',
      harvesting: 'Harvest mature glossy leaves with 1 cm stem using clean scissors.'
    },
    problems: {
      pests: ['Mealybugs', 'Red spider mites in dry heat'],
      diseases: ['Collar rot in stagnant soil', 'Anthracnose leaf spot'],
      symptoms: 'Black circular spots on leaves.',
      prevention: 'Avoid wetting leaves late in the evening; ensure airy location.',
      organicRemedies: ['Spray diluted sour buttermilk (Chhachh) or neem oil.']
    },
    faqs: [
      {
        question: 'Can I grow Nagarvel Paan in an apartment balcony?',
        answer: 'Yes! Paan thrives in an apartment balcony as long as it gets bright indirect light (no burning noon sun) and is trained onto a moist coco-fiber moss stick that you mist daily.'
      }
    ],
    relatedPlantSlugs: ['money-plant', 'curry-leaf', 'tulsi']
  }
];

export const ALL_PLANTS: Plant[] = [...PLANTS, ...MORE_PLANTS, ...EXTRA_PLANTS];
