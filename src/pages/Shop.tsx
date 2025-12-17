import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../lib/data';
import { ChevronRight } from 'lucide-react';
import heroBg from 'figma:asset/09fbdf709fa2de8a2d5fe03ac341e04e84ba8baa.png';
import img1 from 'figma:asset/3f001b8e0cb5253f09737e0bed7ac915fa61d553.png';
import img2 from 'figma:asset/52d2be52cd8c341dd1a7b35ccdf4c2546e7412e8.png';
import img3 from 'figma:asset/6c2e96b1595d870fa0dc3f995770cb10349d1e5a.png';

const productImages = [img1, img2, img3];

export const Shop = () => {
  return (
    <div className="bg-[#F5F5F2] min-h-screen pt-20">
      {/* Header Banner - Reduced Height & Cleaner */}
      <div className="relative -mt-20 h-[35vh] bg-[#1C1F26] flex flex-col items-center justify-center overflow-hidden">
         {/* Background ZODIAC Watermark - Jeeter Style Outline */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
            <span 
              className="text-[20vw] font-serif font-bold italic text-transparent tracking-tighter whitespace-nowrap"
              style={{ WebkitTextStroke: '1px rgba(245, 245, 242, 0.05)' }}
            >
               ZODIAC
            </span>
         </div>
         
         <motion.div 
           className="relative z-10 text-center px-4 flex flex-col items-center"
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
         >
           <h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-serif font-bold text-[#F5F5F2] tracking-tighter leading-none select-none uppercase">
             PRODUCTS
           </h1>
         </motion.div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-gray-500">
           <Link to="/" className="hover:text-[#121212] transition-colors">Home</Link> 
           <ChevronRight size={10} />
           <span className="text-[#C9A86A]">Shop</span>
        </div>
      </div>

      {/* Products Grid - Reimagined Layout */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 12).map((product, i) => {
             // Split name for visual effect if needed, or just use as is. 
             // We'll use a bold font for the name to match the 'Jeeter' style.
             return (
               <Link 
                 to={`/product/${product.id}`} 
                 key={product.id} 
                 className="group relative bg-white h-[420px] rounded-[2rem] overflow-hidden border-b-[6px] border-[#C9A86A] hover:shadow-xl transition-all duration-500 block"
               >
                  {/* Badge & Category Top Left */}
                  <div className="absolute top-8 left-8 z-20 flex flex-col items-start gap-3">
                     {/* Dynamic Badge - 'NEW' for first few items */}
                     {(i < 3) && (
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
                     {/* Title - Large & Condensed Style */}
                     <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#121212] leading-[0.9] tracking-tighter mb-2 uppercase break-words max-w-[80%]">
                        {product.name.split(' ').slice(0, 2).join(' ')}
                     </h2>
                     
                     {/* Subtitle / Effect */}
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

                  {/* Product Image - Positioned Bottom Right */}
                  <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] z-10 pointer-events-none">
                     <motion.img 
                      src={productImages[i % productImages.length]} 
                      className="w-full h-full object-contain drop-shadow-xl" 
                      alt={product.name}
                      whileHover={{ scale: 1.05, rotate: -5 }}
                      transition={{ duration: 0.5 }}
                     />
                  </div>
                  
                  {/* Subtle Background Detail (optional, keeps it clean) */}
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                      <span className="text-9xl font-serif font-bold">{i + 1}</span>
                  </div>
               </Link>
             );
          })}
        </div>
        
        {/* Footer Info Section - Moved here from Header */}
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
