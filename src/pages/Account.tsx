import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { Button, Input, Label } from '../components/ui/core';
import { LogOut } from 'lucide-react';
import heroBg from 'figma:asset/09fbdf709fa2de8a2d5fe03ac341e04e84ba8baa.png';

export const Account = () => {
  const { user, login, logout } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('orders');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="relative -mt-20 h-[35vh] md:h-[45vh] bg-gradient-to-r from-[#1a1a1a] via-[#333] to-[#4d4d4d] flex flex-col items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
            <img src={heroBg} className="h-full w-auto object-contain" alt="" />
         </div>
         
         <motion.h1 
           className="relative z-10 text-6xl md:text-9xl font-black text-center text-white tracking-tighter uppercase italic drop-shadow-sm font-sans"
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         >
           ACCOUNT
         </motion.h1>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-16">
        {!user ? (
          <div className="max-w-md mx-auto bg-[#F5F5F7] p-8 md:p-12 rounded-xl shadow-lg border-t-4 border-black">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-2 text-center">
                {isLoginMode ? 'Welcome Back' : 'Join Zodiac'}
              </h2>
              <p className="text-center text-gray-500 font-medium mb-8">
                {isLoginMode ? 'Sign in to access your order history' : 'Create an account for exclusive benefits'}
              </p>

              <form onSubmit={handleAuth} className="space-y-6">
                <div>
                  <Label>Email Address</Label>
                  <Input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com" 
                  />
                </div>
                
                <div>
                    <Label>Password</Label>
                    <Input type="password" required placeholder="••••••••" />
                </div>

                <Button fullWidth variant="primary" type="submit" className="bg-black hover:bg-gray-800 text-white font-bold uppercase tracking-widest py-4">
                  {isLoginMode ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm font-bold uppercase tracking-widest">
                <button 
                  onClick={() => setIsLoginMode(!isLoginMode)}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  {isLoginMode ? "Need an account? Register" : "Have an account? Sign In"}
                </button>
              </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-12 pb-4 border-b border-gray-100">
                <span className="text-xl font-bold uppercase tracking-widest text-gray-400">Welcome, {user.email}</span>
                <button 
                onClick={logout} 
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors"
                >
                <LogOut size={16} /> Sign Out
                </button>
            </div>

            <div className="flex gap-8 mb-12">
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`text-lg font-black uppercase italic tracking-tighter pb-2 border-b-4 transition-colors ${activeTab === 'orders' ? 'border-[#FF4E00] text-black' : 'border-transparent text-gray-300 hover:text-gray-400'}`}
                >
                Orders
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`text-lg font-black uppercase italic tracking-tighter pb-2 border-b-4 transition-colors ${activeTab === 'profile' ? 'border-[#FF4E00] text-black' : 'border-transparent text-gray-300 hover:text-gray-400'}`}
                >
                Profile
                </button>
            </div>

            {activeTab === 'orders' && (
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
                >
                {[1, 2].map((order) => (
                    <div key={order} className="border border-gray-100 rounded-xl p-8 bg-[#F5F5F7] hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-200">
                        <div className="mb-4 md:mb-0">
                        <span className="block text-2xl font-black uppercase italic tracking-tighter text-[#1a1a1a]">Order #2024-{100 + order}</span>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Placed on Dec {10 + order}, 2024</p>
                        </div>
                        <div className="text-left md:text-right">
                        <span className="block text-xl font-bold text-black">$125.00</span>
                        <span className="inline-block px-3 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mt-2">Delivered</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-20 h-20 bg-white rounded-lg border border-gray-200 shadow-sm" />
                        <div className="w-20 h-20 bg-white rounded-lg border border-gray-200 shadow-sm" />
                    </div>
                    </div>
                ))}
                </motion.div>
            )}

            {activeTab === 'profile' && (
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl"
                >
                <div className="space-y-6 bg-white p-0">
                    <div>
                    <Label>Full Name</Label>
                    <Input defaultValue="Jane Doe" />
                    </div>
                    <div>
                    <Label>Email</Label>
                    <Input defaultValue={user.email} disabled className="bg-gray-50" />
                    </div>
                    <div>
                    <Label>Phone</Label>
                    <Input defaultValue="(555) 123-4567" />
                    </div>
                    <Button variant="primary" className="bg-black text-white font-bold uppercase tracking-widest py-4 mt-4 hover:bg-[#FF4E00]">Save Changes</Button>
                </div>
                </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
