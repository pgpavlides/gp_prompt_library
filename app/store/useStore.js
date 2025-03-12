'use client';

import { create } from 'zustand';
import promptData from '../promptData';

// Simple flag to track if initial load has happened
// This will be reset when the page refreshes
let initialLoadComplete = false;

// Create the store
const useStore = create((set, get) => ({
  // Loading state
  loading: !initialLoadComplete, // Start with loading true only if initial load hasn't happened
  progress: 0,
  
  // Content state
  promptData: promptData,
  currentCategory: null,
  searchQuery: '',
  
  // UI state
  menuOpen: false,
  darkMode: true,
  
  // Actions
  setLoading: (loading) => set({ loading }),
  setProgress: (progress) => set({ progress }),
  setCurrentCategory: (category) => set({ currentCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  
  // Reset progress
  resetProgress: () => set({ progress: 0 }),
  
  // Simulate loading process
  simulateLoading: () => {
    // If initial load is already complete, don't start loading
    if (initialLoadComplete) {
      set({ loading: false });
      return () => {};
    }
    
    // Set up loading simulation
    set({ loading: true, progress: 0 });
    
    const interval = setInterval(() => {
      set((state) => {
        // Accelerate loading as it progresses
        const increment = Math.floor(Math.random() * 5) + 1;
        const newProgress = Math.min(state.progress + increment, 100);
        
        // When progress reaches 100%, clear the interval
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Set a timeout to hide the preloader
          setTimeout(() => {
            // Mark initial load as complete
            initialLoadComplete = true;
            set({ loading: false });
          }, 2500); // Allow time for final animations
        }
        
        return { progress: newProgress };
      });
    }, 150);
    
    // Return cleanup function
    return () => {
      clearInterval(interval);
    };
  },
  
  // Functions
  findCategory: (slug) => {
    if (!slug) return null;
    
    // Convert hyphenated slug back to spaces for comparison
    const normalizedSlug = slug.toLowerCase().replace(/-/g, ' ');
    
    return promptData.find(cat => 
      cat.category.toLowerCase() === normalizedSlug
    ) || null;
  },
  
  searchPrompts: (query) => {
    if (!query || !query.trim()) return [];
    
    const results = [];
    const searchTerm = query.toLowerCase().trim();
    
    promptData.forEach(category => {
      category.prompts.forEach(prompt => {
        if (
          prompt.title.toLowerCase().includes(searchTerm) ||
          prompt.content.toLowerCase().includes(searchTerm)
        ) {
          results.push({
            ...prompt,
            category: category.category
          });
        }
      });
    });
    
    return results;
  },
}));

export default useStore;