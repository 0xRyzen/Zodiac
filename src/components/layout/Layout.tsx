import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { useCart } from '../../context/CartContext';
import { NavBar } from './NavBar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#121212] font-sans selection:bg-[#C9A86A] selection:text-[#121212]">
      <NavBar showLogo={!isHome} isScrolled={isScrolled} />

      <main className={isHome ? '' : 'pt-24'}>
        {children}
      </main>

      <footer className="bg-[#1C1F26] text-white py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-serif mb-6">ZODIAC</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Intentional botanical wellness for a balanced life. 
                Organically grown, rigorously tested, ethically sourced.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Shop</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/shop?category=Oil" className="hover:text-white transition-colors duration-300 block w-max">Oils</Link></li>
                <li><Link to="/shop?category=Cream" className="hover:text-white transition-colors duration-300 block w-max">Topicals</Link></li>
                <li><Link to="/shop?category=Edible" className="hover:text-white transition-colors duration-300 block w-max">Edibles</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Learn</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/education" className="hover:text-white transition-colors duration-300 block w-max">Dosage Guide</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors duration-300 block w-max">Our Process</Link></li>
                <li><Link to="/legal" className="hover:text-white transition-colors duration-300 block w-max">Lab Results</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Stay Connected</h4>
              <p className="text-gray-400 text-sm mb-6">Join our newsletter for wellness tips and exclusive offers.</p>
              <div className="flex border-b border-white/20 pb-2">
                <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 text-white placeholder:text-gray-600 w-full p-0 text-sm" />
                <button className="text-white hover:opacity-70 text-xs font-medium uppercase tracking-widest ml-4">Join</button>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2024 Zodiac Wellness. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <Link to="/legal" className="hover:text-gray-400">Privacy Policy</Link>
               <Link to="/legal" className="hover:text-gray-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
