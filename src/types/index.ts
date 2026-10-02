export type Language = 'en' | 'gu' | 'hi' | 'mr';

export interface RegionalNames {
  en: string;
  hi?: string;
  gu?: string;
  mr?: string;
  ta?: string;
  te?: string;
  bn?: string;
  kn?: string;
}

export interface PlantUses {
  medicinal: string[];
  traditional: string[];
  culinary: string[];
  agricultural: string[];
  environmental: string[];
  cultural: string[];
  economic: string[];
  wildlife: string[];
}

export interface GrowingConditions {
  climate: string;
  temperatureRange: string;
  sunlight: 'Full Sun' | 'Partial Shade' | 'Indirect Bright Light' | 'Full Shade' | string;
  soilType: string;
  soilPh: string;
  drainage: string;
  humidity: string;
  indianRegions: string[];
  indoorOutdoor: 'Indoor' | 'Outdoor' | 'Both';
  suitableLocations: string[];
}

export interface PlantingGuide {
  bestSeason: string;
  idealLocation: string;
  seedPreparation: string;
  germinationTime: string;
  potOrGround: string;
  stepByStepInstructions: string[];
  recommendedSpacing: string;
  plantingDepth: string;
  transplanting: string;
  initialCare: string;
}

export interface WateringGuide {
  requirement: 'Low' | 'Moderate' | 'High' | 'Very Low';
  frequency: string;
  dripSuitability: boolean;
  irrigationMethod: string;
  underwateringSigns: string;
  overwateringSigns: string;
  seasonalAdjustments: string;
}

export interface FertilizerGuide {
  recommendedOrganic: string[];
  frequency: string;
  applicationMethod: string;
  deficiencySymptoms: string;
  precautions: string;
}

export interface PlantMaintenance {
  pruning: string;
  weedControl: string;
  mulching: string;
  growthRate: 'Slow' | 'Moderate' | 'Fast' | string;
  matureHeight: string;
  matureSpread: string;
  expectedLifespan: string;
  propagationMethods: string[];
  floweringSeason: string;
  fruitingSeason?: string;
  harvesting?: string;
}

export interface CommonProblems {
  pests: string[];
  diseases: string[];
  symptoms: string;
  prevention: string;
  organicRemedies: string[];
}

export interface PlantFAQ {
  question: string;
  answer: string;
}

export interface Plant {
  id: string;
  slug: string;
  commonName: string;
  scientificName: string;
  regionalNames: RegionalNames;
  family: string;
  genus: string;
  species: string;
  category: string;
  plantType: 'Herb' | 'Shrub' | 'Tree' | 'Climber' | 'Succulent' | 'Aquatic';
  nativeRegion: string;
  distributionInIndia: string;
  primaryImage: string;
  galleryImages: string[];
  shortIntro: string;
  detailedDescription: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  beginnerFriendly: boolean;
  petSafe: boolean | string;
  uses: PlantUses;
  growingConditions: GrowingConditions;
  plantingGuide: PlantingGuide;
  wateringGuide: WateringGuide;
  fertilizerGuide: FertilizerGuide;
  maintenance: PlantMaintenance;
  problems: CommonProblems;
  faqs: PlantFAQ[];
  relatedPlantSlugs?: string[];
  isPopular?: boolean;
}

export interface FertilizerIngredient {
  name: string;
  quantity: string;
  purpose: string;
}

export interface FertilizerPreparation {
  prepTime: string;
  fermentationTime: string;
  toolsRequired: string[];
  steps: string[];
  mixingInstructions: string;
  storageInstructions: string;
  signsOfSuccess: string;
  commonMistakes: string[];
  safetyPrecautions: string[];
  estimatedCost: string;
}

export interface FertilizerApplication {
  suitablePlants: string[];
  avoidPlants: string[];
  recommendedQuantity: string;
  dilutionRatio: string;
  applicationFrequency: string;
  bestTime: string;
  soilApplication: string;
  foliarSpray: string;
}

export interface Fertilizer {
  id: string;
  slug: string;
  name: string;
  localNames: RegionalNames;
  category: 'Animal-based' | 'Plant-based' | 'Kitchen-waste' | 'Compost' | 'Liquid organic' | 'Biofertilizer' | 'Soil amendment' | 'Traditional Indian';
  image: string;
  shortDescription: string;
  detailedIntro: string;
  mainBenefits: string[];
  ingredients: FertilizerIngredient[];
  preparation: FertilizerPreparation;
  application: FertilizerApplication;
  nutritionalContribution: {
    nitrogen: string;
    phosphorus: string;
    potassium: string;
    micronutrients: string;
    microbialActivity: string;
  };
  soilBenefits: string[];
  shelfLife: string;
  faqs: PlantFAQ[];
  relatedFertilizerSlugs?: string[];
  isPopular?: boolean;
}

export interface PlantCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  plantCount: number;
  iconName: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferredLanguage: Language;
  location?: string;
  gardeningInterests?: string[];
  favoritePlantIds: string[];
  favoriteFertilizerIds: string[];
  avatarUrl?: string;
  createdAt: string;
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  contextPlant?: string;
}
