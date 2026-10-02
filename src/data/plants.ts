import { Plant } from '../types';

export const PLANTS: Plant[] = [
  {
    id: 'plant-tulsi',
    slug: 'tulsi',
    commonName: 'Holy Basil (Tulsi)',
    scientificName: 'Ocimum sanctum (Ocimum tenuiflorum)',
    regionalNames: {
      en: 'Holy Basil',
      hi: 'तुलसी (Tulsi)',
      gu: 'તુલસી (Tulsi)',
      mr: 'तुळस (Tulas)'
    },
    family: 'Lamiaceae',
    genus: 'Ocimum',
    species: 'O. tenuiflorum',
    category: 'Medicinal Plants',
    plantType: 'Herb',
    nativeRegion: 'Indian Subcontinent & Southeast Asia',
    distributionInIndia: 'Cultivated in almost every household, temple courtyards, and gardens across India.',
    primaryImage: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'Revered across India as the Queen of Herbs, Tulsi is celebrated for spiritual purity, adaptogenic immunity, and atmospheric cleansing.',
    detailedDescription: 'Tulsi is an aromatic perennial sub-shrub with square stems, purplish-green serrated leaves, and delicate purplish whorls of flowers. In Ayurvedic tradition, Tulsi is considered an elixir of life (Amrita) and has been venerated for millennia.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Herbal decoctions for respiratory comfort, cough, and cold.', 'Rich in eugenol and antioxidants that support immune health.', 'Chewing fresh leaves is traditionally taken in morning wellness routines.'],
      traditional: ['Used in Ayurvedic formulations for balancing Kapha and Vata doshas.', 'Infused into herbal teas (Kadha) with black pepper and ginger.'],
      culinary: ['Flavouring herbal teas, herbal syrups, and ceremonial sanctified offerings.'],
      agricultural: ['Natural pest repellent when companion-planted alongside vegetables.'],
      environmental: ['Releases oxygen for up to 20 hours a day and emits volatile essential oils that cleanse ambient air.'],
      cultural: ['Deeply sacred in Hindu philosophy; kept in central Vrindavan courtyards.'],
      economic: ['Widely distilled for essential oil used in natural cosmetics, aromatherapy, and pharmaceuticals.'],
      wildlife: ['Flowering spikes attract honeybees and beneficial pollinator butterflies.']
    },
    growingConditions: {
      climate: 'Warm tropical and subtropical Indian climate.',
      temperatureRange: '20°C - 35°C (sensitive to frost below 10°C).',
      sunlight: 'Full Sun',
      soilType: 'Fertile, well-draining loamy or sandy loam soil rich in organic matter.',
      soilPh: '6.0 - 7.5 (neutral to slightly acidic)',
      drainage: 'Excellent drainage is vital; roots rot easily in standing water.',
      humidity: '50% - 75% relative humidity.',
      indianRegions: ['Gujarat', 'Maharashtra', 'Uttar Pradesh', 'Kerala', 'Tamil Nadu', 'West Bengal'],
      indoorOutdoor: 'Both',
      suitableLocations: ['Sunny balconies', 'Pooja courtyards', 'Kitchen window sills', 'Terrace gardens']
    },
    plantingGuide: {
      bestSeason: 'Spring (February-March) or onset of Monsoons (June-July).',
      idealLocation: 'East or North-East facing balcony receiving 4 to 6 hours of gentle direct morning sunlight.',
      seedPreparation: 'Soak seeds in warm water for 2-4 hours before scattering on moist soil.',
      germinationTime: '7 to 14 days.',
      potOrGround: 'Grows equally well in 8-12 inch terracotta pots or open garden beds.',
      stepByStepInstructions: [
        'Mix equal parts garden soil, well-rotted vermicompost, and river sand or cocopeat.',
        'Scatter seeds lightly on top and dust with a thin 0.5 cm layer of compost.',
        'Moisten gently using a water spray bottle so seeds are not dislodged.',
        'Place in warm filtered light until cotyledons emerge, then move to direct sun.'
      ],
      recommendedSpacing: '30 cm apart in ground, or 1 plant per 10-inch container.',
      plantingDepth: '0.5 cm (seeds require light to trigger germination).',
      transplanting: 'Transplant seedlings when they develop 4-5 true leaves.',
      initialCare: 'Keep soil gently moist without waterlogging; shelter young seedlings from harsh midday summer sun.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Once daily during peak Indian summers; 2-3 times weekly in winter.',
      dripSuitability: true,
      irrigationMethod: 'Apply water directly to base soil; avoid wetting leaves in evening.',
      underwateringSigns: 'Drooping soft foliage, dry curled leaf margins, dull leaf color.',
      overwateringSigns: 'Yellowing lower leaves, blackening stem collar, fungal root rot.',
      seasonalAdjustments: 'Reduce significantly during wet monsoon months; allow top 1 inch of soil to dry.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Vermicompost', 'Diluted Jeevamrut', 'Cow dung manure', 'Steeped banana peel water'],
      frequency: 'Every 3 to 4 weeks during active growth (March to October).',
      applicationMethod: 'Gently scratch top 2 inches of soil (Gudai) and incorporate 2 handfuls of vermicompost.',
      deficiencySymptoms: 'Pale yellowish leaves indicate nitrogen deficiency; purple vein tints indicate low phosphorus.',
      precautions: 'Never use strong chemical fertilizers on Tulsi used for culinary or medicinal consumption.'
    },
    maintenance: {
      pruning: 'Pinch off the top flower spikes (Manjari) regularly to encourage bushy dense leaf branching.',
      weedControl: 'Hand-weed around root flare gently without damaging shallow fibrous roots.',
      mulching: 'Light mulch with dry leaves in hot May-June months preserves root moisture.',
      growthRate: 'Fast',
      matureHeight: '60 cm - 90 cm',
      matureSpread: '45 cm - 60 cm',
      expectedLifespan: 'Perennial (best refreshed every 2-3 years via fresh cuttings or seeds).',
      propagationMethods: ['Stem cuttings in water or soil', 'Fresh seeds collected from mature brown flower spikes'],
      floweringSeason: 'Year-round, with peak flowering in late monsoon and autumn.',
      harvesting: 'Pluck individual mature leaves in the morning after dew dries, never at night.'
    },
    problems: {
      pests: ['Aphids', 'Spider mites', 'Whiteflies', 'Leaf rollers'],
      diseases: ['Powdery mildew', 'Root rot caused by stagnant water'],
      symptoms: 'Curled leaves, white powdery residue on leaf surfaces, sticky honeydew.',
      prevention: 'Maintain good air circulation between pots; do not overcrowd.',
      organicRemedies: [
        'Spray neem seed kernel extract (NSKE 5%) or 5 ml cold-pressed neem oil with 2 drops organic liquid soap per liter of water.',
        'Spray diluted sour buttermilk (Chhachh) mixed 1:10 with water to eliminate fungal mildew.'
      ]
    },
    faqs: [
      {
        question: 'Why are my Tulsi leaves drying and dropping in winter?',
        answer: 'Cold drafts and low temperatures cause semi-dormancy in Tulsi. Protect your pot from frost, move it to a sunny covered balcony, and reduce watering.'
      },
      {
        question: 'Should I let the flower spikes (Manjari) grow?',
        answer: 'If you want maximum leaf yield, pinch off young green flower heads. Leaving them causes the plant to channel energy into seed development, making stems woody.'
      }
    ],
    relatedPlantSlugs: ['neem', 'aloe-vera', 'curry-leaf']
  },
  {
    id: 'plant-neem',
    slug: 'neem',
    commonName: 'Neem Tree (Indian Lilac)',
    scientificName: 'Azadirachta indica',
    regionalNames: {
      en: 'Neem / Indian Lilac',
      hi: 'नीम (Neem)',
      gu: 'લીમડો (Limdo)',
      mr: 'कडुनिंब (Kadunimb)'
    },
    family: 'Meliaceae',
    genus: 'Azadirachta',
    species: 'A. indica',
    category: 'Trees',
    plantType: 'Tree',
    nativeRegion: 'Indian Subcontinent',
    distributionInIndia: 'Abundant in almost every Indian state, especially Gujarat, Rajasthan, MP, UP, and South India.',
    primaryImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'Revered as the Village Pharmacy, Neem is famous for its natural antiseptic, pest-repelling, and cooling shade characteristics.',
    detailedDescription: 'Neem is a fast-growing, evergreen tree capable of reaching 15 to 20 meters. It produces dense compound leaves with serrated margins, sweet-scented white star flowers, and olive-like yellow drupes. It withstands drought, poor soil, and intense summer sun.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: 'Moderate (leaves bitter, avoid excessive pet ingestion)',
    isPopular: true,
    uses: {
      medicinal: ['Leaves and bark used in traditional skincare, tooth sticks (Datun), and purifying baths.', 'Antifungal and antibacterial compounds supported in pharmacological research.'],
      traditional: ['Boiled neem leaf water used to treat skin rashes during Indian summers.'],
      culinary: ['Tender spring shoots cooked with eggplants or fried in Bengal (Neem Begun) as spring detox.'],
      agricultural: ['Neem cake (khali) conditions soil, suppresses nematodes, and slow-releases organic nitrogen.'],
      environmental: ['Acts as an efficient carbon sink and windbreaker; tolerates urban dust pollution.'],
      cultural: ['Leaves hung on doorways during Chaitra Navratri and Gudi Padwa to signify cleansing.'],
      economic: ['Neem oil extracted for biopesticides, veterinary products, organic shampoos, and soaps.'],
      wildlife: ['Birds love neem fruit pulp and disperse seeds far and wide.']
    },
    growingConditions: {
      climate: 'Tropical to subtropical; highly drought tolerant.',
      temperatureRange: '12°C - 48°C (extremely heat tolerant).',
      sunlight: 'Full Sun',
      soilType: 'Thrives in almost all soils including stony, shallow, sandy, and clayey soils.',
      soilPh: '6.2 - 8.5 (tolerates alkaline conditions)',
      drainage: 'Requires good drainage; will not tolerate persistent waterlogging.',
      humidity: 'Low to moderate humidity.',
      indianRegions: ['Gujarat', 'Rajasthan', 'Karnataka', 'Andhra Pradesh', 'Madhya Pradesh'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Avenues', 'Backyard boundary', 'Farm windbreaks', 'Community parks']
    },
    plantingGuide: {
      bestSeason: 'June-August during monsoon showers.',
      idealLocation: 'Spacious outdoor area with uninterrupted 6+ hours of sunlight.',
      seedPreparation: 'Clean pulp from freshly fallen fruits and plant seeds within 2 weeks for highest viability.',
      germinationTime: '10 to 20 days.',
      potOrGround: 'Best planted directly in open ground (large 20-inch drum if grown as bonsai/sapling).',
      stepByStepInstructions: [
        'Dig a pit 60x60x60 cm in open ground.',
        'Mix dug-up soil with equal quantity aged cow dung manure and 1 kg neem cake.',
        'Position the sapling straight, refill soil, and firm firmly around the collar.',
        'Water deeply to settle air pockets.'
      ],
      recommendedSpacing: '5 to 8 meters between trees.',
      plantingDepth: 'Equal to nursery polybag depth.',
      transplanting: 'Transplant during cloudy monsoon weather.',
      initialCare: 'Provide tree guard protection from grazing livestock in first 2 years.'
    },
    wateringGuide: {
      requirement: 'Low',
      frequency: 'Weekly for young saplings; established trees thrive on natural rainfall alone.',
      dripSuitability: true,
      irrigationMethod: 'Deep basin irrigation once every 10-14 days in dry hot months.',
      underwateringSigns: 'Leaf drop during extreme drought (tree sheds foliage as survival tactic).',
      overwateringSigns: 'Yellowing sapling leaves, fungal damping off in seedlings.',
      seasonalAdjustments: 'No artificial irrigation required during monsoon.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Well-decomposed cow dung manure', 'Vermicompost', 'Wood ash'],
      frequency: 'Once a year prior to monsoon onset.',
      applicationMethod: 'Dig a circular ring trench around drip line and incorporate 5-10 kg manure.',
      deficiencySymptoms: 'Rarely exhibits deficiencies due to deep extensive taproot system.',
      precautions: 'Avoid nitrogenous chemical fertilizers which induce weak brittle branch growth.'
    },
    maintenance: {
      pruning: 'Prune lower branches in initial 3 years to foster a straight central trunk.',
      weedControl: 'Clear weed basin around young tree base to prevent competition.',
      mulching: 'Mulch root zone with dry neem leaves to conserve moisture.',
      growthRate: 'Moderate',
      matureHeight: '15 - 20 meters',
      matureSpread: '10 - 15 meters',
      expectedLifespan: '150 - 200 years.',
      propagationMethods: ['Fresh seed sowing', 'Root cuttings'],
      floweringSeason: 'March to May (delicate white fragrant blossoms).',
      fruitingSeason: 'June to August (yellow ripe Nimboli fruits).',
      harvesting: 'Collect fallen fruits for oil pressing; harvest mature leaves year-round.'
    },
    problems: {
      pests: ['Scale insects', 'Tea mosquito bug', 'Stem borer (rare)'],
      diseases: ['Powdery mildew in damp seedlings'],
      symptoms: 'Brownish speckling on tender leaves, sticky scale crust on twigs.',
      prevention: 'Ensure full uninhibited sun exposure and open airflow.',
      organicRemedies: ['Neem is naturally self-protecting; spray wood ash or soap emulsion if scales appear.']
    },
    faqs: [
      {
        question: 'Can I grow a Neem tree in a balcony container?',
        answer: 'You can grow a young Neem sapling in a 14-inch pot for 2-3 years for daily leaf harvesting or as a bonsai, but its deep taproot requires ground planting for full tree development.'
      },
      {
        question: 'How do I use neem leaves for natural pest control?',
        answer: 'Boil 500g of fresh neem leaves in 5 liters of water for 30 minutes, let cool, strain, and spray on garden plants to repel whiteflies, caterpillars, and aphids.'
      }
    ],
    relatedPlantSlugs: ['tulsi', 'peepal', 'banyan']
  },
  {
    id: 'plant-aloe-vera',
    slug: 'aloe-vera',
    commonName: 'Aloe Vera (Ghritkumari)',
    scientificName: 'Aloe barbadensis miller',
    regionalNames: {
      en: 'Aloe Vera',
      hi: 'घृतकुमारी / एलोवेरा (Ghritkumari)',
      gu: 'કુવારપાઠું (Kuwarpathu)',
      mr: 'कोरफड (Korphad)'
    },
    family: 'Asphodelaceae',
    genus: 'Aloe',
    species: 'A. vera',
    category: 'Medicinal Plants',
    plantType: 'Succulent',
    nativeRegion: 'Arabian Peninsula, naturalized across arid Indian regions',
    distributionInIndia: 'Cultivated extensively in Gujarat, Rajasthan, Maharashtra, and Andhra Pradesh.',
    primaryImage: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'Known as Kuwarpathu or Korphad, Aloe Vera is an invincible succulent renowned for soothing burn gel, hydration, and skin rejuvenation.',
    detailedDescription: 'Aloe vera is a stemless or very short-stemmed succulent plant with thick, fleshy, serrated leaves containing transparent mucilaginous gel. It produces yellow or orange flower spikes when mature and thrives in sun-drenched Indian patios.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: false,
    isPopular: true,
    uses: {
      medicinal: ['Fresh gel soothes minor kitchen burns, sunburns, and cuts.', 'Ayurvedic formulations use processed Ghritkumari for digestive and liver tonic.'],
      traditional: ['Hair masks with aloe gel and coconut oil promote scalp cooling and shine.'],
      culinary: ['Kuwarpathu sabzi is a prized traditional delicacy in Saurashtra and Rajasthan.'],
      agricultural: ['Aloe vera gel diluted in water serves as an organic rooting hormone and plant immunity spray.'],
      environmental: ['Releases oxygen at night through CAM (Crassulacean Acid Metabolism).'],
      cultural: ['Hung at home entrances in rural Gujarat to ward off negative energies and pests.'],
      economic: ['Major cash crop for cosmetic lotions, herbal juices, and nutraceuticals.'],
      wildlife: ['Tall yellow flower spikes provide nectar for sunbirds.']
    },
    growingConditions: {
      climate: 'Dry, arid and semi-arid warm climate.',
      temperatureRange: '18°C - 40°C.',
      sunlight: 'Full Sun',
      soilType: 'Gritty, sandy well-draining succulent mix.',
      soilPh: '6.5 - 7.5',
      drainage: 'Porous drainage is mandatory; roots rot fast in mud.',
      humidity: 'Low to moderate.',
      indianRegions: ['Gujarat', 'Rajasthan', 'Tamil Nadu', 'Haryana'],
      indoorOutdoor: 'Both',
      suitableLocations: ['Balcony parapets', 'Sunny window ledges', 'Rock gardens', 'Rooftop containers']
    },
    plantingGuide: {
      bestSeason: 'Anytime except freezing winters; March to September is ideal.',
      idealLocation: 'Sun-drenched balcony receiving 4 to 6 hours of light.',
      seedPreparation: 'Propagated almost exclusively through baby offshoots (pups).',
      germinationTime: 'Roots within 14-20 days from pups.',
      potOrGround: 'Shallow wide terracotta pots with large drainage holes.',
      stepByStepInstructions: [
        'Select a pot that is wider than it is deep.',
        'Use 40% coarse river sand, 40% garden soil, and 20% vermicompost.',
        'Separate pup from mother plant with sterile knife, let calloused for 24 hours.',
        'Insert pup into soil mix and do not water for 3 days to allow root seal.'
      ],
      recommendedSpacing: '30 cm apart in ground.',
      plantingDepth: 'Cover only white root base; keep green leaf rosette above soil.',
      transplanting: 'Repot when pups overcrowd the container.',
      initialCare: 'Avoid heavy watering until new growth shows.'
    },
    wateringGuide: {
      requirement: 'Low',
      frequency: 'Every 7-10 days in summer; every 15-20 days in winter.',
      dripSuitability: true,
      irrigationMethod: 'Soak and dry method; drench soil thoroughly then wait until bone-dry.',
      underwateringSigns: 'Thin, concave, reddish or brownish leaves with deflated gel.',
      overwateringSigns: 'Squishy, translucent, brownish mushy leaves that detach easily.',
      seasonalAdjustments: 'Withhold water during rainy monsoon weeks.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Vermicompost tea', 'Wood ash (pinch for potassium)', 'Compost'],
      frequency: 'Once every 2-3 months during spring and summer.',
      applicationMethod: 'Top-dress with 1 tablespoon of vermicompost around pot edges.',
      deficiencySymptoms: 'Stunted leaf thickness or pale yellow-green coloration.',
      precautions: 'Do not use chemical fertilizers or over-fertilize.'
    },
    maintenance: {
      pruning: 'Slice off outer oldest leaves close to the base using a clean sharp blade.',
      weedControl: 'Keep surrounding container soil free from weeds.',
      mulching: 'Gravel or pebble mulch prevents soil splash onto fleshy leaves.',
      growthRate: 'Moderate',
      matureHeight: '40 cm - 60 cm',
      matureSpread: '50 cm - 80 cm',
      expectedLifespan: 'Perennial (10+ years with continuous pup propagation).',
      propagationMethods: ['Separation of root pups/suckers'],
      floweringSeason: 'Late winter to early spring on mature plants.',
      harvesting: 'Cut the lowest outer leaves; let yellow aloin latex drain before extracting clear inner gel.'
    },
    problems: {
      pests: ['Mealybugs near leaf base', 'Aloe mite (rare)'],
      diseases: ['Basal stem rot and root rot from waterlogging'],
      symptoms: 'Soft blackened base, white cottony fluff between leaves.',
      prevention: 'Never allow water to stand inside the central leaf rosette.',
      organicRemedies: ['Dab mealybugs with rubbing alcohol swab; spray diluted neem oil once weekly.']
    },
    faqs: [
      {
        question: 'Why are my Aloe Vera leaves turning red or brown?',
        answer: 'Reddish tints are sun stress or water stress. Move the plant to filtered indirect sunlight for a week and give a thorough watering.'
      },
      {
        question: 'Is the yellow sap inside Aloe vera harmful?',
        answer: 'The yellow sap (aloin) is a natural latex that acts as a strong laxative and skin irritant. Always stand cut leaves upright in a glass of water for 15 minutes to drain this yellow sap before using the gel.'
      }
    ],
    relatedPlantSlugs: ['tulsi', 'neem', 'snake-plant']
  },
  {
    id: 'plant-money-plant',
    slug: 'money-plant',
    commonName: 'Money Plant (Golden Pothos)',
    scientificName: 'Epipremnum aureum',
    regionalNames: {
      en: 'Money Plant / Devil’s Ivy',
      hi: 'मनी प्लांट (Money Plant)',
      gu: 'મની પ્લાન્ટ (Money Plant)',
      mr: 'मनी प्लांट (Money Plant)'
    },
    family: 'Araceae',
    genus: 'Epipremnum',
    species: 'E. aureum',
    category: 'Indoor Plants',
    plantType: 'Climber',
    nativeRegion: 'Mo’orea, French Polynesia; cultivated across India',
    distributionInIndia: 'Ubiquitous in homes, offices, and apartments throughout India.',
    primaryImage: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'India’s most cherished household climber, celebrated in Vastu Shastra for welcoming prosperity, positive energy, and clean indoor air.',
    detailedDescription: 'Money Plant is an evergreen vine featuring glossy, heart-shaped green leaves marbled with creamy gold and yellow variegations. It climbs effortlessly on moss sticks or cascades beautifully from hanging baskets and water bottles.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: false,
    isPopular: true,
    uses: {
      medicinal: ['Not for internal consumption (contains calcium oxalate crystals).'],
      traditional: ['Associated with Vastu principles to harmonize energies when placed in South-East corners.'],
      culinary: ['None; strictly ornamental and air-purifying.'],
      agricultural: ['Water used for rooting money plant cuttings contains natural auxins that aid rooting of other plants.'],
      environmental: ['Removes indoor airborne toxins including formaldehyde, benzene, and xylene according to clean air studies.'],
      cultural: ['Traditionally believed to bring good fortune, financial growth, and peace to homes.'],
      economic: ['Bestselling houseplant in Indian horticultural markets and nurseries.'],
      wildlife: ['Dense outdoor foliage provides sheltering habitat for small garden birds.']
    },
    growingConditions: {
      climate: 'Warm tropical indoor or shaded outdoor environment.',
      temperatureRange: '15°C - 35°C.',
      sunlight: 'Indirect Bright Light',
      soilType: 'Lightweight potting mix of soil, cocopeat, and vermicompost (or water alone).',
      soilPh: '6.0 - 7.0',
      drainage: 'Good drainage in pots; water changed weekly in bottles.',
      humidity: '50% - 80% humidity.',
      indianRegions: ['Grown across all Indian states and cities'],
      indoorOutdoor: 'Indoor',
      suitableLocations: ['Living room corners with moss stick', 'Work desks', 'Balcony shaded grills', 'Bathroom counters with filtered light']
    },
    plantingGuide: {
      bestSeason: 'Spring or Monsoons (July-August) for fastest root growth.',
      idealLocation: 'Bright room near an east or north window with indirect daylight.',
      seedPreparation: 'Grown almost 100% via stem cuttings with nodes.',
      germinationTime: 'Roots in water or moist soil within 7 to 10 days.',
      potOrGround: 'Pots, hanging planters, glass bottles, or decorative jars.',
      stepByStepInstructions: [
        'Take a stem cutting with 3-4 leaves, making sure each cutting has at least 1-2 aerial root nodes.',
        'Place in clean water or moist potting mix containing 50% cocopeat and 50% compost.',
        'Keep in indirect bright light.',
        'If growing in water, change water every 7 days to avoid mosquito breeding.'
      ],
      recommendedSpacing: '15 cm apart if potting multiple vines.',
      plantingDepth: 'Cover node 2-3 cm deep in soil.',
      transplanting: 'Repot once roots fill the container.',
      initialCare: 'Mist leaves lightly during dry summer months.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 3-4 days in summer; weekly in winter.',
      dripSuitability: true,
      irrigationMethod: 'Water thoroughly until water drains from bottom; empty saucer.',
      underwateringSigns: 'Limp droopy leaves, yellow tips on oldest leaves.',
      overwateringSigns: 'Black stems, yellow translucent leaves, soil odor.',
      seasonalAdjustments: 'Check soil moisture before watering in winter; allow top 2 inches to dry.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Liquid vermicompost wash', 'Used tea leaf compost (thoroughly washed and dried)', 'Seaweed extract'],
      frequency: 'Once every month during warm months.',
      applicationMethod: 'Dilute liquid fertilizer 1:5 in water and spray or drench soil.',
      deficiencySymptoms: 'Smaller leaves with loss of golden variegation.',
      precautions: 'Do not over-fertilize or leave fertilizer granules touching the stem.'
    },
    maintenance: {
      pruning: 'Trim overgrown long runners to maintain bushy shape; guide main vines onto a coco-fiber moss stick.',
      weedControl: 'Not applicable for indoor potted containers.',
      mulching: 'Cocopeat layer on top keeps roots cool in May-June.',
      growthRate: 'Fast',
      matureHeight: '2 to 10 meters when climbing on moss poles outdoors.',
      matureSpread: 'Spreads flexibly along walls and supports.',
      expectedLifespan: 'Perennial (decades with easy propagation).',
      propagationMethods: ['Single node stem cuttings in water or soil'],
      floweringSeason: 'Rarely flowers in domestic indoor settings.',
      harvesting: 'Trim healthy cuttings anytime to share with friends.'
    },
    problems: {
      pests: ['Mealybugs', 'Spider mites in dry conditions'],
      diseases: ['Root rot from water stagnation'],
      symptoms: 'Sticky residue on leaves, cobwebs under leaves.',
      prevention: 'Wipe leaves with moist cloth regularly to clear dust.',
      organicRemedies: ['Wipe foliage with mild soap-neem water mixture.']
    },
    faqs: [
      {
        question: 'Can Money Plant grow in plain water without soil?',
        answer: 'Yes, Money Plant grows enthusiastically in clean water for years. Add a single drop of liquid organic biofertilizer monthly and replace the water every 7-10 days.'
      },
      {
        question: 'Why are my Money Plant leaves becoming smaller?',
        answer: 'Money Plant leaves increase in size when aerial roots attach to a moist moss stick and receive adequate bright indirect light.'
      }
    ],
    relatedPlantSlugs: ['snake-plant', 'areca-palm', 'tulsi']
  },
  {
    id: 'plant-mango',
    slug: 'mango',
    commonName: 'Mango Tree (Aam)',
    scientificName: 'Mangifera indica',
    regionalNames: {
      en: 'Mango Tree',
      hi: 'आम (Aam)',
      gu: 'કેરી / આંબો (Aambo / Keri)',
      mr: 'आंबा (Aamba)'
    },
    family: 'Anacardiaceae',
    genus: 'Mangifera',
    species: 'M. indica',
    category: 'Fruits',
    plantType: 'Tree',
    nativeRegion: 'South Asia / Indian Subcontinent',
    distributionInIndia: 'The national fruit of India, grown extensively in Gujarat (Kesar), Maharashtra (Alphonso), UP (Dasheri), AP (Banganapalli).',
    primaryImage: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The revered King of Fruits in India, celebrated for sweet golden fruits, auspicious festive leaves (Toran), and deep sacred roots.',
    detailedDescription: 'Mango is a large evergreen fruit tree reaching 10-30 meters with a dense canopy of dark green leathery leaves. In spring it erupts in fragrant pyramidal panicles of tiny blossoms that develop into prized fruits like Kesar, Alphonso, and Langra.',
    difficulty: 'Moderate',
    beginnerFriendly: false,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Tender leaves boiled in water traditionally used in herbal decoctions for metabolic balance.'],
      traditional: ['Unripe mango drink (Aam Panna) consumed during hot Loo winds in northern & western India to prevent heat stroke.'],
      culinary: ['Raw mango pickles (Achar), Chhundo, Murabba, curries, and sweet ripe fruit desserts.'],
      agricultural: ['Deep roots anchor soil and prevent erosion on orchard borders.'],
      environmental: ['Large canopy sequesters substantial carbon and provides cooling shade.'],
      cultural: ['Fresh mango leaves stringed into festive Torans on doorways for Diwali, weddings, and Gudi Padwa.'],
      economic: ['Major agricultural export driver and orchard livelihood across India.'],
      wildlife: ['Hosts cuckoos (Koel), parrots, butterflies, and honeybees.']
    },
    growingConditions: {
      climate: 'Tropical and subtropical with distinct dry season for flowering.',
      temperatureRange: '24°C - 38°C (frost sensitive).',
      sunlight: 'Full Sun',
      soilType: 'Deep, rich, well-draining alluvial or red loamy soil.',
      soilPh: '5.5 - 7.5',
      drainage: 'Deep drainage is essential; roots reach several meters deep.',
      humidity: 'Moderate; needs dry weather during flowering to set fruit.',
      indianRegions: ['Gujarat (Gir/Valsad)', 'Maharashtra (Ratnagiri)', 'Uttar Pradesh', 'Andhra Pradesh'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Orchards', 'Spacious backyards', 'Farmhouses']
    },
    plantingGuide: {
      bestSeason: 'July to September during monsoon showers.',
      idealLocation: 'Open sunny ground clear of overhead wires and structures.',
      seedPreparation: 'For true-to-type fruit quality, always plant grafted saplings (Gooti/Inarching) rather than wild seeds.',
      germinationTime: 'Grafted saplings establish in 3-4 weeks.',
      potOrGround: 'Ground planting is required (dwarf grafted varieties can live in 25-gallon drums for limited years).',
      stepByStepInstructions: [
        'Dig a 1x1x1 meter pit in summer, leave open for 15 days to sterilize in sun.',
        'Refill with 50% topsoil, 50% aged farmyard manure (FYM), 2 kg bone meal, and 1 kg neem cake.',
        'Center the grafted sapling, making sure graft union is 15 cm above ground level.',
        'Stake the stem firmly with a bamboo pole.'
      ],
      recommendedSpacing: '8 to 10 meters between trees (5x5m in high density orchards).',
      plantingDepth: 'Equal to nursery bag depth.',
      transplanting: 'Best during cloudy monsoon days.',
      initialCare: 'Irrigate immediately and protect from harsh hot summer winds with shade cloth in year 1.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 5-7 days for young trees; established trees need water during fruit swell (March-May).',
      dripSuitability: true,
      irrigationMethod: 'Ring basin method away from direct trunk contact.',
      underwateringSigns: 'Premature fruit drop, wilting foliage.',
      overwateringSigns: 'Root rot, fungal anthracnose, excessive vegetative flush instead of flowers.',
      seasonalAdjustments: 'Withhold irrigation completely in winter (Nov-Dec) to induce floral bud rest.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Well-rotted cow dung manure (Gobar)', 'Neem cake', 'Bone meal / Rock phosphate', 'Wood ash'],
      frequency: 'Twice a year: July (post-monsoon) and February (post-fruit set).',
      applicationMethod: 'Broadcast around perimeter drip circle and mix into topsoil.',
      deficiencySymptoms: 'Zinc deficiency causes small clustered leaves (little leaf disease).',
      precautions: 'Do not oversupply nitrogen during flowering or blossoms will drop.'
    },
    maintenance: {
      pruning: 'Prune dead wood, water suckers, and criss-cross branches after monsoon harvest.',
      weedControl: 'Keep tree basin weeded and clean.',
      mulching: 'Mulch heavily with dry grass or mango leaves during dry summer.',
      growthRate: 'Moderate',
      matureHeight: '10 - 25 meters',
      matureSpread: '8 - 15 meters',
      expectedLifespan: '100+ years.',
      propagationMethods: ['Wedge grafting', 'Veneer grafting', 'Epicotyl grafting'],
      floweringSeason: 'January to March.',
      fruitingSeason: 'April to July.',
      harvesting: 'Harvest mature fruits with 1 cm stem attached when fruit shoulders are rounded and green color softens.'
    },
    problems: {
      pests: ['Mango hopper', 'Fruit fly', 'Stem borer', 'Mealybug'],
      diseases: ['Powdery mildew', 'Anthracnose', 'Die-back'],
      symptoms: 'Black sooty mold on foliage, sap weeping from trunk, withered flower panicles.',
      prevention: 'Apply sticky tree grease band around trunk base in December to stop crawling mealybugs.',
      organicRemedies: ['Spray NSKE (Neem Seed Kernel Extract 5%) or 0.3% potassium soap on flower panicles before bloom.']
    },
    faqs: [
      {
        question: 'How many years does a grafted mango tree take to produce fruits?',
        answer: 'Grafted mango trees begin bearing initial fruits in 3 to 4 years, reaching full commercial yield by year 7-8.'
      },
      {
        question: 'Why do young mango fruits drop prematurely?',
        answer: 'Fruit drop in April-May is usually caused by sudden soil moisture fluctuations, hot dry winds, or inadequate pollination. Regular deep basin watering stabilizes fruit retention.'
      }
    ],
    relatedPlantSlugs: ['guava', 'lemon', 'neem']
  },
  {
    id: 'plant-guava',
    slug: 'guava',
    commonName: 'Guava (Amrood / Jamrukha)',
    scientificName: 'Psidium guajava',
    regionalNames: {
      en: 'Guava',
      hi: 'अमरूद (Amrood)',
      gu: 'જમરૂખ / જાંબફળ (Jamrukh)',
      mr: 'पेरू (Peru)'
    },
    family: 'Myrtaceae',
    genus: 'Psidium',
    species: 'P. guajava',
    category: 'Fruits',
    plantType: 'Shrub',
    nativeRegion: 'Tropical America, naturalized centuries ago in India',
    distributionInIndia: 'Cultivated extensively in Gujarat (Dholka), UP (Allahabad Safeda), Maharashtra, and MP.',
    primaryImage: 'https://images.unsplash.com/photo-1536511135899-73f1d85db8c5?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'A hardy, Vitamin-C powerhouse fruit loved across India. Thrives with minimal care and bears delicious crisp fruits twice a year.',
    detailedDescription: 'Guava is an attractive evergreen small tree or spreading shrub with distinctive peeling coppery bark, aromatic elliptical leaves, and fragrant white flowers. It yields abundant round to pear-shaped fruits with creamy white or vibrant pink flesh.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Fresh tender leaves chewed for oral ulcers, toothache, and gum health.', 'Tender leaf tea has proven antimicrobial and blood sugar stabilizing properties.'],
      traditional: ['Eaten with black salt (Kala Namak) and roasted cumin to aid digestion.'],
      culinary: ['Fresh eating, jams, jellies, juices, and spicy guava curries.'],
      agricultural: ['Hardy rootstock tolerant to poor alkaline and saline soils.'],
      environmental: ['Evergreen foliage provides persistent suburban bird shelter.'],
      cultural: ['Popular backyard fruit tree in virtually every Indian suburban bungalow.'],
      economic: ['High value winter crop with popular cultivars like Allahabad Safeda and Sardar (L-49).'],
      wildlife: ['Attracts parakeets, fruit bats, and pollinators.']
    },
    growingConditions: {
      climate: 'Tropical and subtropical; thrives across varied Indian climates.',
      temperatureRange: '15°C - 42°C (very resilient).',
      sunlight: 'Full Sun',
      soilType: 'Adaptable to almost all soils, from clay to sandy loam.',
      soilPh: '6.0 - 8.2 (tolerates mild salinity and alkalinity)',
      drainage: 'Good drainage preferred.',
      humidity: '40% - 80%.',
      indianRegions: ['Gujarat (Bhavnagar/Ahmedabad)', 'Uttar Pradesh', 'Maharashtra', 'Karnataka'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Backyard gardens', 'Terrace drums (18+ inches)', 'Fruit orchards']
    },
    plantingGuide: {
      bestSeason: 'June-August (monsoon) or February-March (spring).',
      idealLocation: 'Sun-drenched spot receiving 6+ hours of direct sunlight.',
      seedPreparation: 'Use air-layered or grafted saplings like L-49 (Lucknow 49) for rapid fruiting.',
      germinationTime: 'Air-layered plants establish within 3 weeks.',
      potOrGround: 'Thrives in ground; dwarf cultivars do great in 20-inch terracotta or plastic containers.',
      stepByStepInstructions: [
        'Dig a 60x60x60 cm pit.',
        'Blend soil with 15 kg compost, 1 kg neem cake, and 200g bone meal.',
        'Plant sapling gently without disturbing root ball.',
        'Water deeply and stake.'
      ],
      recommendedSpacing: '5 to 6 meters between plants.',
      plantingDepth: 'Equal to nursery container depth.',
      transplanting: 'Monsoon season is best.',
      initialCare: 'Provide regular moisture during the first 6 months.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Twice a week for young plants; mature trees need watering during fruit development.',
      dripSuitability: true,
      irrigationMethod: 'Basin irrigation or drip line.',
      underwateringSigns: 'Shriveled small fruits, leaf curling.',
      overwateringSigns: 'Yellowing leaves and collar fungal rot in poor drainage.',
      seasonalAdjustments: 'Bahar treatment: withhold water for 3 weeks before flowering to synchronize heavy fruit set.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Decomposed farmyard manure', 'Neem cake', 'Vermicompost', 'Wood ash for potassium'],
      frequency: 'Twice a year (June and October).',
      applicationMethod: 'Incorporate into tree basin trench and water thoroughly.',
      deficiencySymptoms: 'Bronzing of leaves indicates phosphorus/potassium deficiency in acidic soils.',
      precautions: 'Avoid excess fresh nitrogen manure close to flowering.'
    },
    maintenance: {
      pruning: 'Prune shoots after harvesting to stimulate new flowering branches (guava fruits on new growth).',
      weedControl: 'Keep root basin clear.',
      mulching: 'Mulch with straw or dry leaves.',
      growthRate: 'Fast',
      matureHeight: '3 - 7 meters',
      matureSpread: '3 - 5 meters',
      expectedLifespan: '30 - 40 years.',
      propagationMethods: ['Air-layering (Gooti)', 'Wedge grafting', 'Stem cuttings'],
      floweringSeason: 'April-May (Mrig Bahar) and September-October (Hast Bahar).',
      fruitingSeason: 'July-September (monsoon crop) and November-January (sweeter winter crop).',
      harvesting: 'Harvest when fruit skin turns from dark green to yellowish-green and emits aroma.'
    },
    problems: {
      pests: ['Fruit fly', 'Bark-eating caterpillar', 'Mealybugs'],
      diseases: ['Guava wilt (Fusarium)', 'Anthracnose'],
      symptoms: 'Sudden yellowing and wilting of branches, maggots in ripe fruit.',
      prevention: 'Bag young developing fruits with breathable paper bags to protect against fruit flies.',
      organicRemedies: ['Install pheromone fruit fly traps in tree canopy; spray neem oil for mealybugs.']
    },
    faqs: [
      {
        question: 'Which season guava fruit is sweeter: monsoon or winter?',
        answer: 'Winter guava (Ambe Bahar / Hast Bahar harvested in November-January) is distinctly sweeter, crunchier, and largely free from fruit fly pests compared to the monsoon crop.'
      },
      {
        question: 'Can I grow a Guava plant in a terrace pot?',
        answer: 'Yes! Dwarf grafted varieties like Taiwan Pink or Lucknow-49 grow and fruit happily in an 18 to 24-inch container on a sunny terrace.'
      }
    ],
    relatedPlantSlugs: ['lemon', 'mango', 'curry-leaf']
  },
  {
    id: 'plant-lemon',
    slug: 'lemon',
    commonName: 'Lemon / Lime (Kagzi Nimbu)',
    scientificName: 'Citrus aurantiifolia',
    regionalNames: {
      en: 'Kagzi Lime / Indian Lemon',
      hi: 'नींबू (Nimbu)',
      gu: 'લીંબુ (Limbu)',
      mr: 'लिंबू (Limbu)'
    },
    family: 'Rutaceae',
    genus: 'Citrus',
    species: 'C. aurantiifolia',
    category: 'Fruits',
    plantType: 'Shrub',
    nativeRegion: 'Tropical Southeast Asia and South Asia',
    distributionInIndia: 'Cultivated in Gujarat (Mehsana, Bhavnagar), Andhra Pradesh, Maharashtra, and Punjab.',
    primaryImage: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The quintessential Indian Kagzi Nimbu, essential for summer Nimbu Pani, everyday cooking, pickles, and auspicious ceremonies.',
    detailedDescription: 'Kagzi Nimbu is a thorny, bushy evergreen shrub with aromatic dark green leaves, sweet-scented white star flowers, and thin-skinned, juicy round citrus fruits. It bears fruits nearly year-round with peak flushes in summer and winter.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: 'Avoid high ingestion of citrus oils by pets',
    isPopular: true,
    uses: {
      medicinal: ['Rich in vitamin C and citric acid; aids digestion and iron absorption.', 'Warm lemon water with honey is a classic morning detox beverage.'],
      traditional: ['Auspicious Nimbu-Mirchi tied on vehicles and shops to ward off evil eye.'],
      culinary: ['Essential dressing for dals, salads, bhel, chaats, and Nimbu pickle.'],
      agricultural: ['Thorny hedge around farm boundaries deters stray cattle.'],
      environmental: ['Aromatic blossom scent cleanses backyard atmosphere.'],
      cultural: ['Used in temple pujas, Hawan ceremonies, and culinary hospitality.'],
      economic: ['Massive commercial market with strong perennial consumer demand.'],
      wildlife: ['Host plant for the striking Lime Swallowtail butterfly (Papilio demoleus).']
    },
    growingConditions: {
      climate: 'Tropical and subtropical warm climates; loves sunshine.',
      temperatureRange: '18°C - 38°C.',
      sunlight: 'Full Sun',
      soilType: 'Well-draining sandy loam or light loamy soil.',
      soilPh: '5.5 - 7.5',
      drainage: 'Good drainage is non-negotiable; roots are vulnerable to collar rot.',
      humidity: '50% - 70%.',
      indianRegions: ['Gujarat', 'Andhra Pradesh', 'Maharashtra', 'Madhya Pradesh'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Sunny terrace garden', 'Backyard orchard', 'Large 16-20 inch container']
    },
    plantingGuide: {
      bestSeason: 'Monsoon onset (June-August) or spring (February-March).',
      idealLocation: 'Location receiving at least 6 hours of unshaded direct sunlight.',
      seedPreparation: 'Choose air-layered or budded saplings of Kagzi lime for early fruiting.',
      germinationTime: 'Air-layered plants take root firmly in 2-3 weeks.',
      potOrGround: 'Grows remarkably well in 16 to 20-inch terracotta or plastic containers.',
      stepByStepInstructions: [
        'Prepare mix of 40% garden soil, 30% vermicompost, 20% river sand, and 10% neem cake.',
        'Place broken pottery pieces over drainage hole to prevent water stagnation.',
        'Plant sapling so the root collar is level with soil surface.',
        'Water deeply until water drains from the base.'
      ],
      recommendedSpacing: '4 to 5 meters in ground; 1 plant per container.',
      plantingDepth: 'Equal to nursery polybag depth.',
      transplanting: 'During cool evening hours or overcast monsoon days.',
      initialCare: 'Stake young sapling against wind swaying.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 2-3 days in summer; once a week in winter.',
      dripSuitability: true,
      irrigationMethod: 'Keep water away from direct contact with trunk collar.',
      underwateringSigns: 'Curled leaves, dropping blossoms, dry leathery fruit skin.',
      overwateringSigns: 'Yellow leaf drop, root rot, fungal gummosis oozing from stem.',
      seasonalAdjustments: 'Reduce water prior to flowering to trigger generous bloom flushes.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Vermicompost', 'Mustard cake liquid fertilizer', 'Bone meal', 'Epsom salt (magnesium)'],
      frequency: 'Every 30 to 45 days during active growth and fruiting.',
      applicationMethod: 'Dig shallow ring 6 inches from trunk, incorporate 2 handfuls compost, cover and water.',
      deficiencySymptoms: 'Yellowing leaf blade with dark green veins indicates iron/magnesium deficiency.',
      precautions: 'Do not over-apply pure nitrogen during flowering.'
    },
    maintenance: {
      pruning: 'Prune water sprouts, thorny suckers below graft union, and dead twigs.',
      weedControl: 'Weed pot or basin regularly.',
      mulching: 'Mulch with organic leaf compost in dry summer.',
      growthRate: 'Moderate',
      matureHeight: '2.5 - 4 meters',
      matureSpread: '2 - 3 meters',
      expectedLifespan: '20 - 30 years.',
      propagationMethods: ['Air-layering (Gooti)', 'T-budding', 'Seed (takes 5-6 years to fruit)'],
      floweringSeason: 'Spring (Feb-March), Monsoon (June-July), and Autumn (Sept-Oct).',
      fruitingSeason: 'Peak harvesting in summer (June-August) and winter (December-February).',
      harvesting: 'Pick when skin turns smooth and light greenish-yellow with rich juice content.'
    },
    problems: {
      pests: ['Citrus leaf miner', 'Citrus butterfly caterpillar', 'Aphids', 'Scale insects'],
      diseases: ['Citrus canker', 'Gummosis'],
      symptoms: 'Serpentine silvery trails on young leaves (leaf miner), corky raised lesions (canker).',
      prevention: 'Spray neem oil every 15 days on new leaf flushes.',
      organicRemedies: ['Hand-pick caterpillars; spray copper oxychloride or Bordeaux mixture for citrus canker.']
    },
    faqs: [
      {
        question: 'Why are flowers falling off my Lemon plant without turning into lemons?',
        answer: 'Blossom drop is commonly caused by sudden swings in watering, hot dry winds, or excess nitrogen. Maintain steady light watering and apply potassium-rich wood ash or bone meal.'
      },
      {
        question: 'What causes silvery zig-zag lines on my lemon leaves?',
        answer: 'This is Citrus Leaf Miner. The tiny larvae burrow inside young leaves. Prune severely affected tips and spray cold-pressed neem oil (5ml/L) with liquid soap early in the morning.'
      }
    ],
    relatedPlantSlugs: ['curry-leaf', 'guava', 'tulsi']
  },
  {
    id: 'plant-rose',
    slug: 'desi-rose',
    commonName: 'Desi Indian Rose (Gulab)',
    scientificName: 'Rosa damascena / Rosa indica',
    regionalNames: {
      en: 'Indian Rose / Damask Rose',
      hi: 'गुलाब (Gulab)',
      gu: 'ગુલાબ (Gulab)',
      mr: 'गुलाब (Gulab)'
    },
    family: 'Rosaceae',
    genus: 'Rosa',
    species: 'R. damascena',
    category: 'Flowers',
    plantType: 'Shrub',
    nativeRegion: 'Cultivated historically across Northern and Western India',
    distributionInIndia: 'Famous in Rajasthan (Pushkar/Haldi Ghati), Gujarat, UP (Kannauj), and Kashmir.',
    primaryImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The soul of Indian perfumes, Gulkand, and rose water (Gulab Jal), celebrated for heavenly fragrance and pink petals.',
    detailedDescription: 'Desi Rose is a thorny perennial shrub famous for its intense, intoxicating fragrance. Unlike modern scentless hybrid roses, the indigenous Desi Gulab produces delicate multi-petaled pink blossoms with unmatched essential oil concentration.',
    difficulty: 'Moderate',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Rose water is a natural eye cooler, skin toner, and anti-inflammatory compress.'],
      traditional: ['Gulkand (sun-cooked rose petal preserve with rock sugar) relieves body heat and acidity.'],
      culinary: ['Flavouring desserts like Kheer, Biryani, Lassi, Falooda, and Sherbet.'],
      agricultural: ['Companion plant that attracts pollinators to vegetable gardens.'],
      environmental: ['Natural fragrance enlivens patio gardens.'],
      cultural: ['Petals showered at Indian weddings, temples, Dargahs, and celebrations.'],
      economic: ['Kannauj Rose Attar and export of pure essential rose oil.'],
      wildlife: ['Nectar source for bees and small butterflies.']
    },
    growingConditions: {
      climate: 'Subtropical and temperate; thrives in sunny winter and spring.',
      temperatureRange: '15°C - 32°C.',
      sunlight: 'Full Sun',
      soilType: 'Rich loamy soil with abundant organic compost and good drainage.',
      soilPh: '6.0 - 6.8',
      drainage: 'Water must drain freely; roots despise sogginess.',
      humidity: '40% - 65%.',
      indianRegions: ['Rajasthan', 'Gujarat', 'Uttar Pradesh', 'Maharashtra', 'Himachal Pradesh'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Sunny balconies', 'Terrace beds', 'Courtyard borders', 'Containers (12+ inch)']
    },
    plantingGuide: {
      bestSeason: 'October-November (post-monsoon) or February (spring).',
      idealLocation: 'Open sunny spot getting 5 to 6 hours of direct morning sun.',
      seedPreparation: 'Propagated from semi-hardwood stem cuttings or root grafting.',
      germinationTime: 'Cuttings develop roots within 20 to 30 days.',
      potOrGround: 'Grows splendidly in 12-14 inch terracotta pots or garden soil.',
      stepByStepInstructions: [
        'Mix 40% garden soil, 30% decomposed cow manure/vermicompost, 20% sand, and 10% bone meal.',
        'Place cutting or root ball gently in center.',
        'Firm soil around stem and water thoroughly.',
        'Keep in semi-shade for 3 days before moving into direct sunlight.'
      ],
      recommendedSpacing: '60 cm to 90 cm between bushes.',
      plantingDepth: 'Set graft union 2-3 cm above ground level.',
      transplanting: 'Best during October-November cool evenings.',
      initialCare: 'Do not allow soil to completely dry out while establishing.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Daily during hot dry months; every 2-3 days in winter.',
      dripSuitability: true,
      irrigationMethod: 'Water the base soil; never sprinkle water on flower petals or late in evening.',
      underwateringSigns: 'Crispy leaf margins, drooping buds that fail to open.',
      overwateringSigns: 'Yellow leaves with black spot fungal disease, root rot.',
      seasonalAdjustments: 'Reduce slightly after winter pruning until fresh red shoots emerge.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Mustard cake (Sarson Khali) liquid fertilizer', 'Bone meal', 'Vermicompost', 'Banana peel tea for potassium'],
      frequency: 'Every 15-20 days during flowering season (November to March).',
      applicationMethod: 'Gently cultivate top 2 inches of soil and feed 100g compost + 1 tsp bone meal.',
      deficiencySymptoms: 'Lack of blooms, pale leaves, thin spindly growth.',
      precautions: 'Do not apply heavy fertilizers during intense 40°C+ summer heat.'
    },
    maintenance: {
      pruning: 'Annual hard pruning in October: cut back stems by 1/3 at a 45-degree angle above an outward-facing eye bud.',
      weedControl: 'Keep pot surface clean and aerated.',
      mulching: 'Mulch with spent compost to preserve soil temperature.',
      growthRate: 'Moderate',
      matureHeight: '1 - 1.8 meters',
      matureSpread: '0.8 - 1.2 meters',
      expectedLifespan: '10 - 20 years with annual pruning.',
      propagationMethods: ['Stem cuttings (pencil-thick)', 'Air-layering', 'T-budding'],
      floweringSeason: 'November to April in plains; year-round in milder hill stations.',
      harvesting: 'Pluck open fragrant flowers at sunrise when essential oil content peaks.'
    },
    problems: {
      pests: ['Aphids on tender shoots', 'Thrips', 'Red spider mites', 'Scale insects'],
      diseases: ['Black spot', 'Powdery mildew', 'Die-back'],
      symptoms: 'Curled distorted young leaves, white fungal powder, black spots on yellowing foliage.',
      prevention: 'Apply copper oxychloride paste or cow dung paste on cut pruning ends to prevent die-back.',
      organicRemedies: ['Spray neem oil with mild liquid soap once every 10 days; spray sour buttermilk for fungal control.']
    },
    faqs: [
      {
        question: 'When is the best time to prune roses in India?',
        answer: 'For the Indian plains, mid-October to early November (after monsoon finishes) is the ideal pruning time to prepare bushes for stunning winter blooms.'
      },
      {
        question: 'How to make authentic Gulkand at home?',
        answer: 'Layer clean, dry Desi Rose petals alternately with equal weight of powdered rock sugar (Mishri) in an airtight glass jar. Keep in bright sunlight for 21 days, stirring daily.'
      }
    ],
    relatedPlantSlugs: ['hibiscus', 'tulsi', 'marigold']
  },
  {
    id: 'plant-hibiscus',
    slug: 'hibiscus',
    commonName: 'Hibiscus (Gudhal / Jaswand)',
    scientificName: 'Hibiscus rosa-sinensis',
    regionalNames: {
      en: 'Hibiscus / China Rose',
      hi: 'गुड़हल (Gudhal)',
      gu: 'જાસૂદ (Jasud)',
      mr: 'जास्वंद (Jaswand)'
    },
    family: 'Malvaceae',
    genus: 'Hibiscus',
    species: 'H. rosa-sinensis',
    category: 'Flowers',
    plantType: 'Shrub',
    nativeRegion: 'Tropical Asia',
    distributionInIndia: 'Grown abundantly in all gardens, temples, and terraces throughout India.',
    primaryImage: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'Sacred red floral offering for Lord Ganesha and Goddess Kali, celebrated in Ayurveda for hair shine, conditioning, and vibrant blooms.',
    detailedDescription: 'Hibiscus is a showy evergreen flowering shrub with glossy serrated ovate leaves and dramatic trumpet-shaped blooms featuring a prominent protruding staminal column. The single red five-petaled variety is the revered classic Indian medicinal and ceremonial flower.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Petals boiled in coconut oil make famous hair tonic that strengthens roots and prevents premature greying.'],
      traditional: ['Herbal hibiscus tea (rich in anthocyanins) supports heart health and cooling.'],
      culinary: ['Dried petals brewed into tart antioxidant-rich herbal teas and syrups.'],
      agricultural: ['Flowering border that fosters beneficial predatory insects.'],
      environmental: ['Attracts urban butterflies and pollinators.'],
      cultural: ['Mandatory red flower offering for Lord Ganesha during Ganesh Chaturthi.'],
      economic: ['Vast commercial floral trade for religious ceremonies and natural cosmetics.'],
      wildlife: ['Favorite nectar flower for sunbirds and hummingbirds.']
    },
    growingConditions: {
      climate: 'Warm tropical and subtropical Indian climate.',
      temperatureRange: '18°C - 38°C.',
      sunlight: 'Full Sun',
      soilType: 'Rich, loamy, well-draining soil with plenty of organic matter.',
      soilPh: '6.0 - 6.8',
      drainage: 'Good drainage required; does not tolerate standing water.',
      humidity: '50% - 80%.',
      indianRegions: ['Grown across all states of India, notably Maharashtra, Gujarat, Kerala, Bengal'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Balconies with direct sunlight', 'Terrace gardens', 'Temple courtyards', 'Garden borders']
    },
    plantingGuide: {
      bestSeason: 'Monsoon (June-August) or Spring (February-March).',
      idealLocation: 'Unshaded location receiving at least 5 to 6 hours of full direct sunshine.',
      seedPreparation: 'Propagated from semi-hardwood stem cuttings.',
      germinationTime: 'Roots strike within 15 to 25 days from cuttings.',
      potOrGround: 'Thrives in 12-16 inch pots or garden beds.',
      stepByStepInstructions: [
        'Take a 6-inch semi-hardwood pencil-thick stem cutting.',
        'Strip bottom leaves and dip base in aloe vera gel or cinnamon powder.',
        'Insert 2 inches deep into potting mix of soil, vermicompost, and sand.',
        'Keep moist in warm dappled light until new leaf shoots emerge.'
      ],
      recommendedSpacing: '1 to 1.5 meters in open ground.',
      plantingDepth: 'Cover root ball evenly with soil.',
      transplanting: 'During monsoon or spring.',
      initialCare: 'Keep moist and shelter from strong hot winds until established.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Daily in hot summers; every 2-3 days in winter.',
      dripSuitability: true,
      irrigationMethod: 'Deep thorough watering until runoff occurs.',
      underwateringSigns: 'Drooping foliage, yellowing lower leaves, unopened bud drop.',
      overwateringSigns: 'Yellow leaves, root rot, fungal spotting on foliage.',
      seasonalAdjustments: 'Water generously during summer flowering; moderate during cold winter months.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Mustard cake liquid fertilizer (high potassium & phosphorus)', 'Steeped banana peel water', 'Vermicompost', 'Epsom salt'],
      frequency: 'Every 15-20 days during flowering season.',
      applicationMethod: 'Incorporate 2 handfuls of vermicompost + banana peel powder around soil perimeter.',
      deficiencySymptoms: 'Bud drop and yellow leaves with green veins (potassium/iron deficiency).',
      precautions: 'Hibiscus are heavy potassium feeders; avoid pure high-phosphorus fertilizers which lock out other minerals.'
    },
    maintenance: {
      pruning: 'Prune hard at the end of winter (February) to stimulate vigorous new flowering branches.',
      weedControl: 'Regular weeding around container surface.',
      mulching: 'Mulch with dried sugarcane bagasse or compost in summer.',
      growthRate: 'Fast',
      matureHeight: '1.5 - 3 meters',
      matureSpread: '1.2 - 2 meters',
      expectedLifespan: '15 - 25 years.',
      propagationMethods: ['Semi-hardwood cuttings', 'Air-layering'],
      floweringSeason: 'Nearly year-round in tropical India; peak in monsoon and summer.',
      harvesting: 'Pluck fresh flowers in morning for worship or hair oil infusion.'
    },
    problems: {
      pests: ['Mealybugs (most common)', 'Aphids', 'Whiteflies', 'Spider mites'],
      diseases: ['Leaf spot', 'Root rot'],
      symptoms: 'White sticky cotton-like clusters on leaf undersides and flower buds.',
      prevention: 'Inspect leaf axils regularly; spray water jet to dislodge early pests.',
      organicRemedies: ['Spray 5 ml cold-pressed neem oil + 2 ml liquid dish soap per liter of water once weekly.']
    },
    faqs: [
      {
        question: 'How do I eliminate stubborn white mealybugs from my Hibiscus?',
        answer: 'Dip a cotton swab in rubbing alcohol to wipe off concentrated clusters immediately, then spray thoroughly with neem oil emulsion (5ml neem oil + 2ml liquid soap/liter) every 5 days for 3 cycles.'
      },
      {
        question: 'Why are my Hibiscus buds falling off before blooming?',
        answer: 'Bud drop is caused by either mealybugs, thrips, irregular watering (dry-wet cycles), or potassium deficiency. Feed steeped banana peel water and maintain consistent soil moisture.'
      }
    ],
    relatedPlantSlugs: ['desi-rose', 'marigold', 'jasmine']
  },
  {
    id: 'plant-banyan',
    slug: 'banyan',
    commonName: 'Banyan Tree (Vad / Bargad)',
    scientificName: 'Ficus benghalensis',
    regionalNames: {
      en: 'Banyan Tree',
      hi: 'बरगद / बड़ (Bargad / Bad)',
      gu: 'વડ / વડલો (Vad / Vadlo)',
      mr: 'वड (Vad)'
    },
    family: 'Moraceae',
    genus: 'Ficus',
    species: 'F. benghalensis',
    category: 'Trees',
    plantType: 'Tree',
    nativeRegion: 'Indian Subcontinent',
    distributionInIndia: 'The National Tree of India; found across all Indian villages, highways, and sacred groves.',
    primaryImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The National Tree of India and symbol of immortality (Akshaya Vat), famous for expansive aerial prop roots and boundless shade.',
    detailedDescription: 'The Banyan tree is one of the largest canopy trees in the world. It sends down aerial roots from horizontal spreading branches that root upon reaching the ground, forming secondary supportive trunks. A single banyan tree can eventually resemble an entire forest.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: 'Latex sap can be irritating',
    isPopular: true,
    uses: {
      medicinal: ['Milky latex applied topically in folk remedies for heel cracks, joint pains, and toothache.', 'Aerial root tips (Vad-Vadva) used in traditional Ayurvedic hair tonics.'],
      traditional: ['Bark decoctions used as astringents in classical Ayurveda.'],
      culinary: ['Ripe red figs are consumed by wildlife and in tribal emergency diets.'],
      agricultural: ['Unmatched shade for resting cattle and village gatherings (Chaupal).'],
      environmental: ['Massive carbon sequestration, stabilizes soils against erosion, generates vast local cooling.'],
      cultural: ['Deeply sacred in Hinduism; worshipped during Vat Savitri Vrat by married women.'],
      economic: ['Valuable species for ecological restoration and avenue shading.'],
      wildlife: ['Keystone ecological species supporting hundreds of birds, fruit bats, insects, and squirrels.']
    },
    growingConditions: {
      climate: 'Tropical to subtropical Indian climate.',
      temperatureRange: '10°C - 45°C.',
      sunlight: 'Full Sun',
      soilType: 'Deep, fertile well-draining soil; also thrives on rocky cliffs.',
      soilPh: '6.0 - 8.0',
      drainage: 'Good drainage required in young stages.',
      humidity: '40% - 80%.',
      indianRegions: ['Pan-India'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Community parks', 'Temple grounds', 'Farm boundaries', 'Bonsai containers']
    },
    plantingGuide: {
      bestSeason: 'Monsoon (July to September).',
      idealLocation: 'Vast open spaces away from buildings (never plant near house foundations).',
      seedPreparation: 'Birds naturally distribute seeds; saplings easily found near old brick structures.',
      germinationTime: '15 to 30 days.',
      potOrGround: 'Only ground planting (or specialized shallow bonsai training dishes).',
      stepByStepInstructions: [
        'Dig a deep 1x1x1 meter pit.',
        'Blend soil with cow dung manure and vermicompost.',
        'Plant sapling firmly and water deeply.',
        'Protect from grazing cattle with tree guard.'
      ],
      recommendedSpacing: 'At least 15 to 25 meters away from building foundations.',
      plantingDepth: 'Equal to nursery bag depth.',
      transplanting: 'During monsoon.',
      initialCare: 'Water weekly in the first two summers.'
    },
    wateringGuide: {
      requirement: 'Low',
      frequency: 'Young saplings need weekly watering; mature trees are entirely self-sufficient.',
      dripSuitability: false,
      irrigationMethod: 'Basin irrigation.',
      underwateringSigns: 'Slight drooping of leathery leaves in sapling stage.',
      overwateringSigns: 'Root rot in poorly draining nursery pots.',
      seasonalAdjustments: 'Natural monsoon rains suffice once established.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Cow dung manure', 'Vermicompost', 'Leaf mold'],
      frequency: 'Once a year for young trees.',
      applicationMethod: 'Spread compost under the canopy drip line.',
      deficiencySymptoms: 'Rarely shows deficiencies in soil.',
      precautions: 'No chemical fertilizers needed.'
    },
    maintenance: {
      pruning: 'Guide aerial roots toward ground with bamboo stakes if desiring wider canopy spread.',
      weedControl: 'Clear young base.',
      mulching: 'Self-mulches with its own fallen leathery leaves.',
      growthRate: 'Fast in monsoon',
      matureHeight: '20 - 30 meters',
      matureSpread: '20 - 100+ meters',
      expectedLifespan: '200 to 500+ years.',
      propagationMethods: ['Stem cuttings', 'Air-layering', 'Seed'],
      floweringSeason: 'Figs develop inside specialized syconium year-round.',
      fruitingSeason: 'Red ripe figs appear in summer and monsoon.',
      harvesting: 'Not commercially harvested.'
    },
    problems: {
      pests: ['Fig wasps (beneficial obligate pollinators)', 'Scale insects'],
      diseases: ['Mildew in saplings'],
      symptoms: 'Sticky sap, sooty mold.',
      prevention: 'Open sunlight and natural airflow.',
      organicRemedies: ['Naturally self-protecting ecosystem.']
    },
    faqs: [
      {
        question: 'Can I keep a Banyan tree at home?',
        answer: 'You should never plant a full Banyan tree in a small home garden or near house foundations due to its immense invasive root system. However, Banyan makes one of the most stunning, long-lived indoor Bonsai specimens when trained in shallow ceramic dishes!'
      },
      {
        question: 'What is the significance of Vat Savitri worship?',
        answer: 'Vat Savitri is an ancient Indian observance where women tie sacred thread around the Banyan tree, honoring its longevity, endurance, and eternal life force based on the legend of Savitri and Satyavan.'
      }
    ],
    relatedPlantSlugs: ['peepal', 'neem', 'ashoka']
  },
  {
    id: 'plant-peepal',
    slug: 'peepal',
    commonName: 'Peepal Tree (Sacred Fig)',
    scientificName: 'Ficus religiosa',
    regionalNames: {
      en: 'Sacred Fig / Peepal',
      hi: 'पीपल (Peepal)',
      gu: 'પીપળો (Piplo)',
      mr: 'पिंपळ (Pimpal)'
    },
    family: 'Moraceae',
    genus: 'Ficus',
    species: 'F. religiosa',
    category: 'Trees',
    plantType: 'Tree',
    nativeRegion: 'Indian Subcontinent',
    distributionInIndia: 'Grown and protected across all Indian states near temples, roadsides, and village centers.',
    primaryImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The Bodhi tree under which Gautama Buddha attained enlightenment; revered for releasing oxygen around the clock and cordate fluttering leaves.',
    detailedDescription: 'Peepal is an imposing semi-evergreen tree with distinctive heart-shaped leaves ending in a prolonged drip-tip (tail). Even the gentlest breeze sets its leaves fluttering with a soothing rustling sound. It has deep religious reverence in Hinduism, Buddhism, and Jainism.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Bark decoctions used in Ayurveda for wound healing and inflammatory ailments.', 'Tender young pink leaves eaten in traditional remedies for digestive cleansing.'],
      traditional: ['Leaves used in sacred rituals, havans, and holy water sprinkling.'],
      culinary: ['Figs dried and powdered in traditional wellness concoctions.'],
      agricultural: ['Provides extensive shade; leaves used as nutritious fodder for camels and goats.'],
      environmental: ['Releases oxygen for up to 22-24 hours via CAM pathways and absorbs heavy carbon dioxide.'],
      cultural: ['Sacred tree of wisdom; harming or cutting a peepal tree is considered taboo in Indian culture.'],
      economic: ['Ecological forestry and religious horticulture.'],
      wildlife: ['Feeds hornbills, barbets, green pigeons, and butterflies.']
    },
    growingConditions: {
      climate: 'Tropical and subtropical; withstands severe summer heat.',
      temperatureRange: '10°C - 46°C.',
      sunlight: 'Full Sun',
      soilType: 'Grows in practically any soil, including brick crevices and cracks.',
      soilPh: '6.5 - 8.5',
      drainage: 'High drainage tolerance.',
      humidity: 'Wide tolerance.',
      indianRegions: ['Pan-India'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Temple precincts', 'Vast countryside open grounds', 'Bonsai containers']
    },
    plantingGuide: {
      bestSeason: 'Monsoons (July-August).',
      idealLocation: 'Open countryside or park spaces far away from building plumbing and foundations.',
      seedPreparation: 'Seedlings readily found in monsoon.',
      germinationTime: '15 to 20 days.',
      potOrGround: 'Ground planting or shallow bonsai container.',
      stepByStepInstructions: [
        'Dig a 1x1x1 meter pit in open ground.',
        'Mix with farmyard manure.',
        'Plant sapling and water thoroughly.',
        'Erect a bamboo tree guard.'
      ],
      recommendedSpacing: '15+ meters away from structures.',
      plantingDepth: 'Equal to nursery bag depth.',
      transplanting: 'During monsoon.',
      initialCare: 'Water young sapling weekly during the first dry season.'
    },
    wateringGuide: {
      requirement: 'Low',
      frequency: 'Young trees need occasional watering; mature trees thrive on natural groundwater.',
      dripSuitability: false,
      irrigationMethod: 'Deep basin.',
      underwateringSigns: 'Slight premature leaf shedding.',
      overwateringSigns: 'Very rare in ground.',
      seasonalAdjustments: 'No artificial irrigation required once established.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Cow dung manure', 'Vermicompost'],
      frequency: 'Once a year for young trees.',
      applicationMethod: 'Broadcast around drip perimeter.',
      deficiencySymptoms: 'Rare.',
      precautions: 'No synthetic fertilizers required.'
    },
    maintenance: {
      pruning: 'Minimal pruning needed.',
      weedControl: 'Clear young basin.',
      mulching: 'Fallen leaves create natural organic mulch.',
      growthRate: 'Fast',
      matureHeight: '20 - 30 meters',
      matureSpread: '15 - 25 meters',
      expectedLifespan: 'Over 1,000 years (some historical specimens are over 2,200 years old).',
      propagationMethods: ['Seed', 'Stem cuttings', 'Air-layering'],
      floweringSeason: 'Internal fig syconia.',
      fruitingSeason: 'April-June (small purple-black figs).',
      harvesting: 'Sacred leaves collected when naturally shed.'
    },
    problems: {
      pests: ['Peepal leaf webber', 'Scale insects'],
      diseases: ['Sooty mold'],
      symptoms: 'Webbing of young leaves.',
      prevention: 'Naturally vigorous and disease-resistant.',
      organicRemedies: ['Neem spray if young bonsai sapling is attacked by webbers.']
    },
    faqs: [
      {
        question: 'Does Peepal tree really produce oxygen at night?',
        answer: 'Yes! Peepal utilizes Crassulacean Acid Metabolism (CAM) photosynthesis, allowing it to uptake carbon dioxide and release oxygen during nighttime hours.'
      },
      {
        question: 'Can I train a Peepal tree as a Bonsai?',
        answer: 'Peepal is considered one of the finest, most resilient tree species in the world for Bonsai art. Its leaves naturally reduce in size with defoliation and root pruning.'
      }
    ],
    relatedPlantSlugs: ['banyan', 'neem', 'ashoka']
  },
  {
    id: 'plant-ashoka',
    slug: 'ashoka',
    commonName: 'Sita Ashoka (True Ashoka)',
    scientificName: 'Saraca asoca',
    regionalNames: {
      en: 'Sita Ashoka',
      hi: 'सीता अशोक (Sita Ashoka)',
      gu: 'સીતા અશોક (Sita Ashok)',
      mr: 'सीता अशोक (Sita Ashok)'
    },
    family: 'Fabaceae',
    genus: 'Saraca',
    species: 'S. asoca',
    category: 'Trees',
    plantType: 'Tree',
    nativeRegion: 'Indian Subcontinent (Western Ghats and Central India)',
    distributionInIndia: 'Western Ghats, Kerala, Karnataka, Maharashtra, West Bengal, and sacred temple groves.',
    primaryImage: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The legendary "sorrow-less" sacred tree of the Ramayana; produces breathtaking clusters of fiery orange-red fragrant blossoms.',
    detailedDescription: 'True Ashoka (Saraca asoca) is a medium-sized handsome evergreen tree with dark lush foliage and drooping young coppery leaves. In spring, its trunk and branches are smothered in vibrant clusters of fragrant orange-yellow flowers that turn deep scarlet.',
    difficulty: 'Moderate',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Bark is the primary ingredient in classical Ayurvedic "Ashokarishta" for feminine reproductive wellness.', 'Antioxidant and uterine tonic properties documented in herbal pharmacopoeias.'],
      traditional: ['Flowers used in Ayurvedic preparations for internal inflammation and bleeding disorders.'],
      culinary: ['Not culinary.'],
      agricultural: ['Leguminous tree that assists in soil nitrogen fixation.'],
      environmental: ['Preserves rainforest biodiversity in the Western Ghats; sacred grove indicator species.'],
      cultural: ['Deeply linked to the Ramayana as the grove (Ashoka Vatika) where Sita rested.'],
      economic: ['Medicinal bark highly sought-after in the herbal pharmaceutical industry.'],
      wildlife: ['Blossoms visited by bees, butterflies, and nectar birds.']
    },
    growingConditions: {
      climate: 'Tropical humid to warm subtropical climate.',
      temperatureRange: '18°C - 35°C (prefers shade when young).',
      sunlight: 'Partial Shade',
      soilType: 'Deep, rich, fertile loamy soil with high moisture retention.',
      soilPh: '5.5 - 7.0',
      drainage: 'Good drainage required; prefers moist forest-floor conditions.',
      humidity: '60% - 85% humidity.',
      indianRegions: ['Kerala', 'Karnataka', 'Maharashtra', 'Assam', 'Odisha'],
      indoorOutdoor: 'Outdoor',
      suitableLocations: ['Shaded courtyard corners', 'Botanical gardens', 'Temple groves', 'Farmhouse shade zones']
    },
    plantingGuide: {
      bestSeason: 'Monsoons (June to August).',
      idealLocation: 'Partially shaded area sheltered from harsh afternoon summer sun.',
      seedPreparation: 'Sow large fresh seeds within 2 weeks of harvesting from woody pods.',
      germinationTime: '20 to 35 days.',
      potOrGround: 'Best planted in ground or large wooden half-barrels.',
      stepByStepInstructions: [
        'Dig a 60x60x60 cm pit in dappled shade.',
        'Enrich with leaf mold, compost, and river sand.',
        'Plant sapling gently and water thoroughly.',
        'Mulch heavily with dry forest leaves.'
      ],
      recommendedSpacing: '4 to 6 meters between trees.',
      plantingDepth: 'Equal to root container depth.',
      transplanting: 'During cool overcast monsoon days.',
      initialCare: 'Provide continuous soil moisture and shelter from scorching winds.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 2-3 days for young plants; weekly during dry months for established trees.',
      dripSuitability: true,
      irrigationMethod: 'Basin irrigation with mulch retention.',
      underwateringSigns: 'Drooping young reddish foliage, dry leaf edges.',
      overwateringSigns: 'Fungal leaf spotting in stagnant conditions.',
      seasonalAdjustments: 'Keep root zone steadily moist throughout hot summer.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Leaf mold', 'Vermicompost', 'Neem cake', 'Well-decomposed cow dung'],
      frequency: 'Twice a year: pre-monsoon and post-monsoon.',
      applicationMethod: 'Broad ring application under tree canopy.',
      deficiencySymptoms: 'Paling leaves indicate lack of organic matter or iron in alkaline soil.',
      precautions: 'Do not use chemical fertilizers that alter soil organic microflora.'
    },
    maintenance: {
      pruning: 'Minimal; only remove dead or crossing branches.',
      weedControl: 'Hand-weed around root flare.',
      mulching: 'Heavy leaf mold mulch maintains forest soil ecology.',
      growthRate: 'Slow to Moderate',
      matureHeight: '6 - 10 meters',
      matureSpread: '4 - 6 meters',
      expectedLifespan: '80 - 120 years.',
      propagationMethods: ['Fresh seed germination', 'Air-layering'],
      floweringSeason: 'February to April.',
      fruitingSeason: 'July to September (large woody flat pods).',
      harvesting: 'Sustainable bark harvesting only from mature cultivated trees.'
    },
    problems: {
      pests: ['Caterpillars on tender leaves', 'Scale insects'],
      diseases: ['Leaf blight in excessive dampness'],
      symptoms: 'Chewed tender young leaves.',
      prevention: 'Maintain good airflow and balanced morning sun.',
      organicRemedies: ['Spray neem oil emulsion (5ml/L) on tender shoots.']
    },
    faqs: [
      {
        question: 'What is the difference between True Ashoka and False Ashoka?',
        answer: 'True Ashoka (Saraca asoca) is a spreading tree with gorgeous fiery orange flower clusters and high medicinal value. The common tall, pencil-straight mast tree planted along avenue fences is Polyalthia longifolia (False Ashoka), which is purely ornamental and does not bear orange flowers.'
      },
      {
        question: 'Can True Ashoka be grown in a home garden?',
        answer: 'Yes! Because it reaches a manageable height of 6-8 meters and loves partial shade, it is one of the most beautiful native flowering shade trees for Indian home gardens.'
      }
    ],
    relatedPlantSlugs: ['neem', 'peepal', 'banyan']
  },
  {
    id: 'plant-curry-leaf',
    slug: 'curry-leaf',
    commonName: 'Curry Leaf (Kadi Patta / Meetha Neem)',
    scientificName: 'Murraya koenigii',
    regionalNames: {
      en: 'Curry Leaf Plant',
      hi: 'कढ़ी पत्ता / मीठा नीम (Kadi Patta)',
      gu: 'મીઠો લીમડો (Mitho Limdo)',
      mr: 'कढीपत्ता (Kadhapatta)'
    },
    family: 'Rutaceae',
    genus: 'Murraya',
    species: 'M. koenigii',
    category: 'Herbs',
    plantType: 'Shrub',
    nativeRegion: 'Indian Subcontinent',
    distributionInIndia: 'Cultivated in almost every South Indian and West Indian kitchen garden.',
    primaryImage: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80'
    ],
    shortIntro: 'The soul of Indian tadka, essential for sambar, poha, kadhi, and chutneys; prized for promoting glossy hair and digestive health.',
    detailedDescription: 'Curry leaf is a small tropical evergreen shrub with pinnate compound leaves carrying an unmistakable warm nutty aroma. In Indian cuisine, crackling fresh curry leaves in hot ghee or mustard oil releases volatile essential oils that define everyday culinary magic.',
    difficulty: 'Easy',
    beginnerFriendly: true,
    petSafe: true,
    isPopular: true,
    uses: {
      medicinal: ['Packed with iron, folic acid, and carbazole alkaloids that strengthen hair roots.', 'Chewing raw leaves on an empty stomach helps regulate blood sugar.'],
      traditional: ['Boiled in coconut oil to create hair darkening and anti-dandruff oil.'],
      culinary: ['Indispensable tadka seasoning in dals, kadhi, rasam, upma, and curries.'],
      agricultural: ['Natural pest deterrent for nearby sensitive vegetable crops.'],
      environmental: ['Aromatic leaves keep insect pests away from patios.'],
      cultural: ['A cherished staple in every Indian household kitchen garden.'],
      economic: ['Vast daily market consumption across all Indian vegetable mandis.'],
      wildlife: ['Host plant for Common Mormon butterfly caterpillars.']
    },
    growingConditions: {
      climate: 'Warm tropical to subtropical; sensitive to freezing frost.',
      temperatureRange: '18°C - 38°C.',
      sunlight: 'Full Sun',
      soilType: 'Fertile, well-draining loamy or red soil rich in organic matter.',
      soilPh: '6.0 - 7.0',
      drainage: 'Porous drainage is vital; roots rot in waterlogged pots.',
      humidity: '50% - 75%.',
      indianRegions: ['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka'],
      indoorOutdoor: 'Both',
      suitableLocations: ['Sunny kitchen balconies', 'Terrace containers', 'Backyard kitchen garden']
    },
    plantingGuide: {
      bestSeason: 'Monsoons (July-August) or Spring (February-March).',
      idealLocation: 'Location receiving 4 to 6 hours of bright direct sunlight.',
      seedPreparation: 'Sow fresh black ripe berries immediately (seeds lose viability fast).',
      germinationTime: '14 to 21 days from fresh seeds, or via root suckers.',
      potOrGround: 'Grows great in 12-16 inch pots or in garden ground.',
      stepByStepInstructions: [
        'Mix equal parts garden soil, vermicompost, and river sand with a handful of neem cake.',
        'Plant root sucker or nursery sapling firmly.',
        'Water thoroughly and keep in filtered light for 3 days.',
        'Gradually transition to full sun.'
      ],
      recommendedSpacing: '1 to 1.5 meters in ground.',
      plantingDepth: 'Equal to nursery container depth.',
      transplanting: 'Monsoon season.',
      initialCare: 'Do not over-harvest leaves from young plants in the first 6 months.'
    },
    wateringGuide: {
      requirement: 'Moderate',
      frequency: 'Every 2 days in summer; twice a week in winter.',
      dripSuitability: true,
      irrigationMethod: 'Water base soil when top inch feels dry.',
      underwateringSigns: 'Drooping, brittle, pale leaves.',
      overwateringSigns: 'Yellowing leaves and blackening stem base.',
      seasonalAdjustments: 'Reduce significantly during cold winter months when plant enters semi-dormancy.'
    },
    fertilizerGuide: {
      recommendedOrganic: ['Sour buttermilk (Chhachh) diluted 1:10 with water', 'Mustard cake liquid fertilizer', 'Vermicompost', 'Epsom salt (1 tsp in water)'],
      frequency: 'Every 15-20 days during spring and summer.',
      applicationMethod: 'Drench root zone with diluted sour buttermilk once a month for lush green aroma.',
      deficiencySymptoms: 'Yellowing leaves with green veins indicates iron or magnesium deficiency.',
      precautions: 'Avoid fresh chemical nitrogen which ruins the authentic aroma of the leaves.'
    },
    maintenance: {
      pruning: 'Regularly pinch off top tips to prevent single tall woody stems and encourage bushy multiple side shoots.',
      weedControl: 'Keep container weed-free.',
      mulching: 'Mulch with spent dried leaves in summer.',
      growthRate: 'Moderate',
      matureHeight: '2 - 4 meters',
      matureSpread: '1.5 - 2.5 meters',
      expectedLifespan: '20+ years.',
      propagationMethods: ['Root suckers', 'Fresh seed sowing', 'Semi-hardwood cuttings in monsoon'],
      floweringSeason: 'Spring (clusters of small white fragrant flowers).',
      fruitingSeason: 'Summer (shiny black berries).',
      harvesting: 'Harvest whole leaf stems (petioles) rather than plucking individual leaflets.'
    },
    problems: {
      pests: ['Aphids', 'Scale insects', 'Caterpillars (Common Mormon)', 'Mealybugs'],
      diseases: ['Leaf spot in high humidity'],
      symptoms: 'Curled distorted leaves, sticky sap residue, chewed leaflets.',
      prevention: 'Ensure generous airflow and direct sunlight.',
      organicRemedies: ['Spray cold-pressed neem oil (5ml/L) with soap solution; spray diluted sour buttermilk.']
    },
    faqs: [
      {
        question: 'Why is sour buttermilk (Chhachh) so beneficial for Kadi Patta?',
        answer: 'Sour buttermilk provides beneficial lactic acid bacteria, mild acidity, and nitrogen that Curry Leaf plants adore, resulting in thicker, darker green, highly aromatic foliage.'
      },
      {
        question: 'How do I make my Curry Leaf plant bushy instead of a single tall stick?',
        answer: 'Pinch or prune off the top 2-3 inches of the central stem in early spring. This triggers dormant side buds along the stem to burst into 4 to 6 vigorous bushy branches.'
      }
    ],
    relatedPlantSlugs: ['lemon', 'tulsi', 'neem']
  }
];
