'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStore from '../store/useStore';
import './Navbar.css';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  const {
    menuOpen,
    toggleMenu,
    darkMode,
    toggleDarkMode,
    searchQuery,
    setSearchQuery
  } = useStore();
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Apply dark/light theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);
  
  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link href="/" className="navbar__logo">
          <img 
            src="/logo/prompt-library.svg" 
            alt="Prompt Library Logo" 
            className="navbar__logo-image"
          />
          <span className="navbar__logo-text">Prompt Library</span>
        </Link>
        
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="navbar__search-input"
          />
          <svg className="navbar__search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
          </svg>
        </div>
        
        <div className="navbar__actions">
          <button 
            className="navbar__theme-toggle" 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/>
              </svg>
            )}
          </button>
          
          <button 
            className={`navbar__menu-toggle ${menuOpen ? 'navbar__menu-toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="navbar__menu-toggle-bar"></span>
            <span className="navbar__menu-toggle-bar"></span>
            <span className="navbar__menu-toggle-bar"></span>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
          <div className="navbar__mobile-menu-header">
            <span>Navigation</span>
            <button 
              className="navbar__mobile-menu-close" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
              </svg>
            </button>
          </div>
          
          <nav className="navbar__mobile-menu-nav">
            <ul className="navbar__mobile-menu-list">
              <li>
                <Link 
                  href="/" 
                  className={`navbar__mobile-menu-link ${pathname === '/' ? 'navbar__mobile-menu-link--active' : ''}`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              {useStore.getState().promptData.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={`/category/${category.category.toLowerCase()}`} 
                    className={`navbar__mobile-menu-link ${pathname === `/category/${category.category.toLowerCase()}` ? 'navbar__mobile-menu-link--active' : ''}`}
                    onClick={toggleMenu}
                  >
                    {category.category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;