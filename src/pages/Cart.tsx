import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/core';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();
  const navigate = useNavigate();

  if (itemCount === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 bg-[#F5F5F2]">
        <h2 className="text-3xl font-serif text-[#121212] mb-4">Your ritual is empty</h2>
        <p className="text-gray-500 mb-8 font-serif">Explore our collection to find your balance.</p>
        <Link to="/shop">
          <Button variant="primary" className="bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] uppercase tracking-widest text-xs font-bold py-3 px-8">Explore Collection</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <h1 className="text-4xl font-serif text-[#121212] mb-12">Your Selection ({itemCount})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex gap-6 border-b border-black/10 pb-6"
                >
                  <div className="w-24 h-24 bg-white rounded-sm flex-shrink-0 border border-black/5 p-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg text-[#121212]">{item.name}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{item.strength} • {item.category}</p>
                      </div>
                      <span className="font-medium text-[#121212]">${item.price * item.quantity}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-black/10 rounded-sm bg-white">
                        <button 
                          className="px-2 py-1 hover:bg-gray-50 text-gray-600 transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 hover:bg-gray-50 text-gray-600 transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 uppercase tracking-wider"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
  
          <div className="lg:col-span-1">
            <div className="bg-white border border-black/5 p-8 rounded-sm sticky top-24 shadow-sm">
              <h2 className="text-lg font-serif text-[#121212] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-[#121212]">${cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium text-[#121212]">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Estimated Tax</span>
                  <span className="font-medium text-[#121212]">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-black/10 pt-4 flex justify-between">
                  <span className="font-serif text-[#121212]">Total</span>
                  <span className="font-medium text-[#121212] text-lg">${(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-[#F5F5F2] border border-black/5 text-xs text-gray-500 leading-relaxed rounded-sm">
                Thoughtful packaging: All orders ship in 100% plastic-free, recyclable materials.
              </div>
  
              <Button 
                fullWidth 
                className="bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] uppercase tracking-widest text-xs font-bold py-4 transition-all duration-300"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout <ArrowRight size={16} className="ml-2" />
              </Button>
              
              <div className="mt-4 text-center">
                <Link to="/shop" className="text-xs text-gray-400 hover:text-[#121212] transition-colors uppercase tracking-widest">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
