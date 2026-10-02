import { Plant } from '../types';

export const MORE_PLANTS: Plant[] = [
  {
    id: 'plant-amla',
    slug: 'amla',
    commonName: 'Amla (Indian Gooseberry)',
    scientificName: 'Phyllanthus emblica',
    regionalNames: {
      en: 'Indian Gooseberry',
      hi: 'आंवला (Aanwala)',
      gu: 'આમળાં (Aamla)',
      mr: 'आवळा (Aawla)'
    },
    family: 'Phyllanthaceae',
    genus: 'Phyllanthus',
    species: 'P. emblica',
    category: 'Medicinal Plants',
    plantType: 'Tree',
    nativeRegion: 'Tropical South Asia',
    distributionInIndia: 'Cultivated in UP (Pratapgarh), Gujarat, Maharashtra, and MP.',
    primaryImage: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The premier Ayurvedic Rasayana and Vitamin C champion, used in Chyawanprash and hair oils for rejuvenation.',
    detailedDescription: 'Amla is a small to medium deciduous tree with feathery light green foliage and round, ribbed, translucent greenish-yellow fruits. It is deeply worshipped during Amla Navami and stands as one of the three ingredients of Triphala.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Unsurpassed source of heat-stable Vitamin C, bioflavonoids, and polyphenols.', 'Key pillar of Chyawanprash, Triphala, and Brahmi Rasayan.'],
      traditional: ['Amla oil massages promote thick black hair and cool the scalp.'],
      culinary: ['Murabba, pickles, sun-dried salted Amla candy, and fresh winter juices.'],
      agricultural: ['Hardy tree tolerant to drought and sodic soils.'],
      environmental: ['Thrives in degraded soils, helping restore wastelands.'],
      cultural: ['Sacred tree associated with Lord Vishnu; feasts cooked under Amla trees on Kartik Shukla Navami.'],
      economic: ['Vast Ayurvedic processing and nutraceutical industry.'],
      wildlife: ['Fruits eaten by deer, wild boars, and birds in dry forests.']
    },
    growingConditions: {
      climate: 'Tropical and subtropical; tolerates summer heat up to 45°C.',
      temperatureRange: '15°C - 45°C.',
      sunlight: 'Full Sun',
      soilType: 'Light sandy loam or clay loam; highly adaptable to alkaline/sodic soils.',
      soilPh: '6.5 - 8.5',
      drainage: 'Good drainage.',
      humidity: '40% - 70%.',
      indianRegions: ['Uttar Pradesh', 'Gujarat', 'Madhya Pradesh', 'Rajasthan'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Orchards', 'Sunny backyards', 'Farmhouse boundary']
    },
    plantingGuide: {
      bestSeason: 'July to September during monsoon.',
      idealLocation: 'Full sunlight.',
      seedPreparation: 'Use budded or grafted saplings (NA-7, Chakaiya, Kanchan) for large fleshy fruits.',
      germinationTime: '3-4 weeks for root establishment.',
      potOrGround: 'Ground planting preferred; large drums for dwarf cultivars.',
      stepByStepInstructions: [
        'Dig a 1x1x1 m pit.',
        'Mix with 20 kg farmyard manure and 1 kg neem cake.',
        'Plant grafted sapling with graft union above soil.',
        'Water deeply and stake.'
      ],
      recommendedSpacing: '6 to 8 meters between trees.',
      plantingDepth: 'Equal to nursery container depth.',
      transplanting: 'Monsoon season.',
      initialCare: 'Protect young sapling from winter frost in North India.'
    },
    wateringGuide: {
      requirement: 'Low',
      frequency: 'Every 10-15 days for young plants; mature trees need water during fruit growth (Sept-Nov).',
      dripSuitability: true,
      irrigationMethod: 'Ring basin.',
      underwateringSigns: 'Small shriveled fruits.',
      overwateringSigns: 'Fungal root rot in stagnant water.',
      seasonalAdjustments: 'Withhold water in December-January to induce dormancy before flowering.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Well-rotted cow dung manure', 'Vermicompost', 'Neem cake', 'Wood ash'],
      frequency: 'Twice a year (January and July).',
      applicationMethod: 'Broadcast around perimeter and hoe into topsoil.',
      deficiencySymptoms: 'Poor fruit set or yellowing feathery leaves.',
      precautions: 'Do not use chemical weedicides near roots.'
    },
    maintenance: {
      pruning: 'Prune dead wood and train central trunk in early years.',
      weedControl: 'Weed basin regularly.',
      mulching: 'Mulch with dry grasses.',
      growthRate: 'Moderate',
      matureHeight: '8 - 15 meters',
      matureSpread: '6 - 10 meters',
      expectedLifespan: '60 - 80 years.',
      propagationMethods: ['Patch budding', 'Shield budding', 'Seedlings (for rootstock)'],
      floweringSeason: 'March to May.',
      fruitingSeason: 'November to February.',
      harvesting: 'Harvest when fruits turn pale translucent yellowish-green.'
    },
    problems: {
      pests: ['Bark-eating caterpillar', 'Shoot gall maker'],
      diseases: ['Amla rust', 'Fruit rot'],
      symptoms: 'Brown rust pustules on leaves and fruits.',
      prevention: 'Maintain balanced pruning and tree hygiene.',
      organicRemedies: ['Spray wettable sulfur or neem oil for rust.']
    },
    faqs: [
      {
        question: 'Does cooking destroy the Vitamin C in Amla?',
        answer: 'Remarkably, Amla contains dense tannins that protect its ascorbic acid (Vitamin C) from oxidation, allowing it to retain significant nutritional potency even when dried or simmered into Chyawanprash!'
      },
      {
        question: 'How long until a grafted Amla tree bears fruit?',
        answer: 'Grafted varieties like NA-7 start bearing heavy clusters within 3 to 4 years.'
      }
    ],
    relatedPlantSlugs: ['neem', 'mango', 'tulsi']
  },
  {
    id: 'plant-marigold',
    slug: 'marigold',
    commonName: 'Marigold (Genda Phool)',
    scientificName: 'Tagetes erecta',
    regionalNames: {
      en: 'African / French Marigold',
      hi: 'गेंदा (Genda)',
      gu: 'ગલગોટો (Galgoto)',
      mr: 'झेंडू (Zendu)'
    },
    family: 'Asteraceae',
    genus: 'Tagetes',
    species: 'T. erecta',
    category: 'Flowers',
    plantType: 'Herb',
    nativeRegion: 'The Americas, naturalized centuries ago across India',
    distributionInIndia: 'Cultivated in Gujarat, Maharashtra, Karnataka, and Bengal for grand festive garlands.',
    primaryImage: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The vibrant festive floral emblem of Diwali, Dussehra, and Puja garlands, celebrated as a master organic companion plant.',
    detailedDescription: 'Marigold is a cheerful annual herb featuring deeply divided aromatic pinnate leaves and globular flower heads ranging from bright yellow to radiant saffron-orange. Its roots exude natural nematicides that cleanse soil for other crops.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Petal extracts rich in lutein and zeaxanthin that support eye vision health.', 'Poultice applied on minor wounds in folk remedies.'],
      traditional: ['Garlands for Diwali, Dussehra, Ganesh Utsav, and wedding Mandaps.'],
      culinary: ['Edible petals tossed in festive salads and herbal teas.'],
      agricultural: ['Supreme companion plant: root exudates eradicate harmful root-knot nematodes in tomato and chili beds.'],
      environmental: ['Attracts predatory hoverflies and bees while repelling pests.'],
      cultural: ['Symbolizes auspicious energy, warmth, and devotion.'],
      economic: ['Huge daily trade in flower mandis and extraction of natural lutein dye.'],
      wildlife: ['Honeybees feast on open marigold pollen.']
    },
    growingConditions: {
      climate: 'Adaptable; loves warm sunny days and cool nights.',
      temperatureRange: '15°C - 35°C.',
      sunlight: 'Full Sun',
      soilType: 'Well-drained loamy or garden soil.',
      soilPh: '6.5 - 7.5',
      drainage: 'Good drainage essential.',
      humidity: '40% - 70%.',
      indianRegions: ['Pan-India'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Balcony pots (8-10 inch)', 'Terrace borders', 'Vegetable patch companion rows']
    },
    plantingGuide: {
      bestSeason: 'August-September for Diwali winter blooms; also February for summer blooms.',
      idealLocation: 'Full direct sunlight (at least 6 hours daily).',
      seedPreparation: 'Sow dried seeds directly; virtually 100% germination.',
      germinationTime: '4 to 7 days.',
      potOrGround: 'Pots or garden beds.',
      stepByStepInstructions: [
        'Sow seeds in a seed tray filled with compost and cocopeat.',
        'Dust lightly with compost.',
        'Keep moist; transplant when seedlings reach 3-4 inches with 4 true leaves.',
        'Pinch central tip at 40 days to foster dozens of flower buds.'
      ],
      recommendedSpacing: '30 to 45 cm between plants.',
      plantingDepth: '0.5 cm.',
      transplanting: 'In evening hours.',
      initialCare: 'Water lightly and shield from harsh midday sun for first 2 days.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 2 days; daily during hot periods.',
      dripSuitability: true,
      irrigationMethod: 'Water base soil; avoid soaking flower heads.',
      underwateringSigns: 'Limp drooping foliage and smaller blooms.',
      overwateringSigns: 'Collar rot and fungal damping off.',
      seasonalAdjustments: 'Allow topsoil to dry slightly between waterings.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Mustard cake liquid fertilizer', 'Vermicompost', 'Steeped banana peel water for potassium', 'Wood ash'],
      frequency: 'Every 10 to 14 days during bud formation.',
      applicationMethod: 'Soil drench or top-dress with 1 handful of vermicompost.',
      deficiencySymptoms: 'Fewer flower buds and stunted growth.',
      precautions: 'Do not overfeed high nitrogen which causes excess leaves and zero flowers.'
    },
    maintenance: {
      pruning: 'Pinch off faded spent flowers (deadheading) to continuously stimulate new blooms.',
      weedControl: 'Keep beds clean.',
      mulching: 'Light mulch in sunny pots.',
      growthRate: 'Fast',
      matureHeight: '30 cm - 90 cm depending on variety.',
      matureSpread: '30 cm - 50 cm',
      expectedLifespan: 'Annual (lasts 5-6 months of prolific blooming).',
      propagationMethods: ['Seeds', 'Softwood stem cuttings'],
      floweringSeason: 'October to February (winter crop) and April to June (summer crop).',
      harvesting: 'Pluck fully open flower heads early in morning.'
    },
    problems: {
      pests: ['Red spider mites in dry heat', 'Aphids', 'Caterpillars'],
      diseases: ['Powdery mildew in cool humid weather', 'Damping off'],
      symptoms: 'White powdery coating on foliage, fine webbing under leaves.',
      prevention: 'Avoid crowding pots; water soil directly.',
      organicRemedies: ['Neem oil spray (5ml/L) with soap; wood ash dusting.']
    },
    faqs: [
      {
        question: 'Why should I plant Marigolds next to my Tomatoes and Chilis?',
        answer: 'Marigold roots secrete alpha-terthienyl, a natural biochemical that stops parasitic root-knot nematodes from attacking tomato and chili roots, creating a natural organic shield!'
      },
      {
        question: 'How do I get maximum flowers on my Marigold plant?',
        answer: 'Two essential tricks: pinch the top center shoot when the plant is 5 inches tall to force multi-branching, and regularly snip off dying flowers (deadheading).'
      }
    ],
    relatedPlantSlugs: ['desi-rose', 'hibiscus', 'jasmine']
  },
  {
    id: 'plant-jasmine',
    slug: 'jasmine',
    commonName: 'Arabian Jasmine (Mogra)',
    scientificName: 'Jasminum sambac',
    regionalNames: {
      en: 'Arabian Jasmine / Mogra',
      hi: 'मोगरा (Mogra)',
      gu: 'મોગરો (Mogro)',
      mr: 'मोगरा (Mogra)'
    },
    family: 'Oleaceae',
    genus: 'Jasminum',
    species: 'J. sambac',
    category: 'Aromatic Plants',
    plantType: 'Shrub',
    nativeRegion: 'South Asia and Southeast Asia',
    distributionInIndia: 'Cultivated in Madurai (famous Madurai Malli GI tag), Gujarat, Maharashtra, and UP.',
    primaryImage: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The crown of Indian fragrant flowers, celebrated for intoxicating night-blooming white blossoms and Gajras.',
    detailedDescription: 'Mogra is a compact evergreen shrub or scrambling vine featuring glossy deep-green leaves and waxy, pure white, celestial blossoms that open at dusk, filling the evening air with a soothing, sweet perfume. A beloved adornment in women’s hair and temples.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Aromatherapy for stress relief, headache alleviation, and mood uplifting.', 'Cooling eye wash made by steeping petals in pure distilled water.'],
      traditional: ['Woven into fresh fragrant hair garlands (Gajra / Veni) worn during festivals.'],
      culinary: ['Flavouring traditional green tea and floral sherbets.'],
      agricultural: ['Attracts night pollinators including beneficial sphinx moths.'],
      environmental: ['Natural fragrant air purifier on warm summer evenings.'],
      cultural: ['Sacred floral garland for Lord Shiva and deities in Hindu rituals.'],
      economic: ['High value cash crop; famous Madurai Malli export to perfume houses in France.'],
      wildlife: ['Feeds nocturnal hawkmoths and pollinating insects.']
    },
    growingConditions: {
      climate: 'Warm tropical and subtropical Indian climate.',
      temperatureRange: '20°C - 38°C.',
      sunlight: 'Full Sun',
      soilType: 'Rich, well-draining loamy soil with plenty of organic manure.',
      soilPh: '6.0 - 7.5',
      drainage: 'Good drainage required; do not allow root water stagnation.',
      humidity: '55% - 80%.',
      indianRegions: ['Tamil Nadu (Madurai)', 'Gujarat', 'Maharashtra', 'Karnataka', 'Uttar Pradesh'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Sunny balconies', 'Terrace pots (12-14 inch)', 'Courtyards near bedroom windows']
    },
    plantingGuide: {
      bestSeason: 'Monsoons (July-August) or early Spring (February).',
      idealLocation: 'Receiving 5 to 6 hours of unshaded direct morning sunlight.',
      seedPreparation: 'Propagated from semi-hardwood stem cuttings or ground layering.',
      germinationTime: 'Roots strike within 20 to 30 days from cuttings.',
      potOrGround: 'Performs exceptionally well in 12-14 inch terracotta pots.',
      stepByStepInstructions: [
        'Prepare mix of 50% fertile garden soil, 30% vermicompost, 10% sand, and 10% neem cake.',
        'Position sapling in center and firm soil.',
        'Water thoroughly and keep in partial shade for 4 days before full sun exposure.'
      ],
      recommendedSpacing: '1 to 1.5 meters in open ground.',
      plantingDepth: 'Equal to nursery container depth.',
      transplanting: 'Cool evening hours during monsoon.',
      initialCare: 'Provide regular moisture during early establishment.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Daily during hot summer months; every 2-3 days in winter.',
      dripSuitability: true,
      irrigationMethod: 'Water base soil directly in morning hours.',
      underwateringSigns: 'Dry crispy flower buds that drop before blooming.',
      overwateringSigns: 'Yellow foliage and fungal root damage.',
      seasonalAdjustments: 'Withhold water for 10-15 days in January-February before annual pruning to trigger heavy flowering.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Mustard cake (Sarson Khali) liquid fertilizer', 'Steeped banana peel water', 'Vermicompost', 'Bone meal'],
      frequency: 'Every 15-20 days during flowering season (March to August).',
      applicationMethod: 'Loosen top 2 inches of soil and feed 2 handfuls of aged vermicompost.',
      deficiencySymptoms: 'Lack of flower buds, pale green foliage.',
      precautions: 'Do not fertilize during winter resting period.'
    },
    maintenance: {
      pruning: 'Annual hard pruning in February: cut back branches by half to force dozens of new flowering shoots.',
      weedControl: 'Keep container weed-free.',
      mulching: 'Mulch with spent compost in summer.',
      growthRate: 'Fast in summer',
      matureHeight: '1 - 2 meters',
      matureSpread: '1 - 1.5 meters',
      expectedLifespan: '15 - 25 years with annual pruning.',
      propagationMethods: ['Semi-hardwood cuttings', 'Air-layering', 'Simple ground layering'],
      floweringSeason: 'March to September (heaviest in summer and monsoon).',
      harvesting: 'Pluck swollen white unopened buds at 4 PM; they open in evening with intense fragrance.'
    },
    problems: {
      pests: ['Bud worm', 'Spider mites in dry summer', 'Aphids'],
      diseases: ['Leaf blight', 'Rust'],
      symptoms: 'Bored holes in flower buds, webbed shoots.',
      prevention: 'Prune dead stems; maintain open sunlight.',
      organicRemedies: ['Spray neem oil emulsion (5ml/L) weekly during bud formation.']
    },
    faqs: [
      {
        question: 'Why is my Mogra not flowering in summer?',
        answer: 'Mogra needs two things to explode into flowers: at least 5 hours of direct hot sunlight, and hard pruning in February. If unpruned, it produces only leaves. Prune tips and feed mustard cake fertilizer.'
      },
      {
        question: 'Why do Mogra buds turn brown and fall without opening?',
        answer: 'This is usually caused by bud worm caterpillar pests or dry heat shock. Spray neem oil on young buds and ensure the soil never stays bone dry in summer.'
      }
    ],
    relatedPlantSlugs: ['desi-rose', 'hibiscus', 'marigold']
  },
  {
    id: 'plant-moringa',
    slug: 'moringa',
    commonName: 'Moringa (Drumstick / Sahjan)',
    scientificName: 'Moringa oleifera',
    regionalNames: {
      en: 'Moringa / Drumstick Tree',
      hi: 'सहजन (Sahjan)',
      gu: 'સરગવો (Saragvo)',
      mr: 'शेवगा (Shevga)'
    },
    family: 'Moringaceae',
    genus: 'Moringa',
    species: 'M. oleifera',
    category: 'Medicinal Plants',
    plantType: 'Tree',
    nativeRegion: 'Northern Indian Subcontinent (sub-Himalayan tracts)',
    distributionInIndia: 'Cultivated extensively in Gujarat, Tamil Nadu, Andhra Pradesh, and Maharashtra.',
    primaryImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1592417817098-8f3d6ef23995?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The world-famous Miracle Tree; every single part—leaves, flowers, pods, and roots—is a superfood packed with protein, calcium, and antioxidants.',
    detailedDescription: 'Moringa is a fast-growing, drought-resistant deciduous tree with umbrella-like loose canopy of tripinnate feathery leaves, fragrant cream flowers, and pendulous triangular pods (drumsticks). In Ayurveda it is praised for preventing hundreds of ailments.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Leaves contain 7x Vitamin C of oranges, 4x calcium of milk, 4x Vitamin A of carrots, and 3x potassium of bananas.', 'Natural anti-inflammatory and blood sugar stabilizer.'],
      traditional: ['Flowers cooked with lentils as restorative tonics during seasonal transitions.'],
      culinary: ['Essential ingredient in South Indian Sambar, Gujarati Saragva nu Shaak, and soups.'],
      agricultural: ['Fresh leaf extract sprayed on crops acts as a natural plant growth hormone (zeatin booster).'],
      environmental: ['Crushed seeds act as an ancient natural water purifier, coagulating suspended dirt and bacteria.'],
      cultural: ['Traditional backyard tree across peninsular India.'],
      economic: ['Global export market for green leaf powder, drumstick pods, and ben oil.'],
      wildlife: ['Blossoms provide year-round nectar for honeybees.']
    },
    growingConditions: {
      climate: 'Warm tropical to subtropical; highly drought-resilient.',
      temperatureRange: '22°C - 42°C (frost sensitive).',
      sunlight: 'Full Sun',
      soilType: 'Sandy loam or well-draining loamy soil.',
      soilPh: '6.2 - 8.0',
      drainage: 'Porous drainage is mandatory; roots rot easily in standing water.',
      humidity: '35% - 75%.',
      indianRegions: ['Gujarat', 'Tamil Nadu', 'Maharashtra', 'Karnataka', 'Andhra Pradesh'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Backyard sunny corner', 'Farm boundaries', 'Large 25-gallon drums for dwarf varieties (ODC)']
    },
    plantingGuide: {
      bestSeason: 'June-July (monsoon) or February-March (spring).',
      idealLocation: 'Location receiving full day direct sunshine.',
      seedPreparation: 'Soak winged seeds in water for 24 hours prior to sowing.',
      germinationTime: '7 to 12 days; remarkably fast.',
      potOrGround: 'Ground planting preferred; large drums can support pruned dwarf cultivars.',
      stepByStepInstructions: [
        'Dig a 60x60x60 cm pit.',
        'Mix with 10 kg farmyard manure and 500g neem cake.',
        'Sow seed 2 cm deep or plant rooted branch cutting.',
        'Pinch top shoot when sapling reaches 3 feet to stimulate bushy side branches.'
      ],
      recommendedSpacing: '2.5 to 3 meters between trees.',
      plantingDepth: '2 to 3 cm for seeds.',
      transplanting: 'Transplant when seedlings reach 30 cm tall.',
      initialCare: 'Water lightly; do not overwater.'
    },
    wateringGuide: {
      requirement: 'Low',
      frequency: 'Once a week for young plants; mature trees thrive with minimal irrigation.',
      dripSuitability: true,
      irrigationMethod: 'Drip or basin irrigation.',
      underwateringSigns: 'Shedding feathery leaves.',
      overwateringSigns: 'Yellowing leaves and soft rotting of tuberous root collar.',
      seasonalAdjustments: 'Withhold watering during monsoon rains.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Well-decomposed cow dung manure', 'Vermicompost', 'Wood ash (high potassium for pods)'],
      frequency: 'Twice a year (June and November).',
      applicationMethod: 'Incorporate into tree basin trench.',
      deficiencySymptoms: 'Slow growth and pale foliage.',
      precautions: 'Does not require heavy chemical fertilizers.'
    },
    maintenance: {
      pruning: 'Prune main trunk at 1.5 meters height every year to keep pods within harvesting reach and avoid brittle top-heavy breakage.',
      weedControl: 'Weed young basin.',
      mulching: 'Mulch with dry straw.',
      growthRate: 'Extremely Fast (reaches 3-4 meters in year 1)',
      matureHeight: '8 - 12 meters (kept at 3m by pruning).',
      matureSpread: '4 - 6 meters',
      expectedLifespan: '20 - 30 years.',
      propagationMethods: ['Seeds (ODC / PKM varieties)', 'Large limb cuttings (1 meter long)'],
      floweringSeason: 'Nearly year-round in South/West India; peaks in winter and spring.',
      fruitingSeason: 'Prolific pod production from March to August.',
      harvesting: 'Harvest tender green pods before seeds become hard and fibrous; harvest leaves anytime.'
    },
    problems: {
      pests: ['Hairy caterpillar', 'Moringa pod fly', 'Aphids on tender shoots'],
      diseases: ['Root rot in flooded soils'],
      symptoms: 'Defoliated leaves from swarming caterpillars.',
      prevention: 'Good drainage and open airflow.',
      organicRemedies: ['Dust wood ash on caterpillars; spray neem oil (5ml/L) on tender flowers.']
    },
    faqs: [
      {
        question: 'Why should I prune my Moringa tree at 4 feet?',
        answer: 'If left unpruned, Moringa quickly shoots up into a tall, brittle 25-foot pole with all drumsticks out of reach! Pruning the central leader at 3-4 feet forces the tree to produce 5 to 8 low spreading branches laden with accessible drumsticks.'
      },
      {
        question: 'How do I use Moringa leaves for daily nutrition?',
        answer: 'Wash fresh leaves and toss them into everyday dal, paratha dough, sambar, or dry them in shade and grind into a vibrant green superfood powder.'
      }
    ],
    relatedPlantSlugs: ['curry-leaf', 'neem', 'amla']
  },
  {
    id: 'plant-snake-plant',
    slug: 'snake-plant',
    commonName: 'Snake Plant (Sansevieria / Mother-in-Law’s Tongue)',
    scientificName: 'Dracaena trifasciata (Sansevieria trifasciata)',
    regionalNames: {
      en: 'Snake Plant / Sansevieria',
      hi: 'स्नेक प्लांट (Snake Plant)',
      gu: 'સ્નેક પ્લાન્ટ (Snake Plant)',
      mr: 'स्नेक प्लांट (Snake Plant)'
    },
    family: 'Asparagaceae',
    genus: 'Dracaena',
    species: 'D. trifasciata',
    category: 'Air-Purifying Plants',
    plantType: 'Succulent',
    nativeRegion: 'Tropical West Africa, cultivated across India',
    distributionInIndia: 'Top choice houseplant in urban Indian apartments, offices, and bedrooms.',
    primaryImage: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'Virtually indestructible air-purifying houseplant that releases oxygen all night long, ideal for bedrooms and busy plant lovers.',
    detailedDescription: 'Snake Plant is an architectural succulent featuring upright, sword-like, stiff leathery leaves banded with dark green and silver-gray marbling, often edged with a brilliant golden yellow border. It thrives on neglect and tolerates low light.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: false,
    isPopular: true,
    uses: {
      medicinal: ['Not for internal consumption (contains saponins).'],
      traditional: ['Valued in Feng Shui and Vastu for deflecting negative chi when placed near entrances.'],
      culinary: ['None; strictly ornamental and air-filtering.'],
      agricultural: ['Extremely low water requirement; drought landscape accent.'],
      environmental: ['Ranked in NASA Clean Air Study for removing 4 out of 5 major airborne toxins (benzene, formaldehyde, trichloroethylene, and xylene).'],
      cultural: ['Symbol of resilient endurance and contemporary urban green decor.'],
      economic: ['One of the most commercially traded indoor ornamental plants globally.'],
      wildlife: ['Low wildlife interaction indoors; rarely produces fragrant night flowers outdoors.']
    },
    growingConditions: {
      climate: 'Indoor domestic or warm outdoor shaded patio.',
      temperatureRange: '15°C - 35°C.',
      sunlight: 'Indirect Bright Light',
      soilType: 'Fast-draining gritty succulent mix with sand and perlite/cocopeat.',
      soilPh: '6.0 - 7.5',
      drainage: 'High porosity drainage holes are critical.',
      humidity: '30% - 60% (tolerant to dry indoor air-conditioned rooms).',
      indianRegions: ['Thrives indoors throughout India'],
      indoorOutdoor: 'Indoor',
      suitableLocations: ['Bedrooms for nighttime oxygen', 'Office workstations', 'Living room corners', 'Covered balconies']
    },
    plantingGuide: {
      bestSeason: 'Spring or Monsoons (March to August).',
      idealLocation: 'Any indoor spot with low to bright filtered light.',
      seedPreparation: 'Propagated effortlessly via rhizome division or leaf cuttings.',
      germinationTime: 'Rhizome divisions establish immediately; leaf cuttings root in 30-40 days.',
      potOrGround: 'Heavy terracotta or ceramic pots that won’t tip over.',
      stepByStepInstructions: [
        'Use mix of 40% garden soil, 40% coarse river sand, and 20% vermicompost.',
        'Plant root rhizome firmly.',
        'Do not water for 4 days after repotting to prevent cut rhizome infection.',
        'Place in filtered daylight.'
      ],
      recommendedSpacing: '15 to 20 cm in container.',
      plantingDepth: 'Cover rhizome base; keep leaves upright.',
      transplanting: 'Repot once every 2-3 years when roots crack the pot.',
      initialCare: 'Resist the urge to overwater.'
    },
    wateringGuide: {
      requirement: 'Very Low',
      frequency: 'Every 10-14 days in summer; once a month in winter.',
      dripSuitability: true,
      irrigationMethod: 'Pour water around soil edge; never allow water to stand in central leaf funnel.',
      underwateringSigns: 'Wrinkled puckered leaves, curling inwards.',
      overwateringSigns: 'Mushy, soggy, yellow translucent leaves collapsing at the base.',
      seasonalAdjustments: 'Water very sparingly during monsoon and winter.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Diluted liquid vermicompost wash', 'Seaweed extract'],
      frequency: 'Once every 2-3 months during spring and summer.',
      applicationMethod: 'Water with mild diluted liquid organic food.',
      deficiencySymptoms: 'Very rare.',
      precautions: 'Never over-fertilize.'
    },
    maintenance: {
      pruning: 'Trim damaged outer leaves cleanly at the soil line using a sterile knife.',
      weedControl: 'Not applicable indoors.',
      mulching: 'Decorative pebble top dressing prevents soil splash.',
      growthRate: 'Slow to Moderate',
      matureHeight: '60 cm - 120 cm',
      matureSpread: '30 cm - 60 cm',
      expectedLifespan: '20+ years.',
      propagationMethods: ['Division of root pups/rhizomes', 'Leaf segment cuttings in water or sand'],
      floweringSeason: 'Rare greenish-white fragrant flower spikes in summer when rootbound.',
      harvesting: 'Divide pups to gift friends.'
    },
    problems: {
      pests: ['Mealybugs (occasional)', 'Spider mites'],
      diseases: ['Root rot from overwatering (main cause of mortality)'],
      symptoms: 'Foul-smelling mushy base.',
      prevention: 'When in doubt, DO NOT water.',
      organicRemedies: ['Unpot, cut away rotten black roots, dust healthy cut with cinnamon powder, and repot in dry gritty soil.']
    },
    faqs: [
      {
        question: 'Is Snake plant really safe and beneficial for bedrooms?',
        answer: 'Yes! Snake plant is famous for performing Crassulacean Acid Metabolism (CAM), meaning it releases fresh oxygen and absorbs carbon dioxide during nighttime while you sleep, making it an ideal bedroom companion.'
      },
      {
        question: 'What is the number one mistake people make with Snake plants?',
        answer: 'Overwatering! Snake plants thrive on neglect and can survive weeks without water. Watering too frequently turns the roots into mush.'
      }
    ],
    relatedPlantSlugs: ['aloe-vera', 'money-plant', 'areca-palm']
  },
  {
    id: 'plant-areca-palm',
    slug: 'areca-palm',
    commonName: 'Areca Palm (Golden Cane Palm)',
    scientificName: 'Dypsis lutescens',
    regionalNames: {
      en: 'Areca Palm / Butterfly Palm',
      hi: 'एरेका पाम (Areca Palm)',
      gu: 'એરેકા પામ (Areca Palm)',
      mr: 'अरेका पाम (Areca Palm)'
    },
    family: 'Arecaceae',
    genus: 'Dypsis',
    species: 'D. lutescens',
    category: 'Air-Purifying Plants',
    plantType: 'Shrub',
    nativeRegion: 'Madagascar, widely naturalized across India',
    distributionInIndia: 'Vastly popular in Indian living rooms, hotel lobbies, and shaded verandahs.',
    primaryImage: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The quintessential tropical luxury indoor palm, prized for graceful arching fronds and acting as a natural room humidifier.',
    detailedDescription: 'Areca Palm is a clumping multi-stemmed palm with smooth golden-green canes and delicate, arching, feather-like fronds. It brings an instant lush tropical oasis vibe into Indian homes while actively transpirating natural moisture and filtering toxins.',
    difficulty: 'Moderate',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Non-toxic and safe around pets and children.'],
      traditional: ['Feng Shui element for softening sharp angles and bringing tranquil wood energy.'],
      culinary: ['None.'],
      agricultural: ['Used as lush landscape screening in tropical gardens.'],
      environmental: ['Acts as an efficient indoor natural humidifier (releases up to 1 liter of moisture/day in dry rooms) and filters toluene and xylene.'],
      cultural: ['Symbol of welcoming hospitality in Indian homes.'],
      economic: ['High demand interior landscape trade.'],
      wildlife: ['Outdoor specimens attract nesting birds in warm regions.']
    },
    growingConditions: {
      climate: 'Warm humid tropical or indoor filtered environment.',
      temperatureRange: '18°C - 35°C (sensitive to cold air drafts).',
      sunlight: 'Indirect Bright Light',
      soilType: 'Rich, peat or cocopeat-based potting soil with excellent drainage.',
      soilPh: '6.0 - 6.5 (slightly acidic)',
      drainage: 'Drainage hole is essential; hates waterlogged stagnant saucers.',
      humidity: '50% - 70% (enjoys leaf misting in dry weather).',
      indianRegions: ['Thrives nationwide indoors; outdoors in coastal Maharashtra, Gujarat, Kerala, Bengal'],
      indoorOutdoor: 'Both',
      suitableLocations: ['Bright living room corners', 'Covered balconies receiving morning sun', 'Office spaces']
    },
    plantingGuide: {
      bestSeason: 'Monsoons (July-August) or Spring (February-March).',
      idealLocation: 'Near an east or south window with sheer curtains for bright filtered light.',
      seedPreparation: 'Propagated primarily by clump division of root suckers.',
      germinationTime: '3-4 weeks for divided clumps.',
      potOrGround: '14-18 inch deep decorative planters.',
      stepByStepInstructions: [
        'Mix 40% potting soil, 30% cocopeat, 20% vermicompost, and 10% perlite/sand.',
        'Position the root cluster without burying canes deeper than they were originally growing.',
        'Water thoroughly until moisture runs through bottom.',
        'Place in bright warm spot out of direct afternoon summer scorch.'
      ],
      recommendedSpacing: '1 to 2 meters outdoors.',
      plantingDepth: 'Equal to original soil level on the canes.',
      transplanting: 'Every 2-3 years when root-bound.',
      initialCare: 'Do not allow soil to dry out completely in the first month.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 3-4 days in summer; every 7-10 days in winter.',
      dripSuitability: true,
      irrigationMethod: 'Water when top 1-2 inches of soil feel dry.',
      underwateringSigns: 'Crispy brown frond tips, dry yellowing leaflets.',
      overwateringSigns: 'Blackened cane bases, yellow limp fronds, soil fungus gnats.',
      seasonalAdjustments: 'Reduce frequency in winter; avoid leaving standing water in the saucer.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Liquid vermicompost tea', 'Seaweed extract spray', 'Epsom salt (magnesium for bright green fronds)'],
      frequency: 'Once a month during spring and summer.',
      applicationMethod: 'Soil drench or foliar spray on fronds early morning.',
      deficiencySymptoms: 'Yellow spotting on leaves indicates potassium/magnesium deficiency.',
      precautions: 'Do not use chemical fertilizers with high salts which burn delicate leaf tips.'
    },
    maintenance: {
      pruning: 'Snip off completely yellowed or brown lower fronds at the base.',
      weedControl: 'Keep pot top clean.',
      mulching: 'Cocopeat top layer retains moisture.',
      growthRate: 'Moderate',
      matureHeight: '1.8 - 2.5 meters indoors; up to 6 meters outdoors.',
      matureSpread: '1.2 - 2 meters',
      expectedLifespan: '10 - 20 years with proper care.',
      propagationMethods: ['Root ball division', 'Fresh seeds'],
      floweringSeason: 'Panicles of yellow flowers in spring on mature outdoor specimens.',
      harvesting: 'Wipe fronds with a damp cloth monthly to remove dust.'
    },
    problems: {
      pests: ['Spider mites in dry air', 'Mealybugs', 'Scale insects on stems'],
      diseases: ['Root rot from cold soggy soil'],
      symptoms: 'Brown leaf tips, fine spider webbing under fronds.',
      prevention: 'Mist foliage twice a week during dry summer months.',
      organicRemedies: ['Wash fronds in the bathroom shower; spray mild neem oil soap emulsion.']
    },
    faqs: [
      {
        question: 'Why are the leaf tips of my Areca Palm turning brown?',
        answer: 'Brown tips are typically caused by dry air, chlorinated tap water, or allowing the soil to dry out completely. Mist the fronds regularly, keep soil evenly moist, and use filtered or rested water.'
      },
      {
        question: 'Can Areca Palm survive in direct outdoor sunlight?',
        answer: 'Unfiltered, scorching midday summer sun (above 38°C) will burn and bleach the delicate fronds yellow. Morning direct sun or bright dappled shade is ideal.'
      }
    ],
    relatedPlantSlugs: ['money-plant', 'snake-plant', 'tulsi']
  }
];
