import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Search, ShoppingBag, User } from 'lucide-react';

const NavWrapper = styled.nav<{ $isHome?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  z-index: 100;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  font-weight: 500;
  color: #2D2D2D;
  background-color: transparent;
  pointer-events: none; /* Let clicks pass through empty spaces */

  * {
    pointer-events: auto; /* Re-enable clicks on children */
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  
  a {
    position: relative;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
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
  text-transform: none; /* ZODIAC is usually uppercase in the design, but let's check */
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
  return (
    <NavWrapper>
      <NavLinks>
        <Link to="/shop">Shop</Link>
        <Link to="/offers">Special Offers</Link>
        <Link to="/about">Our Story</Link>
      </NavLinks>
      
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
  );
};
