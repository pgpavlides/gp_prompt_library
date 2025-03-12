'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import useStore from '../store/useStore';

const CategoryCard = ({ category, icon }) => {
  const router = useRouter();
  const setCurrentCategory = useStore(state => state.setCurrentCategory);
  
  const handleClick = () => {
    setCurrentCategory(category);
    router.push(`/category/${category.toLowerCase()}`);
  };
  
  return (
    <div className="card" tabIndex="0" onClick={handleClick}>
      <div className="card-content">
        <div>
          <h3 className="card-title">{category}</h3>
        </div>
        <div className="card-icon">
          {icon}
        </div>
      </div>
      <div className="card-accent"></div>
    </div>
  );
};

export default CategoryCard;