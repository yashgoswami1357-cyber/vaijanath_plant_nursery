import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { ALL_PLANTS } from './src/data/allPlants';
import { FERTILIZERS } from './src/data/fertilizers';
import { PLANT_CATEGORIES } from './src/data/categories';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry User-Agent
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// In-memory mock database for users & session tokens
interface StoredUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  location?: string;
  gardeningInterests: string[];
  favoritePlantIds: string[];
  favoriteFertilizerIds: string[];
  createdAt: string;
}

const USERS: StoredUser[] = [
  {
    id: 'usr_default',
    name: 'Yash Goswami',
    email: 'montugoswami1357@gmail.com',
    passwordHash: 'dummy_hash',
    location: 'Kukarwada, Gujarat, India',
    gardeningInterests: ['Medicinal Plants', 'Organic Fertilizers', 'Fruit Trees'],
    favoritePlantIds: ['plant-tulsi', 'plant-neem', 'plant-mango'],
    favoriteFertilizerIds: ['fert-jeevamrut', 'fert-vermicompost'],
    createdAt: new Date().toISOString()
  }
];

// --- REST API ROUTES ---

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Vaijanath Plant Nursery',
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    totalPlants: ALL_PLANTS.length,
    totalFertilizers: FERTILIZERS.length
  });
});

// 2. Plants API
app.get('/api/plants', (req, res) => {
  const { category, search, sunlight, water, difficulty } = req.query;
  let results = [...ALL_PLANTS];

  if (category && typeof category === 'string') {
    results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (sunlight && typeof sunlight === 'string') {
    results = results.filter(p => p.growingConditions.sunlight.toLowerCase().includes(sunlight.toLowerCase()));
  }

  if (water && typeof water === 'string') {
    results = results.filter(p => p.wateringGuide.requirement.toLowerCase() === water.toLowerCase());
  }

  if (difficulty && typeof difficulty === 'string') {
    results = results.filter(p => p.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    results = results.filter(p => 
      p.commonName.toLowerCase().includes(q) ||
      p.scientificName.toLowerCase().includes(q) ||
      (p.regionalNames.hi && p.regionalNames.hi.toLowerCase().includes(q)) ||
      (p.regionalNames.gu && p.regionalNames.gu.toLowerCase().includes(q)) ||
      p.shortIntro.toLowerCase().includes(q)
    );
  }

  res.json({
    count: results.length,
    plants: results
  });
});

app.get('/api/plants/:idOrSlug', (req, res) => {
  const param = req.params.idOrSlug.toLowerCase();
  const plant = ALL_PLANTS.find(p => p.id.toLowerCase() === param || p.slug.toLowerCase() === param);
  if (!plant) {
    return res.status(404).json({ error: 'Plant record not found' });
  }
  res.json(plant);
});

// 3. Fertilizers API
app.get('/api/fertilizers', (req, res) => {
  const { category, search } = req.query;
  let results = [...FERTILIZERS];

  if (category && typeof category === 'string') {
    results = results.filter(f => f.category.toLowerCase() === category.toLowerCase());
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    results = results.filter(f => 
      f.name.toLowerCase().includes(q) ||
      f.shortDescription.toLowerCase().includes(q) ||
      (f.localNames.hi && f.localNames.hi.toLowerCase().includes(q)) ||
      (f.localNames.gu && f.localNames.gu.toLowerCase().includes(q))
    );
  }

  res.json({
    count: results.length,
    fertilizers: results
  });
});

app.get('/api/fertilizers/:idOrSlug', (req, res) => {
  const param = req.params.idOrSlug.toLowerCase();
  const fertilizer = FERTILIZERS.find(f => f.id.toLowerCase() === param || f.slug.toLowerCase() === param);
  if (!fertilizer) {
    return res.status(404).json({ error: 'Fertilizer record not found' });
  }
  res.json(fertilizer);
});

// 4. Categories API
app.get('/api/categories', (req, res) => {
  res.json(PLANT_CATEGORIES);
});

// 5. User Auth & Profiles
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, location, gardeningInterests } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const existing = USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.status(400).json({ error: 'User with this email already exists' });
  }

  const newUser: StoredUser = {
    id: 'usr_' + Date.now(),
    name,
    email,
    passwordHash: 'hashed_' + (password || 'default'),
    location: location || 'Gujarat, India',
    gardeningInterests: gardeningInterests || ['Medicinal Plants', 'Organic Fertilizers'],
    favoritePlantIds: ['plant-tulsi', 'plant-neem'],
    favoriteFertilizerIds: ['fert-vermicompost'],
    createdAt: new Date().toISOString()
  };

  USERS.push(newUser);

  res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      location: newUser.location,
      gardeningInterests: newUser.gardeningInterests,
      favoritePlantIds: newUser.favoritePlantIds,
      favoriteFertilizerIds: newUser.favoriteFertilizerIds,
      createdAt: newUser.createdAt
    },
    token: 'jwt_mock_' + newUser.id
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  let user = USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    // Auto-create for seamless prototype experience
    user = {
      id: 'usr_' + Date.now(),
      name: email.split('@')[0].replace('.', ' '),
      email,
      passwordHash: 'dummy',
      location: 'Gujarat, India',
      gardeningInterests: ['Medicinal Plants', 'Organic Fertilizers'],
      favoritePlantIds: ['plant-tulsi', 'plant-neem'],
      favoriteFertilizerIds: ['fert-vermicompost'],
      createdAt: new Date().toISOString()
    };
    USERS.push(user);
  }

  res.json({
    message: 'Logged in successfully',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      location: user.location,
      gardeningInterests: user.gardeningInterests,
      favoritePlantIds: user.favoritePlantIds,
      favoriteFertilizerIds: user.favoriteFertilizerIds,
      createdAt: user.createdAt
    },
    token: 'jwt_mock_' + user.id
  });
});

app.post('/api/auth/update-profile', (req, res) => {
  const { name, location, gardeningInterests, favoritePlantIds, favoriteFertilizerIds } = req.body;
  const user = USERS[0]; // Update primary active user
  if (name) user.name = name;
  if (location) user.location = location;
  if (gardeningInterests) user.gardeningInterests = gardeningInterests;
  if (favoritePlantIds) user.favoritePlantIds = favoritePlantIds;
  if (favoriteFertilizerIds) user.favoriteFertilizerIds = favoriteFertilizerIds;

  res.json({
    message: 'Profile updated',
    user
  });
});

// 6. AI Gardening Assistant with Gemini API
app.post('/api/ai/chat', async (req, res) => {
  const { prompt, contextPlant, language = 'en', history = [] } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // System instruction for India-specific gardening & organic agriculture
  const systemInstruction = `
You are "Montu" (મોન્ટુ / मोंटू), the master gardener and friendly senior AI botanical specialist at "Vaijanath Plant Nursery", founded by Yash Goswami, located in Kukarwada, Gujarat, India.

Your persona:
- Friendly, experienced Indian plant mentor named Montu.
- Address the user warmly with "Namaste" or traditional respectful greeting.

Your primary mission:
1. Provide accurate, practical, and culturally rooted Indian gardening advice as Montu.
2. Emphasize native Indian climate conditions (Monsoon humidity, 40°C+ summer heatwaves, dry winter).
3. Strongly advocate traditional Indian organic remedies: Jeevamrut, Panchagavya, Vermicompost, Neem seed oil (NSKE 5%), sour buttermilk spray (Khatti Chhachh with copper), and wood ash over synthetic chemical pesticides.
4. When medicinal or Ayurvedic plants (like Tulsi, Neem, Amla, Ashwagandha) are discussed, clearly distinguish traditional wellness knowledge from clinical advice. Include sensible safety precautions.
5. If a context plant is provided (Current Subject: "${contextPlant || 'None'}"), tailor your direct advice around that plant's specific needs.
6. Language: Respond fluently in the requested Indian language or dialect:
   - If language is 'gu': Respond in natural, polite Gujarati (ગુજરાતી) as Montu (મોન્ટુ).
   - If language is 'hi': Respond in clear, polite Hindi (हिन्दी) as Montu (मोंटू).
   - If language is 'mr': Respond in Marathi (मराठी).
   - If language is 'en': Respond in warm Indian English with familiar terms (e.g. Kadha, Gudai, Chhachh, Khali, Gobar).
7. Keep responses concise, step-by-step, actionable, and encouraging for home gardeners and farmers.
`;

  try {
    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const text = response.text || 'Thank you for consulting Vaijanath Plant Nursery. How else can I assist your garden?';
      return res.json({ text });
    } else {
      // Graceful local expert fallback if GEMINI_API_KEY is not yet populated
      let fallbackText = "In Indian climates, ensure well-draining soil with 30% vermicompost and river sand. Water deeply only when topsoil is dry. For pest attacks, spray cold-pressed neem oil (5ml/L with 2 drops soap) or sour buttermilk (1:10 dilution) in the early morning.";

      const q = prompt.toLowerCase();
      if (q.includes('tulsi')) {
        fallbackText = "For Tulsi (Holy Basil): Ensure 4-6 hours of morning direct sunlight. In North & West Indian winters, protect from cold night winds and reduce watering to prevent fungal collar rot. Regularly pinch off flowering spikes (Manjari) to maintain a bushy, leaf-dense plant.";
      } else if (q.includes('jeevamrut')) {
        fallbackText = "To prepare authentic Jeevamrut at home: Mix 10kg Desi cow dung, 10L cow urine, 2kg organic jaggery, 2kg besan, and a handful of Banyan tree soil in 200L water. Stir clockwise for 2 minutes twice a day for 48-72 hours in shade. Dilute 1:10 before applying to pots.";
      } else if (q.includes('lemon') || q.includes('nimbu')) {
        fallbackText = "Curling leaves on Kagzi Lemon are commonly caused by Citrus Leaf Miner larvae or aphids. Prune badly curled tips, avoid excess chemical nitrogen, and spray neem oil emulsion (5ml/L) early in the morning every 7 days.";
      } else if (q.includes('gujarat') || q.includes('kukarwada')) {
        fallbackText = "In Gujarat's semi-arid climate with intense summers, use deep mulching with dry leaves or sugarcane bagasse, and water pots early in the morning. Neem, Bougainvillea, Mogra, Aloe Vera, and Guava flourish exceptionally well.";
      }

      return res.json({ 
        text: fallbackText,
        note: 'Generated via Vaijanath Botanical Knowledgebase' 
      });
    }
  } catch (err: any) {
    console.error('Gemini API execution error:', err?.message || err);
    return res.json({
      text: "For organic plant health in Indian conditions: Maintain loose loamy soil with 30% vermicompost, water deeply when the top 1 inch is dry, and spray diluted neem oil (5ml/L) every 15 days to deter common pests.",
      error: 'Fallback response active'
    });
  }
});

// 7. Project ZIP download endpoint
app.get(['/download-zip', '/vaijanath-plant-nursery.zip', '/api/download-zip'], (req, res) => {
  const zipPath = path.resolve(__dirname, 'public/vaijanath-plant-nursery.zip');
  if (fs.existsSync(zipPath)) {
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="vaijanath-plant-nursery.zip"');
    return res.sendFile(zipPath);
  }
  return res.status(404).json({ error: 'Project zip file not found' });
});

// Setup Vite middleware in dev or static serving in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌿 Vaijanath Plant Nursery server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
