# Vaijanath Plant Nursery

> **India's Premier Digital Plant Nursery & Organic Gardening Platform**  
> An independent project for Indian plants and organic gardening.

---

## 🌿 1. Project Overview

**Vaijanath Plant Nursery** is an end-to-end full-stack digital botanical knowledge platform dedicated to promoting Indian native plants, agro-biodiversity, and Vedic organic fertilizers (Jeevamrut, Beejamrut, Panchagavya, Vermicompost).

Unlike generic gardening platforms, every plant and fertilizer is calibrated for **India-specific climates, monsoon cycles, high summer temperatures (40°C+), and traditional Indian gardening techniques**.

---

## ✨ 2. Key Features

1. **Complete Global Navigation & Search:**
   - Real-time instant search across common names, scientific classifications, regional Indian names (Hindi, Gujarati, Marathi), and plant benefits.
   - Quick-jump dropdown suggestions.
2. **20+ Structured Indian Plants:**
   - Holy Basil (Tulsi), Neem, Aloe Vera, Money Plant, Mango (Kesar/Alphonso), Guava, Kagzi Lemon, Desi Damask Rose, Hibiscus (Gudhal), Banyan (Vad), Peepal, Sita Ashoka, Curry Leaf (Kadi Patta), Amla, Marigold (Genda), Jasmine (Mogra), Moringa (Sahjan), Snake Plant, Areca Palm, Ashwagandha, and Betel Leaf (Nagarvel Paan).
   - Deep structured data covering: Botany, Medicinal vs Traditional uses, Indian climate zones, Step-by-step planting, Watering & seasonal adjustments, Organic fertilizer schedule, Maintenance/Pruning, and Natural pest control.
3. **15 Traditional Indian Organic Fertilizers:**
   - Full preparation recipes, ingredient quantities, fermentation timelines, application dosages, and N-P-K contributions for:
     * Vermicompost (Earthworm Castings)
     * Aged Cow Dung Manure (Gobar Khad)
     * Jeevamrut (Subhash Palekar ZBNF microbial culture)
     * Beejamrut (Biological seed treatment)
     * Panchagavya (Sacred 5-cow biostimulant)
     * Kitchen Waste Compost
     * Banana Peel Potassium Tea
     * Eggshell Calcium Booster
     * Neem Cake (Neem Khali - natural pesticide & fertilizer)
     * Mustard Cake (Sarson Khali - winter bloom booster)
     * Wood Ash (Chulhe ki Raakh)
     * Leaf Mold (Fallen leaves humus)
     * Rice Husk Compost / Biochar
     * Sour Buttermilk Spray (Khatti Chhachh + copper biofungicide)
     * Coastal Seaweed Organic Extract
4. **Multilingual Support (4 Indian Languages):**
   - English (`en`)
   - Gujarati (`gu`) - ગુજરાતી
   - Hindi (`hi`) - हिन्दी
   - Marathi (`mr`) - मराठी
   - Easily extensible architecture for Bengali, Tamil, Telugu, and Kannada.
5. **AI Gardening Assistant (Google Gemini 3.8 Flash):**
   - Context-aware plant diagnosis, organic remedy recommendations, and seasonal care tips.
   - Multilingual interaction in English, Gujarati, Hindi, or Marathi.
   - Automatic fallback system for 100% reliable uptime.
6. **User Profiles & Saved Favorites:**
   - Save favorite plants and fertilizer recipes locally or via user profile.
   - Recently viewed plant tracking.
   - Gardening interest personalization.

---

## 🛠️ 3. Technology Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Lucide Icons
- **Backend:** Node.js, Express.js REST API
- **AI Integration:** `@google/genai` (Gemini 3.8 Flash)
- **Tooling:** Vite, TSX, PostCSS

---

## 📁 4. Project Structure

```
├── .env.example              # Environment variables template
├── metadata.json             # Applet capabilities & metadata
├── package.json              # Full-stack dependencies & scripts
├── server.ts                 # Full-stack Express API & Vite server
├── index.html                # SEO entry point with botanical metadata
├── src/
│   ├── App.tsx               # Primary application router & state
│   ├── main.tsx              # React mounting root
│   ├── index.css             # Tailwind base & botanical color palette
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces (Plant, Fertilizer, User, etc.)
│   ├── data/
│   │   ├── categories.ts     # 20 botanical category definitions
│   │   ├── plants.ts         # Initial batch of Indian plants
│   │   ├── morePlants.ts     # Second batch of Indian plants
│   │   ├── allPlants.ts      # Merged 21+ plant dataset
│   │   └── fertilizers.ts   # 15 organic fertilizer recipes
│   ├── context/
│   │   ├── LanguageContext.tsx # Language selector & translation hook
│   │   └── AuthContext.tsx     # User auth & favorites persistence
│   ├── i18n/
│   │   └── translations.ts   # Dictionaries for EN, GU, HI, MR
│   ├── components/
│   │   ├── Navbar.tsx        # Global responsive navbar & search
│   │   ├── Footer.tsx        # Verified owner links & contact
│   │   ├── PlantCard.tsx     # Grid & list botanical card
│   │   ├── FertilizerCard.tsx # Fertilizer recipe card
│   │   ├── FavoritesModal.tsx # Saved plants & fertilizers modal
│   │   └── AuthModal.tsx      # Sign-in & profile dashboard modal
│   └── pages/
│       ├── HomePage.tsx      # Landing page matching mockup
│       ├── PlantsPage.tsx    # Filterable & searchable plant directory
│       ├── PlantDetailPage.tsx # Deep 9-tab plant profile
│       ├── CategoriesPage.tsx # 20 category browser
│       ├── FertilizersPage.tsx # 15 organic fertilizer listings
│       ├── FertilizerDetailPage.tsx # Preparation & application guide
│       ├── AiAssistantPage.tsx # Gemini AI gardening assistant
│       └── AboutPage.tsx     # Owner info & nursery contact
```

---

## 🚀 5. How to Run the Project

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# 1. Clone repository and install dependencies
npm install

# 2. Run the full-stack development server
npm run dev
```

The application will be live at `http://localhost:3000`.

### Building for Production
```bash
npm run build
npm start
```

---

## 🔑 6. Environment Configuration

Copy `.env.example` to `.env`:
```bash
GEMINI_API_KEY="your-gemini-api-key-here"
PORT=3000
```

> **Note:** If `GEMINI_API_KEY` is not provided, the AI Assistant automatically falls back to the built-in botanical knowledge base so all queries still receive helpful Indian gardening answers!

---

## 🌸 7. How to Add a New Plant or Fertilizer

### Adding a Plant:
1. Open `src/data/morePlants.ts` or create a new data file.
2. Add an object conforming to the `Plant` interface from `src/types/index.ts`.
3. Include high-quality Unsplash botanical imagery, scientific names, regional Hindi/Gujarati/Marathi names, and verified growing conditions.

### Adding an Organic Fertilizer:
1. Open `src/data/fertilizers.ts`.
2. Add a new record conforming to `Fertilizer` interface with exact quantities in `ingredients`, step-by-step preparation, and dilution ratios.

---

## 🔮 8. Future Roadmap

- [ ] **Nearby Nurseries Discovery:** GPS-based nursery locator for Gujarat and Pan-India.
- [ ] **Plant Delivery & Nursery Ordering:** Shopping cart and doorstep delivery of saplings and organic fertilizer kits.
- [ ] **Mobile Native Apps:** Reusable React Native / Kotlin frontend sharing the existing Express backend API.

---

**Built for Indian green enthusiasts.**
"# vaijanath_plant_nursery" 
