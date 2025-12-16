import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../lib/data';
import heroBg from 'figma:asset/09fbdf709fa2de8a2d5fe03ac341e04e84ba8baa.png';

export const Offers = () => {
  const offerProducts = products.filter((_, i) => i % 3 === 0).slice(0, 4);

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="relative -mt-20 h-[35vh] md:h-[45vh] bg-gradient-to-r from-[#00A651] via-[#00C468] to-[#00E07E] flex flex-col items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
            <img src={heroBg} className="h-full w-auto object-contain" alt="" />
         </div>
         
         <motion.h1 
           className="relative z-10 text-6xl md:text-9xl font-black text-center text-white tracking-tighter uppercase italic drop-shadow-sm font-sans"
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         >
           OFFERS
         </motion.h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="bg-[#F5F5F7] p-12 mb-16 text-center border border-dashed border-gray-300 rounded-xl">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">First Time Customer?</h2>
          <p className="text-gray-600 mb-6 font-medium">Use code <strong className="text-[#00A651]">WELCOME20</strong> for 20% off your first order.</p>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#00A651] hover:border-[#00A651] transition-colors">
            Shop All Products
          </Link>
        </div>

        <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-8">Limited Time Sets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
