
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/core';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();
  const navigate = useNavigate();

  if (itemCount === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif text-[#2D2D2D] mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any items yet.</p>
        <Link to="/shop">
          <Button variant="primary">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <h1 className="text-3xl font-serif text-[#2D2D2D] mb-12">Shopping Cart ({itemCount})</h1>
      
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
                className="flex gap-6 border-b border-gray-100 pb-6"
              >
                <div className="w-24 h-24 bg-[#F5F5F0] rounded-sm flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-[#2D2D2D]">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.strength} • {item.category}</p>
                    </div>
                    <span className="font-medium text-[#2D2D2D]">${item.price * item.quantity}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-200 rounded-sm">
                      <button 
                        className="px-2 py-1 hover:bg-gray-50 text-gray-600"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 hover:bg-gray-50 text-gray-600"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
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
          <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-sm sticky top-24">
            <h2 className="text-lg font-medium text-[#2D2D2D] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-[#2D2D2D]">${cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-[#2D2D2D]">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Estimated Tax</span>
                <span className="font-medium text-[#2D2D2D]">${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="font-medium text-[#2D2D2D]">Total</span>
                <span className="font-medium text-[#2D2D2D] text-lg">${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
            </div>

            <Button 
              fullWidth 
              variant="primary" 
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout <ArrowRight size={16} className="ml-2" />
            </Button>
            
            <div className="mt-4 text-center">
              <Link to="/shop" className="text-sm text-gray-500 hover:text-[#2D2D2D] transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
