
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '../lib/data';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/core';

const AccordionItem = ({ title, children, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-[#2D2D2D] transition-colors hover:text-gray-600 focus:outline-none"
        onClick={onClick}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
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
            <div className="pb-4 text-sm text-gray-600 leading-relaxed">
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
    return <div className="p-20 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F5F0] rounded-sm overflow-hidden aspect-square sticky top-24"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{product.category}</span>
              <span className="text-xl font-medium text-[#2D2D2D]">${product.price}</span>
            </div>
            
            <h1 className="text-4xl font-serif text-[#2D2D2D] mb-4">{product.name}</h1>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="bg-gray-50 border border-gray-100 p-4 rounded-sm mb-8 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Effect</span>
                <span className="font-medium text-[#2D2D2D]">{product.effect}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Strength</span>
                <span className="font-medium text-[#2D2D2D]">{product.strength}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-200 rounded-sm">
                <button 
                  className="px-3 py-2 hover:bg-gray-50 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button 
                  className="px-3 py-2 hover:bg-gray-50 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              <div className="flex-1">
                <Button 
                  fullWidth 
                  variant="primary"
                  onClick={handleAddToCart}
                  disabled={added}
                >
                  {added ? (
                    <span className="flex items-center gap-2">
                      <Check size={16} /> Added to Cart
                    </span>
                  ) : 'Add to Cart'}
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-2">
              <AccordionItem 
                title="Description" 
                isOpen={openSection === 'description'} 
                onClick={() => setOpenSection(openSection === 'description' ? null : 'description')}
              >
                {product.description}
              </AccordionItem>
              <AccordionItem 
                title="How to Use" 
                isOpen={openSection === 'usage'} 
                onClick={() => setOpenSection(openSection === 'usage' ? null : 'usage')}
              >
                {product.usage}
              </AccordionItem>
              <AccordionItem 
                title="Ingredients" 
                isOpen={openSection === 'ingredients'} 
                onClick={() => setOpenSection(openSection === 'ingredients' ? null : 'ingredients')}
              >
                <ul className="list-disc pl-4 space-y-1">
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </AccordionItem>
              <AccordionItem 
                title="Safety & Compliance" 
                isOpen={openSection === 'safety'} 
                onClick={() => setOpenSection(openSection === 'safety' ? null : 'safety')}
              >
                Contains less than 0.3% THC. Third-party tested for purity and potency. Keep out of reach of children. Consult your physician before use if you are pregnant, nursing, or have a medical condition.
              </AccordionItem>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
