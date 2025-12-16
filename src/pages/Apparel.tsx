import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../lib/data';
import heroBg from 'figma:asset/09fbdf709fa2de8a2d5fe03ac341e04e84ba8baa.png';

export const Apparel = () => {
  const [sortBy, setSortBy] = useState('featured');

  const apparelProducts = useMemo(() => {
    return products.filter(p => p.category === 'Apparel');
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...apparelProducts];

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [apparelProducts, sortBy]);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Banner */}
      <div className="relative -mt-20 h-[35vh] md:h-[45vh] bg-gradient-to-r from-[#7000FF] via-[#8B00FF] to-[#A600FF] flex flex-col items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
            <img src={heroBg} className="h-full w-auto object-contain" alt="" />
         </div>
         
         <motion.h1 
           className="relative z-10 text-6xl md:text-9xl font-black text-center text-white tracking-tighter uppercase italic drop-shadow-sm font-sans"
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         >
           APPAREL
         </motion.h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
          <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">{filteredProducts.length} Items</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Sort by:</span>
            <select 
              className="text-sm border-none bg-transparent font-bold uppercase tracking-widest focus:ring-0 cursor-pointer outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-gray-500 font-bold uppercase tracking-widest">
            No apparel items found.
          </div>
        )}
      </div>
    </div>
  );
};
