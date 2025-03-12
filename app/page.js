'use client';

import { useEffect } from 'react';
import useStore from './store/useStore';
import GPPreloader from './components/GPPreloader';
import Navbar from './components/Navbar';
import CategoryCard from './components/CategoryCard';
import SearchResults from './components/SearchResults';
import './styles.css';

export default function Home() {
  const { 
    promptData, 
    progress, 
    loading,
    searchQuery,
    simulateLoading
  } = useStore();
  
  // Simulate loading process on component mount
  useEffect(() => {
    const cleanup = simulateLoading();
    return cleanup;
  }, [simulateLoading]);
  
  // Category icons
  const categoryIcons = {
    Broccoli: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C10 20 16 3.25 16 3.25S19 5 22 8c-3 3-5 5-5 5v3c0 2.45-1.76 4.47-4.09 4.91l.39-.95c2.5-.34 4.42-1.34 4.42-3.56V10.67s-.7-.56-1.22-.91c-.17.42-.39.81-.67 1.12C13 14 7 14 7 14c.55-1 1.24-2.12 2-3.18C10.24 9 13 8 17 8z"/>
      </svg>
    ),
    Astrology: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 2.5l3.44 6.97l7.41 1.08l-5.28 5.5l1.25 7.45l-6.6-3.47L5.62 23.5l1.25-7.45L1.6 10.55l7.41-1.08L12 2.5z"/>
      </svg>
    ),
    "Coloring Books": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M18 2h-6v6h2V4h2v8.5l2 3l2-3V4h2v4h2V2h-6v6h2V4h2v7l-2 3l-2-3V4zM4 4h8v16H8v-3H4v-8h4V7zM8 9H6v6h2V9z"/>
      </svg>
    ),
    Filmmaking: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
      </svg>
    ),
    Music: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    ),
    Photography: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5c-2.48 0-4.5-2.02-4.5-4.5S12.52 6.5 15 6.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zM15 10c-.83 0-1.5-.67-1.5-1.5S14.17 7 15 7s1.5.67 1.5 1.5S15.83 10 15 10z"/>
      </svg>
    ),
    Airbnb: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M11.8 2.1c-.7 1-1.7 2.6-2.8 4.6-.5.9-1.1 1.9-1.6 2.9-1.8-2.5-2.6-4.5-2.6-6.2 0-1.7 1.3-3.1 3-3.1s3 1.3 3 3.1v-.3c.4-.5.7-.1.7-.1s.3-.6.7.1v.3c0-1.7 1.3-3.1 3-3.1s3 1.3 3 3.1c0 1.7-.9 3.7-2.6 6.2-.5-1-1.1-2-1.6-2.9-1.1-2-2.1-3.6-2.8-4.6-.7-1-1.4-1.1-1.4-1.1v-.5c.1.1.7.4 1.4 1.1zm5.2 9.7c1 1.3 1.9 2.5 2.8 3.7.4-1.8.7-3.8.7-5.9 0-1.3-.2-2.4-.5-3.6-.8-1.2-2.1-2-3.7-2-1.4 0-2.6.7-3.5 1.6.4.5.9 1.2 1.5 2.1 1.5 2.5 3.3 5.3 5.1 8.4l.1.1.2.3.2-.3.1-.1c1.8-3.1 3.6-5.9 5.1-8.4.6-.9 1.1-1.6 1.5-2.1-.8-.9-2.1-1.6-3.5-1.6-1.5 0-2.9.8-3.7 2-.3 1.1-.5 2.3-.5 3.6 0 2.1.3 4.1.7 5.9.9-1.2 1.8-2.4 2.8-3.7-1 1.3-1.8 2.5-2.7 3.7.2.7.4 1.4.7 2 .3.9.7 1.7 1.1 2.5.2.4.4.8.6 1l.3.3.3-.3c.2-.2.4-.6.6-1 .4-.8.8-1.6 1.1-2.5.3-.6.5-1.3.7-2-1.1-1.2-1.9-2.3-2.9-3.7zM12 5c.4-.5.8-1.1 1.3-1.8-1.3-1-3-1.1-4.4-.5-1.5.6-2.4 2-2.4 3.6 0 1.5.7 3.2 2 5.3.6 1 1.2 2 2 3.1.7 1.1 1.5 2.1 2.3 3.3.3-.5.7-1 1.1-1.5l-.8-1.1c-.5-.7-1-1.4-1.5-2.2-.9-1.3-1.8-2.6-2.4-3.8-1.3-2.5-1.5-4-1.5-4.7C7.7 3.2 9.6 1.3 12 1.3s4.3 1.9 4.3 4.2c0 .8-.2 2.2-1.5 4.7-.7 1.3-1.5 2.5-2.4 3.8-.5.7-1 1.5-1.5 2.2l-.8 1.1c.4.5.8 1 1.1 1.5.8-1.1 1.6-2.2 2.3-3.3.7-1.1 1.4-2.1 2-3.1 1.2-2.1 2-3.8 2-5.3 0-1.6-1-3-2.4-3.6-1.4-.6-3.1-.5-4.4.5.4.7.8 1.3 1.3 1.8z"/>
      </svg>
    ),
    Branding: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </svg>
    ),
    "Business Ideas": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
      </svg>
    ),
    "Course Creation": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
    Dropshipping: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
      </svg>
    ),
    Etsy: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm14 16V5H5v14h14z"/>
        <path d="M11 14h-1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H7c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1zm5.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm2-3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
      </svg>
    )
  };
  
  // Add icons for rest of categories (continuing with defaults for brevity)
  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      <path d="M12 12.59l-2.12-2.12-1.41 1.41L12 15.41l4.24-4.24-1.41-1.41z"/>
    </svg>
  );
  
  // For any category without an explicit icon, use the default
  promptData.forEach(category => {
    if (!categoryIcons[category.category]) {
      categoryIcons[category.category] = defaultIcon;
    }
  });
  
  // No category descriptions needed anymore

  return (
    <>
      {/* GPPreloader Component - only shown when loading */}
      {loading && (
        <GPPreloader 
          active={true}
          progress={progress}
          initialLogoSrc="/logo/LogoGP.svg"
          initialLogoAlt="Preloader Logo"
          appLogoSrc="/logo/prompt-library.svg"
          appLogoAlt="Prompt Library Logo"
        />
      )}
      
      {/* Main content */}
      <div style={{ 
        opacity: loading ? 0 : 1, 
        visibility: loading ? 'hidden' : 'visible',
        transition: 'opacity 0.5s ease-in-out' 
      }}>
        {/* Navbar */}
        <Navbar />
        
        {/* Main Container */}
        <main>
          {/* If there's a search query, show search results */}
          {searchQuery.length >= 2 ? (
            <SearchResults />
          ) : (
            <>
              {/* Header */}
              <header className="header">
                <h1 className="header__title">Prompt Library</h1>
                <p className="header__subtitle">A collection of useful prompts for various purposes</p>
              </header>
              
              {/* Categories Grid */}
              <div className="container">
                <div className="card-grid">
                  {promptData && promptData.length > 0 && promptData.map((category, index) => (
                    <CategoryCard
                    key={index}
                    category={category.category}
                    icon={categoryIcons[category.category]}
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
    </>
  );
}