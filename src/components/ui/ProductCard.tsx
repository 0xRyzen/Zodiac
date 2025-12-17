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
  aspect-ratio: 0.8; 
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
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
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888;
  font-weight: 600;
`;

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block h-full group">
      <Card
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <ImageContainer className="rounded-sm">
          <ProductImage src={product.image} alt={product.name} />
          {/* Hover overlay or quick add can go here */}
        </ImageContainer>
        <Meta>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-serif text-[#121212] group-hover:text-[#C9A86A] transition-colors duration-300">{product.name}</h3>
            <span className="text-sm font-medium text-[#121212]">${product.price}</span>
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
