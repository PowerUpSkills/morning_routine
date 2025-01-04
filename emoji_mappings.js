// script.js

// Emoji mappings and matching function
const emojiMappings = {
    // Activity & Exercise
  "💪": {
    keywords: ["exercise", "workout", "gym", "strength", "muscle", "training", "fitness", "strong", "power", "lift", "physical", "sport", "athletics", "bodybuilding", "crossfit", "weights", "train", "flex", "conditioning", "movement"],
  },
  "🏃": {
    keywords: ["run", "jog", "sprint", "running", "jogging", "exercise", "move", "hurry", "rush", "dash", "race", "speed", "cardio", "athletics", "fitness", "marathon", "track", "fast", "workout", "train"],
  },
  "🧘": {
    keywords: ["meditate", "yoga", "mindfulness", "relax", "calm", "peace", "balance", "zen", "focus", "breathe", "stretch", "pose", "wellness", "mental", "mindful", "concentration", "quiet", "stillness", "harmony", "rest"],
  },

  // Food & Nutrition
  "🥗": {
    keywords: ["food", "salad", "eat", "healthy", "vegetable", "nutrition", "meal", "diet", "organic", "fresh", "green", "veggie", "lunch", "dinner", "cooking", "prepare", "vegetables", "nutritious", "health", "bowl"],
  },
  "🍳": {
    keywords: ["cook", "cooking", "prepare", "food", "meal", "breakfast", "kitchen", "chef", "recipe", "fry", "make", "bake", "create", "eggs", "pan", "stove", "culinary", "dish", "brunch", "cuisine"],
  },

  // Personal Care
  "💅": {
    keywords: ["nails", "manicure", "care", "beauty", "grooming", "polish", "cosmetic", "hand", "finger", "style", "salon", "treatment", "paint", "pedicure", "hygiene", "appearance", "maintain", "clean", "pretty", "fashion"],
  },
  "🚿": {
    keywords: ["shower", "wash", "clean", "bath", "hygiene", "water", "refresh", "morning", "routine", "bathroom", "cleanse", "rinse", "bathe", "fresh", "prepare", "groom", "washing", "cleaning", "start", "begin"],
  },

  // Communication
  "📞": {
    keywords: ["call", "phone", "contact", "talk", "speak", "communicate", "conversation", "dial", "telephone", "chat", "ring", "voice", "discussion", "reach", "connect", "communication", "calling", "mobile", "message", "discuss"],
  },
  "📧": {
    keywords: ["email", "mail", "message", "write", "send", "communicate", "contact", "inbox", "correspondence", "letter", "communication", "digital", "work", "business", "respond", "reply", "check", "compose", "electronic", "messaging"],
  },

  // Work & Productivity
  "💻": {
    keywords: ["computer", "work", "laptop", "online", "digital", "type", "write", "tech", "technology", "office", "screen", "device", "program", "code", "browse", "internet", "web", "computing", "remote", "virtual"],
  },
  "📝": {
    keywords: ["write", "note", "document", "text", "compose", "create", "paper", "record", "list", "draft", "author", "writing", "compose", "journal", "diary", "blog", "edit", "report", "study", "work"],
  },
  "✍️": {
    keywords: ["write", "blog", "author", "create", "compose", "creative", "text", "story", "content", "article", "post", "writing", "document", "journal", "record", "draft", "blogging", "publish", "express", "communicate"],
  },

  // Clothing & Appearance
  "👔": {
    keywords: ["iron", "clothes", "clothing", "dress", "formal", "work", "prepare", "professional", "suit", "business", "attire", "fashion", "wear", "garment", "clean", "press", "laundry", "outfit", "appearance", "style"],
  },
  "👕": {
    keywords: ["clothes", "laundry", "wash", "clothing", "dress", "wear", "clean", "fold", "iron", "shirt", "outfit", "garment", "wardrobe", "attire", "fashion", "change", "casual", "prepare", "fresh", "organize"],
  },

  // Organization & Cleaning
  "🧹": {
    keywords: ["clean", "sweep", "organize", "tidy", "housework", "chore", "dust", "floor", "cleaning", "maintenance", "home", "house", "routine", "sweep", "arrangement", "neat", "order", "maintain", "domestic", "task"],
  },
  "🗑️": {
    keywords: ["trash", "garbage", "clean", "dispose", "waste", "remove", "throw", "clear", "empty", "organize", "declutter", "tidy", "eliminate", "discard", "collect", "bin", "cleanup", "disposal", "dump", "away"],
  },

  // Planning & Time Management
  "📅": {
    keywords: ["schedule", "plan", "calendar", "organize", "appointment", "date", "time", "event", "meeting", "planning", "agenda", "reminder", "upcoming", "arrange", "timing", "program", "coordination", "management", "routine", "timetable"],
  },
  "⏰": {
    keywords: ["time", "wake", "alarm", "morning", "schedule", "early", "hour", "clock", "reminder", "alert", "timing", "routine", "start", "begin", "prompt", "timer", "punctual", "deadline", "period", "duration"],
  },

  // Home & Living
  "🏠": {
    keywords: ["home", "house", "clean", "organize", "maintain", "living", "domestic", "household", "room", "space", "residence", "indoor", "interior", "decoration", "arrangement", "setup", "place", "dwelling", "habitat", "shelter"],
  },
  "🛋️": {
    keywords: ["furniture", "arrange", "organize", "decorate", "home", "living", "room", "house", "interior", "setup", "place", "position", "move", "design", "layout", "space", "arrangement", "domestic", "decor", "furnishing"],
  },

  // Health & Wellness
  "💊": {
    keywords: ["medicine", "health", "pill", "medication", "vitamin", "supplement", "prescription", "drug", "medical", "treatment", "care", "pharmacy", "dose", "healing", "wellness", "take", "remedy", "healthcare", "tablet", "capsule"],
  },
  "🧠": {
    keywords: ["think", "mental", "brain", "focus", "study", "learn", "concentrate", "cognitive", "mind", "memory", "intellectual", "knowledge", "thought", "education", "understanding", "comprehension", "intelligence", "wisdom", "smart", "mental"],
  },
"💼": {
        keywords: ["work", "office", "job", "business", "meeting", "professional", "career", "corporate", "workplace", "company", "presentation", "client", "colleague", "project", "task", "manager", "report", "deadline", "conference", "briefing"],
      },
      "📊": {
        keywords: ["report", "analysis", "data", "statistics", "chart", "presentation", "graph", "metrics", "performance", "dashboard", "numbers", "review", "progress", "tracking", "measure", "analytics", "results", "reporting", "visualization", "trends"],
      },
      "👥": {
        keywords: ["team", "meeting", "collaboration", "group", "colleagues", "discuss", "people", "staff", "department", "coworkers", "together", "partnership", "cooperation", "teamwork", "gather", "assemble", "coordination", "unite", "collective", "alliance"],
      },
    
      // Shopping & Groceries
      "🛒": {
        keywords: ["shopping", "groceries", "buy", "purchase", "store", "market", "shop", "cart", "supermarket", "retail", "items", "goods", "products", "supplies", "food", "errands", "merchandise", "basket", "checkout", "consumer"],
      },
      "🏪": {
        keywords: ["store", "shop", "market", "retail", "purchase", "convenience", "mall", "shopping", "buy", "goods", "outlet", "mart", "commercial", "vendor", "seller", "business", "boutique", "establishment", "storefront", "merchant"],
      },
      "📝": {
        keywords: ["list", "shopping list", "checklist", "items", "notes", "write", "plan", "organize", "record", "track", "reminder", "inventory", "supplies", "needs", "groceries", "tasks", "bullets", "memo", "document", "planning"],
      },
    
      // Cleaning & Household
      "🧼": {
        keywords: ["clean", "wash", "soap", "sanitize", "hygiene", "bathroom", "kitchen", "household", "disinfect", "cleanse", "scrub", "cleaner", "detergent", "wipe", "polish", "pristine", "spotless", "maintain", "neat", "fresh"],
      },
      "🧽": {
        keywords: ["scrub", "clean", "wash", "dishes", "kitchen", "bathroom", "sink", "counter", "surface", "wipe", "cleanse", "sponge", "household", "chores", "cleaning", "maintenance", "sanitize", "housework", "domestic", "hygiene"],
      },
      
      "🪣": {
        keywords: ["bucket", "clean", "mop", "water", "wash", "floor", "cleaning", "housework", "chores", "household", "maintenance", "domestic", "container", "supplies", "equipment", "tools", "carry", "storage", "utility", "work"],
      },
    
      // Recreation & Gaming
      "🎮": {
        keywords: ["game", "gaming", "play", "console", "videogame", "entertainment", "xbox", "playstation", "nintendo", "controller", "fun", "leisure", "recreational", "digital", "online", "esports", "multiplayer", "stream", "competitive", "virtual"],
      },
      "🎲": {
        keywords: ["game", "board game", "play", "dice", "cards", "tabletop", "monopoly", "chess", "entertainment", "fun", "strategy", "puzzle", "leisure", "recreational", "social", "family", "competition", "together", "evening", "activity"],
      },
      "🎯": {
        keywords: ["target", "goal", "aim", "focus", "objective", "game", "dart", "precision", "accuracy", "achievement", "sport", "competition", "challenge", "practice", "skill", "recreation", "fun", "play", "hobby", "leisure"],
      },
    
      // Relaxation & Leisure
      "🛋️": {
        keywords: ["relax", "rest", "couch", "sofa", "comfort", "chill", "lounge", "sitting", "comfortable", "home", "living room", "furniture", "seat", "relaxation", "leisure", "break", "unwind", "ease", "peaceful", "calm"],
      },
      "🌳": {
        keywords: ["outdoors", "nature", "park", "walk", "fresh air", "outside", "garden", "trees", "relaxation", "peaceful", "stroll", "hiking", "environment", "scenic", "landscape", "natural", "greenery", "recreation", "leisure", "explore"],
      },
      "☕": {
        keywords: ["coffee", "drink", "break", "cafe", "relax", "beverage", "morning", "tea", "hot", "cup", "refresh", "pause", "rest", "comfort", "casual", "social", "coffeeshop", "meeting", "conversation", "leisure"],
      },
    
      // Movies & Entertainment
      "🎬": {
        keywords: ["movie", "film", "cinema", "watch", "entertainment", "show", "video", "theater", "screen", "Netflix", "streaming", "series", "television", "episode", "viewing", "production", "drama", "picture", "motion", "scene"],
      },
      "📺": {
        keywords: ["TV", "television", "watch", "show", "series", "program", "broadcast", "streaming", "entertainment", "screen", "channel", "media", "viewing", "episode", "Netflix", "video", "content", "broadcast", "stream", "binge"],
      },
      "🍿": {
        keywords: ["movie", "snack", "cinema", "watch", "film", "entertainment", "popcorn", "theater", "Netflix", "evening", "snacking", "treat", "munchies", "television", "relaxation", "food", "leisure", "viewing", "enjoyment", "fun"],
      },
    
      // Additional Work Tasks
      "📑": {
        keywords: ["document", "file", "paper", "organize", "paperwork", "admin", "administrative", "form", "report", "records", "documentation", "filing", "papers", "office", "bureaucracy", "folder", "archive", "management", "storage", "system"],
      },
      "📱": {
        keywords: ["phone", "mobile", "call", "message", "text", "communication", "device", "smartphone", "app", "cellular", "contact", "telephone", "chat", "connect", "mobile phone", "technology", "digital", "wireless", "portable", "smart"],
      },
      "⌨️": {
        keywords: ["type", "keyboard", "computer", "input", "writing", "work", "device", "tech", "hardware", "office", "equipment", "technology", "digital", "computing", "laptop", "desktop", "peripheral", "typing", "data", "entry"],
      },
    
      // Shopping Categories
      "🥬": {
        keywords: ["groceries", "vegetables", "produce", "fresh", "food", "market", "healthy", "shopping", "greens", "lettuce", "salad", "organic", "vegetable", "nutrition", "garden", "leaf", "cooking", "ingredients", "natural", "diet"],
      },
      "🧺": {
        keywords: ["laundry", "basket", "clothes", "washing", "clean", "household", "chores", "clothing", "wash", "hamper", "carry", "container", "domestic", "housework", "storage", "organize", "sorting", "maintenance", "home", "tasks"],
      },
      "👕": {
        keywords: ["clothes", "shopping", "clothing", "fashion", "wear", "apparel", "shirt", "outfit", "dress", "wardrobe", "style", "garment", "store", "buy", "purchase", "retail", "attire", "accessories", "merchandise", "boutique"],
      }
    };


    