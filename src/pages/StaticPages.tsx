
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { Button, Input, Label } from '../components/ui/core';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

const SectionTitle = styled.h2`
  font-family: serif;
  font-size: 2.5rem;
  color: #2D2D2D;
  margin-bottom: 2rem;
`;

const TextBlock = styled.div`
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

// Education Page
export const Education = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const topics = [
    {
      title: 'Finding Your Dosage',
      content: 'Start low and go slow. We recommend starting with 5-10mg of CBD and waiting 2 hours to assess the effects. Keep a journal of your experience to find your optimal dose.'
    },
    {
      title: 'The Endocannabinoid System',
      content: 'Your body has a vast network of receptors called the Endocannabinoid System (ECS) that regulates sleep, mood, pain, and immune response. Phytocannabinoids like CBD interact with these receptors to support balance.'
    },
    {
      title: 'Full Spectrum vs. Isolate',
      content: 'Full Spectrum contains all compounds found in the plant, including trace amounts of THC (<0.3%), creating the "Entourage Effect." Isolate is pure CBD with all other compounds removed.'
    },
    {
      title: 'Safety & Drug Interactions',
      content: 'CBD is generally safe, but can interact with certain medications. Always consult your healthcare provider before starting a new regimen, especially if you take blood thinners.'
    }
  ];

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4 block">Learn</span>
        <SectionTitle>Cannabis 101</SectionTitle>
        <TextBlock>
          <p>
            Education is at the core of our mission. We believe that informed choices lead to better outcomes. 
            Here, we break down the essentials of botanical wellness.
          </p>
        </TextBlock>

        <div className="space-y-4 mt-12">
          {topics.map((topic, index) => (
            <div key={index} className="border border-gray-200 rounded-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg text-[#2D2D2D]">{topic.title}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                      {topic.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </PageContainer>
  );
};

// About Page
export const About = () => {
  return (
    <div className="w-full">
      <div className="h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1761330439741-3dcf41ee766b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwaW50ZXJpb3IlMjBiZWlnZSUyMGFlc3RoZXRpYyUyMGNhbG18ZW58MXx8fHwxNzY1NzczNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' }}>
        <div className="h-full w-full bg-black/20 flex items-center justify-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Intention in <br />Every Drop.
          </motion.h1>
        </div>
      </div>
      
      <PageContainer>
        <div className="grid grid-cols-1 gap-16">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-medium mb-4">Our Mission</h3>
            <TextBlock>
              <p className="text-xl leading-relaxed text-[#2D2D2D]">
                We founded Zodiac to bridge the gap between modern science and ancient plant wisdom. 
                In a market flooded with noise, we offer clarity, purity, and efficacy.
              </p>
            </TextBlock>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Sourcing</h4>
              <p className="text-gray-600">
                We partner exclusively with small-scale, regenerative farms in the Pacific Northwest. 
                Our hemp is grown in nutrient-rich soil without the use of synthetic pesticides or fertilizers.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Transparency</h4>
              <p className="text-gray-600">
                Trust is earned. That's why we publish comprehensive third-party lab reports for every single batch we produce. 
                What's on the label is exactly what's in the bottle.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

// Legal Page
export const Legal = () => {
  return (
    <PageContainer>
      <SectionTitle>Privacy & Terms</SectionTitle>
      <TextBlock>
        <h3 className="text-lg font-medium text-[#2D2D2D] mb-2">Privacy Policy</h3>
        <p>
          Your privacy is paramount. We do not sell your data to third parties. We collect only what is necessary to process your order and improve your experience.
        </p>
        
        <h3 className="text-lg font-medium text-[#2D2D2D] mb-2 mt-8">Terms of Service</h3>
        <p>
          By accessing this website, you agree to be bound by these terms. You must be at least 21 years of age to purchase our products.
        </p>

        <h3 className="text-lg font-medium text-[#2D2D2D] mb-2 mt-8">FDA Disclaimer</h3>
        <p>
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </TextBlock>
    </PageContainer>
  );
};

// Contact Page
export const Contact = () => {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="text-gray-600 mb-8">
            Have questions about our products or need guidance on your wellness journey? We're here to help.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-600">
              <Mail size={20} />
              <span>support@zodiacwellness.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <Phone size={20} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <MapPin size={20} />
              <span>123 Wellness Way, Portland, OR</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input placeholder="Your name" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Your email" />
          </div>
          <div>
            <Label>Message</Label>
            <textarea 
              className="w-full min-h-[150px] p-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#2D2D2D]"
              placeholder="How can we help?"
            />
          </div>
          <Button variant="primary" fullWidth>Send Message</Button>
        </form>
      </div>
    </PageContainer>
  );
};

// Not Found Page
export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-9xl font-serif text-[#F5F5F0] leading-none mb-4">404</h1>
      <h2 className="text-3xl font-serif text-[#2D2D2D] mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a href="/" className="bg-[#2D2D2D] text-white px-8 py-3 rounded-sm uppercase text-xs font-bold tracking-widest hover:bg-black transition-colors">
        Return Home
      </a>
    </div>
  );
};
