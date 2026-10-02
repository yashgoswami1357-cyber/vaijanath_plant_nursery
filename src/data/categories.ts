import { PlantCategory } from '../types';

export const PLANT_CATEGORIES: PlantCategory[] = [
  {
    id: 'cat-indoor',
    name: 'Indoor Plants',
    slug: 'indoor-plants',
    description: 'Plants that thrive in shaded home environments and improve indoor ambiance.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
    plantCount: 18,
    iconName: 'Home'
  },
  {
    id: 'cat-outdoor',
    name: 'Outdoor Plants',
    slug: 'outdoor-plants',
    description: 'Sun-loving resilient plants suitable for gardens, courtyards, and open spaces.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
    plantCount: 32,
    iconName: 'Sun'
  },
  {
    id: 'cat-trees',
    name: 'Trees',
    slug: 'trees',
    description: 'Majestic perennial shade and oxygen-giving trees native to the Indian subcontinent.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    plantCount: 24,
    iconName: 'TreePine'
  },
  {
    id: 'cat-vegetables',
    name: 'Vegetables',
    slug: 'vegetables',
    description: 'Fresh kitchen garden staples adapted to warm Indian sub-climates and seasons.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23995?auto=format&fit=crop&w=600&q=80',
    plantCount: 15,
    iconName: 'Carrot'
  },
  {
    id: 'cat-fruits',
    name: 'Fruits',
    slug: 'fruits',
    description: 'Juicy tropical and subtropical fruit-bearing trees and backyard cultivars.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80',
    plantCount: 16,
    iconName: 'Apple'
  },
  {
    id: 'cat-flowers',
    name: 'Flowers',
    slug: 'flowers',
    description: 'Fragrant and colorful blooms used for Indian festivals, worship, and decoration.',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600&q=80',
    plantCount: 22,
    iconName: 'Flower2'
  },
  {
    id: 'cat-herbs',
    name: 'Herbs',
    slug: 'herbs',
    description: 'Aromatic culinaries and therapeutic greens essential for Indian kitchens.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80',
    plantCount: 14,
    iconName: 'Leaf'
  },
  {
    id: 'cat-medicinal',
    name: 'Medicinal Plants',
    slug: 'medicinal-plants',
    description: 'Ayurvedic wellness herbs with documented traditional and herbal healing benefits.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    plantCount: 26,
    iconName: 'Cross'
  },
  {
    id: 'cat-climbers',
    name: 'Climbers',
    slug: 'climbers',
    description: 'Vigorous vines and creepers ideal for boundary walls, arches, and trellises.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    plantCount: 11,
    iconName: 'GitBranch'
  },
  {
    id: 'cat-shrubs',
    name: 'Shrubs',
    slug: 'shrubs',
    description: 'Medium-height bushy plants that form lush green hedges and garden borders.',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80',
    plantCount: 17,
    iconName: 'Trees'
  },
  {
    id: 'cat-succulents',
    name: 'Succulents',
    slug: 'succulents',
    description: 'Fleshy water-storing plants perfect for busy owners and bright window sills.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80',
    plantCount: 12,
    iconName: 'Sparkles'
  },
  {
    id: 'cat-cacti',
    name: 'Cacti',
    slug: 'cacti',
    description: 'Desert beauties requiring minimal watering and thriving in dry Indian summers.',
    image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=600&q=80',
    plantCount: 8,
    iconName: 'ShieldAlert'
  },
  {
    id: 'cat-ornamental',
    name: 'Ornamental Plants',
    slug: 'ornamental-plants',
    description: 'Exquisite foliage and flowering varieties cultivated for visual aesthetic grandeur.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80',
    plantCount: 20,
    iconName: 'Gem'
  },
  {
    id: 'cat-aromatic',
    name: 'Aromatic Plants',
    slug: 'aromatic-plants',
    description: 'Plants releasing intoxicating natural fragrances that purify ambient air.',
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80',
    plantCount: 13,
    iconName: 'Wind'
  },
  {
    id: 'cat-spices',
    name: 'Spices',
    slug: 'spices',
    description: 'India’s legendary condiment plants from peppercorns to fresh fragrant turmeric.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80',
    plantCount: 10,
    iconName: 'Flame'
  },
  {
    id: 'cat-native',
    name: 'Native Indian Plants',
    slug: 'native-indian-plants',
    description: 'Indigenously adapted plants naturally resilient to local pest and weather conditions.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    plantCount: 35,
    iconName: 'MapPin'
  },
  {
    id: 'cat-aquatic',
    name: 'Aquatic Plants',
    slug: 'aquatic-plants',
    description: 'Water lilies, lotus, and water-loving botanical species for ponds and water pots.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    plantCount: 7,
    iconName: 'Droplet'
  },
  {
    id: 'cat-balcony',
    name: 'Balcony Plants',
    slug: 'balcony-plants',
    description: 'Space-efficient potted varieties suited for modern apartment railings and corners.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
    plantCount: 25,
    iconName: 'LayoutGrid'
  },
  {
    id: 'cat-terrace',
    name: 'Terrace Garden Plants',
    slug: 'terrace-garden-plants',
    description: 'Hearty plants capable of enduring open sun exposure on Indian rooftops.',
    image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=600&q=80',
    plantCount: 28,
    iconName: 'Building'
  },
  {
    id: 'cat-air-purifying',
    name: 'Air-Purifying Plants',
    slug: 'air-purifying-plants',
    description: 'NASA-recommended natural filters that remove VOCs, benzene, and dust from homes.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
    plantCount: 16,
    iconName: 'ShieldCheck'
  }
];
