'use client';

import { useEffect } from 'react';
import useStore from './store/useStore';
import GPPreloader from './components/GPPreloader';
import Navbar from './components/Navbar';
import CategoryCard from './components/CategoryCard';
import SearchResults from './components/SearchResults';
import './styles.css';

// Import only the icons we need from specific icon sets
import { FaBook, FaStar, FaVideo, FaMusic, FaCamera } from 'react-icons/fa';
import { MdHome, MdBusiness, MdEvent, MdEmail, MdSchool, MdShoppingCart } from 'react-icons/md';
import { BsFileText, BsCalendar, BsCodeSlash, BsPencil, BsGraphUp } from 'react-icons/bs';
import { IoNewspaper, IoTimeOutline } from 'react-icons/io5';
import { GiPaintBrush } from 'react-icons/gi';

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
  
  // Category icons using a simplified set of icons
  const categoryIcons = {
    // Arts & Creative
    "Broccoli": <FaBook size={24} />,
    "Astrology": <FaStar size={24} />,
    "Coloring Books": <GiPaintBrush size={24} />,
    "Filmmaking": <FaVideo size={24} />,
    "Music": <FaMusic size={24} />,
    "Photography": <FaCamera size={24} />,
    
    // Business & Services
    "Airbnb": <MdHome size={24} />,
    "Branding": <MdBusiness size={24} />,
    "Business Ideas": <BsGraphUp size={24} />,
    "Course Creation": <MdSchool size={24} />,
    "Dropshipping": <MdShoppingCart size={24} />,
    "Etsy": <MdShoppingCart size={24} />,
    "Event Planning": <MdEvent size={24} />,
    "Excel": <BsFileText size={24} />,
    "Goal Setting": <BsGraphUp size={24} />,
    "Market Research": <BsGraphUp size={24} />,
    "Newsletter": <IoNewspaper size={24} />,
    "Product Management": <MdBusiness size={24} />,
    "Project Management": <MdBusiness size={24} />,
    "Real Estate": <MdHome size={24} />,
    "Sales": <MdShoppingCart size={24} />,
    "Starting a Business": <MdBusiness size={24} />,
    "Time Management": <IoTimeOutline size={24} />,
    "Travel Agents": <MdHome size={24} />,
    "Upwork Proposal": <BsFileText size={24} />,
    "VBA": <BsCodeSlash size={24} />,
    
    // Digital Marketing
    "Digital Products": <MdShoppingCart size={24} />,
    "Affiliate Marketing": <MdBusiness size={24} />,
    "Email Marketing": <MdEmail size={24} />,
    "Facebook Ads": <BsGraphUp size={24} />,
    "Instagram Reels": <BsGraphUp size={24} />,
    "YouTube Shorts": <FaVideo size={24} />,
    
    // Writing
    "Academic Writing": <BsFileText size={24} />,
    "Fiction Writing": <BsPencil size={24} />,
    "Technical Writing": <BsFileText size={24} />,
    "Proofreading": <BsFileText size={24} />,
    "Research Paper": <BsFileText size={24} />,
    "Rewriting Content": <BsPencil size={24} />,
    "Script Writing": <BsPencil size={24} />,
    "Speech Writing": <BsPencil size={24} />,
    "Story Writing": <BsPencil size={24} />,
    "Grant Writing": <BsFileText size={24} />,
    "Journalism": <IoNewspaper size={24} />,
    "Nonfiction Writing": <FaBook size={24} />,
    "Copywriting": <BsPencil size={24} />,
    "Cover Letter": <BsFileText size={24} />,
    "Creative Writing": <BsPencil size={24} />,
    "Video Scripts": <FaVideo size={24} />,
    "Website Copy": <BsFileText size={24} />,
    "Book Writing": <FaBook size={24} />,
    "Marketing, Promotion & Outreach": <MdBusiness size={24} />,
    "Copywriting – Email": <MdEmail size={24} />,
    
    // Social Media
    "LinkedIn": <MdBusiness size={24} />,
    "OnlyFans": <MdBusiness size={24} />,
    "Podcast": <FaMusic size={24} />,
    "TikTok": <FaVideo size={24} />
  };
  
  // Default icon for any categories without an explicit icon
  const defaultIcon = <BsFileText size={24} />;
  
  // For any category without an explicit icon, use the default
  promptData.forEach(category => {
    if (!categoryIcons[category.category]) {
      categoryIcons[category.category] = defaultIcon;
    }
  });

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
                <div className="category-grid">
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