
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { Button, Input, Label } from '../components/ui/core';
import { Package, User, LogOut } from 'lucide-react';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 70vh;
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 1rem 2rem;
  border-bottom: 2px solid ${props => props.$active ? '#2D2D2D' : 'transparent'};
  color: ${props => props.$active ? '#2D2D2D' : '#999'};
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    color: #2D2D2D;
  }
`;

export const Account = () => {
  const { user, login, logout } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('orders');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  if (!user) {
    return (
      <Container className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 border border-gray-100 rounded-sm shadow-sm">
          <h1 className="text-2xl font-serif text-center mb-2">
            {isLoginMode ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-center text-gray-500 text-sm mb-8">
            {isLoginMode ? 'Sign in to access your order history' : 'Join us for exclusive benefits'}
          </p>

          <form onSubmit={handleAuth} className="space-y-4">
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
            
            {!isLoginMode && (
              <div>
                <Label>Password</Label>
                <Input type="password" required placeholder="••••••••" />
              </div>
            )}
            
            {isLoginMode && (
              <div>
                <Label>Password</Label>
                <Input type="password" required placeholder="••••••••" />
              </div>
            )}

            <Button fullWidth variant="primary" type="submit" className="mt-4">
              {isLoginMode ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <button 
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text-gray-500 hover:text-[#2D2D2D] underline"
            >
              {isLoginMode ? "Don't have an account? Register" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-[#2D2D2D]">My Account</h1>
        <button 
          onClick={logout} 
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>

      <div className="flex border-b border-gray-100 mb-8">
        <TabButton $active={activeTab === 'orders'} onClick={() => setActiveTab('orders')}>
          Orders
        </TabButton>
        <TabButton $active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>
          Profile
        </TabButton>
      </div>

      {activeTab === 'orders' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Mock Orders */}
          {[1, 2].map((order) => (
            <div key={order} className="border border-gray-100 rounded-sm p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                <div>
                  <span className="font-medium text-[#2D2D2D]">Order #2024-{100 + order}</span>
                  <p className="text-sm text-gray-500">Placed on Dec {10 + order}, 2024</p>
                </div>
                <div className="text-right">
                  <span className="block font-medium">$125.00</span>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-1">Delivered</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-white rounded-sm border border-gray-200" />
                <div className="w-16 h-16 bg-white rounded-sm border border-gray-200" />
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {activeTab === 'profile' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md"
        >
          <div className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input defaultValue="Jane Doe" />
            </div>
            <div>
              <Label>Email</Label>
              <Input defaultValue={user.email} disabled />
            </div>
            <div>
              <Label>Phone</Label>
              <Input defaultValue="(555) 123-4567" />
            </div>
            <Button variant="primary">Save Changes</Button>
          </div>
        </motion.div>
      )}
    </Container>
  );
};
