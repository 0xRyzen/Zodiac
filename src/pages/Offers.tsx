import React from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../lib/data';

const PageHeader = styled.div`
  padding: 8rem 2rem 6rem;
  text-align: center;
  background-color: #1a1a1a;
  color: white;
`;

const MainContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const OfferBanner = styled.div`
  background-color: #F5F5F0;
  padding: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  border: 1px dashed #2D2D2D;
`;

export const Offers = () => {
  // Let's pretend products with id % 3 === 0 are on offer
  const offerProducts = products.filter((_, i) => i % 3 === 0).slice(0, 4);

  return (
    <>
      <PageHeader>
        <motion.h1 
          className="text-4xl md:text-6xl font-serif mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Special Offers
        </motion.h1>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          Exclusive bundles and seasonal releases for our community.
        </p>
      </PageHeader>

      <MainContent>
        <OfferBanner>
          <h2 className="text-2xl font-serif mb-2">First Time Customer?</h2>
          <p className="text-gray-600 mb-4">Use code <strong>WELCOME20</strong> for 20% off your first order.</p>
          <Link to="/shop" className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-60">
            Shop All Products
          </Link>
        </OfferBanner>

        <h3 className="text-2xl font-serif mb-8">Limited Time Sets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </MainContent>
    </>
  );
};
