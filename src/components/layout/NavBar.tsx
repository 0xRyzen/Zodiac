import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { SidebarMenu } from './SidebarMenu';
import logoImg from 'figma:asset/a9a7931b9fea81e5834e5b7ebfb9f35552a17113.png';

const NavWrapper = styled.nav<{ $isHome?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  z-index: 1001;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  font-weight: 500;
  color: #2D2D2D;
  background-color: transparent;
  pointer-events: none;

  * {
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const BurgerButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  width: 40px;
  height: 40px;
  transform-origin: center;
`;

const NavActions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.6;
    }
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  text-transform: none;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 0.1em;
`;

interface NavBarProps {
  showLogo?: boolean;
}

export const NavBar = ({ showLogo = true }: NavBarProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMorphing, setIsMorphing] = useState(false);

  const handleClose = () => {
    setIsMorphing(false);
    setTimeout(() => {
      setSidebarOpen(false);
    }, 400);
  };

  const handleMenuClick = () => {
    if (!isSidebarOpen) {
      setIsMorphing(true);
      setTimeout(() => {
        setSidebarOpen(true);
      }, 400);
    } else {
      handleClose();
    }
  };

  const buttonVariants = {
    idle: { 
      scale: 1, 
      rotate: 0, 
      borderRadius: "0%",
      backgroundColor: "rgba(0,0,0,0)",
      color: "inherit"
    },
    morph: { 
      scale: 1,
      rotate: 180,
      borderRadius: "50%",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      transition: { duration: 0.4, ease: "easeInOut" } 
    }
  };

  return (
    <>
      <SidebarMenu isOpen={isSidebarOpen} onClose={handleClose} />
      <NavWrapper>
        <LeftSection>
          <BurgerButton 
            onClick={handleMenuClick} 
            aria-label={isSidebarOpen ? "Close Menu" : "Open Menu"}
            animate={isMorphing ? "morph" : "idle"}
            variants={buttonVariants}
          >
            {isMorphing ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
          </BurgerButton>
          
          <img 
            src={logoImg} 
            alt="Zodiac Logo" 
            style={{ 
              width: '60px', 
              height: '60px', 
              objectFit: 'contain'
            }} 
          />
        </LeftSection>
        
        {showLogo && (
          <LogoContainer>
            <LogoLink to="/">
              <span>Z</span><span>O</span><span>D</span><span>I</span><span>A</span><span>C</span>
            </LogoLink>
          </LogoContainer>
        )}
        
        <NavActions>
          <Search strokeWidth={1.5} />
          <Link to="/cart" className="text-current flex items-center">
            <ShoppingBag strokeWidth={1.5} />
          </Link>
          <Link to="/account" className="text-current flex items-center">
            <User strokeWidth={1.5} />
          </Link>
        </NavActions>
      </NavWrapper>
    </>
  );
};
