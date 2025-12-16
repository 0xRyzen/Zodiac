import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Truck } from 'lucide-react';
import heroBg from 'figma:asset/09fbdf709fa2de8a2d5fe03ac341e04e84ba8baa.png';

export const Delivery = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="relative -mt-20 h-[35vh] md:h-[45vh] bg-gradient-to-r from-[#0066FF] via-[#3399FF] to-[#66CCFF] flex flex-col items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
            <img src={heroBg} className="h-full w-auto object-contain" alt="" />
         </div>
         
         <motion.h1 
           className="relative z-10 text-6xl md:text-9xl font-black text-center text-white tracking-tighter uppercase italic drop-shadow-sm font-sans"
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         >
           DELIVERY
         </motion.h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Clock, title: 'Same Day Delivery', desc: 'Order before 2 PM and receive your package the same day. We operate 7 days a week.' },
            { icon: Truck, title: 'Discreet Packaging', desc: 'Your privacy is our priority. All deliveries come in unbranded, odor-proof packaging.' },
            { icon: MapPin, title: 'Extended Zones', desc: 'We now deliver to the entire metro area. Check our coverage map for details.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F5F5F7] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
               <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                 <item.icon size={28} />
               </div>
               <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{item.title}</h3>
               <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#1a1a1a] text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-12">Delivery FAQ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Minimum Order?</h4>
                  <p className="text-gray-400">$50 minimum. Free delivery over $150.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">ID Required?</h4>
                  <p className="text-gray-400">Yes, valid government ID required (21+).</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Tracking?</h4>
                  <p className="text-gray-400">Real-time SMS tracking provided.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Payment?</h4>
                  <p className="text-gray-400">Cash on delivery or ACH.</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
