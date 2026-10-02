import { Fertilizer } from '../types';

export const FERTILIZERS: Fertilizer[] = [
  {
    id: 'fert-vermicompost',
    slug: 'vermicompost',
    name: 'Vermicompost (Earthworm Castings)',
    localNames: {
      en: 'Vermicompost / Earthworm Castings',
      hi: 'केंचुआ खाद / वर्मीकम्पोस्ट (Kenchua Khaad)',
      gu: 'અળસિયાનું ખાતર (Alasiya nu Khaatar)',
      mr: 'गांडूळ खत (Gandul Khat)'
    },
    category: 'Compost',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23995?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Known as "Black Gold", vermicompost is odorless organic humus created by red earthworms (Eisenia fetida), packed with microbes and slow-release nutrients.',
    detailedIntro: 'Vermicompost is the nutrient-rich, biologically active organic matter resulting from the breakdown of organic waste by specialized earthworms. It improves soil aeration, water retention, and supplies balanced N-P-K along with enzymes and plant growth hormones.',
    mainBenefits: [
      'Increases soil water holding capacity by up to 40%.',
      'Provides balanced slow-release Nitrogen, Phosphorus, Potassium, and micronutrients.',
      'Contains beneficial mycorrhizal fungi and bacteria that protect roots from soil-borne pathogens.',
      '100% odorless, non-toxic, and impossible to burn plant roots.'
    ],
    ingredients: [
      { name: 'Decomposed cow dung / Farmyard manure', quantity: '70%', purpose: 'Primary food source for earthworms' },
      { name: 'Dry shredded leaves or paddy straw', quantity: '20%', purpose: 'Carbon bedding and aeration' },
      { name: 'Red earthworms (Eisenia fetida / Eudrilus eugeniae)', quantity: '1 kg per 100 kg waste', purpose: 'Bio-digestion agents' },
      { name: 'Water', quantity: 'As needed to maintain 60% moisture', purpose: 'Hydration for worm breathing' }
    ],
    preparation: {
      prepTime: '2 hours setup',
      fermentationTime: '45 to 60 days',
      toolsRequired: ['Shaded vermi-bed or plastic composting bin with lid and bottom tap', 'Watering can with fine rose', 'Shade net (50%)', 'Hand trowel'],
      steps: [
        'Step 1: Set up a bin or pit (3x2x2 feet) in a shaded, cool spot away from direct rain and sunlight.',
        'Step 2: Spread a 4-inch bottom bedding layer of moist chopped coconut coir, dry leaves, and straw.',
        'Step 3: Add a 6-inch layer of semi-decomposed cow dung (aged 15-20 days so initial heat has dissipated).',
        'Step 4: Release red wriggler worms gently onto the bedding layer; they will bury themselves downward within 15 minutes.',
        'Step 5: Top with chopped kitchen vegetable peels and fruit scraps (avoid citrus, onions, and oil).',
        'Step 6: Cover with a damp jute gunny bag and sprinkle water daily to maintain 60% moisture (like a damp wrung-out sponge).',
        'Step 7: In 50 days, the top 6 inches will transform into dark brown tea-grain-like odorless castings.',
        'Step 8: Stop watering for 3 days before harvesting; worms move to bottom, allowing easy collection of top castings.'
      ],
      mixingInstructions: 'Gently turn the upper layers once every 15 days to enhance air aeration without crushing worms.',
      storageInstructions: 'Store in breathable gunny bags in a cool shaded room with 20% moisture; never seal in airtight plastic.',
      signsOfSuccess: 'Earthy forest scent, fine granular tea-powder texture, dark chocolate brown color, zero visible uncomposted matter.',
      commonMistakes: [
        'Adding fresh hot cow dung which suffocates worms due to ammonia heat.',
        'Overwatering resulting in muddy anaerobic sludge.',
        'Adding citrus peels, garlic, onion peels, or spicy oily foods.'
      ],
      safetyPrecautions: [
        'Protect vermi-bed from red ants and rats by creating a water moat around legs.',
        'Wear garden gloves when sieving castings.'
      ],
      estimatedCost: '₹300 - ₹500 for initial setup and earthworms.'
    },
    application: {
      suitablePlants: ['All indoor plants', 'Vegetables (Tomatoes, Chilis, Brinjal)', 'Flowering roses, Hibiscus', 'Fruit trees', 'Lawn turf'],
      avoidPlants: ['None; completely safe for all plants including sensitive orchids and succulents.'],
      recommendedQuantity: 'Pots: 100g to 200g (2 handfuls) per 10-inch pot; Fruit trees: 5 to 10 kg per tree.',
      dilutionRatio: 'For Vermiwash liquid: 1 part vermiwash to 5 parts water as a foliar spray.',
      applicationFrequency: 'Every 20 to 30 days during active growing seasons.',
      bestTime: 'Early morning or late evening hours.',
      soilApplication: 'Loosen top 2 inches of soil (Gudai), sprinkle vermicompost evenly around drip line, mix in, and water gently.',
      foliarSpray: 'Steep 500g vermicompost in 5L water overnight with a spoon of jaggery; strain through muslin cloth and spray on foliage.'
    },
    nutritionalContribution: {
      nitrogen: '1.5% - 2.5%',
      phosphorus: '1.2% - 1.8%',
      potassium: '1.0% - 1.5%',
      micronutrients: 'Rich in bio-available Zinc, Iron, Manganese, Copper, Magnesium, and humic acid.',
      microbialActivity: 'Dense populations of beneficial Actinomycetes, Azotobacter, and Bacillus subtilis.'
    },
    soilBenefits: [
      'Restores beneficial microbial flora to depleted garden soil.',
      'Loosens heavy clay soil and enhances water retention in sandy soil.',
      'Regulates soil pH toward optimal neutral levels.'
    ],
    shelfLife: '12 months when stored moist in cool shaded bags.',
    faqs: [
      {
        question: 'Can vermicompost burn the roots of my plants if I add too much?',
        answer: 'No! Unlike raw chemical fertilizers or hot fresh manures, vermicompost is completely cold, biological, and non-caustic. Even if you plant directly into 100% vermicompost, roots will not burn.'
      },
      {
        question: 'How do I know my vermicompost is pure without soil filler?',
        answer: 'Pure vermicompost is lightweight, spongy, looks like fine black tea grains, feels cool to the touch, and smells like fresh monsoon forest soil when moistened.'
      }
    ],
    relatedFertilizerSlugs: ['cow-dung-manure', 'jeevamrut', 'kitchen-waste-compost'],
    isPopular: true
  },
  {
    id: 'fert-cow-dung-manure',
    slug: 'cow-dung-manure',
    name: 'Cow Dung Manure (Gobar Khad)',
    localNames: {
      en: 'Aged Farmyard Manure / Cow Dung Manure',
      hi: 'गोबर की खाद (Gobar ki Khaad)',
      gu: 'છાણિયું ખાતર (Chhaniu Khaatar)',
      mr: 'शेणखत (Shenkhat)'
    },
    category: 'Animal-based',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The bedrock of traditional Indian agriculture; well-decomposed aged cow manure rich in carbon, beneficial microflora, and long-term soil structure builders.',
    detailedIntro: 'Cow Dung Manure (Gobar Khad) from indigenous Indian Desi cows is considered the golden organic amendment for Indian soil. When properly composted for 6 months, it breaks down into a crumbly dark brown organic loam that dramatically boosts microbial activity and root vigor.',
    mainBenefits: [
      'Dramatically improves soil tilth, porosity, and moisture retention.',
      'Supplies steady, long-lasting baseline nutrition for trees and vegetables.',
      'Encourages native earthworm multiplication in garden soil.',
      'Buffers soil against salinity and extreme Indian summer temperatures.'
    ],
    ingredients: [
      { name: 'Fresh indigenous cow dung (Desi Cow Gobar)', quantity: '100 kg', purpose: 'Organic nitrogen and microbial culture' },
      { name: 'Dry cow urine (Gomutra) and stable straw bedding', quantity: '30 kg', purpose: 'Nitrogen enhancement and carbon balance' },
      { name: 'Water', quantity: 'Periodic sprinkling', purpose: 'Thermophilic composting moisture' }
    ],
    preparation: {
      prepTime: '30 minutes stacking',
      fermentationTime: '90 to 120 days',
      toolsRequired: ['Compost pit or shaded open ground heap', 'Garden pitchfork', 'Tarpaulin cover'],
      steps: [
        'Step 1: Dig a shallow pit (4x4x3 feet) or pile manure in a raised heap under tree shade.',
        'Step 2: Layer fresh cow dung alternately with dry straw, leaves, or cow shed sweeping bedding (C:N ratio 30:1).',
        'Step 3: Moisten the pile until damp but not dripping wet.',
        'Step 4: The pile will naturally heat up to 55°C-65°C within 10 days, killing weed seeds and harmful pathogens.',
        'Step 5: Turn the entire pile every 20 days with a pitchfork to introduce oxygen.',
        'Step 6: After 3 to 4 months, the internal heat drops, the manure turns powdery dark brown, and smells like forest earth.'
      ],
      mixingInstructions: 'Turn pile completely 3 to 4 times during the composting cycle.',
      storageInstructions: 'Store in dry heaps protected from rain leaching; cover with tarpaulin.',
      signsOfSuccess: 'Completely cooled pile, crumbly texture, dark brown/black appearance, zero pungent smell.',
      commonMistakes: [
        'Using fresh, raw, green cow dung on potted plants (which produces lethal root burn, heat, and fungal gnats).',
        'Letting monsoon rains wash away rich soluble nutrients from uncovered manure heaps.'
      ],
      safetyPrecautions: [
        'Never use uncomposted fresh manure directly on edible leafy vegetables.',
        'Wear gloves and wash hands after handling.'
      ],
      estimatedCost: '₹100 - ₹200 per 50 kg bag from local dairy/Gaushala.'
    },
    application: {
      suitablePlants: ['Fruit trees (Mango, Guava, Lemon, Amla)', 'Outdoor shade trees', 'Vegetable garden preparation', 'Terrace garden base potting soil'],
      avoidPlants: ['Succulents and cacti that demand sandy low-organic soil.'],
      recommendedQuantity: 'Potting mix: 20-30% of total soil volume; Fruit trees: 10 to 20 kg per tree annually.',
      dilutionRatio: 'Not applicable for solid manure; for liquid slurry mix 1 kg in 10L water.',
      applicationFrequency: 'Twice a year: pre-monsoon (June) and early spring (February).',
      bestTime: 'Late afternoon.',
      soilApplication: 'Mix into the soil during initial potting, or dig a ring trench 1 foot from tree trunks and backfill.',
      foliarSpray: 'Not recommended for solid cow dung.'
    },
    nutritionalContribution: {
      nitrogen: '0.6% - 1.2%',
      phosphorus: '0.4% - 0.8%',
      potassium: '0.5% - 1.0%',
      micronutrients: 'Calcium, Magnesium, Sulfur, Iron, and natural humic compounds.',
      microbialActivity: 'Contains billions of beneficial anaerobic and aerobic cellulolytic bacteria.'
    },
    soilBenefits: [
      'Transforms hard compacted clay soil into loose workable loam.',
      'Acts as a carbon sponge that retains moisture through scorching May heatwaves.',
      'Feeds native soil organisms and beneficial mycorrhizae.'
    ],
    shelfLife: 'Up to 2 years if kept sheltered from torrential rains.',
    faqs: [
      {
        question: 'Can I put fresh cow dung directly around my Rose or Lemon plant?',
        answer: 'NEVER! Fresh cow dung produces high ammonia gas and fermentative heat (up to 65°C) that will scorch feeder roots and attract white grubs. Always use fully decomposed aged manure (minimum 3-4 months old).'
      }
    ],
    relatedFertilizerSlugs: ['vermicompost', 'jeevamrut', 'panchagavya'],
    isPopular: true
  },
  {
    id: 'fert-jeevamrut',
    slug: 'jeevamrut',
    name: 'Jeevamrut (Fermented Bio-Culture)',
    localNames: {
      en: 'Jeevamrut / Liquid Bio-Fertilizer',
      hi: 'जीवामृत (Jeevamrut)',
      gu: 'જીવામૃત (Jeevamrut)',
      mr: 'जीवामृत (Jeevamrut)'
    },
    category: 'Traditional Indian',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The miraculous fermented microbial inoculant formulated by Subhash Palekar for Zero Budget Natural Farming (ZBNF), multiplying billions of beneficial soil microbes in 48 hours.',
    detailedIntro: 'Jeevamrut is not merely a fertilizer—it is a potent living biological culture. Made from indigenous Desi cow dung, cow urine, organic jaggery, gram flour (besan), and a handful of fertile virgin soil, it triggers exponential microbial multiplication that unlocks locked soil minerals.',
    mainBenefits: [
      'Multiplies beneficial aerobic bacteria, fungi, and actinomycetes into billions per milliliter.',
      'Releases unavailable fixed phosphorus and potassium from soil particles.',
      'Stimulates dormant earthworms to resurface and aerate subsoil.',
      'Enhances natural plant immunity against fungal and bacterial blights.'
    ],
    ingredients: [
      { name: 'Fresh Desi Cow Dung (Gobar)', quantity: '10 kg (or 1 kg for home batch)', purpose: 'Source of beneficial microbial inoculant' },
      { name: 'Desi Cow Urine (Gomutra)', quantity: '5 to 10 liters (or 500 ml for home batch)', purpose: 'Nitrogen, urea, and antimicrobial culture medium' },
      { name: 'Organic Jaggery (Gur / Gor)', quantity: '2 kg (or 200g for home batch)', purpose: 'Carbohydrate energy source for rapid bacterial multiplication' },
      { name: 'Gram Flour (Besan / Chickpea flour)', quantity: '2 kg (or 200g for home batch)', purpose: 'Protein food source for multiplying fungi and actinomycetes' },
      { name: 'Fertile virgin soil from under a Banyan/Peepal tree or farm bund', quantity: 'A handful (100g)', purpose: 'Mother culture of diverse native microorganisms' },
      { name: 'Chlorine-free water', quantity: '200 liters (or 20 liters for home batch)', purpose: 'Liquid medium' }
    ],
    preparation: {
      prepTime: '20 minutes',
      fermentationTime: '48 to 72 hours (ready in 2-3 days)',
      toolsRequired: ['200L plastic drum (or 20L plastic bucket for home terrace gardens)', 'Wooden stirring stick', 'Breathable cotton cloth or gunny sack cover'],
      steps: [
        'Step 1: Fill a 200L plastic drum with 180 liters of chlorine-free borewell or rainwater (let tap water sit for 24 hours to dissipate chlorine).',
        'Step 2: Add 10 kg fresh cow dung and 10 liters cow urine into the drum.',
        'Step 3: In a separate bucket, dissolve 2 kg jaggery and 2 kg chickpea flour (besan) in 10 liters of water without lumps.',
        'Step 4: Pour the jaggery-besan mixture into the main drum.',
        'Step 5: Add a handful of live fertile soil collected from beneath a Banyan or Peepal tree.',
        'Step 6: Stir vigorously with a wooden pole in a clockwise direction for 2 to 3 minutes.',
        'Step 7: Cover the drum with a damp cotton cloth or gunny sack and keep in cool deep shade (never direct sun).',
        'Step 8: Stir clockwise for 2 minutes twice a day (morning and evening) to incorporate oxygen.',
        'Step 9: Within 48 to 72 hours, white frothy bubbles will form and emit a mild fermented sweet-sour alcoholic smell, signaling ready state.'
      ],
      mixingInstructions: 'Stir clockwise for 2 minutes in the morning and 2 minutes in the evening.',
      storageInstructions: 'Best used within 7 to 10 days of preparation; microbial count peaks on Day 3-5.',
      signsOfSuccess: 'Gentle bubbling fermentation on surface, pleasant earthy ferment odor (like fermented toddy/dosa batter).',
      commonMistakes: [
        'Using chemical jaggery (whitish sugar-treated jaggery contains sulfur which kills bacteria; use dark brown organic gur).',
        'Using jersey/foreign crossbred cow dung instead of indigenous Desi Bos indicus cow dung.',
        'Stirring in both clockwise and anti-clockwise directions (clockwise maintains vortex magnetic orientation).'
      ],
      safetyPrecautions: [
        'Never seal the container with an airtight lid; fermentation releases carbon dioxide and needs breathable cloth.',
        'Keep protected from rainwater intrusion.'
      ],
      estimatedCost: '₹50 - ₹100 for a 200-liter batch.'
    },
    application: {
      suitablePlants: ['All crops: Vegetables, Fruit trees, Sugarcane, Wheat, Cotton, Terrace plants, Flowering plants'],
      avoidPlants: ['None; beneficial for all plant life.'],
      recommendedQuantity: '200 liters per acre through flood/drip irrigation; for potted plants: 1 glass (200ml) per 10-12 inch pot.',
      dilutionRatio: 'Dilute 1 part Jeevamrut with 5 to 10 parts plain water before watering potted plants.',
      applicationFrequency: 'Once every 15 to 20 days.',
      bestTime: 'Evenings after sunset or early morning hours.',
      soilApplication: 'Drench moist root zone soil directly.',
      foliarSpray: 'Filter through double-folded fine cotton cloth and spray diluted 1:10 on foliage as a biostimulant.'
    },
    nutritionalContribution: {
      nitrogen: 'Trace mineral form (primary value is microbial, not chemical bulk)',
      phosphorus: 'Bio-solubilized by active Bacillus species',
      potassium: 'Bio-available through bacterial metabolic secretions',
      micronutrients: 'Abundant chelated micro-elements and natural amino acids.',
      microbialActivity: 'Exceeds 10^9 CFU (Colony Forming Units) per ml of beneficial bacteria.'
    },
    soilBenefits: [
      'Converts chemically dead soils into living organic ecosystems within months.',
      'Activates deep subsoil native earthworms without external release.',
      'Creates rich microbial humus that retains maximum monsoon moisture.'
    ],
    shelfLife: '7 to 10 days (use fresh for maximum live microbial count).',
    faqs: [
      {
        question: 'Why is soil from under a Banyan tree specifically added to Jeevamrut?',
        answer: 'The soil beneath ancient Banyan or Peepal trees has never experienced synthetic chemicals, plowing, or compaction, harboring millions of ancient native bacterial and fungal spores that act as the perfect starter culture.'
      },
      {
        question: 'Can I use Jeevamrut through drip irrigation pipes?',
        answer: 'Yes! Strain Jeevamrut thoroughly through a fine muslin cloth twice to eliminate coarse fibers before feeding into drip venturi injectors.'
      }
    ],
    relatedFertilizerSlugs: ['beejamrut', 'panchagavya', 'vermicompost'],
    isPopular: true
  },
  {
    id: 'fert-beejamrut',
    slug: 'beejamrut',
    name: 'Beejamrut (Organic Seed Inoculant)',
    localNames: {
      en: 'Beejamrut / Seed Treatment Concoction',
      hi: 'बीजामृत (Beejamrut)',
      gu: 'બીજામૃત (Beejamrut)',
      mr: 'बीजामृत (Beejamrut)'
    },
    category: 'Traditional Indian',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23995?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Traditional biological seed treatment formulation that protects seeds from fungal damping-off, stimulates rapid germination, and coats young roots with beneficial bacteria.',
    detailedIntro: 'Beejamrut is an ancient Vedic seed priming solution made from Desi cow dung, cow urine, slaked lime (chuna), and virgin soil. Soaking or coating seeds and seedling roots with Beejamrut establishes a biological shield against seed-borne and soil-borne fungal diseases like Fusarium and Rhizoctonia.',
    mainBenefits: [
      'Increases germination percentage by up to 30%.',
      'Provides organic protection against damping-off, seed rot, and collar rot.',
      'Coats emerging radicle with nitrogen-fixing and phosphorus-solubilizing microbes.',
      'Completely replaces poisonous synthetic chemical seed treatment fungicides.'
    ],
    ingredients: [
      { name: 'Fresh Desi Cow Dung (Gobar)', quantity: '5 kg (in a cloth bundle)', purpose: 'Microbial bio-coating' },
      { name: 'Desi Cow Urine (Gomutra)', quantity: '5 liters', purpose: 'Antifungal and antimicrobial agent' },
      { name: 'Slaked Lime (Paan Chuna / Calcium hydroxide)', quantity: '50 grams', purpose: 'Calcium source and pH stabilizer' },
      { name: 'Virgin soil from farm bund or tree base', quantity: 'A handful (50g)', purpose: 'Inoculant of native beneficial bacteria' },
      { name: 'Water', quantity: '20 liters', purpose: 'Liquid solvent' }
    ],
    preparation: {
      prepTime: '15 minutes',
      fermentationTime: '12 to 24 hours (overnight)',
      toolsRequired: ['Plastic drum or bucket', 'Porous cotton cloth / rope', 'Stirring stick'],
      steps: [
        'Step 1: Place 5 kg fresh cow dung in a porous cotton cloth and tie it into a tight bundle.',
        'Step 2: Suspend this bundle into a bucket containing 20 liters of water overnight (12 hours) so dung extracts leach into water.',
        'Step 3: Dissolve 50g slaked lime (chuna) in 1 liter of water in a small bowl overnight.',
        'Step 4: Next morning, squeeze the cow dung bundle repeatedly into the water to extract all soluble microbial extracts, then discard fibrous residue.',
        'Step 5: Add 5 liters of cow urine and a handful of live fertile soil into the drum.',
        'Step 6: Pour the lime water into the mixture and stir thoroughly in clockwise motion.',
        'Step 7: Let sit for 2 hours before application.'
      ],
      mixingInstructions: 'Stir well before treating seeds.',
      storageInstructions: 'Use fresh within 24 to 48 hours of preparation.',
      signsOfSuccess: 'Light yellowish-green liquid with pleasant pungent herbal aroma.',
      commonMistakes: [
        'Using hot unslaked lime (quicklime) instead of slaked lime (chuna).',
        'Drying treated seeds under direct scorching sunlight (always dry in open shade).'
      ],
      safetyPrecautions: ['Handle with clean hands or gloves.'],
      estimatedCost: '₹20 - ₹30.'
    },
    application: {
      suitablePlants: ['Seeds of all crops (Wheat, Paddy, Cotton, Tomatoes, Chilis, Okra, Cucumbers)', 'Seedling roots before transplanting', 'Sugarcane setts', 'Potato tubers', 'Cuttings of Rose and Hibiscus'],
      avoidPlants: ['None; beneficial for all seeds.'],
      recommendedQuantity: 'Dip seeds for 5 to 10 minutes, spread on clean cloth in shade to surface-dry, and sow immediately.',
      dilutionRatio: 'Use undiluted for seed treatment; dip seedling roots for 1-2 minutes before planting.',
      applicationFrequency: 'Once at seed sowing or transplanting time.',
      bestTime: 'Prior to sowing in morning or evening.',
      soilApplication: 'Leftover liquid can be poured directly into seed furrows or pot bases.',
      foliarSpray: 'Not intended as foliar spray.'
    },
    nutritionalContribution: {
      nitrogen: 'Primarily microbial nitrogen fixers',
      phosphorus: 'Phosphate-dissolving microflora',
      potassium: 'Trace balance',
      micronutrients: 'Calcium from chuna, natural enzymes, and auxins.',
      microbialActivity: 'High concentration of Trichoderma, Pseudomonas, and Bacillus antagonistics.'
    },
    soilBenefits: [
      'Eliminates need for synthetic chemical seed dressing like Thiram or Carbendazim.',
      'Prevents early damping-off mortality in nursery trays.'
    ],
    shelfLife: '24 to 48 hours.',
    faqs: [
      {
        question: 'Can I treat vegetable seeds bought from commercial packets with Beejamrut?',
        answer: 'Yes! Even if commercial hybrid seeds are pre-treated with chemical color, rinsing them quickly and dipping in Beejamrut inoculates them with beneficial living microbes that accelerate healthy root emergence.'
      }
    ],
    relatedFertilizerSlugs: ['jeevamrut', 'panchagavya', 'neem-cake']
  },
  {
    id: 'fert-panchagavya',
    slug: 'panchagavya',
    name: 'Panchagavya (Sacred 5-Cow Biostimulant)',
    localNames: {
      en: 'Panchagavya / 5-Cow Product Bio-Growth Promoter',
      hi: 'पंचगव्य (Panchagavya)',
      gu: 'પંચગવ્ય (Panchagavya)',
      mr: 'पंचगव्य (Panchagavya)'
    },
    category: 'Liquid organic',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The supreme classical Ayurvedic plant elixir crafted from five sacred cow products combined with bananas, jaggery, and coconut water, promoting dramatic flowering, branching, and pest resistance.',
    detailedIntro: 'Panchagavya is an organic formulation of ancient Vedic origin refined by Dr. K. Natarajan. Combining cow dung, cow urine, milk, curd, and ghee with natural fermentation catalyzers, it acts as a phenomenal organic growth promoter containing natural gibberellins, auxins, and lactic acid bacteria.',
    mainBenefits: [
      'Stimulates explosive flowering, fruit-set, and prevents premature blossom drop.',
      'Imparts rich glossy dark green color to leaves by accelerating chlorophyll synthesis.',
      'Enhances fruit sweetness (Brix value), aroma, keeping quality, and shelf life.',
      'Acts as a biological pest deterrent and boosts plant resistance against viral diseases.'
    ],
    ingredients: [
      { name: 'Fresh Desi Cow Dung (Gobar)', quantity: '5 kg', purpose: 'Microbial inoculant' },
      { name: 'Desi Cow Ghee (Clarified butter)', quantity: '500 grams', purpose: 'Fat medium and lipid fermentation' },
      { name: 'Desi Cow Urine (Gomutra)', quantity: '3 liters', purpose: 'Nitrogen and plant immunity' },
      { name: 'Fresh Desi Cow Milk', quantity: '2 liters', purpose: 'Protein and calcium' },
      { name: 'Desi Cow Curd (Dahi)', quantity: '2 liters', purpose: 'Lactic acid bacteria culture' },
      { name: 'Tender Coconut Water', quantity: '3 liters', purpose: 'Cytokinins and natural plant growth hormone' },
      { name: 'Organic Jaggery dissolved in 3L water', quantity: '1 kg', purpose: 'Sugar energy for yeast and bacteria' },
      { name: 'Ripe Bananas (mashed)', quantity: '12 fruits (1 dozen)', purpose: 'Potassium and enzyme promoter' }
    ],
    preparation: {
      prepTime: 'Phase 1: 3 days, Phase 2: 18 days',
      fermentationTime: '21 days total',
      toolsRequired: ['Wide-mouth plastic or mud barrel (never metal)', 'Wooden ladle', 'Porous cotton cloth for cover'],
      steps: [
        'Step 1 (Day 1-3): Mix 5 kg fresh cow dung and 500g cow ghee thoroughly in the drum. Stir twice daily and let ferment for 3 days to break down fats.',
        'Step 2 (Day 4): Add 3 liters cow urine and 10 liters of water. Stir twice daily for 2 days.',
        'Step 3 (Day 6): Add 2L milk, 2L curd, 3L tender coconut water, 1 kg jaggery water, and 12 mashed ripe bananas.',
        'Step 4: Stir the contents vigorously in a clockwise direction for 5 minutes.',
        'Step 5: Cover with a clean cloth and keep in deep shade.',
        'Step 6: Stir the mixture clockwise for 5 minutes twice daily (morning and evening) for the next 15 days.',
        'Step 7: By Day 21, the mixture transforms into a rich aromatic golden-brown liquid emitting a pleasant fruiting aroma like ripe jackfruit/ghee.'
      ],
      mixingInstructions: 'Stir clockwise for 5 minutes twice a day throughout the 21 days.',
      storageInstructions: 'Store in cool shade; valid for up to 6 months. Stir occasionally.',
      signsOfSuccess: 'Pleasant aroma of ripe fruits and ghee; zero putrid rotten smell.',
      commonMistakes: [
        'Using metal containers (corrodes and kills beneficial microbes; use high-density plastic or ceramic).',
        'Neglecting the twice-daily stirring which introduces necessary aerobic oxygen.'
      ],
      safetyPrecautions: ['Keep shaded from harsh direct sunlight.'],
      estimatedCost: '₹300 - ₹450 for a 30-liter master batch.'
    },
    application: {
      suitablePlants: ['All flowering plants (Rose, Mogra, Hibiscus, Marigold)', 'Vegetables (Tomatoes, Capsicum, Chili, Gourds)', 'Fruit trees (Mango, Lemon, Guava)', 'Potted balcony ornamentals'],
      avoidPlants: ['None; beneficial for all stages especially pre-flowering.'],
      recommendedQuantity: 'Foliar spray: 300 ml Panchagavya per 10 liters of water (3% solution); Soil drench: 2 liters in 100L water.',
      dilutionRatio: 'Always dilute at 3% (30 ml in 1 liter of water) for spraying on foliage.',
      applicationFrequency: 'Every 15 days during vegetative and flowering phases.',
      bestTime: 'Early morning (6 to 9 AM) or late evening (after 4:30 PM).',
      soilApplication: 'Drench root zone soil with 3% diluted solution.',
      foliarSpray: 'Filter through double muslin cloth and spray fine mist over both upper and lower leaf surfaces.'
    },
    nutritionalContribution: {
      nitrogen: '1.2% - 1.8%',
      phosphorus: '0.8% - 1.2%',
      potassium: '1.5% - 2.2%',
      micronutrients: 'Rich in Gibberellins, Auxins, Cytokinins, Amino acids, Calcium, and Vitamins.',
      microbialActivity: 'Dense consortia of Lactobacillus, photosynthetic bacteria, and beneficial yeasts.'
    },
    soilBenefits: [
      'Produces thicker, broader leaves with dense photosynthetic capacity.',
      'Induces massive branching and bud formation.',
      'Increases resilience against pest attacks by thickening leaf cell walls.'
    ],
    shelfLife: '6 months when kept shaded and stirred once weekly.',
    faqs: [
      {
        question: 'Does Panchagavya smell bad?',
        answer: 'When prepared properly with ghee, jaggery, coconut water, and bananas, Panchagavya has a very pleasant sweet, fruity, fermented aroma resembling ripe jackfruit and ghee—it should never smell foul or like raw dung!'
      },
      {
        question: 'Can I spray Panchagavya on indoor potted plants?',
        answer: 'Yes! Spray a 3% diluted solution on your balcony and indoor plants once every 15 days for deep glossy green leaves and abundant blooms.'
      }
    ],
    relatedFertilizerSlugs: ['jeevamrut', 'cow-dung-manure', 'vermicompost'],
    isPopular: true
  },
  {
    id: 'fert-kitchen-waste-compost',
    slug: 'kitchen-waste-compost',
    name: 'Kitchen Waste Compost (Home Compost)',
    localNames: {
      en: 'Kitchen Waste Compost / Green Compost',
      hi: 'रसोई कचरा खाद (Rasoi Kachra Khaad)',
      gu: 'રસોડાના કચરાનું ખાતર (Rasoda na Kachra nu Khaatar)',
      mr: 'ओल्या कचऱ्याचे खत (Olya Kachryache Khat)'
    },
    category: 'Kitchen-waste',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23995?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Turn everyday fruit and vegetable peels, tea leaves, and coffee grounds into rich, dark, earthy compost right in your kitchen balcony with zero odor.',
    detailedIntro: 'Kitchen Waste Composting is the most rewarding urban gardening practice. By balancing nitrogen-rich green waste (vegetable peels, fruit rinds, spent tea leaves) with carbon-rich brown waste (dry leaves, shredded cardboard, cocopeat), households can recycle 100% of organic waste into black garden gold.',
    mainBenefits: [
      'Recycles household organic waste, diverting it from municipal landfills.',
      'Free, continuous supply of nutrient-dense organic humus for home pots.',
      'Rich in diverse micronutrients derived from varied food peels.',
      'Enhances soil aeration, beneficial bacteria, and water holding capacity.'
    ],
    ingredients: [
      { name: 'Green Kitchen Waste (vegetable peels, fruit peels, spent tea)', quantity: '50% by volume', purpose: 'Nitrogen and moisture source' },
      { name: 'Brown Waste (dry crushed leaves, shredded cardboard, cocopeat)', quantity: '50% by volume', purpose: 'Carbon, aeration, and odor prevention' },
      { name: 'Starter Culture (sour buttermilk, compost starter, or old compost)', quantity: '1 cup weekly', purpose: 'Microbial inoculant' }
    ],
    preparation: {
      prepTime: '10 minutes daily',
      fermentationTime: '45 to 60 days',
      toolsRequired: ['Terracotta composting pot (Khamba) or aerated plastic bucket with lid and drainage tap', 'Hand rake', 'Cardboard cutter'],
      steps: [
        'Step 1: Place a 3-inch layer of dry leaves or shredded egg cartons at the base of the bin for drainage and aeration.',
        'Step 2: Chop kitchen waste into small 1-inch pieces (smaller pieces compost 3x faster).',
        'Step 3: Add a 2-inch layer of green kitchen waste.',
        'Step 4: Cover completely with an equal 2-inch layer of brown dry leaves or cocopeat (rule: never leave wet kitchen waste exposed to prevent fruit flies).',
        'Step 5: Sprinkle a spoonful of sour buttermilk diluted in water once weekly to accelerate bacterial breakdown.',
        'Step 6: Mix the contents once a week with a hand rake to aerate.',
        'Step 7: Once bin is full, let it cure for 30 days while starting a second bin.',
        'Step 8: Sieve through a wire mesh to collect rich, dark, sweet-smelling compost.'
      ],
      mixingInstructions: 'Turn the pile once a week to maintain aerobic decomposition.',
      storageInstructions: 'Store finished compost in breathable containers.',
      signsOfSuccess: 'Smells like fresh rain on earth, dark crumbly texture, original food peels are completely unrecognizable.',
      commonMistakes: [
        'Adding meat, bones, milk, cheese, or cooked oily gravies (attracts rodents and smells foul).',
        'Not adding enough browns (creates soggy smelly anaerobic sludge; always maintain 1:1 green to brown ratio).'
      ],
      safetyPrecautions: ['Keep compost bin closed to prevent entry of flies.'],
      estimatedCost: 'Virtually ₹0 (utilizes home waste).'
    },
    application: {
      suitablePlants: ['All balcony container vegetables, flowers, foliage plants, herbs'],
      avoidPlants: ['None.'],
      recommendedQuantity: '2 to 3 handfuls per pot every 3 weeks.',
      dilutionRatio: 'Direct soil application.',
      applicationFrequency: 'Monthly.',
      bestTime: 'Anytime.',
      soilApplication: 'Mix into upper 2 inches of container soil.',
      foliarSpray: 'Not recommended.'
    },
    nutritionalContribution: {
      nitrogen: '1.2% - 2.0%',
      phosphorus: '0.8% - 1.5%',
      potassium: '1.0% - 1.8%',
      micronutrients: 'Broad spectrum of trace minerals.',
      microbialActivity: 'Rich in actinomycetes and cellulose-digesting bacteria.'
    },
    soilBenefits: [
      'Eliminates household waste while creating living fertile potting soil.',
      'Saves money on commercial fertilizers.'
    ],
    shelfLife: '12 months in cool dry storage.',
    faqs: [
      {
        question: 'How do I stop my kitchen compost from smelling bad?',
        answer: 'Compost only smells if it is too wet and lacking oxygen. Add double the quantity of dry crushed brown leaves or sawdust, mix thoroughly with a hand fork, and ensure drainage holes are unclogged.'
      }
    ],
    relatedFertilizerSlugs: ['vermicompost', 'banana-peel-fertilizer', 'eggshell-fertilizer'],
    isPopular: true
  },
  {
    id: 'fert-banana-peel-fertilizer',
    slug: 'banana-peel-fertilizer',
    name: 'Banana Peel Fertilizer (Organic Potassium Booster)',
    localNames: {
      en: 'Banana Peel Fertilizer / Potash Tea',
      hi: 'केले के छिलके की खाद (Kele ke Chhilke ki Khaad)',
      gu: 'કેળાની છાલનું ખાતર (Kela ni Chhaal nu Khaatar)',
      mr: 'केळीच्या सालीचे खत (Kelichya Saliche Khat)'
    },
    category: 'Kitchen-waste',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The ultimate natural organic potassium (K) booster for flower buds and juicy fruits, made from discarded kitchen banana peels.',
    detailedIntro: 'Banana peels are naturally packed with up to 42% potassium (potash), alongside substantial magnesium, calcium, and phosphorus. Potassium is the vital nutrient required for opening flower buds, fruit sizing, drought resistance, and strong cell walls in plants like Roses, Hibiscus, Tomatoes, and Lemons.',
    mainBenefits: [
      'Triggers prolific flower blooming on Hibiscus, Roses, and Mogra.',
      'Prevents premature fruit and flower bud drop.',
      'Boosts fruit sweetness and disease resistance naturally.',
      'Fast-acting and ready in 48 hours as steeped liquid tea.'
    ],
    ingredients: [
      { name: 'Fresh banana peels (chopped)', quantity: '5 to 6 peels', purpose: 'Potassium and micronutrient source' },
      { name: 'Water', quantity: '2 liters', purpose: 'Extraction medium' },
      { name: 'Organic jaggery (optional)', quantity: '1 teaspoon', purpose: 'Fermentation catalyst' }
    ],
    preparation: {
      prepTime: '5 minutes',
      fermentationTime: '48 to 72 hours (or sun-dry for powder)',
      toolsRequired: ['Glass jar or plastic bottle with lid', 'Strainer', 'Scissors'],
      steps: [
        'Method A (Liquid Tea):',
        '1. Chop 5-6 fresh banana peels into small 1-inch strips using kitchen scissors.',
        '2. Place chopped peels inside a 2-liter bottle and fill with water.',
        '3. Add 1 teaspoon of jaggery; close lid loosely (to allow gases to escape).',
        '4. Keep in shade for 48 to 72 hours. The water turns dark amber-brown.',
        '5. Strain out the peels (toss leftover peels into your compost bin).',
        'Method B (Dry Powder):',
        '1. Sun-dry banana peels on a terrace tray for 4-5 days until completely black and brittle.',
        '2. Grind into fine powder in a mixer. Store in an airtight jar for year-round use.'
      ],
      mixingInstructions: 'Shake jar once daily while steeping.',
      storageInstructions: 'Use liquid tea within 5 days; dry powder stores for 6 months.',
      signsOfSuccess: 'Amber tea-colored water with mild sweet fermented cider aroma.',
      commonMistakes: [
        'Burying whole fresh slippery banana peels right on the surface of potted soil (attracts fruit flies and fungus gnats; always make tea or dry powder).'
      ],
      safetyPrecautions: ['Keep liquid lid loose during fermentation to avoid pressure buildup.'],
      estimatedCost: '₹0 (kitchen scrap).'
    },
    application: {
      suitablePlants: ['Hibiscus (Jasud)', 'Roses (Gulab)', 'Mogra / Jasmine', 'Tomatoes', 'Chilis', 'Citrus / Lemon'],
      avoidPlants: ['Foliage plants that don’t produce flowers (Snake plant, ZZ plant need less potassium).'],
      recommendedQuantity: 'Liquid Tea: 1 glass (200ml) per 10-inch pot; Dry Powder: 2 tablespoons per pot.',
      dilutionRatio: 'Dilute steeped liquid tea 1:1 with fresh water before applying.',
      applicationFrequency: 'Every 10 to 15 days during flowering and fruiting season.',
      bestTime: 'Early morning hours.',
      soilApplication: 'Pour directly into moist root soil.',
      foliarSpray: 'Can be sprayed directly on leaves if strained through fine coffee filter.'
    },
    nutritionalContribution: {
      nitrogen: 'Low (0.5%)',
      phosphorus: 'Moderate (3.2%)',
      potassium: 'Very High (42% of ash weight)',
      micronutrients: 'Magnesium, Calcium, Sodium, and Silica.',
      microbialActivity: 'Mild beneficial yeasts.'
    },
    soilBenefits: [
      'Delivers instant soluble potassium directly to flowering plants without chemical muriate of potash.'
    ],
    shelfLife: 'Liquid: 1 week; Powder: 6 months.',
    faqs: [
      {
        question: 'Why is banana peel tea better than burying raw peels?',
        answer: 'Liquid tea releases potassium within hours directly to the feeder roots without attracting ants, fruit flies, or causing mold on the soil surface.'
      }
    ],
    relatedFertilizerSlugs: ['kitchen-waste-compost', 'eggshell-fertilizer', 'mustard-cake-fertilizer'],
    isPopular: true
  },
  {
    id: 'fert-eggshell-fertilizer',
    slug: 'eggshell-fertilizer',
    name: 'Eggshell Fertilizer (Organic Calcium Booster)',
    localNames: {
      en: 'Crushed Eggshell Fertilizer / Calcium Carbonate Meal',
      hi: 'अंडे के छिलके की खाद (Ande ke Chhilke ki Khaad)',
      gu: 'ઈંડાની છાલનું ખાતર (Eenda ni Chhaal nu Khaatar)',
      mr: 'अंड्याच्या टरफलांचे खत (Andyachya Tarfalache Khat)'
    },
    category: 'Kitchen-waste',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23995?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Pure natural calcium carbonate (CaCO3) that prevents blossom end rot in tomatoes and strengthens plant cellular walls.',
    detailedIntro: 'Eggshells are composed of over 95% calcium carbonate, along with trace magnesium, phosphorus, and potassium. In Indian kitchen gardens, calcium deficiency often manifests as blackened sunken bottoms on tomatoes (Blossom End Rot) and curled deformed young shoots. Crushed or vinegar-extracted eggshells solve this naturally.',
    mainBenefits: [
      '100% cure and prevention for Blossom End Rot in tomatoes and peppers.',
      'Builds sturdy cell walls, preventing stems from snapping under fruit load.',
      'Naturally balances acidic soils.',
      'Coarse crushed shells form a physical abrasive barrier against slugs and snails.'
    ],
    ingredients: [
      { name: 'Clean eggshells', quantity: '20 to 30 shells', purpose: 'Calcium source' },
      { name: 'Vinegar (optional, for water-soluble calcium tea)', quantity: '500 ml', purpose: 'Acid to dissolve insoluble calcium carbonate into bio-available calcium acetate' }
    ],
    preparation: {
      prepTime: '15 minutes',
      fermentationTime: 'Immediate (powder) or 7 days (water-soluble calcium extract)',
      toolsRequired: ['Baking tray or sun plate', 'Mortar pestle or kitchen grinder', 'Glass jar'],
      steps: [
        'Method A (Slow-Release Powder):',
        '1. Rinse eggshells with water to remove leftover egg whites.',
        '2. Sun-dry for 2 days (or toast lightly on a dry pan for 5 minutes to sterilize).',
        '3. Grind in a mixer into fine flour-like powder. Fine powder breaks down 10x faster than coarse chunks.',
        'Method B (Instant Water-Soluble Calcium Acetate):',
        '1. Toast crushed eggshells on a pan until lightly browned.',
        '2. Place in a glass jar and add brown vinegar at 1:5 ratio. It will bubble vigorously (releasing CO2).',
        '3. Let sit loosely covered for 7 days until bubbling stops and shells dissolve.',
        '4. Strain clear liquid; you now have highly bio-available water-soluble calcium!'
      ],
      mixingInstructions: 'Store powder in dry jar.',
      storageInstructions: 'Dry powder lasts indefinitely in airtight jars.',
      signsOfSuccess: 'Fine white/cream powder; for liquid: clear amber liquid with pleasant vinegar scent.',
      commonMistakes: [
        'Throwing uncrushed, whole eggshells into pot soil (they take 3 to 5 years to decompose; always grind into fine powder).'
      ],
      safetyPrecautions: ['Wash shells before grinding.'],
      estimatedCost: '₹0 (kitchen byproduct).'
    },
    application: {
      suitablePlants: ['Tomatoes', 'Capsicum & Chili', 'Brinjal / Eggplant', 'Roses', 'Citrus trees'],
      avoidPlants: ['Acid-loving plants like Blueberries or Gardenias (excess calcium raises soil pH).'],
      recommendedQuantity: 'Powder: 1 to 2 tablespoons worked into soil around plant base; Soluble Liquid: 5 ml per liter of water.',
      dilutionRatio: 'Dilute 5 ml of vinegar-calcium extract in 1 liter of water.',
      applicationFrequency: 'Once every month.',
      bestTime: 'Anytime.',
      soilApplication: 'Mix into soil during potting or top-dress around root zone.',
      foliarSpray: 'Spray diluted water-soluble calcium liquid directly on tomato leaves to prevent fruit bottom rot.'
    },
    nutritionalContribution: {
      nitrogen: 'Trace',
      phosphorus: '0.4%',
      potassium: '0.2%',
      micronutrients: 'Calcium (95%), Magnesium (1%), Trace Zinc.',
      microbialActivity: 'Mineral amendment.'
    },
    soilBenefits: [
      'Buffers acidic potting soil and supplies steady calcium for root hair expansion.'
    ],
    shelfLife: 'Indefinite when kept dry.',
    faqs: [
      {
        question: 'Why are the bottoms of my tomatoes turning black and rotting?',
        answer: 'This is Blossom End Rot caused by calcium deficiency during rapid fruit swelling. Apply 2 tablespoons of fine eggshell powder or spray water-soluble calcium extract immediately.'
      }
    ],
    relatedFertilizerSlugs: ['banana-peel-fertilizer', 'kitchen-waste-compost', 'vermicompost']
  },
  {
    id: 'fert-neem-cake',
    slug: 'neem-cake',
    name: 'Neem Cake (Neem Khali / De-oiled Neem Meal)',
    localNames: {
      en: 'Neem Seed Cake / Neem Khali',
      hi: 'नीम खली (Neem Khali)',
      gu: 'લીંબોળીનો ખોળ (Limboli no Khol)',
      mr: 'निंबोळी पेंड (Nimboli Pend)'
    },
    category: 'Plant-based',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The natural dual-action miracle: a slow-release organic N-P-K fertilizer and a potent biological pesticide that eradicates soil-borne nematodes, white grubs, and termites.',
    detailedIntro: 'Neem Cake (Neem Khali) is the solid organic residue left behind after cold-pressing oil from Indian neem seeds (Azadirachta indica). It contains active limonoids (azadirachtin, salannin, nimbin) that inhibit soil nitrification and destroy harmful root-knot nematodes while slowly feeding plants.',
    mainBenefits: [
      'Dual action: acts simultaneously as organic fertilizer and pest/nematode protectant.',
      'Inhibits denitrification bacteria, slowing nitrogen loss and making fertilizers last twice as long.',
      'Controls destructive subterranean pests: white grubs, termites, root-knot nematodes.',
      'Enhances earthworm population by eradicating harmful soil parasites.'
    ],
    ingredients: [
      { name: 'Pure cold-pressed neem seed cake flakes or powder', quantity: '100%', purpose: 'Organic nutrition, azadirachtin, and nematode control' }
    ],
    preparation: {
      prepTime: 'Commercial by-product / 5 minutes soaking for tea',
      fermentationTime: 'Can be used dry directly, or soaked 24 hours for liquid drench',
      toolsRequired: ['Hand trowel', 'Bucket for liquid drench'],
      steps: [
        'Method A (Direct Soil Incorporation):',
        '1. Use commercially sourced cold-pressed neem cake powder or flakes.',
        '2. Mix 50g to 100g directly into potting soil mix for new planters.',
        '3. For established plants, gently scratch top 2 inches of soil, sprinkle 2 tablespoons around perimeter, and water.',
        'Method B (Liquid Neem Khali Tea):',
        '1. Soak 100g of neem cake powder in 2 liters of water for 24 to 48 hours.',
        '2. Stir occasionally; the water turns pungent muddy brown.',
        '3. Dilute with 5 liters of clean water and drench soil to eliminate active root pests.'
      ],
      mixingInstructions: 'Blend evenly into potting soil.',
      storageInstructions: 'Store in dry airtight sacks away from rain moisture.',
      signsOfSuccess: 'Pungent bitter garlic-neem aroma, dark brown coarse granular texture.',
      commonMistakes: [
        'Using solvent-extracted low-grade neem cake that has zero active azadirachtin left (always look for cold-pressed expeller neem cake).'
      ],
      safetyPrecautions: ['Bitter taste; keep away from household pets.'],
      estimatedCost: '₹30 - ₹50 per kg.'
    },
    application: {
      suitablePlants: ['All garden plants: Roses, Tulsi, Vegetables, Citrus, Fruit trees, Lawn turf'],
      avoidPlants: ['None.'],
      recommendedQuantity: 'Potted plants: 2 tablespoons (50g) per 10-inch pot; Fruit trees: 500g to 1 kg per tree.',
      dilutionRatio: 'For liquid tea: 1 part extract to 5 parts water.',
      applicationFrequency: 'Once every 30 to 45 days.',
      bestTime: 'Late afternoon.',
      soilApplication: 'Mix into soil around root perimeter.',
      foliarSpray: 'Liquid tea can be strained through cloth and sprayed as an organic foliar pesticide.'
    },
    nutritionalContribution: {
      nitrogen: '2.5% - 5.0%',
      phosphorus: '1.0% - 1.5%',
      potassium: '1.4% - 2.0%',
      micronutrients: 'Calcium, Magnesium, Sulfur, and Azadirachtin (min 1000 ppm).',
      microbialActivity: 'Encourages beneficial mycorrhizae while suppressing pathogenic fungi.'
    },
    soilBenefits: [
      'Guards against soil termites and root-knot nematodes.',
      'Acts as a natural nitrification inhibitor, preventing costly nitrogen leaching.'
    ],
    shelfLife: '12 to 18 months in dry storage.',
    faqs: [
      {
        question: 'Why do white fungus blooms appear on soil after applying Neem Cake?',
        answer: 'Do not panic! The white fluffy growth that often appears 2-3 days after applying neem cake is beneficial saprophytic fungal mycelium (Actinomycetes) actively breaking down organic matter into plant food. It is completely harmless and beneficial.'
      }
    ],
    relatedFertilizerSlugs: ['mustard-cake-fertilizer', 'vermicompost', 'cow-dung-manure'],
    isPopular: true
  },
  {
    id: 'fert-mustard-cake-fertilizer',
    slug: 'mustard-cake-fertilizer',
    name: 'Mustard Cake Fertilizer (Sarson Khali)',
    localNames: {
      en: 'Mustard Seed Cake / Sarson Khali',
      hi: 'सरसों की खली (Sarson ki Khali)',
      gu: 'રાયડો / સરસવનો ખોળ (Sarson no Khol)',
      mr: 'मोहरी पेंड (Mohari Pend)'
    },
    category: 'Plant-based',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The winter gardening superfood of Northern and Western India; unmatched high-nitrogen and phosphorus liquid tea that causes an explosion of blooms on Roses, Marigolds, and winter veggies.',
    detailedIntro: 'Mustard Cake (Sarson Khali) is the residue from cold-pressing mustard seeds (Brassica juncea). Highly prized in Indian traditional horticulture, when fermented in water for 4 to 5 days, it produces a pungent golden liquid tea that acts like a super-fuel for flowering plants during cooler months.',
    mainBenefits: [
      'Unsurpassed booster for massive prize-winning blooms on Roses, Dahlias, Chrysanthemums, and Marigolds.',
      'Rich in fast-acting organic Nitrogen (4%) and Phosphorus (1.5%) for vigorous vegetative flushes.',
      'Slight sulfur content discourages fungal leaf spot and soil pathogens.',
      'Accelerates winter vegetable growth (Spinach, Cauliflower, Cabbage, Radish).'
    ],
    ingredients: [
      { name: 'Mustard seed cake (Sarson Khali slabs or powder)', quantity: '100 grams', purpose: 'Nitrogen, phosphorus, sulfur, and micronutrients' },
      { name: 'Water', quantity: '2 liters for initial brew; 10 liters for dilution', purpose: 'Fermentation and application solvent' },
      { name: 'DAP or Bone meal (optional, for master gardeners)', quantity: '10 grams', purpose: 'Extra bloom boost' }
    ],
    preparation: {
      prepTime: '5 minutes setup',
      fermentationTime: '4 to 6 days fermentation',
      toolsRequired: ['Plastic bucket (5 liter)', 'Wooden stick', 'Watering can'],
      steps: [
        'Step 1: Place 100g of broken mustard cake pieces into a plastic bucket.',
        'Step 2: Add 2 liters of water and cover loosely with a lid.',
        'Step 3: Keep in deep shade. It will start fermenting, bubbling, and emitting a pungent mustard aroma.',
        'Step 4: Stir with a wooden stick once daily for 4 to 5 days in winter (3 days in warm weather).',
        'Step 5: The liquid turns thick, opaque, and mustard yellow-brown.',
        'Step 6: CRUCIAL DILUTION: Pour this 2-liter concentrated fermented tea into a large bucket and add 8 to 10 liters of plain water until it looks like weak thin yellow tea (like light Dal water).',
        'Step 7: Water your plants with this diluted liquid.'
      ],
      mixingInstructions: 'Always dilute 1:10; never apply thick concentrated fermented liquid or it will burn roots.',
      storageInstructions: 'Prepare fresh in small batches as needed; finish fermented batch within 10 days.',
      signsOfSuccess: 'Pungent mustard odor, thin translucent golden-yellow liquid upon 1:10 dilution.',
      commonMistakes: [
        'Applying concentrated unfermented sludge directly onto soil (ferments on the soil, forming mold and suffocating roots).',
        'Applying during intense summer heat (Mustard cake generates internal heat and is strictly a cool season / winter fertilizer).'
      ],
      safetyPrecautions: ['Pungent smell during fermentation; keep bucket in an open terrace or ventilated outdoor corner.'],
      estimatedCost: '₹35 - ₹45 per kg.'
    },
    application: {
      suitablePlants: ['Winter annual flowers (Roses, Marigold, Dahlia, Petunia, Chrysanthemum)', 'Vegetables (Tomatoes, Cabbage, Broccoli, Radish)', 'Fruit plants (Lemon, Guava)'],
      avoidPlants: ['Delicate indoor succulents and young seedling trays.'],
      recommendedQuantity: '1 glass (200ml to 300ml) of diluted liquid per 10-12 inch pot.',
      dilutionRatio: '1 part fermented concentrate to 10 parts plain water (must look like light transparent tea).',
      applicationFrequency: 'Every 15 days from October to February.',
      bestTime: 'Bright sunny winter mornings.',
      soilApplication: 'Pour directly into moist root soil (never on dry soil).',
      foliarSpray: 'Not recommended for foliage.'
    },
    nutritionalContribution: {
      nitrogen: '4.8% - 5.2%',
      phosphorus: '1.8% - 2.0%',
      potassium: '1.2% - 1.4%',
      micronutrients: 'Rich in organic Sulfur, Magnesium, and Zinc.',
      microbialActivity: 'Fermentation produces active lactic acid bacteria and plant growth enzymes.'
    },
    soilBenefits: [
      'Warms up cold winter soils, maintaining active root nutrient uptake through December and January.'
    ],
    shelfLife: 'Dry cake: 12 months; Liquid fermented tea: 10 days.',
    faqs: [
      {
        question: 'Why does my fermented mustard cake smell so strong?',
        answer: 'The sharp pungent smell is natural sulfur and isothiocyanates releasing during fermentation. This same pungent compound acts as a natural pest deterrent against soil grubs!'
      }
    ],
    relatedFertilizerSlugs: ['desi-rose', 'neem-cake', 'vermicompost'],
    isPopular: true
  },
  {
    id: 'fert-wood-ash',
    slug: 'wood-ash',
    name: 'Wood Ash (Chulhe ki Raakh)',
    localNames: {
      en: 'Wood Ash / Hardwood Ash',
      hi: 'लकड़ी की राख (Chulhe ki Raakh)',
      gu: 'લાકડાની રાખ (Laakda ni Raakh)',
      mr: 'लाकडाची राख (Lakdachi Rakh)'
    },
    category: 'Soil amendment',
    image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Ancient traditional source of fast-acting Potassium, Calcium, and micronutrients; excellent for sweetening acidic soils and deterring soft-bodied garden pests.',
    detailedIntro: 'Pure wood ash derived from burning hardwood branches, cow dung cakes, or coconut shells is an invaluable free soil amendment. It contains up to 10% potash and 30% calcium carbonate, acting as a natural pest repelling dust against aphids, snails, and caterpillars while sweetening root vegetables.',
    mainBenefits: [
      'Rich natural source of bio-available Potassium (K) and Calcium (Ca).',
      'Sweetens soil by gently raising pH in acidic garden beds.',
      'Dusting dry ash on leaves paralyzes and repels chewing insects, snails, and aphids.',
      'Increases root vegetable size (Radish, Carrot, Onion, Garlic).'
    ],
    ingredients: [
      { name: 'Pure wood or cow dung ash (from traditional clay stoves/Chulha or untreated firewood)', quantity: '100%', purpose: 'Potash, lime, and mineral ash' }
    ],
    preparation: {
      prepTime: 'Immediate',
      fermentationTime: 'None (ready to use)',
      toolsRequired: ['Fine wire sieve', 'Storage container with dry lid'],
      steps: [
        'Step 1: Collect completely cooled ash from an open wood fire or cow dung cake hearth.',
        'Step 2: Sieve through a fine wire screen to remove unburned charcoal chunks and nails.',
        'Step 3: Store the powdery gray-white ash in a dry moisture-proof container.'
      ],
      mixingInstructions: 'Use sparingly; a pinch goes a long way.',
      storageInstructions: 'Must be stored 100% dry (if wet, potassium leaches away into lye).',
      signsOfSuccess: 'Fine, silky gray powder, completely free from plastic, paint, or chemical charcoal residues.',
      commonMistakes: [
        'Using ash from burned painted furniture, treated plywood, coal, or plastics (contains toxic heavy metals; ONLY use pure organic wood ash).',
        'Applying in massive quantities which raises soil pH too high into toxic alkalinity.'
      ],
      safetyPrecautions: ['Wear a dust mask and avoid breathing fine ash dust.'],
      estimatedCost: '₹0 (hearth byproduct).'
    },
    application: {
      suitablePlants: ['Onions & Garlic', 'Tomatoes & Peppers', 'Root vegetables (Carrot, Radish)', 'Rose bushes', 'Fruit trees'],
      avoidPlants: ['Acid-loving plants like Gardenias, Azaleas, and Potatoes (causes potato scab).'],
      recommendedQuantity: '1 to 2 tablespoons per 10-inch pot; 100g per square meter of garden bed.',
      dilutionRatio: 'Direct soil dusting or light surface powder.',
      applicationFrequency: 'Once every 2 months.',
      bestTime: 'Early morning when dew makes ash stick to leaf pests.',
      soilApplication: 'Scratch lightly into topsoil around root zone.',
      foliarSpray: 'Dust dry powder lightly over damp leaves infested with aphids or caterpillars.'
    },
    nutritionalContribution: {
      nitrogen: '0% (burned off in combustion)',
      phosphorus: '1.0% - 2.5%',
      potassium: '5.0% - 10.0%',
      micronutrients: 'Calcium (25-30%), Magnesium (2%), Silica, Zinc, and Manganese.',
      microbialActivity: 'Mineral amendment.'
    },
    soilBenefits: [
      'Enhances potassium levels necessary for starch and sugar synthesis in fruits and tubers.'
    ],
    shelfLife: 'Indefinite if kept strictly dry.',
    faqs: [
      {
        question: 'Can I use wood ash to get rid of pests on my vegetables?',
        answer: 'Yes! Early in the morning when plants are damp with dew, dust a light pinch of fine wood ash directly over the leaves. The alkaline ash desiccates and repels soft-bodied aphids, flea beetles, and caterpillars.'
      }
    ],
    relatedFertilizerSlugs: ['banana-peel-fertilizer', 'mustard-cake-fertilizer', 'vermicompost']
  },
  {
    id: 'fert-leaf-mold',
    slug: 'leaf-mold',
    name: 'Leaf Mold (Dry Fallen Leaves Khaad)',
    localNames: {
      en: 'Leaf Mold / Decomposed Leaf Humus',
      hi: 'पत्तियों की खाद (Pattiyon ki Khaad)',
      gu: 'સૂકા પાંદડાનું ખાતર (Suka Paandada nu Khaatar)',
      mr: 'पाचोळ्याचे खत (Pacholyache Khat)'
    },
    category: 'Compost',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The miraculous forest-floor conditioner created by slow fungal breakdown of autumn dry leaves; retains up to 500% of its weight in water.',
    detailedIntro: 'Leaf mold is formed by the cool, slow fungal decomposition of dry tree leaves (Neem, Peepal, Banyan, Ashoka, Jamun). Unlike traditional bacterial compost, leaf mold is fungal-dominated humus with incredible moisture-holding capacity, making it the ideal sustainable substitute for imported peat moss.',
    mainBenefits: [
      'Holds up to 500% of its dry weight in water, cutting watering needs in half during summer.',
      'Perfect porous consistency for seed germination trays and delicate ferns.',
      'Acts as a 100% sustainable, local Indian substitute for imported peat moss.',
      'Inoculates potting mix with beneficial woodland mycorrhizal fungi.'
    ],
    ingredients: [
      { name: 'Dry fallen leaves (Neem, Peepal, Banyan, Mango, Ashoka)', quantity: 'Large quantity', purpose: 'Carbon bedding and fungal food' },
      { name: 'Water', quantity: 'To moisten', purpose: 'Fungal hydration' },
      { name: 'Sour buttermilk or green grass clippings (optional)', quantity: '1 cup', purpose: 'Fungal starter accelerator' }
    ],
    preparation: {
      prepTime: '30 minutes collection',
      fermentationTime: '4 to 6 months',
      toolsRequired: ['Wire mesh cylinder cage or perforated garbage bag', 'Watering can'],
      steps: [
        'Step 1: Collect dry fallen brown leaves during autumn/spring leaf shedding.',
        'Step 2: Shred or crush leaves underfoot (shredded leaves break down 3 times faster).',
        'Step 3: Stuff leaves into a wire mesh ring cage or perforated gunny sack.',
        'Step 4: Moisten thoroughly with water mixed with a cup of sour buttermilk.',
        'Step 5: Keep in deep shade. Fungi (not heat bacteria) will slowly decompose the lignin.',
        'Step 6: Moisten once every 2 weeks if it dries out.',
        'Step 7: After 4 to 6 months, it transforms into dark, soft, crumbly, sweet-smelling forest leaf mold.'
      ],
      mixingInstructions: 'Turn once every month.',
      storageInstructions: 'Store in breathable gunny bags.',
      signsOfSuccess: 'Earthy forest scent, spongy velvety brown texture, no intact leaf skeletons.',
      commonMistakes: [
        'Burning fallen dry leaves on the street (a polluting crime against soil health; always compost them!).',
        'Letting the leaf pile become bone dry (fungi require moisture to survive).'
      ],
      safetyPrecautions: ['Avoid diseased leaves with fungal blights.'],
      estimatedCost: '₹0 (collected free from neighbourhood trees).'
    },
    application: {
      suitablePlants: ['Indoor plants (Money plant, Areca palm, Ferns)', 'Seed starting trays', 'Rose bushes', 'Orchids'],
      avoidPlants: ['None.'],
      recommendedQuantity: 'Blend 30% by volume into potting soil mixes.',
      dilutionRatio: 'Direct soil blend.',
      applicationFrequency: 'During initial potting or annual repotting.',
      bestTime: 'Anytime.',
      soilApplication: 'Mix directly into potting medium.',
      foliarSpray: 'Not applicable.'
    },
    nutritionalContribution: {
      nitrogen: '0.8% - 1.2%',
      phosphorus: '0.3% - 0.5%',
      potassium: '0.4% - 0.7%',
      micronutrients: 'Trace minerals absorbed from deep tree roots.',
      microbialActivity: 'Unmatched richness in beneficial mycorrhizal fungi.'
    },
    soilBenefits: [
      'Provides unbeatable water retention and soft forest-floor tilth to potted soils.'
    ],
    shelfLife: '2 years.',
    faqs: [
      {
        question: 'Can Leaf Mold replace imported Cocopeat or Peat Moss?',
        answer: 'Yes! Leaf mold is actually superior to peat moss and cocopeat because it contains native beneficial mycorrhizae, natural trace minerals, and has a neutral pH without needing chemical washes.'
      }
    ],
    relatedFertilizerSlugs: ['vermicompost', 'kitchen-waste-compost', 'cow-dung-manure']
  },
  {
    id: 'fert-rice-husk-compost',
    slug: 'rice-husk-compost',
    name: 'Rice Husk Compost / Biochar (Dhan ki Bhusi)',
    localNames: {
      en: 'Rice Husk Compost / Carbonized Rice Hull',
      hi: 'धान की भूसी की खाद (Dhan ki Bhusi)',
      gu: 'ડાંગરની ફોતરીનું ખાતર (Dangar ni Fotari)',
      mr: 'भाताचा कोंडा (Bhatacha Konda)'
    },
    category: 'Compost',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23995?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Silica-rich organic soil aerator and long-lasting carbon sponge that prevents potting soil from compacting into hard bricks.',
    detailedIntro: 'Rice husk is the protective outer coating of rice grains. Composted or carbonized into biochar, it provides permanent microscopic porosity, high silica content that strengthens plant stalks against lodging, and prevents heavy Indian clay soils from hardening in the summer sun.',
    mainBenefits: [
      'Guarantees permanent aeration and drainage in container potting soil.',
      'High natural Silica (SiO2) strengthens plant stems and cell walls against fungal penetration.',
      'Extremely lightweight, making it ideal for terrace and balcony rooftop gardens with weight limits.',
      'Acts as a biological home for beneficial root-colonizing bacteria.'
    ],
    ingredients: [
      { name: 'Raw or partially carbonized rice hulls (CRH)', quantity: '70%', purpose: 'Silica, carbon, and drainage porosity' },
      { name: 'Cow dung slurry or vermicompost', quantity: '30%', purpose: 'Nitrogen activator' }
    ],
    preparation: {
      prepTime: '15 minutes',
      fermentationTime: '30 to 45 days',
      toolsRequired: ['Compost pile or pit', 'Water sprinkler'],
      steps: [
        'Step 1: Moisten rice husks with diluted cow dung slurry or sour buttermilk.',
        'Step 2: Pile into a 3-foot heap and cover with tarpaulin.',
        'Step 3: Turn every 10 days; the husks soften and darken into rich brown compost.'
      ],
      mixingInstructions: 'Blend 20% into potting soil.',
      storageInstructions: 'Dry bags.',
      signsOfSuccess: 'Dark brown softened husks.',
      commonMistakes: ['Using 100% raw uncomposted yellow husks without nitrogen (causes temporary nitrogen immobilization).'],
      safetyPrecautions: ['None.'],
      estimatedCost: '₹15 - ₹25 per kg.'
    },
    application: {
      suitablePlants: ['Terrace garden pots', 'Vegetable containers', 'Succulents and cacti mixes'],
      avoidPlants: ['None.'],
      recommendedQuantity: 'Mix 15% to 20% by volume into standard potting soil.',
      dilutionRatio: 'Direct soil blend.',
      applicationFrequency: 'At potting time.',
      bestTime: 'Anytime.',
      soilApplication: 'Mix evenly throughout pot soil.',
      foliarSpray: 'Not applicable.'
    },
    nutritionalContribution: {
      nitrogen: '0.7%',
      phosphorus: '0.3%',
      potassium: '0.8%',
      micronutrients: 'Silica (up to 20%), Calcium, Iron.',
      microbialActivity: 'Porous microbial scaffold.'
    },
    soilBenefits: ['Keeps container soil loose and aerated for years.'],
    shelfLife: '5+ years.',
    faqs: [
      {
        question: 'Why should I add Rice Husk to my terrace garden pots?',
        answer: 'Terrace gardeners face two big challenges: heavy pots putting weight on the roof, and soil becoming hard as a brick in summer. Rice husk solves both: it cuts pot weight by 40% and keeps soil spongy and well-drained.'
      }
    ],
    relatedFertilizerSlugs: ['leaf-mold', 'vermicompost', 'kitchen-waste-compost']
  },
  {
    id: 'fert-buttermilk-spray',
    slug: 'buttermilk-spray',
    name: 'Sour Buttermilk Spray (Khatti Chhachh / Taak)',
    localNames: {
      en: 'Sour Buttermilk Foliar Spray / Lactic Biostimulant',
      hi: 'खट्टी छाछ का छिड़काव (Khatti Chhachh)',
      gu: 'ખાટી છાશનો છંટકાવ (Khaati Chhaash)',
      mr: 'आंबट ताक (Aambat Taak)'
    },
    category: 'Traditional Indian',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'The ancient organic antifungal cure: aged sour buttermilk stored in a copper pot acts as a biological shield against powdery mildew, leaf curls, and fungal blights while stimulating lush green growth.',
    detailedIntro: 'Sour buttermilk (Chhachh or Taak) aged for 5 to 7 days with a piece of copper wire or plate is one of India’s most effective, time-tested natural bio-fungicides. Lactic acid bacteria combined with copper ions eliminate powdery mildew, leaf spot, and downy mildew without toxic chemicals.',
    mainBenefits: [
      'Eliminates powdery mildew, downy mildew, and leaf spots on Cucumbers, Tomatoes, and Roses.',
      'Lactic acid bacteria suppress harmful pathogenic spores on leaf surfaces.',
      'Supplies bio-available calcium, nitrogen, and phosphorus directly through leaves.',
      '100% natural, food-grade safe, and costs virtually nothing.'
    ],
    ingredients: [
      { name: 'Traditional sour churned buttermilk (Khatti Chhachh / Taak)', quantity: '1 liter', purpose: 'Lactic acid, probiotics, and calcium' },
      { name: 'Clean piece of copper wire or copper coin / scrap', quantity: '1 piece', purpose: 'Generates antimicrobial copper ions' },
      { name: 'Water for dilution', quantity: '10 liters', purpose: 'Dilution medium' }
    ],
    preparation: {
      prepTime: '5 minutes',
      fermentationTime: '5 to 7 days',
      toolsRequired: ['Glass jar or plastic container (never use aluminum)', 'Copper wire piece', 'Foliar spray bottle'],
      steps: [
        'Step 1: Take 1 liter of fresh sour buttermilk (made from cow milk curd).',
        'Step 2: Place a clean piece of copper wire or copper plate inside the jar.',
        'Step 3: Cover loosely and keep in shade for 5 to 7 days.',
        'Step 4: The buttermilk turns greenish-blue as natural copper lactate forms.',
        'Step 5: Remove the copper piece and strain the buttermilk through a fine cloth.',
        'Step 6: Dilute 100 ml of this aged copper buttermilk in 1 liter of plain water (1:10 dilution).',
        'Step 7: Pour into a sprayer and mist plants thoroughly.'
      ],
      mixingInstructions: 'Always dilute 1 part aged buttermilk to 10 parts plain water.',
      storageInstructions: 'Use within 15 days of preparation.',
      signsOfSuccess: 'Distinct greenish-blue hue and sharp sour fragrance.',
      commonMistakes: [
        'Spraying undiluted buttermilk (coats leaves with greasy fat layer; always use 1:10 dilution with churned low-fat buttermilk).'
      ],
      safetyPrecautions: ['Spray during cool morning or evening hours.'],
      estimatedCost: '₹10 - ₹20.'
    },
    application: {
      suitablePlants: ['Curry leaf (Kadi Patta)', 'Tomatoes & Chilis', 'Rose bushes', 'Gourds and Cucumbers (Karela, Lauki, Kheera)', 'Tulsi'],
      avoidPlants: ['None.'],
      recommendedQuantity: 'Spray thoroughly on upper and lower surfaces of leaves until dripping.',
      dilutionRatio: '1:10 (100 ml aged buttermilk in 1 liter clean water).',
      applicationFrequency: 'Every 10 to 14 days; weekly if mildew is actively visible.',
      bestTime: 'Early morning (7 to 9 AM).',
      soilApplication: 'Leftover liquid can be poured directly into Curry leaf root zone for aromatic dark green growth.',
      foliarSpray: 'Primary recommended application method.'
    },
    nutritionalContribution: {
      nitrogen: '0.5%',
      phosphorus: '0.4%',
      potassium: '0.3%',
      micronutrients: 'Calcium, Copper ions, and natural vitamins.',
      microbialActivity: 'Dense populations of live Lactobacillus and probiotic enzymes.'
    },
    soilBenefits: ['Acidifies soil slightly and provides organic calcium.'],
    shelfLife: '15 days.',
    faqs: [
      {
        question: 'Why does adding a copper wire make the buttermilk turn greenish-blue?',
        answer: 'The natural lactic acid in sour buttermilk reacts gently with the copper metal to form copper lactate, a safe, biological copper compound with formidable antifungal powers that eradicates powdery mildew.'
      }
    ],
    relatedFertilizerSlugs: ['curry-leaf', 'jeevamrut', 'neem-cake'],
    isPopular: true
  },
  {
    id: 'fert-seaweed-fertilizer',
    slug: 'seaweed-fertilizer',
    name: 'Seaweed Organic Fertilizer (Sargassum Extract)',
    localNames: {
      en: 'Liquid Seaweed Fertilizer / Marine Algae Extract',
      hi: 'समुद्री घास की खाद (Samudri Ghaas Khaad)',
      gu: 'દરિયાઈ શેવાળનું ખાતર (Dariyai Sheval nu Khaatar)',
      mr: 'समुद्री शेवाळ खत (Samudri Sheval Khat)'
    },
    category: 'Liquid organic',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Marine super-food harvested from Indian coastal waters (Gujarat and Tamil Nadu), rich in over 60 trace minerals, natural cytokinins, and plant stress adaptogens.',
    detailedIntro: 'Extracted sustainably from brown marine seaweeds (Sargassum and Kappaphycus) found along the Gujarat Saurashtra and Tamil Nadu coastlines, seaweed organic fertilizer provides plants with over 60 chelated trace elements, natural auxins, and betaines that help crops survive intense Indian summer heatwaves.',
    mainBenefits: [
      'Helps plants withstand extreme summer heat (45°C+), drought, and transplant shock.',
      'Supplies over 60 bio-chelated trace minerals and natural growth hormones (cytokinins and auxins).',
      'Accelerates root elongation and lateral root branching.',
      'Enhances flower bud formation and prolongs vase life of cut flowers.'
    ],
    ingredients: [
      { name: 'Brown marine algae extract (Sargassum wightii / Ascophyllum nodosum)', quantity: '100%', purpose: 'Natural phytohormones, betaines, alginic acid, and 60+ trace minerals' }
    ],
    preparation: {
      prepTime: 'Commercial liquid or granule / 5 minutes dilution',
      fermentationTime: 'Immediate upon dilution',
      toolsRequired: ['Foliar sprayer', 'Measuring cap'],
      steps: [
        'Method of Dilution:',
        '1. Shake the liquid seaweed bottle well.',
        '2. Measure 2 to 3 ml of seaweed liquid concentrate per 1 liter of clean water.',
        '3. Mix thoroughly; the water turns light brownish-green.',
        '4. Spray on foliage or drench root zone.'
      ],
      mixingInstructions: 'Can be safely tank-mixed with neem oil or vermicompost tea.',
      storageInstructions: 'Store in cool place out of direct sunlight.',
      signsOfSuccess: 'Dark brown viscous liquid with mild oceanic salty aroma.',
      commonMistakes: ['Overdosing (always follow 2-3 ml per liter ratio; more is not better).'],
      safetyPrecautions: ['Safe, non-toxic, eco-friendly.'],
      estimatedCost: '₹150 - ₹250 for a 250ml bottle (makes 100 liters of spray).'
    },
    application: {
      suitablePlants: ['All indoor plants', 'Flowering roses, Hibiscus, Orchids', 'Bonsai plants', 'Terrace vegetables during summer'],
      avoidPlants: ['None.'],
      recommendedQuantity: 'Foliar spray: 2 ml per liter; Soil drench: 3 ml per liter.',
      dilutionRatio: '2 to 3 ml per 1 liter water.',
      applicationFrequency: 'Once every 15 to 20 days.',
      bestTime: 'Early morning or evening.',
      soilApplication: 'Pour around root zone.',
      foliarSpray: 'Fine mist over leaves for rapid absorption.'
    },
    nutritionalContribution: {
      nitrogen: '1.0%',
      phosphorus: '0.5%',
      potassium: '3.0% - 5.0%',
      micronutrients: 'Boron, Iron, Zinc, Copper, Molybdenum, Iodine, Alginic acid, and Mannitol.',
      microbialActivity: 'Stimulates native soil microbial activity.'
    },
    soilBenefits: [
      'Alginic acid binds with soil metal ions to form moisture-retaining gels.'
    ],
    shelfLife: '24 months.',
    faqs: [
      {
        question: 'How does Seaweed extract protect plants during hot 40°C Indian summers?',
        answer: 'Seaweed contains high concentrations of natural osmoprotectants (betaines and mannitol) that strengthen cellular membranes against dehydration and sunburn, allowing plants to stay lush and green during peak heat.'
      }
    ],
    relatedFertilizerSlugs: ['panchagavya', 'vermicompost', 'banana-peel-fertilizer'],
    isPopular: true
  }
];
