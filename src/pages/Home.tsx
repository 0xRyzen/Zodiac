
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight, Star, Plus } from 'lucide-react';
import { Button } from '../components/ui/core';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../lib/data';
import imgPouch from 'figma:asset/630cef14d5e26e6802e6ae1d9a1365a950926bc6.png';
import imgOrangeDrink from 'figma:asset/131d100a81dbfecf732cc90ebe56841c3596e4d6.png';
import exampleImage from 'figma:asset/3ee8c241a0152fcf2be5f5aa463d09ddc91b2dcb.png';

import heroLogoImg from 'figma:asset/a9a7931b9fea81e5834e5b7ebfb9f35552a17113.png';

// --- Styled Components ---

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: visible; 
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroTextBackground = styled(motion.h1)`
  position: fixed;
  top: 15%; /* Starts slightly lower on mobile to be centered */
  left: 50%;
  transform: translateX(-50%);
  font-family: sans-serif;
  /* Massive size to fill width like P. TRES */
  font-size: clamp(3rem, 15vw, 25rem); 
  font-weight: 600;
  color: #1a1a1a;
  line-height: 0.7;
  z-index: 40; /* Behind product (60) */
  white-space: nowrap;
  pointer-events: auto;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 1440px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    top: 10%;
    padding: 0 2rem;
  }
`;

const HeroContentLayer = styled.div`
  position: relative;
  z-index: 55; 
  width: 100%;
  max-width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.5rem 6rem 1.5rem;
  pointer-events: none;

  @media (min-width: 768px) {
    padding: 0 2rem 4rem 2rem;
  }
`;

const HeroProductImage = styled(motion.img)`
  position: absolute;
  top: 45%; 
  left: 50%;
  width: 80vw; /* Responsive width for mobile */
  max-width: 400px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
  z-index: 60; /* Higher than Text */

  @media (min-width: 768px) {
    top: 58%;
    height: 65vh; 
    width: auto;
    max-width: 90vw;
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.25));
  }
`;

const SideContent = styled(motion.div)`
  pointer-events: auto;
  position: relative;
  z-index: 70;
`;

const Section = styled.section`
  padding: 8rem 2rem;
  max-width: 1440px;
  margin: 0 auto;
`;

const BeigeSection = styled.section`
  background-color: #E6E4DE;
  padding: 5rem 1.5rem;
  position: relative;
  overflow: hidden;
  z-index: 30;

  @media (min-width: 1024px) {
    padding: 10rem 2rem;
  }
`;

// --- Components ---

const FadeIn = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] } 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const Home = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Parallax Text Animation
  // Start: 10% (High up) -> End: Match NavBar padding (2rem desktop, 1.5rem mobile)
  const topText = useTransform(scrollY, [0, 500], ['10%', isMobile ? '1.5rem' : '2rem']); 
  
  // Size: 20vw (Huge) -> 1.5rem (Header Logo size)
  const textSize = useTransform(scrollY, [0, 500], ['15vw', '1.5rem']);
  
  // Width: 100% (Spread out) -> 12rem (Compact Logo wrapper)
  // Ensures letters converge from full width to logo width
  const containerWidth = useTransform(scrollY, [0, 500], ['100%', '12rem']);
  
  // Line Height: 0.7 (Tight for huge text) -> 1.2 (Normal for logo)
  const lineHeight = useTransform(scrollY, [0, 500], [0.7, 1.2]);
  
  // Z-Index: Start lower (behind product), switch to high (header) when scrolled
  const zIndex = useTransform(scrollY, (value) => value > 100 ? 100 : 40);
  
  // Product Parallax: Moves up and out
  const yProduct = useTransform(scrollY, [0, 600], ['-50%', '-150%']); 
  
  // Featured products
  const featuredProducts = [products[10], products[11], products[12]];

  const categories = [
    {
      id: '01',
      title: 'PRODUCTS',
      subtitle: 'Zodiac',
      link: '/shop',
      color: '#00C4CC',
      text: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1538489281439-336a8b1ccb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMHByb2R1Y3QlMjByZWQlMjBib3R0bGV8ZW58MXx8fHwxNzY1ODU4MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: '12deg'
    },
    {
      id: '02',
      title: 'DEALS',
      subtitle: 'Zodiac',
      link: '/offers',
      color: '#FF7A30',
      text: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1512106374988-c95f566d39ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNjb3VudCUyMHRhZyUyMHNhbGV8ZW58MXx8fHwxNzY1ODU4MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: '-8deg'
    },
    {
      id: '03',
      title: 'APPAREL',
      subtitle: 'Zodiac',
      link: '/apparel',
      color: '#FCD842',
      text: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzd2VhdGVyJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjU4NTgzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: '5deg'
    },
    {
      id: '04',
      title: 'DELIVERY',
      subtitle: 'Zodiac',
      link: '/delivery',
      color: '#C8A2FF',
      text: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1699602049631-57a2e3dada16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NjU4NTgzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rotation: '-5deg'
    }
  ];

  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden text-[#2D2D2D]">
      
      {/* Fixed Text Layer */}
      <HeroTextBackground style={{ 
        top: topText, 
        fontSize: textSize, 
        width: containerWidth, 
        lineHeight,
        zIndex,
        x: '-50%' 
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <span>Z</span><span>O</span><span>D</span><span>I</span><span>A</span><span>C</span>
        </Link>
      </HeroTextBackground>

      {/* --- HERO SECTION --- */}
      <HeroContainer>
        
        {/* Center Hero Image */}
        <HeroProductImage 
          src={heroLogoImg}
          alt="Zodiac Celestial Emblem"
          style={{ x: '-50%', y: yProduct }}
          initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-45%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Floating UI Elements */}
        <HeroContentLayer>
          <div className="flex justify-between items-end w-full">
            
            {/* Left Side: Category & CTA */}
            <SideContent 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-md"
            >
              <h2 className="text-4xl md:text-6xl font-light font-serif leading-[1] mb-6 md:mb-8">
                an <span className="italic">Organic</span><br />
                <span className="font-normal uppercase tracking-tight">Experience</span>
              </h2>
              <Link to="/shop">
                <button className="bg-[#2D2D2D] text-white px-8 py-3 md:px-10 md:py-4 rounded-full flex items-center gap-4 hover:bg-black transition-colors group">
                  <span className="text-xs md:text-sm font-medium tracking-widest uppercase">Shop Now</span>
                  <Plus size={16} className="rotate-45 transition-transform duration-1000 ease-in-out group-hover:rotate-[225deg]" />
                </button>
              </Link>
            </SideContent>

            {/* Right Side: Story/Badge */}
            <SideContent 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-right hidden md:block"
            >
              {/* Spinning Text Badge */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-10 ml-auto">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fontSize="8.5" letterSpacing="2.2" fill="#2D2D2D" fontWeight="500">
                      <textPath xlinkHref="#circle">
                        GUARANTEED • QUALITY • ORGANIC • 100% •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                
                {/* Image inside badge */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden relative z-10 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGVhZnxlbnwxfHx8fDE3NjU3NzM3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    className="w-full h-full object-cover"
                    alt="Organic leaf"
                  />
                </div>
              </div>
              
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#2D2D2D] mb-4">Started in 2024..</p>
              <p className="max-w-[220px] text-sm text-gray-500 leading-relaxed ml-auto mb-6">
                It all started when our founders discovered the healing power of raw botanicals in the Oregon valley.
              </p>
              <Link to="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-[#2D2D2D] pb-1 hover:opacity-60 transition-opacity">
                Read Our Story
              </Link>
            </SideContent>
            
          </div>
        </HeroContentLayer>
      </HeroContainer>

      {/* --- STORY / PROCESS SECTION (Beige) --- */}
      <BeigeSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image Mosaic */}
          <div className="relative h-[400px] md:h-[600px] lg:h-[800px]">
            <motion.div 
              className="absolute left-0 top-0 w-3/4 h-3/4 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <img 
                src={exampleImage}
                alt="Botanical Texture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
              className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-white p-4 shadow-xl rotate-3"
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <img 
                src={imgOrangeDrink}
                alt="Orange Drink" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Big Typography */}
          <div className="space-y-12">
            <FadeIn>
              <h2 className="text-6xl md:text-7xl font-sans font-light text-[#2D2D2D] leading-[1.1] tracking-tight">
                WE MAKE <span className="font-serif italic">organic</span>,<br />
                tasteful, <span className="font-medium">AND</span> <span className="font-serif italic">effective</span><br />
                WELLNESS GOODS
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-4 items-center">
                 <img src={products[3].image} className="w-20 h-20 rounded-full object-cover border border-[#2D2D2D]" alt="Balm" />
                 <p className="max-w-md text-lg text-gray-600 font-light leading-relaxed">
                   You may call us perfectionists, but we appreciate that our oils and balms are 100% traceable from seed to shelf.
                 </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link to="/about">
                <button className="bg-[#2D2D2D] text-white px-10 py-5 rounded-full flex items-center gap-4 hover:bg-black transition-all hover:px-12 duration-300 group">
                  <span className="text-sm font-medium tracking-widest uppercase">See Our Process</span>
                  <Plus size={16} className="rotate-45 transition-transform duration-1000 ease-in-out group-hover:rotate-[225deg]" />
                </button>
              </Link>
            </FadeIn>
          </div>

        </div>

        {/* Floating text bottom left */}
        <div className="absolute bottom-10 left-10 md:left-20 max-w-xs hidden md:block">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#2D2D2D]">We do our best for you</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Our commitment to purity means zero compromises. No fillers, no synthetics, just nature's most potent molecules working in harmony.
          </p>
        </div>
      </BeigeSection>

      {/* --- NEW ARRIVALS (White) --- */}
      <Section className="py-32 relative overflow-hidden">


        <div className="relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">The Collection</span>
              <h2 className="text-5xl font-serif text-[#2D2D2D]">Fresh from the Lab</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {featuredProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* --- CATEGORIES (Grid) --- */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-32 grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, i) => {
          // Zodiac Theme Logic
          const theme = [
            { bg: '#09090b', text: '#ffffff', sub: 'text-zinc-400', border: 'border-white/20' }, // Zinc-950
            { bg: '#e4e4e7', text: '#18181b', sub: 'text-zinc-500', border: 'border-black/10' }, // Zinc-200
            { bg: '#27272a', text: '#ffffff', sub: 'text-zinc-400', border: 'border-white/20' }, // Zinc-800
            { bg: '#f4f4f5', text: '#18181b', sub: 'text-zinc-500', border: 'border-black/10' }, // Zinc-100
          ][i % 4];

          return (
            <Link 
              key={cat.id} 
              to={cat.link}
              className="group relative overflow-hidden block h-[340px] md:h-[380px] rounded-[2rem] transition-all duration-500 hover:shadow-xl"
              style={{ backgroundColor: theme.bg }}
            >
              {/* Content Container */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                {/* Header: Title & Subtitle */}
                <div className="max-w-[60%]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full border text-[10px] font-bold ${theme.border}`} style={{ color: theme.text }}>
                      {cat.id}
                    </span>
                    <span className={`text-xs font-bold tracking-[0.2em] uppercase ${theme.sub}`}>
                      {cat.subtitle}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-medium leading-[0.9] tracking-tight" style={{ color: theme.text }}>
                    {cat.title}
                  </h2>
                </div>

                {/* Footer: Action Button */}
                <div>
                  <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:bg-opacity-100 ${i % 2 === 0 ? 'bg-white/10 group-hover:bg-white text-white group-hover:text-black' : 'bg-black/5 group-hover:bg-black text-black group-hover:text-white'}`}>
                    <span>View Collection</span>
                    <Plus size={14} className="rotate-45 transition-transform duration-1000 ease-in-out group-hover:rotate-[225deg]" />
                  </div>
                </div>
              </div>

              {/* Dynamic Image Layer */}
              <motion.div 
                className="absolute right-[-2%] bottom-[-5%] w-[55%] h-[80%] z-0"
                style={{ rotate: cat.rotation }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0,
                  x: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
              >
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Decor: Corner Plus */}
              <div className={`absolute top-8 right-8 opacity-30 ${theme.text === '#ffffff' ? 'text-white' : 'text-black'}`}>
                <Plus size={20} strokeWidth={1} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* --- TESTIMONIALS --- */}
      <section className="bg-[#2D2D2D] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-5xl md:text-7xl font-serif mb-12">"A ritual I actually look forward to."</h2>
               <div className="flex gap-2 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} fill="white" size={16} />)}
               </div>
               <p className="text-lg font-light opacity-80">— Elena R., Verified Buyer</p>
             </div>
             <div className="grid grid-cols-2 gap-4 opacity-50">
               <img src={products[0].image} className="w-full h-64 object-cover rounded-lg" alt="" />
               <img src={products[5].image} className="w-full h-64 object-cover rounded-lg translate-y-12" alt="" />
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};
