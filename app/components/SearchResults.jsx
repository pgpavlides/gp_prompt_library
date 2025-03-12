'use client';

import React from 'react';
import PromptCard from './PromptCard';
import useStore from '../store/useStore';

const SearchResults = () => {
  const searchQuery = useStore(state => state.searchQuery);
  const searchPrompts = useStore(state => state.searchPrompts);
  
  // Only search when query length is at least 2 characters
  const results = searchQuery.length >= 2 ? searchPrompts(searchQuery) : [];
  
  if (searchQuery.length < 2) {
    return null;
  }
  
  return (
    <div className="search-results">
      <h2 className="search-results__title">
        {results.length > 0
          ? `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${searchQuery}"`
          : `No results found for "${searchQuery}"`
        }
      </h2>
      
      {results.length > 0 && (
        <div className="card-grid">
          {results.map((prompt, index) => (
            <PromptCard
              key={index}
              title={prompt.title}
              description={`${prompt.category} • ${prompt.content.length > 80 
                ? prompt.content.substring(0, 80) + '...' 
                : prompt.content}`}
              content={prompt.content}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;