import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 900;
`;

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: #F5F5F2;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
  box-shadow: 10px 0 30px rgba(0,0,0,0.1);
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0 3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const MenuItem = styled(motion.li)`
  font-family: sans-serif;
`;

const MenuLink = styled(Link)`
  font-size: 2.25rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #121212;
  text-decoration: none;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  transition: color 0.5s;
  letter-spacing: -0.02em;

  &:hover {
    color: #C9A86A;
  }
`;

const LinkText = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background-color: currentColor;
    transition: width 1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  ${MenuLink}:hover &::after {
    width: 100%;
  }
`;

const SecondaryLinks = styled.div`
  margin-top: auto;
  padding: 4rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 2rem 1.5rem;
  }
`;

const SecondaryLink = styled(Link)`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #121212;
  }
`;

const Spacer = styled.div`
  height: 8rem;
  
  @media (max-width: 768px) {
    height: 7rem;
  }
`;

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { title: 'Products', path: '/shop' },
  { title: 'Offers', path: '/offers' },
  { title: 'Story', path: '/about' },
  { title: 'Learn', path: '/education' },
];

export const SidebarMenu = ({ isOpen, onClose }: SidebarMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <SidebarContainer
            initial={{ x: '-100%' }}
            animate={{ x: '0%', transition: { type: 'spring', damping: 25, stiffness: 200 } }}
            exit={{ x: '-100%', transition: { type: 'spring', damping: 25, stiffness: 200 } }}
          >
            <Spacer />

            <MenuList>
              {menuItems.map((item, i) => (
                <MenuItem 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.1 } }}
                >
                  <MenuLink to={item.path} onClick={onClose} className="group">
                    <LinkText>{item.title}</LinkText>
                    <ArrowLeft size={20} strokeWidth={2} className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
                  </MenuLink>
                </MenuItem>
              ))}
            </MenuList>

            <SecondaryLinks>
              <SecondaryLink to="/account" onClick={onClose}>My Account</SecondaryLink>
              <SecondaryLink to="/support" onClick={onClose}>Support</SecondaryLink>
            </SecondaryLinks>
          </SidebarContainer>
        </>
      )}
    </AnimatePresence>
  );
};
