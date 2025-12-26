import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, ChevronDown, Check, Play, Heart, Star, Info } from 'lucide-react';
import { products, ProductCategory } from '../lib/data';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/core';

const AccordionItem = ({ title, children, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-black/10">
      <button
        className="flex w-full items-center justify-between py-5 text-left font-medium text-[#121212] transition-colors hover:text-[#C9A86A] focus:outline-none"
        onClick={onClick}
      >
        <span className="font-serif tracking-wide uppercase">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-gray-500 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>('description');
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  
  // Variant state - default to first variant if available
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    product?.variants ? product.variants[0].id : null
  );

  if (!product) {
    return <div className="p-20 text-center text-[#121212] bg-[#F5F5F2] min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const selectedVariant = product.variants?.find(v => v.id === selectedVariantId);
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  const handleAddToCart = () => {
    // In a real app, you'd pass the variant ID to the cart
    addToCart({ ...product, price: currentPrice, name: selectedVariant ? `${product.name} - ${selectedVariant.name}` : product.name }, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
  };

  const isLeaflyStyle = ['Flower', 'Pre-Rolls', 'Vapes'].includes(product.category);
  const isEdible = ['Edibles'].includes(product.category);
  // Wellness/Topicals/Supplements fall into default or mixed layout

  return (
    <div className="bg-[#F5F5F2] min-h-screen text-[#121212] overflow-x-hidden pt-24">
      {/* Background Watermark */}
      <div className="fixed inset-0 w-full h-full pointer-events-none select-none flex justify-center items-center z-0 overflow-hidden">
         <span 
          className="text-[25vw] font-serif font-bold italic text-transparent tracking-tighter whitespace-nowrap opacity-5"
          style={{ WebkitTextStroke: '2px #121212' }}
        >
           ZODIAC
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 md:py-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-3 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
           <Link to="/" className="text-[#121212] hover:text-[#C9A86A] transition-colors">Zodiac</Link>
           <Play size={8} className="text-[#C9A86A] fill-[#C9A86A]" />
           <Link to="/shop" className="text-[#121212] hover:text-[#C9A86A] transition-colors">Shop</Link>
           <Play size={8} className="text-[#C9A86A] fill-[#C9A86A]" />
           <Link to={`/shop/${product.category.toLowerCase()}`} className="text-[#121212] hover:text-[#C9A86A] transition-colors">{product.category}</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Category Subtitle */}
              <span className="text-[#C9A86A] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                {product.subcategory || product.category}
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#121212] mb-6 leading-[0.9] uppercase tracking-tighter">
                {product.name}
              </h1>

              {/* Leafly Style Badges */}
              {isLeaflyStyle && (
                <div className="flex flex-wrap gap-3 mb-8">
                   {product.specs?.Type && (
                     <span className="px-3 py-1 bg-[#121212] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                       {product.specs.Type}
                     </span>
                   )}
                   {product.thc && (
                     <span className="px-3 py-1 border border-[#121212] text-[#121212] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                       THC: {product.thc}
                     </span>
                   )}
                   {product.cbd && (
                     <span className="px-3 py-1 border border-[#121212] text-[#121212] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                       CBD: {product.cbd}
                     </span>
                   )}
                </div>
              )}
              
              <p className="text-[#121212]/70 leading-relaxed mb-10 text-lg max-w-lg">
                {product.description}
              </p>

              {/* Product Type Specific Sections */}
              
              {/* TERPENES (Leafly Style) */}
              {isLeaflyStyle && product.terpenes && (
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#121212] mb-3">Dominant Terpenes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.terpenes.map(terp => (
                      <span key={terp} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F0F0F0] rounded-full text-xs text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-[#C9A86A]"></div>
                        {terp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* EDIBLE SPECS */}
              {isEdible && product.specs && (
                <div className="grid grid-cols-2 gap-4 mb-10 p-4 bg-white/50 rounded-lg border border-black/5">
                   <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#C9A86A] mb-1">Flavor</span>
                      <span className="font-bold text-[#121212]">{product.specs.Flavor}</span>
                   </div>
                   <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#C9A86A] mb-1">Dose</span>
                      <span className="font-bold text-[#121212]">{product.specs.Dose}</span>
                   </div>
                </div>
              )}

              {/* Variants Selector */}
              {product.variants && (
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#121212] mb-3">Select Option</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map(variant => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariantId(variant.id)}
                        className={`px-4 py-3 min-w-[80px] text-sm font-bold border rounded-sm transition-all ${
                          selectedVariantId === variant.id
                            ? 'bg-[#121212] text-white border-[#121212]'
                            : 'bg-white text-[#121212] border-black/10 hover:border-[#121212]'
                        }`}
                      >
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price & Add to Cart */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                 <div className="text-4xl font-serif font-bold text-[#121212] min-w-[100px]">
                    ${currentPrice}
                 </div>

                <div className="flex items-center border border-black/10 rounded-sm bg-white h-14">
                  <button 
                    className="px-4 h-full hover:bg-gray-50 transition-colors text-[#121212]"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium text-[#121212]">{quantity}</span>
                  <button 
                    className="px-4 h-full hover:bg-gray-50 transition-colors text-[#121212]"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  className={`flex-1 w-full sm:w-auto py-4 px-8 h-14 uppercase tracking-[0.15em] text-xs font-bold transition-all duration-300 rounded-sm ${
                    added ? 'bg-[#C9A86A] text-[#121212]' : 'bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212]'
                  }`}
                  onClick={handleAddToCart}
                  disabled={added}
                >
                  {added ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check size={16} /> Added
                    </span>
                  ) : 'Add to Ritual'}
                </button>
                
                <button 
                  className={`h-14 w-14 flex items-center justify-center border border-black/10 rounded-sm transition-colors ${
                     wishlisted ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white hover:bg-gray-50 text-[#121212]'
                  }`}
                  onClick={toggleWishlist}
                >
                   <Heart size={20} fill={wishlisted ? "currentColor" : "none"} />
                </button>
              </div>
  
              {/* Accordions */}
              <div className="border-t border-black/10 pt-2 w-full max-w-lg">
                {/* MANDATORY NUTRITION FACTS FOR EDIBLES */}
                {isEdible && product.nutrition_facts && (
                  <AccordionItem 
                    title="Nutrition Facts" 
                    isOpen={openSection === 'nutrition'} 
                    onClick={() => setOpenSection(openSection === 'nutrition' ? null : 'nutrition')}
                  >
                    <div className="bg-white p-4 border border-black/5 rounded-sm">
                       <div className="flex justify-between border-b border-black/10 pb-2 mb-2">
                          <span className="font-bold">Serving Size</span>
                          <span>{product.nutrition_facts.serving_size}</span>
                       </div>
                       <div className="space-y-1 text-xs">
                          <div className="flex justify-between"><span>Calories</span> <span className="font-bold">{product.nutrition_facts.calories}</span></div>
                          <div className="flex justify-between"><span>Total Fat</span> <span>{product.nutrition_facts.total_fat}</span></div>
                          <div className="flex justify-between"><span>Total Carbs</span> <span>{product.nutrition_facts.total_carbs}</span></div>
                          <div className="flex justify-between"><span>Sugars</span> <span>{product.nutrition_facts.sugars}</span></div>
                          <div className="flex justify-between"><span>Protein</span> <span>{product.nutrition_facts.protein}</span></div>
                          <div className="flex justify-between"><span>Sodium</span> <span>{product.nutrition_facts.sodium}</span></div>
                       </div>
                    </div>
                  </AccordionItem>
                )}

                {product.specs && !isEdible && (
                  <AccordionItem 
                    title="Specifications" 
                    isOpen={openSection === 'specs'} 
                    onClick={() => setOpenSection(openSection === 'specs' ? null : 'specs')}
                  >
                    <div className="grid grid-cols-2 gap-4">
                       {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key}>
                             <span className="block text-[10px] uppercase tracking-widest text-[#C9A86A] mb-1">{key}</span>
                             <span className="font-medium text-[#121212]">{value}</span>
                          </div>
                       ))}
                    </div>
                  </AccordionItem>
                )}

                <AccordionItem 
                  title="Effect & Usage" 
                  isOpen={openSection === 'usage'} 
                  onClick={() => setOpenSection(openSection === 'usage' ? null : 'usage')}
                >
                  <p className="mb-4">{product.usage}</p>
                  <div className="flex items-center gap-2 text-[#C9A86A] text-sm font-bold">
                     <Star size={14} fill="currentColor" />
                     <span className="uppercase tracking-widest">{product.effect} Effect • {product.strength} Strength</span>
                  </div>
                </AccordionItem>

                <AccordionItem 
                  title="Ingredients" 
                  isOpen={openSection === 'ingredients'} 
                  onClick={() => setOpenSection(openSection === 'ingredients' ? null : 'ingredients')}
                >
                  <ul className="list-disc pl-4 space-y-1 marker:text-[#C9A86A]">
                    {product.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </AccordionItem>

                {/* Lab Results Placeholder */}
                <div className="py-5 border-b border-black/10">
                   <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#C9A86A] transition-colors">
                      <Info size={14} />
                      View Lab Results (COA)
                   </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center items-center sticky top-24"
          >
             <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/5] lg:aspect-square flex items-center justify-center">
                 {/* Radial gradient background */}
                 <div className="absolute inset-0 bg-radial-gradient from-[#C9A86A]/20 to-transparent opacity-60 blur-3xl pointer-events-none"></div>
                 
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-contain relative z-10 drop-shadow-xl mix-blend-multiply"
                 />
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
