'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import useStore from '../store/useStore';

const CategoryCard = ({ category, icon }) => {
  const router = useRouter();
  const setCurrentCategory = useStore(state => state.setCurrentCategory);
  
  const handleClick = () => {
    setCurrentCategory(category);
    router.push(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`);
  };
  
  return (
    <div className="category-button" tabIndex="0" onClick={handleClick}>
      <div className="category-button-content">
        <div className="category-button-text">
          <h3 className="category-button-title">{category}</h3>
        </div>
        <div className="category-button-icon">
          {icon}
        </div>
      </div>
      <div className="category-button-accent"></div>
    </div>
  );
};

export default CategoryCard;