'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useStore from '../../store/useStore';
import Navbar from '../../components/Navbar';
import PromptCard from '../../components/PromptCard';
import SearchResults from '../../components/SearchResults';

export default function CategoryPage({ params }) {
  const router = useRouter();
  const { 
    findCategory, 
    setCurrentCategory, 
    searchQuery,
    // Don't use the loading state for category pages
  } = useStore();
  
  const { slug } = params;
  
  // Find the category that matches the slug
  const category = findCategory(slug);
  
  // Set current category in the store and handle not found
  useEffect(() => {
    if (category) {
      setCurrentCategory(category.category);
    } else {
      router.push('/');
    }
  }, [category, router, setCurrentCategory]);
  
  if (!category) {
    return null; // Will redirect
  }
  
  return (
    <div className="main-content">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* If there's a search query, show search results */}
        {searchQuery.length >= 2 ? (
          <SearchResults />
        ) : (
          <>
            {/* Category Header */}
            <header className="header">
              <button className="header__back-button" onClick={() => router.push('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
                </svg>
                <span>Back to Categories</span>
              </button>
              <h1 className="header__title">{category.category} Prompts</h1>
              <p className="header__subtitle">Choose a prompt to copy to your clipboard</p>
            </header>
            
            {/* Prompts Grid */}
            <div className="container">
              <div className="card-grid">
                {category.prompts.map((prompt, index) => (
                  <PromptCard
                    key={index}
                    title={prompt.title}
                    description={prompt.content.length > 120 
                      ? prompt.content.substring(0, 120) + '...' 
                      : prompt.content}
                    content={prompt.content}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        
        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Prompt Library. All prompts can be freely used and modified.</p>
        </footer>
      </main>
    </div>
  );
}