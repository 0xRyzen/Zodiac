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
    <div className="bg-white min-h-screen pt-20">
      {/* Jeeter-style Banner */}
      <div className="relative -mt-20 h-[35vh] md:h-[45vh] bg-gradient-to-r from-[#FF7A00] via-[#FF4E00] to-[#FF2E00] flex flex-col items-center justify-center overflow-hidden">
         {/* Background Decoration (Abstract Curves) */}
         <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
            <img src={heroBg} className="h-full w-auto object-contain" alt="" />
         </div>
         
         <motion.h1 
           className="relative z-10 text-6xl md:text-9xl font-black text-center text-white tracking-tighter uppercase italic drop-shadow-sm font-sans"
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         >
           PRODUCTS
         </motion.h1>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400">
           <Link to="/" className="hover:text-[#FF4E00] transition-colors">ZODIAC</Link> 
           <ChevronRight size={10} />
           <span className="text-[#FF4E00]">PRODUCTS</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, i) => {
           // Split name for visual hierarchy (First word HUGE, rest smaller)
           const nameParts = product.name.split(' ');
           const mainTitle = nameParts[0];
           const subTitle = nameParts.slice(1).join(' ');

           return (
             <Link 
               to={`/product/${product.id}`} 
               key={product.id} 
               className="group relative bg-[#F5F5F7] rounded-xl overflow-hidden h-[450px] transition-all duration-300 hover:shadow-xl border-b-[6px] border-[#7000FF] block"
             >
                <div className="p-8 h-full flex flex-col items-start z-10 relative">
                   {/* New Badge (Conditional) */}
                   {i < 3 && (
                     <span className="bg-[#FF0000] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-4 inline-block rounded-sm">
                       New
                     </span>
                   )}

                   {/* Category */}
                   <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-2">
                     {product.category}
                   </span>

                   {/* Title Area */}
                   <div className="mb-2">
                     <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.8] text-[#1a1a1a] italic font-sans">
                       {mainTitle}
                     </h2>
                     {subTitle && (
                       <span className="block text-xl font-bold text-gray-400 uppercase tracking-tight mt-1">
                         {subTitle}
                       </span>
                     )}
                   </div>
                   
                   {/* Subtitle / Effect Details */}
                   <span className="text-[10px] font-bold tracking-[0.2em] text-[#7000FF] uppercase mb-8">
                     {product.effect} • {product.strength}
                   </span>

                   {/* Button */}
                   <div className="mt-auto z-20">
                     <button className="bg-black text-white text-[10px] font-bold px-8 py-3 uppercase tracking-widest hover:bg-[#FF4E00] transition-colors duration-300">
                       Learn More
                     </button>
                   </div>
                </div>

                {/* Product Image */}
                <div className="absolute right-[-5%] bottom-0 w-[70%] h-[60%] z-0 pointer-events-none">
                   <img 
                    src={productImages[i % productImages.length]} 
                    className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500 ease-out origin-bottom-center" 
                    alt={product.name} 
                   />
                </div>
             </Link>
           );
        })}
      </div>
    </div>
  );
};
