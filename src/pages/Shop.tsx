
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ui/ProductCard';
import { products, Product } from '../lib/data';
import { ChevronDown } from 'lucide-react';

const PageHeader = styled.div`
  padding: 6rem 2rem 4rem;
  text-align: center;
  background-color: #F5F5F0;
`;

const MainContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 240px 1fr;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2D2D2D;
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  cursor: pointer;
  
  &:hover {
    color: #2D2D2D;
  }
  
  input {
    margin-right: 0.5rem;
    accent-color: #2D2D2D;
  }
`;

export const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedEffects, setSelectedEffects] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  const toggleFilter = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedEffects.length > 0) {
      result = result.filter(p => selectedEffects.includes(p.effect));
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategories, selectedEffects, sortBy]);

  const categories = Array.from(new Set(products.map(p => p.category)));
  const effects = Array.from(new Set(products.map(p => p.effect)));

  return (
    <>
      <PageHeader>
        <motion.h1 
          className="text-4xl font-serif text-[#2D2D2D] mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Shop Collection
        </motion.h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Discover our range of plant-based formulations designed to enhance your daily rituals.
        </p>
      </PageHeader>

      <MainContent>
        <aside>
          <FilterSection>
            <FilterTitle>Category</FilterTitle>
            {categories.map(cat => (
              <FilterOption key={cat}>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                />
                {cat}
              </FilterOption>
            ))}
          </FilterSection>

          <FilterSection>
            <FilterTitle>Effect</FilterTitle>
            {effects.map(effect => (
              <FilterOption key={effect}>
                <input 
                  type="checkbox" 
                  checked={selectedEffects.includes(effect)}
                  onChange={() => toggleFilter(selectedEffects, setSelectedEffects, effect)}
                />
                {effect}
              </FilterOption>
            ))}
          </FilterSection>
        </aside>

        <div>
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <span className="text-sm text-gray-500">{filteredProducts.length} Products</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select 
                className="text-sm border-none bg-transparent font-medium focus:ring-0 cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center text-gray-500">
              No products found matching your filters.
            </div>
          )}
        </div>
      </MainContent>
    </>
  );
};
