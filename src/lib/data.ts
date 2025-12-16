
import imgTahini from 'figma:asset/b12c4e7e5d669e1f8a2ca49899987519a45c70e3.png';
import imgAlmond from 'figma:asset/2b5717c646d8b13cce333376d4e432a23d4156ff.png';
import imgHazelnut from 'figma:asset/3f001b8e0cb5253f09737e0bed7ac915fa61d553.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Oil' | 'Cream' | 'Capsule' | 'Edible' | 'Apparel';
  effect: 'Sleep' | 'Focus' | 'Calm' | 'Relief';
  strength: 'Low' | 'Medium' | 'High';
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Calm Drops',
    price: 65,
    category: 'Oil',
    effect: 'Calm',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYm90YW5pY2FsJTIwd2VsbG5lc3MlMjBvaWwlMjBkcm9wcGVyJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NTc3Mzc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A gentle formulation designed to ease the mind and relax the body. Perfect for unwinding after a long day without heavy sedation.',
    benefits: ['Reduces anxiety', 'Promotes relaxation', 'Mental clarity'],
    ingredients: ['Broad Spectrum Hemp Extract', 'MCT Oil', 'Natural Terpenes', 'Lavender Extract'],
    usage: 'Place 1 dropper under tongue for 60 seconds.'
  },
  {
    id: '2',
    name: 'Rest Cream',
    price: 55,
    category: 'Cream',
    effect: 'Sleep',
    strength: 'High',
    image: 'https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY3JlYW0lMjBqYXIlMjBwYWNrYWdpbmclMjBuZXV0cmFsJTIwYmFja2dyb3VuZCUyMGhpZ2glMjBlbmR8ZW58MXx8fHwxNzY1NzczNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A rich, soothing cream infused with botanicals to support deep, restorative sleep. Absorbs quickly without greasy residue.',
    benefits: ['Supports deep sleep', 'Muscle relaxation', 'Skin hydration'],
    ingredients: ['CBD Isolate', 'Shea Butter', 'Chamomile', 'Melatonin'],
    usage: 'Apply to temples and neck 30 minutes before bed.'
  },
  {
    id: '3',
    name: 'Focus Tincture',
    price: 70,
    category: 'Oil',
    effect: 'Focus',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYm90YW5pY2FsJTIwd2VsbG5lc3MlMjBvaWwlMjBkcm9wcGVyJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NTc3Mzc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sharpen your mind and boost productivity with this citrus-infused tincture. Non-intoxicating and energizing.',
    benefits: ['Enhanced concentration', 'Energy boost', 'Clear headedness'],
    ingredients: ['CBG Extract', 'Lemon Oil', 'Ginseng', 'MCT Oil'],
    usage: 'Take 0.5ml in the morning with coffee or tea.'
  },
  {
    id: '4',
    name: 'Relief Balm',
    price: 45,
    category: 'Cream',
    effect: 'Relief',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY3JlYW0lMjBqYXIlMjBwYWNrYWdpbmclMjBuZXV0cmFsJTIwYmFja2dyb3VuZCUyMGhpZ2glMjBlbmR8ZW58MXx8fHwxNzY1NzczNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Targeted relief for sore muscles and joints. Cooling menthol sensation paired with potent hemp extract.',
    benefits: ['Localized pain relief', 'Anti-inflammatory', 'Cooling sensation'],
    ingredients: ['Full Spectrum Hemp', 'Menthol', 'Arnica', 'Beeswax'],
    usage: 'Massage into affected areas as needed.'
  },
  {
    id: '5',
    name: 'Sleep Gummies',
    price: 35,
    category: 'Edible',
    effect: 'Sleep',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1757941288470-888a418852b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnJ1aXQlMjBndW1taWVzJTIwd2VsbG5lc3MlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY1Nzc5OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Delicious berry-flavored gummies infused with CBN and melatonin for a perfect night\'s rest.',
    benefits: ['Faster sleep onset', 'Stay asleep longer', 'Wake up refreshed'],
    ingredients: ['Tapioca Syrup', 'CBN Isolate', 'Melatonin', 'Elderberry Extract'],
    usage: 'Eat 1 gummy 45 minutes before bedtime.'
  },
  {
    id: '6',
    name: 'Daily Balance Softgels',
    price: 50,
    category: 'Capsule',
    effect: 'Calm',
    strength: 'Medium',
    image: 'https://images.unsplash.com/photo-1677735476292-0fc57ab097b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3VwcGxlbWVudCUyMGNhcHN1bGVzJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NTc3OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Convenient, precise dosing for all-day balance and stress management. Odorless and tasteless.',
    benefits: ['Stress reduction', 'Mood stabilization', 'Easy to swallow'],
    ingredients: ['Broad Spectrum Hemp', 'Gelatin', 'Glycerin', 'MCT Oil'],
    usage: 'Take 1 softgel daily with a meal.'
  },
  {
    id: '7',
    name: 'Clarity Capsules',
    price: 55,
    category: 'Capsule',
    effect: 'Focus',
    strength: 'High',
    image: 'https://images.unsplash.com/photo-1677735476292-0fc57ab097b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3VwcGxlbWVudCUyMGNhcHN1bGVzJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NTc3OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Formulated with Lion\'s Mane mushroom and CBG to clear brain fog and enhance cognitive performance.',
    benefits: ['Mental acuity', 'Memory support', 'Alertness'],
    ingredients: ['CBG Isolate', 'Lion\'s Mane Mushroom', 'B12 Vitamin', 'Vegetable Cellulose'],
    usage: 'Take 2 capsules in the morning.'
  },
  {
    id: '8',
    name: 'Recovery Chews',
    price: 40,
    category: 'Edible',
    effect: 'Relief',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1757941288470-888a418852b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnJ1aXQlMjBndW1taWVzJTIwd2VsbG5lc3MlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY1Nzc5OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Tart cherry and turmeric meet CBD in these recovery-focused chews. Ideal for post-workout inflammation.',
    benefits: ['Reduced inflammation', 'Faster recovery', 'Antioxidant boost'],
    ingredients: ['CBD Isolate', 'Turmeric', 'Tart Cherry Juice', 'Pectin'],
    usage: 'Eat 1-2 chews after physical activity.'
  },
  {
    id: '9',
    name: 'Night Oil',
    price: 75,
    category: 'Oil',
    effect: 'Sleep',
    strength: 'High',
    image: 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYm90YW5pY2FsJTIwd2VsbG5lc3MlMjBvaWwlMjBkcm9wcGVyJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NTc3Mzc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Our most potent sleep formula. High levels of CBN and THC (compliant) for those who need serious rest.',
    benefits: ['Deep sedation', 'Full body relaxation', 'Insomnia relief'],
    ingredients: ['Full Spectrum Hemp', 'CBN Distillate', 'Valerian Root', 'MCT Oil'],
    usage: 'Take 0.5ml 1 hour before bed.'
  },
  {
    id: '10',
    name: 'Soothe Lotion',
    price: 48,
    category: 'Cream',
    effect: 'Calm',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY3JlYW0lMjBqYXIlMjBwYWNrYWdpbmclMjBuZXV0cmFsJTIwYmFja2dyb3VuZCUyMGhpZ2glMjBlbmR8ZW58MXx8fHwxNzY1NzczNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A lightweight daily moisturizer infused with CBD to calm irritated skin and reduce redness.',
    benefits: ['Skin soothing', 'Redness reduction', 'Daily hydration'],
    ingredients: ['CBD Isolate', 'Aloe Vera', 'Jojoba Oil', 'Vitamin E'],
    usage: 'Apply generously to dry or irritated skin.'
  },
  {
    id: '11',
    name: 'High Protein Tahini',
    price: 32,
    category: 'Edible',
    effect: 'Relief',
    strength: 'Low',
    image: imgTahini,
    description: 'A powerhouse of plant-based protein. Premium tahini blended for recovery and muscle support, infused with hemp extract.',
    benefits: ['Muscle recovery', 'High protein (32%)', 'Rich nutty flavor'],
    ingredients: ['Sesame Seeds', 'Hemp Protein', 'CBD Isolate'],
    usage: 'Mix into shakes or spread on toast.'
  },
  {
    id: '12',
    name: 'Almond Butter Balance',
    price: 28,
    category: 'Edible',
    effect: 'Calm',
    strength: 'Medium',
    image: imgAlmond,
    description: 'Creamy, stone-ground almond butter with a calming infusion of broad-spectrum hemp. Pure, simple, and effective.',
    benefits: ['Sustained energy', 'Stress relief', 'Heart healthy fats'],
    ingredients: ['Roasted Almonds', 'Broad Spectrum Hemp', 'Sea Salt'],
    usage: 'Perfect for breakfast bowls or straight from the jar.'
  },
  {
    id: '13',
    name: 'Hazelnut Cocoa Bliss',
    price: 30,
    category: 'Edible',
    effect: 'Focus',
    strength: 'Medium',
    image: imgHazelnut,
    description: 'Decadent crunchy hazelnut butter with cocoa and dates. Enriched with CBG for a focused, guilt-free treat.',
    benefits: ['Mental clarity', 'Natural sweetness', 'Antioxidant rich'],
    ingredients: ['Hazelnuts', 'Dates', 'Cocoa Powder', 'CBG Extract'],
    usage: 'Drizzle over fruit or desserts.'
  },
  {
    id: '14',
    name: 'Zodiac Classic Tee',
    price: 45,
    category: 'Apparel',
    effect: 'Calm',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwgd2hpdGUlMjB0ZWUlMjBzaGlydHxlbnwxfHx8fDE3NjU4NTgzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Heavyweight organic cotton tee with puff-print Zodiac logo. Oversized fit for maximum comfort.',
    benefits: ['100% Organic Cotton', 'Oversized Fit', 'Pre-shrunk'],
    ingredients: ['Cotton'],
    usage: 'Wear it loose.'
  },
  {
    id: '15',
    name: 'Lab Hoodie',
    price: 85,
    category: 'Apparel',
    effect: 'Calm',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWV8ZW58MXx8fHwxNzY1ODU4MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Our signature hoodie in washed charcoal. Featuring "Fresh from the Lab" back print.',
    benefits: ['French Terry', 'Garment Dyed', 'Kangaroo Pocket'],
    ingredients: ['Cotton', 'Polyester Blend'],
    usage: 'Perfect for chilly evenings.'
  },
  {
    id: '16',
    name: '5-Panel Cap',
    price: 35,
    category: 'Apparel',
    effect: 'Focus',
    strength: 'Low',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw1LXBhbmVsJTIwaGF0fGVufDF8fHx8MTc2NTg1ODMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Nylon 5-panel cap with embroidered emblem. Adjustable strap fits all heads.',
    benefits: ['Water Resistant', 'Lightweight', 'Adjustable'],
    ingredients: ['Nylon'],
    usage: 'Keep the sun out.'
  }
];

export const educationalContent = [
  {
    title: 'Understanding Dosage',
    content: 'Start low and go slow. Every body interacts with cannabinoids differently. We recommend starting with half the recommended dose and waiting 2 hours before increasing.'
  },
  {
    title: 'The Entourage Effect',
    content: 'Our full-spectrum products utilize the synergy of multiple cannabinoids working together, creating a more potent and effective experience than isolated compounds.'
  },
  {
    title: 'Sourcing & Purity',
    content: 'All our hemp is organically grown in Oregon. We triple-test every batch for heavy metals, pesticides, and potency to ensure your safety.'
  }
];
