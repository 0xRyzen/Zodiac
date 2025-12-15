
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Button, Input, Label } from '../components/ui/core';
import { Check, CreditCard, Truck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = ['Shipping', 'Payment', 'Review'];
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className={`flex items-center space-x-2 ${index + 1 <= currentStep ? 'text-[#2D2D2D]' : 'text-gray-300'}`}>
            <div className={`
              w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium border
              ${index + 1 <= currentStep ? 'bg-[#2D2D2D] text-white border-[#2D2D2D]' : 'border-gray-300'}
              ${index + 1 < currentStep ? 'bg-[#2D2D2D]' : ''}
            `}>
              {index + 1 < currentStep ? <Check size={12} /> : index + 1}
            </div>
            <span className="text-sm font-medium">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-px ${index + 1 < currentStep ? 'bg-[#2D2D2D]' : 'bg-gray-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export const Checkout = () => {
  const [step, setStep] = useState(1);
  const { cartTotal, cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsComplete(true);
        clearCart();
      }, 2000);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
          <Check size={32} />
        </div>
        <h2 className="text-3xl font-serif text-[#2D2D2D] mb-4">Order Confirmed!</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Thank you for your purchase. We've sent a confirmation email to your inbox. 
          Your order will ship within 1-2 business days.
        </p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <StepIndicator currentStep={step} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input required placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input required placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Address</Label>
                    <Input required placeholder="123 Wellness Way" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>City</Label>
                      <Input required placeholder="Portland" />
                    </div>
                    <div className="space-y-2">
                      <Label>Zip Code</Label>
                      <Input required placeholder="97201" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" required placeholder="jane@example.com" />
                  </div>
                  <div className="pt-6">
                    <Button type="submit" variant="primary" fullWidth>Continue to Payment</Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-medium mb-6">Payment Details</h2>
                  <div className="space-y-2">
                    <Label>Card Number</Label>
                    <div className="relative">
                      <Input required placeholder="0000 0000 0000 0000" />
                      <CreditCard className="absolute right-3 top-3 text-gray-400" size={20} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Expiry Date</Label>
                      <Input required placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label>CVC</Label>
                      <Input required placeholder="123" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button type="button" variant="secondary" onClick={() => setStep(1)}>Back</Button>
                    <Button type="submit" variant="primary" className="flex-1">Review Order</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-medium mb-6">Review Order</h2>
                  <div className="bg-gray-50 p-4 rounded-sm space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Ship to:</span>
                      <span className="font-medium">Jane Doe, 123 Wellness Way, Portland</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Method:</span>
                      <span className="font-medium">Standard Shipping (Free)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Payment:</span>
                      <span className="font-medium">Visa ending in 4242</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <Button type="button" variant="secondary" onClick={() => setStep(2)}>Back</Button>
                    <Button type="submit" variant="primary" className="flex-1" disabled={loading}>
                      {loading ? 'Processing...' : `Pay $${(cartTotal * 1.08).toFixed(2)}`}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        <div className="md:col-span-1">
          <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-sm sticky top-8">
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <ShoppingBag size={18} />
              In Your Cart
            </h3>
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex gap-3 text-sm">
                  <img src={item.image} className="w-12 h-12 object-cover rounded-sm bg-gray-100" alt="" />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span>${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2">
                <span>Total</span>
                <span>${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
