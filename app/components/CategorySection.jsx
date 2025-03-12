'use client';

import React from 'react';
import PromptBox from './PromptBox';
import './CategorySection.css';

const CategorySection = ({ title, prompts }) => {
  return (
    <div className="category-section">
      <h2 className="category-section__title">{title}</h2>
      <div className="category-section__prompts">
        {prompts.map((prompt, index) => (
          <PromptBox 
            key={index}
            title={prompt.title}
            content={prompt.content}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;