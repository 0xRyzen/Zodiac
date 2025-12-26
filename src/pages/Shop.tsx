import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products, ProductCategory } from '../lib/data';
import { ChevronRight, Filter, X } from 'lucide-react';

// --- Category Data & Assets ---
interface CategoryDetail {
  title: string;
  description: string;
  image: string;
  features: string[];
  subtypes: string[]; // For the index card display
}

const categoryDetails: Record<string, CategoryDetail> = {
  'Flower': {
    title: "Premium Flower",
    description: "Indoor-grown, slow-cured premium cannabis flower. Hand-trimmed to perfection to showcase the dense trichome coverage and rich terpene profiles.",
    image: "https://images.unsplash.com/photo-1722167738133-4dac015774a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGZsb3dlciUyMGJ1ZCUyMGx1eHVyeSUyMGRhcmslMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY2Njc2OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Indoor Grown", "Hand Trimmed", "Slow Cured", "High Potency"],
    subtypes: ["Smokable"]
  },
  'Pre-Rolls': {
    title: "Artisanal Pre-Rolls",
    description: "Experience convenience without compromise. From classic joints to infused cannons, our pre-rolls are packed with premium flower and painted with high-potency concentrates.",
    image: "https://images.unsplash.com/photo-1552152974-19b9caf99137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMHByZS1yb2xsJTIwam9pbnQlMjBsdXh1cnklMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NjY3NjkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Infused Options", "Even Burn", "Ready to Enjoy", "Solventless Extracts"],
    subtypes: ["Cannons", "Infused", "Rosin"]
  },
  'Vapes': {
    title: "Luxury Vapes",
    description: "High-purity live resin and liquid diamond cartridges. Preserving the true essence of the plant with no fillers or artificial additives.",
    image: "https://images.unsplash.com/photo-1701244665324-d6ccc4398365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMHZhcGUlMjBwZW4lMjBsdXh1cnklMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NjY3NjkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["100% Live Resin", "Ceramic Hardware", "No Fillers", "True-to-Strain"],
    subtypes: ["Resin", "Diamonds"]
  },
  'Edibles': {
    title: "Gourmet Edibles",
    description: "Culinary excellence meets precise dosing. Our edibles range from sparkling gummies to nostalgic marshmallows, all crafted with premium ingredients.",
    image: "https://images.unsplash.com/photo-1683648955701-81015c80ff6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZ3VtbXklMjBsdXh1cnklMjBjYW5keSUyMGNhbm5hYmlzJTIwZGFyayUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY2NzY5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Precise Dosing", "Vegan Options", "Fast Acting", "Gourmet Flavors"],
    subtypes: ["Gummies", "Marshmallows", "Syrups"]
  },
  'Wellness': {
    title: "Plant Wellness",
    description: "Restore balance with our tinctures and capsules. Formulated with specific cannabinoid ratios to support sleep, focus, and calm.",
    image: "https://images.unsplash.com/photo-1561997835-49889d0e0355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYmQlMjB0aW5jdHVyZSUyMGJvdHRsZSUyMHdlbGxuZXNzJTIwbHV4dXJ5JTIwZGFyayUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY2NzY5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Full Spectrum", "Targeted Effects", "Organic Ingredients", "Third-Party Tested"],
    subtypes: ["Tinctures", "Capsules", "Pills"]
  },
  'Topicals': {
    title: "Relief Topicals",
    description: "Targeted relief in luxurious formats. Our body butters and lotions infuse high-potency cannabinoids with soothing botanicals.",
    image: "https://images.unsplash.com/photo-1636859207113-9b497bc3c066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGJvZHklMjBidXR0ZXIlMjBsdXh1cnklMjBzcGElMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NjY3NjkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Deep Hydration", "Localized Relief", "Non-Greasy", "Natural Scents"],
    subtypes: ["Creams", "Lotions", "Body Butters"]
  },
  'Supplements': {
    title: "Functional Fuel",
    description: "Power your body with hemp-fortified nutrition. Protein powders and nut butters designed for recovery and sustained energy.",
    image: "https://images.unsplash.com/photo-1704650311190-7eeb9c4f6e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcG93ZGVyJTIwc3VwcGxlbWVudCUyMGx1eHVyeSUyMGRhcmslMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY2Njc2OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Plant Protein", "Hemp Seeds", "Recovery Support", "Clean Ingredients"],
    subtypes: ["Protein Powder", "Edible Butters"]
  },
  'Concentrates': {
    title: "Pure Concentrates",
    description: "The purest expression of the plant. Solventless live rosin and badder, cold-cured for the true connoisseur.",
    image: "https://images.unsplash.com/photo-1552152974-19b9caf99137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGNvbmNlbnRyYXRlcyUyMGRhYnMlMjBsdXh1cnklMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NjY3NjkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Solventless", "Cold Cured", "Terpene Rich", "High Potency"],
    subtypes: ["Oil (Combustable)"]
  }
};

export const Shop = () => {
  const { category } = useParams<{ category: string }>();
  const [activeEffect, setActiveEffect] = useState<string | null>(null);
  const [activeStrength, setActiveStrength] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Normalize category from URL to match ProductCategory type
  const normalizedCategory = useMemo(() => {
    if (!category) return null;
    
    // Handle specific URL cases to match Enum
    const map: Record<string, ProductCategory> = {
      'flower': 'Flower',
      'pre-rolls': 'Pre-Rolls',
      'vapes': 'Vapes',
      'edibles': 'Edibles',
      'wellness': 'Wellness',
      'topicals': 'Topicals',
      'supplements': 'Supplements',
      'apparel': 'Apparel',
      'concentrates': 'Concentrates'
    };
    
    return map[category.toLowerCase()] || null;
  }, [category]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (normalizedCategory) {
      result = result.filter(p => p.category === normalizedCategory);
    }

    if (activeEffect) {
      result = result.filter(p => p.effect === activeEffect);
    }

    if (activeStrength) {
        result = result.filter(p => p.strength === activeStrength);
    }

    return result;
  }, [normalizedCategory, activeEffect, activeStrength]);

  const activeCategoryData = normalizedCategory ? categoryDetails[normalizedCategory] : null;

  // Extract unique effects and strengths for filter options
  const effects = Array.from(new Set(products.map(p => p.effect)));
  const strengths = Array.from(new Set(products.map(p => p.strength)));

  const clearFilters = () => {
      setActiveEffect(null);
      setActiveStrength(null);
  };

  // --- RENDER: INDEX PAGE (No Category Selected) ---
  if (!normalizedCategory) {
      return (
          <div className="bg-[#F5F5F2] min-h-screen pt-20">
              <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-[#121212] mb-4 tracking-tighter uppercase text-center"
                  >
                      Zodiac Products
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#C9A86A] text-sm font-bold tracking-[0.2em] uppercase text-center mb-16"
                  >
                      Choose a category to explore
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                      {Object.entries(categoryDetails).map(([key, data], i) => (
                          <Link 
                            to={`/shop/${key.toLowerCase()}`} 
                            key={key} 
                            className="group relative bg-white h-[320px] rounded-[1rem] overflow-hidden shadow-sm transition-all duration-500 border-b-[6px] border-[#C9A86A] block"
                          >
                              {/* Content Container */}
                              <div className="absolute inset-0 z-20 p-8 flex flex-col items-start justify-between pointer-events-none">
                                  {/* Header */}
                                  <div className="flex flex-col items-start gap-2 max-w-[60%]">
                                      <div className="flex items-center gap-2">
                                          {i < 3 && (
                                              <span className="bg-[#B91C1C] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider leading-none rounded-sm">
                                                  New
                                              </span>
                                          )}
                                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                                              Collection
                                          </span>
                                      </div>
                                      
                                      <h3 className="text-3xl lg:text-4xl font-serif font-black text-[#121212] uppercase tracking-tighter leading-[0.85]">
                                          {data.title.split(' ')[0]}
                                          <span className="block text-2xl lg:text-3xl text-gray-800 mt-1">
                                              {data.title.split(' ').slice(1).join(' ')}
                                          </span>
                                      </h3>
                                      
                                      <div className="h-0.5 w-12 bg-[#C9A86A] mt-2 group-hover:w-24 transition-all duration-500" />
                                  </div>

                                  {/* Button */}
                                  <div className="bg-[#121212] text-white px-5 py-2.5 text-[9px] font-bold tracking-widest uppercase rounded-sm group-hover:bg-[#C9A86A] group-hover:text-[#121212] transition-colors duration-300 shadow-lg">
                                      Shop Now
                                  </div>
                              </div>

                              {/* Image - Right Side */}
                              <div className="absolute top-0 right-[-15%] w-[75%] h-full z-10 pointer-events-none flex items-center justify-center">
                                  <img 
                                      src={data.image} 
                                      alt={data.title}
                                      className="w-full h-[120%] object-contain drop-shadow-2xl"
                                  />
                              </div>
                              
                              {/* Background Gradient for Text Readability */}
                              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-10 pointer-events-none" />

                              {/* Decorative Watermark */}
                              <div className="absolute top-4 right-4 z-10 opacity-[0.03] pointer-events-none">
                                   <span className="font-serif font-black italic text-4xl tracking-tighter text-[#121212]">Z</span>
                              </div>
                          </Link>
                      ))}
                  </div>
              </div>
          </div>
      );
  }

  // --- RENDER: CATEGORY DETAIL PAGE ---
  return (
    <div className="bg-[#F5F5F2] min-h-screen pt-20">
      
      {/* Category Hero Section */}
      <div className="bg-[#F5F5F2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             {/* Left: Content */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             >
                 <span className="text-[#C9A86A] text-xs font-bold tracking-[0.25em] uppercase mb-6 block">
                    Product Category
                 </span>
                 <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#121212] leading-[0.9] tracking-tighter uppercase mb-8">
                    {activeCategoryData?.title || normalizedCategory}
                 </h1>
                 <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                    {activeCategoryData?.description}
                 </p>
                 
                 {/* Features List */}
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {activeCategoryData?.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#121212]">
                            <div className="w-1.5 h-1.5 bg-[#C9A86A] rounded-full" />
                            {feature}
                        </li>
                    ))}
                 </ul>

                 <button 
                   onClick={() => document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' })}
                   className="bg-[#121212] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A86A] hover:text-[#121212] transition-colors duration-300"
                 >
                    Shop Collection
                 </button>
             </motion.div>

             {/* Right: Hero Image */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl"
             >
                <img 
                  src={activeCategoryData?.image} 
                  alt={normalizedCategory} 
                  className="w-full h-full object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute inset-0 border-[1px] border-white/20 rounded-[3rem] m-4 pointer-events-none" />
             </motion.div>
        </div>
      </div>

      {/* Breadcrumb & Filter Bar */}
      <div id="product-grid" className="sticky top-[72px] z-30 bg-[#F5F5F2]/95 backdrop-blur-sm border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-gray-500">
                <Link to="/" className="hover:text-[#121212] transition-colors">Home</Link> 
                <ChevronRight size={10} />
                <Link to="/shop" className="hover:text-[#121212] transition-colors">Products</Link>
                {normalizedCategory && (
                    <>
                    <ChevronRight size={10} />
                    <span className="text-[#C9A86A]">{normalizedCategory}</span>
                    </>
                )}
            </div>

            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#121212] hover:text-[#C9A86A] transition-colors"
                >
                    <Filter size={14} />
                    Filters {(activeEffect || activeStrength) && '(Active)'}
                </button>
            </div>
        </div>

        {/* Expandable Filter Panel */}
        <AnimatePresence>
            {isFilterOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-black/5 bg-white"
                >
                    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Effect</h3>
                            <div className="flex flex-wrap gap-2">
                                {effects.map(effect => (
                                    <button
                                        key={effect}
                                        onClick={() => setActiveEffect(activeEffect === effect ? null : effect)}
                                        className={`px-3 py-1.5 text-[10px] uppercase tracking-widest border rounded-sm transition-all ${
                                            activeEffect === effect 
                                            ? 'bg-[#121212] text-white border-[#121212]' 
                                            : 'bg-transparent text-gray-600 border-gray-200 hover:border-[#121212]'
                                        }`}
                                    >
                                        {effect}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Strength</h3>
                            <div className="flex flex-wrap gap-2">
                                {strengths.map(strength => (
                                    <button
                                        key={strength}
                                        onClick={() => setActiveStrength(activeStrength === strength ? null : strength)}
                                        className={`px-3 py-1.5 text-[10px] uppercase tracking-widest border rounded-sm transition-all ${
                                            activeStrength === strength 
                                            ? 'bg-[#121212] text-white border-[#121212]' 
                                            : 'bg-transparent text-gray-600 border-gray-200 hover:border-[#121212]'
                                        }`}
                                    >
                                        {strength}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-end justify-end">
                            <button 
                                onClick={clearFilters}
                                className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-600 flex items-center gap-2"
                                disabled={!activeEffect && !activeStrength}
                            >
                                <X size={14} /> Clear All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 pb-32">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 opacity-50 flex flex-col items-center">
            <h3 className="text-2xl font-serif mb-4">No products found.</h3>
            <button onClick={clearFilters} className="text-sm border-b border-[#121212] pb-1">Clear filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts
              .filter(p => p.category !== 'Apparel')
              .map((product, i) => {
             return (
               <Link 
                 to={`/product/${product.id}`} 
                 key={product.id} 
                 className="group relative bg-white h-[450px] rounded-[2rem] overflow-hidden border-b-[6px] border-[#C9A86A] hover:shadow-xl transition-all duration-500 block"
               >
                  {/* Badge & Category Top Left */}
                  <div className="absolute top-8 left-8 z-20 flex flex-col items-start gap-3">
                     {(i < 3 && !normalizedCategory) && (
                       <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest leading-none inline-block">
                         New
                       </span>
                     )}
                     
                     <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                        {product.category}
                     </span>
                  </div>

                  {/* Main Content Area */}
                  <div className="absolute inset-0 p-8 pt-24 z-10 flex flex-col items-start">
                     <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#121212] leading-[0.9] tracking-tighter mb-2 uppercase break-words max-w-[90%]">
                        {product.name.split(' ').slice(0, 2).join(' ')}
                     </h2>
                     
                     <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A86A] mb-8">
                        {product.effect} • {product.strength}
                     </p>

                     {/* Learn More Button */}
                     <motion.div 
                        className="bg-[#121212] text-white px-6 py-3 text-[10px] font-bold tracking-widest uppercase inline-block mt-auto mb-4"
                        whileHover={{ scale: 1.05, backgroundColor: '#C9A86A', color: '#121212' }}
                        transition={{ duration: 0.2 }}
                     >
                        Learn More
                     </motion.div>
                  </div>

                  {/* Product Image */}
                  <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] z-10 pointer-events-none">
                     <motion.img 
                      src={product.image} 
                      className="w-full h-full object-contain drop-shadow-xl" 
                      alt={product.name}
                      whileHover={{ scale: 1.05, rotate: -5 }}
                      transition={{ duration: 0.5 }}
                     />
                  </div>
                  
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                      <span className="text-9xl font-serif font-bold">{i + 1}</span>
                  </div>
               </Link>
             );
          })}
          </div>
        )}
        
        {/* Footer Info Section */}
        <div className="mt-24 text-center border-t border-black/5 pt-12">
            <span className="text-[#C9A86A] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Mindful Rituals</span>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed mb-8">
              A curated collection of plant-based essentials designed to fit seamlessly into your daily self-care routine. Each product is a thoughtful blend of wellness and design.
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
                All products ship in 100% plastic-free, recyclable packaging.
            </p>
        </div>
      </div>
    </div>
  );
};
