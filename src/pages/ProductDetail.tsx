import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, ChevronDown, Check, Play } from 'lucide-react';
import { products } from '../lib/data';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/core';
import explodedView from 'figma:asset/23812c4bb00e4a2a0152508e0c87b354edcab084.png';

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

  if (!product) {
    return <div className="p-20 text-center text-[#121212] bg-[#F5F5F2] min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-[#F5F5F2] min-h-screen text-[#121212] overflow-x-hidden pt-24">
      {/* Header Banner - Jeeter Style */}
      {/* Background Watermark */}
      <div className="fixed inset-0 w-full h-full pointer-events-none select-none flex justify-center items-center z-0 overflow-hidden">
         <span 
          className="text-[25vw] font-serif font-bold italic text-transparent tracking-tighter whitespace-nowrap opacity-5"
          style={{ WebkitTextStroke: '2px #121212' }}
        >
           ZODIAC
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 md:py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-3 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
           <Link to="/" className="text-[#121212] hover:text-[#C9A86A] transition-colors">Zodiac</Link>
           <Play size={8} className="text-[#C9A86A] fill-[#C9A86A]" />
           <Link to="/shop" className="text-[#121212] hover:text-[#C9A86A] transition-colors">Shop</Link>
           <Play size={8} className="text-[#C9A86A] fill-[#C9A86A]" />
           <span className="text-[#C9A86A]">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content - Jeeter Style Typography */}
          <div className="flex flex-col order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-black text-[#121212] mb-2 leading-[0.9] uppercase tracking-tighter">
                WHAT'S<br />
                <span className="text-[#C9A86A]">{product.name}</span>
              </h1>
              
              <p className="text-[#121212]/70 leading-relaxed mb-10 text-lg max-w-lg mt-6">
                {product.description}
              </p>

              {/* Feature Points */}
              <div className="space-y-6 mb-12">
                 <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] mt-2.5"></div>
                    <div>
                       <h3 className="text-sm font-bold uppercase tracking-widest text-[#121212] mb-1">Effect</h3>
                       <p className="text-[#121212]/60 text-sm">{product.effect} - {product.strength} Strength</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] mt-2.5"></div>
                    <div>
                       <h3 className="text-sm font-bold uppercase tracking-widest text-[#121212] mb-1">Ingredients</h3>
                       <p className="text-[#121212]/60 text-sm">{product.ingredients.slice(0, 3).join(', ')}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] mt-2.5"></div>
                    <div>
                       <h3 className="text-sm font-bold uppercase tracking-widest text-[#121212] mb-1">Usage</h3>
                       <p className="text-[#121212]/60 text-sm">{product.usage}</p>
                    </div>
                 </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                 <div className="text-3xl font-serif font-bold text-[#121212] min-w-[100px]">
                    ${product.price}
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
              </div>
  
              {/* Accordions */}
              <div className="border-t border-black/10 pt-2 w-full max-w-lg">
                <AccordionItem 
                  title="Full Details" 
                  isOpen={openSection === 'usage'} 
                  onClick={() => setOpenSection(openSection === 'usage' ? null : 'usage')}
                >
                  {product.usage}
                  <div className="mt-4 pt-4 border-t border-dashed border-black/10">
                    <span className="block text-xs uppercase tracking-widest text-[#C9A86A] mb-2">Category</span>
                    <p>{product.category}</p>
                  </div>
                </AccordionItem>
                <AccordionItem 
                  title="All Ingredients" 
                  isOpen={openSection === 'ingredients'} 
                  onClick={() => setOpenSection(openSection === 'ingredients' ? null : 'ingredients')}
                >
                  <ul className="list-disc pl-4 space-y-1 marker:text-[#C9A86A]">
                    {product.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </AccordionItem>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Exploded View Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center items-center"
          >
             {/* Use the specific exploded view asset as requested */}
             <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/5] lg:aspect-square flex items-center justify-center">
                 {/* Radial gradient background behind product for depth - Light Mode Version */}
                 <div className="absolute inset-0 bg-radial-gradient from-[#C9A86A]/20 to-transparent opacity-60 blur-3xl pointer-events-none"></div>
                 
                 <img 
                   src={explodedView} 
                   alt="Product Exploded View" 
                   className="w-full h-auto object-contain relative z-10 drop-shadow-xl mix-blend-multiply"
                 />
                 
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
