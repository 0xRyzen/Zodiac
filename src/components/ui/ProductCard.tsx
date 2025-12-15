
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { Product } from '../../lib/data';

const Card = styled(motion.div)`
  position: relative;
  group: hover;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 0.85; /* Slightly taller for editorial look */
  background-color: #F5F5F0;
  overflow: hidden;
  margin-bottom: 1.25rem;
`;

const ProductImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Tag = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #888;
  font-weight: 500;
`;

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <Card
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <ImageContainer>
          <ProductImage src={product.image} alt={product.name} />
          <motion.div 
            className="absolute inset-0 bg-black/5"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
          />
        </ImageContainer>
        <Meta>
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-medium text-[#2D2D2D] font-serif leading-none">{product.name}</h3>
            <span className="text-sm font-medium text-[#2D2D2D]">${product.price}</span>
          </div>
          <div className="flex gap-2 items-center mt-1">
             <Tag>{product.category}</Tag>
             <span className="text-[0.65rem] text-gray-300">•</span>
             <Tag>{product.effect}</Tag>
          </div>
        </Meta>
      </Card>
    </Link>
  );
};
