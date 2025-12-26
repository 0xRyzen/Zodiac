export type ProductCategory = 'Flower' | 'Pre-Rolls' | 'Vapes' | 'Edibles' | 'Wellness' | 'Topicals' | 'Supplements' | 'Apparel' | 'Concentrates';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  subcategory?: string;
  effect: 'Sleep' | 'Focus' | 'Calm' | 'Relief' | 'Balance' | 'Energy' | 'Potent' | 'Hybrid' | 'Sativa' | 'Indica';
  strength: 'Low' | 'Medium' | 'High' | 'Potent';
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  specs?: Record<string, string>;
  
  // New fields for specific templates
  thc?: string;
  cbd?: string;
  terpenes?: string[];
  lab_results?: string;
  nutrition_facts?: {
    serving_size: string;
    calories: number;
    total_fat: string;
    sodium: string;
    total_carbs: string;
    sugars: string;
    protein: string;
  };
  variants?: {
    id: string;
    name: string;
    price: number;
    available: boolean;
  }[];
}

export const products: Product[] = [
  // --- CONCENTRATES ---
  {
    id: 'concentrate-01',
    name: 'Nebula Nectar',
    price: 60,
    category: 'Concentrates',
    subcategory: 'Live Rosin',
    effect: 'Potent',
    strength: 'Potent',
    image: 'https://images.unsplash.com/photo-1636859207113-9b497bc3c066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGNvbmNlbnRyYXRlJTIwb2lsJTIwZGFiJTIwdGV4dHVyZSUyMGx1eHVyeXxlbnwxfHx8fDE3NjY2NzYwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Solventless cold-cured live rosin batter. Rich in terpenes and cannabinoids for a true-to-plant dab experience.',
    benefits: ['Solventless purity', 'Full spectrum', 'Immediate onset'],
    ingredients: ['Cannabis Trichomes'],
    usage: 'Dab at low temperature (450°F-500°F).',
    specs: { 'Strain': 'Garlic Cookies', 'Texture': 'Badder', 'Method': 'Ice Water Hash' },
    thc: '78%',
    terpenes: ['Caryophyllene', 'Myrcene', 'Limonene'],
    variants: [
        { id: 'concentrate-01-1g', name: '1g Jar', price: 60, available: true }
    ]
  },

  // --- FLOWER ---
  {
    id: 'flower-01',
    name: 'Zodiac Reserve',
    price: 55,
    category: 'Flower',
    subcategory: 'Indica Hybrid',
    effect: 'Calm',
    strength: 'High',
    image: 'https://images.unsplash.com/photo-1631489168059-5e14e5dd3452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGZsb3dlciUyMGJ1ZCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY2NjUxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Indoor-grown, slow-cured premium cannabis flower. Hand-trimmed to perfection to showcase the dense trichome coverage.',
    benefits: ['Rich aroma', 'Smooth smoke', 'Entourage effect'],
    ingredients: ['Premium Cannabis Flower'],
    usage: 'Grind and smoke in your preferred device.',
    specs: { 'Strain': 'Ice Cream Cake', 'Type': 'Indica Hybrid', 'Terpenes': 'Limonene, Caryophyllene' },
    thc: '28%',
    cbd: '0.5%',
    terpenes: ['Limonene', 'Caryophyllene', 'Linalool'],
    variants: [
      { id: 'flower-01-3.5', name: '3.5g', price: 55, available: true },
      { id: 'flower-01-7', name: '7g', price: 100, available: true },
      { id: 'flower-01-14', name: '14g', price: 180, available: true }
    ]
  },

  // --- PRE-ROLLS ---
  {
    id: 'preroll-02',
    name: 'Meteorite Stick',
    price: 35,
    category: 'Pre-Rolls',
    subcategory: 'Infused',
    effect: 'Potent',
    strength: 'Potent',
    image: 'https://images.unsplash.com/photo-1765097715915-fad8841addd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMHByZS1yb2xsJTIwam9pbnQlMjBwcmVtaXVtJTIwcGFja2FnaW5nfGVufDF8fHx8MTc2NjY3NjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '1.5g Flower infused with 0.5g Live Rosin. A solventless heavy hitter for the connoisseur.',
    benefits: ['Solventless infusion', 'Slow burn', 'Heavy effects'],
    ingredients: ['Indoor Flower', 'Live Rosin'],
    usage: 'Light tip evenly and enjoy.',
    specs: { 'Weight': '2 Grams Total', 'Infusion': 'Live Rosin', 'Strain': 'Papaya' },
    thc: '42%',
    variants: [
        { id: 'preroll-02-single', name: 'Single (2g)', price: 35, available: true }
    ]
  },
  {
    id: 'preroll-01',
    name: 'Constellation Cannon',
    price: 30,
    category: 'Pre-Rolls',
    subcategory: 'Infused',
    effect: 'Potent',
    strength: 'Potent',
    image: 'https://images.unsplash.com/photo-1602282652033-06a1bb0392f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcHJlLXJvbGwlMjBqb2ludCUyMGNhbm5hYmlzfGVufDF8fHx8MTc2NjY2NTE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '2g Infused Pre-roll painted with distillate and rolled in kief. A heavy hitter designed for sharing.',
    benefits: ['Slow burning', 'Triple infused', 'Expertly rolled'],
    ingredients: ['Indoor Flower', 'Distillate Oil', 'Kief'],
    usage: 'Light tip evenly and enjoy slowly.',
    specs: { 'Weight': '2 Grams', 'Infusion': 'Distillate + Kief', 'Strain': 'Wedding Crashers' },
    thc: '35%',
    variants: [
        { id: 'preroll-01-single', name: 'Single (2g)', price: 30, available: true },
        { id: 'preroll-01-3pk', name: '3-Pack', price: 80, available: true }
    ]
  },

  // --- VAPES ---
  {
    id: 'vape-01',
    name: 'Astro Vape (Live Resin)',
    price: 50,
    category: 'Vapes',
    subcategory: 'Live Resin',
    effect: 'Focus',
    strength: 'High',
    image: 'https://images.unsplash.com/photo-1542405619-55a2edb6de90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2YXBlJTIwcGVuJTIwY2FubmFiaXN8ZW58MXx8fHwxNzY2NjY1MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '100% Live Resin cartridge preserving the true terpene profile of the plant. No additives, just pure cannabis extract.',
    benefits: ['Full terpene profile', 'True-to-strain effects', 'Discreet usage'],
    ingredients: ['Fresh Frozen Cannabis Extract'],
    usage: 'Inhale gently for 3 seconds.',
    specs: { 'Strain': 'Super Lemon Haze', 'Type': 'Sativa', 'Hardware': 'Ceramic Coil' },
    thc: '85%',
    variants: [
        { id: 'vape-01-0.5', name: '0.5g Cart', price: 50, available: true },
        { id: 'vape-01-1', name: '1g Cart', price: 90, available: true }
    ]
  },
  {
    id: 'vape-02',
    name: 'Comet Pen (Diamonds)',
    price: 65,
    category: 'Vapes',
    subcategory: 'Disposable',
    effect: 'Potent',
    strength: 'Potent',
    image: 'https://images.unsplash.com/photo-1542405619-55a2edb6de90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2YXBlJTIwcGVuJTIwY2FubmFiaXN8ZW58MXx8fHwxNzY2NjY1MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Liquid diamond sauce in a sleek disposable pen. The pinnacle of potency and purity.',
    benefits: ['Maximum potency', 'Crystal clear oil', 'Premium hardware'],
    ingredients: ['THC Diamonds', 'High Terpene Extract'],
    usage: 'Take 1-2 puffs as needed.',
    specs: { 'Strain': 'GMO Cookies', 'Type': 'Indica', 'Potency': '95% THC' },
    thc: '95%',
    variants: [
        { id: 'vape-02-1', name: '1g Disposable', price: 65, available: true }
    ]
  },

  // --- EDIBLES ---
  {
    id: 'edible-03',
    name: 'Starlight Gems',
    price: 32,
    category: 'Edibles',
    subcategory: 'Gummies',
    effect: 'Energy',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1613130827894-d5f504583c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZ3VtbXklMjBjYW5keSUyMGx1eHVyeSUyMHN1Z2FyZmluYSUyMHN0eWxlfGVufDF8fHx8MTc2NjY3NjA1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sparkling, champagne-infused gummy cubes dusted with sugar crystals. A celebratory treat for uplifting moments.',
    benefits: ['Fast acting', 'Gluten free', 'Social effect'],
    ingredients: ['Sugar', 'Glucose', 'Champagne Extract', 'Nano THC'],
    usage: 'Enjoy 1 gem for a light buzz.',
    specs: { 'Flavor': 'Pink Champagne', 'Dose': '5mg THC', 'Count': '20 pieces' },
    nutrition_facts: {
        serving_size: '1 Piece (4g)',
        calories: 10,
        total_fat: '0g',
        sodium: '0mg',
        total_carbs: '3g',
        sugars: '2g',
        protein: '0g'
    }
  },
  {
    id: 'edible-01',
    name: 'Lunar Chews',
    price: 35,
    category: 'Edibles',
    subcategory: 'Gummies',
    effect: 'Balance',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1599738675654-125cf46f3b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZnJ1aXQlMjBndW1taWVzJTIwbHV4dXJ5fGVufDF8fHx8MTc2NjY2NTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Artisanal jellies made with real fruit purée and high-quality rosin. A sophisticated treat for the discerning palate.',
    benefits: ['Real fruit ingredients', 'Solventless extract', 'Consistent dosing'],
    ingredients: ['Fruit Purée', 'Pectin', 'Rosin', 'Organic Cane Sugar'],
    usage: 'Eat 1 gummy and wait 90 minutes for full effect.',
    specs: { 'Flavor': 'Blood Orange', 'Dose': '5mg THC', 'Type': 'Rosin Infused' },
    nutrition_facts: {
        serving_size: '1 Gummy (5g)',
        calories: 15,
        total_fat: '0g',
        sodium: '5mg',
        total_carbs: '4g',
        sugars: '3g',
        protein: '0g'
    },
    variants: [
        { id: 'edible-01-20pk', name: '20 Pack', price: 35, available: true }
    ]
  },
  {
    id: 'edible-02',
    name: 'Cloud Mallows',
    price: 30,
    category: 'Edibles',
    subcategory: 'Marshmallows',
    effect: 'Calm',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1518646455738-c17d10184f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwbWFyc2htYWxsb3dzJTIwYV1zdGhldGljfGVufDF8fHx8MTc2NjY2NTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Handcrafted gourmet marshmallows infused with a gentle dose of THC. Soft, fluffy, and perfect for hot cocoa.',
    benefits: ['Nostalgic treat', 'Light & airy texture', 'Microdose friendly'],
    ingredients: ['Sugar', 'Gelatin', 'Vanilla Bean', 'THC Distillate'],
    usage: 'Enjoy on its own or melt into a warm drink.',
    specs: { 'Flavor': 'Madagascar Vanilla', 'Count': '10 pieces', 'Dose': '2.5mg THC' },
    nutrition_facts: {
        serving_size: '1 Marshmallow (8g)',
        calories: 25,
        total_fat: '0g',
        sodium: '10mg',
        total_carbs: '6g',
        sugars: '5g',
        protein: '0.5g'
    }
  },
  {
    id: 'syrup-01',
    name: 'Galaxy Syrup',
    price: 45,
    category: 'Edibles',
    subcategory: 'Syrup',
    effect: 'Relief',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1632837204768-9704cc55d960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW5jeSUyMHN5cnVwJTIwYm90dGxlJTIwZGFyayUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY2NjUxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A pourable, water-soluble THC syrup in a rich berry flavor. Perfect for mixing into mocktails or sparkling water.',
    benefits: ['Customizable dosing', 'Fast acting nano-emulsion', 'Delicious mixer'],
    ingredients: ['Nano-Emulsified THC', 'Organic Cane Sugar', 'Natural Berry Flavor', 'Water'],
    usage: 'Mix 1 tsp into your favorite beverage and stir.',
    specs: { 'Flavor': 'Mixed Berry', 'Volume': '4oz', 'Tech': 'Nano-Emulsion' },
    nutrition_facts: {
        serving_size: '1 tsp (5ml)',
        calories: 20,
        total_fat: '0g',
        sodium: '0mg',
        total_carbs: '5g',
        sugars: '5g',
        protein: '0g'
    }
  },

  // --- WELLNESS ---
  {
    id: 'tincture-01',
    name: 'Celestial Drops',
    price: 85,
    category: 'Wellness',
    subcategory: 'Tincture',
    effect: 'Calm',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1581021412183-bfc77db44f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMHRpbmN0dXJlJTIwYm90dGxlJTIwbHV4dXJ5JTIwZGFya3xlbnwxfHx8fDE3NjY2NjUxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A premium full-spectrum CBD tincture designed to harmonize mind and body. Infused with organic mint for a refreshing finish.',
    benefits: ['Supports emotional balance', 'Daily stress relief', 'Fast-acting absorption'],
    ingredients: ['Full Spectrum Hemp Extract', 'Organic MCT Oil', 'Peppermint Oil', 'Terpenes'],
    usage: 'Place 1ml under the tongue and hold for 30 seconds before swallowing.',
    specs: { 'Bottle Size': '30ml', 'Cannabinoids': '1000mg CBD', 'Extraction': 'CO2' },
    cbd: '1000mg',
    variants: [
        { id: 'tincture-01-1000', name: '1000mg', price: 85, available: true },
        { id: 'tincture-01-2000', name: '2000mg', price: 150, available: true }
    ]
  },
  {
    id: 'capsule-01',
    name: 'Orbit Capsules',
    price: 55,
    category: 'Wellness',
    subcategory: 'Capsule',
    effect: 'Sleep',
    strength: 'High',
    image: 'https://images.unsplash.com/photo-1711703741305-075e22fcec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjBib3R0bGV8ZW58MXx8fHwxNzY2NjY1MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Slow-release softgels combining THC and CBN for deep, uninterrupted sleep. Wake up refreshed, not groggy.',
    benefits: ['Sustained release', 'Odorless & tasteless', 'Promotes deep REM sleep'],
    ingredients: ['THC Extract', 'CBN Isolate', 'MCT Oil', 'Vegan Softgel Shell'],
    usage: 'Take 1 capsule with water 1 hour before bedtime.',
    specs: { 'Count': '30 Capsules', 'Dose': '10mg THC / 5mg CBN', 'Dietary': 'Vegan' },
    variants: [
        { id: 'capsule-01-30', name: '30 Count', price: 55, available: true },
        { id: 'capsule-01-60', name: '60 Count', price: 100, available: true }
    ]
  },

  // --- TOPICALS ---
  {
    id: 'topical-01',
    name: 'Stardust Body Butter',
    price: 65,
    category: 'Topicals',
    subcategory: 'Cream',
    effect: 'Relief',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1615174111664-cbe2de69ed9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2R5JTIwYnV0dGVyJTIwamFyJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NjY2NjUxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A whipped, luxurious body butter infused with CBD and THC to melt away tension and hydrate skin deeply.',
    benefits: ['Deeply moisturizing', 'Localized relief', 'Non-greasy formula'],
    ingredients: ['Shea Butter', 'Cocoa Butter', '1:1 CBD:THC Extract', 'Lavender Oil'],
    usage: 'Massage generously into skin, focusing on dry or tense areas.',
    specs: { 'Size': '200ml', 'Ratio': '1:1 CBD:THC', 'Scent': 'Lavender & Vanilla' },
    cbd: '500mg',
    thc: '500mg'
  },

  // --- SUPPLEMENTS ---
  {
    id: 'pantry-03',
    name: 'Eclipse Peanut Butter',
    price: 26,
    category: 'Supplements',
    subcategory: 'Pantry',
    effect: 'Relief',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1589617492681-91b73d2e358c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXQlMjBidXR0ZXIlMjBqYXIlMjBsdXh1cnklMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NjY3NjA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Organic peanut butter blended with CBD and CBN for a relaxing evening snack. High protein, high chill.',
    benefits: ['Protein rich', 'Promotes rest', 'No added sugar'],
    ingredients: ['Roasted Peanuts', 'CBD Isolate', 'CBN Isolate', 'Salt'],
    usage: 'Spread on toast or eat by the spoon.',
    specs: { 'Nut Type': 'Runner Peanuts', 'Texture': 'Smooth', 'Jar Size': '16oz' },
    nutrition_facts: {
        serving_size: '2 Tbsp (32g)',
        calories: 190,
        total_fat: '16g',
        sodium: '140mg',
        total_carbs: '7g',
        sugars: '1g',
        protein: '8g'
    }
  },
  {
    id: 'pantry-01',
    name: 'Solar Power Protein',
    price: 55,
    category: 'Supplements',
    subcategory: 'Powder',
    effect: 'Energy',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1693996045899-7cf0ac0229c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvdGVpbiUyMHBvd2RlciUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NjY2NjUxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Plant-based protein powder fortified with hemp seeds and CBD for post-workout recovery and sustained energy.',
    benefits: ['20g Protein per serving', 'Anti-inflammatory CBD', 'Amino acid rich'],
    ingredients: ['Pea Protein', 'Hemp Heart Protein', 'CBD Isolate', 'Vanilla Extract'],
    usage: 'Blend 1 scoop into your smoothie or shake.',
    specs: { 'Protein Source': 'Pea & Hemp', 'Flavor': 'Vanilla Bean', 'Weight': '2lbs' },
    nutrition_facts: {
        serving_size: '1 Scoop (35g)',
        calories: 140,
        total_fat: '3g',
        sodium: '150mg',
        total_carbs: '8g',
        sugars: '0g',
        protein: '20g'
    }
  },
  {
    id: 'pantry-02',
    name: 'Cosmic Almond Butter',
    price: 28,
    category: 'Supplements',
    subcategory: 'Pantry',
    effect: 'Balance',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1615174111664-cbe2de69ed9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmQlMjBidXR0ZXIlMjBqYXIlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NjY3NDUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Stone-ground almond butter infused with full-spectrum hemp. A nutrient-dense addition to your breakfast ritual.',
    benefits: ['Healthy fats', 'Fiber rich', 'Subtle relaxation'],
    ingredients: ['Roasted Almonds', 'Full Spectrum Hemp Oil', 'Sea Salt'],
    usage: 'Spread on toast or add to oatmeal.',
    specs: { 'Nut Type': 'Organic Almond', 'Texture': 'Creamy', 'Jar Size': '16oz' },
    nutrition_facts: {
        serving_size: '2 Tbsp (32g)',
        calories: 190,
        total_fat: '16g',
        sodium: '60mg',
        total_carbs: '6g',
        sugars: '2g',
        protein: '7g'
    }
  },

  // --- APPAREL (Optional) ---
  {
    id: 'apparel-01',
    name: 'Zodiac Classic Tee',
    price: 45,
    category: 'Apparel',
    subcategory: 'Clothing',
    effect: 'Calm',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwgd2hpdGUlMjB0ZWUlMjBzaGlydHxlbnwxfHx8fDE3NjU4NTgzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Heavyweight organic cotton tee with puff-print Zodiac logo. Designed for comfort and ease.',
    benefits: ['100% Organic Cotton', 'Relaxed Fit', 'Mindfully Made'],
    ingredients: ['Organic Cotton'],
    usage: 'Wear it loose for maximum comfort.',
    specs: { 'Fit': 'Boxy / Oversized', 'Material': '12oz Cotton Jersey', 'Care': 'Wash Cold' },
    variants: [
        { id: 'apparel-01-s', name: 'Small', price: 45, available: true },
        { id: 'apparel-01-m', name: 'Medium', price: 45, available: true },
        { id: 'apparel-01-l', name: 'Large', price: 45, available: true },
        { id: 'apparel-01-xl', name: 'X-Large', price: 45, available: true }
    ]
  }
];

export const educationalContent = [
  {
    title: 'Finding Your Rhythm',
    content: 'Start low and go slow. We recommend starting with a small amount and listening to your body. Allow 2 hours to assess how you feel before adjusting your routine.'
  },
  {
    title: 'Plant Wisdom',
    content: 'Our broad-spectrum formulas honor the complexity of the plant, utilizing a synergy of cannabinoids to support a balanced experience, often called the Entourage Effect.'
  },
  {
    title: 'Sourcing & Ethics',
    content: 'Rooted in the Pacific Northwest, our hemp is organically grown and ethically sourced. We package with the planet in mind, using plastic-free materials whenever possible.'
  }
];
