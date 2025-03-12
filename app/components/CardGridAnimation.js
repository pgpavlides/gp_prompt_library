'use client';

export function initCardAnimation() {
  if (typeof window === 'undefined') return;
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCardAnimation);
  } else {
    setupCardAnimation();
  }
}

function setupCardAnimation() {
  const container = document.querySelector('.container');
  const cardGrid = document.querySelector('.card-grid');
  const cards = document.querySelectorAll('.card');
  
  if (!container || !cardGrid || !cards.length) return;
  
  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  
  // Card click event
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
      
      // Create a ripple effect
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      card.appendChild(ripple);
      
      // Clean up after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
  
  // Mouse movement parallax effect
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    requestAnimationFrame(() => updateParallax());
  });
  
  // Touch movement for mobile
  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
      
      requestAnimationFrame(() => updateParallax());
    }
  });
  
  // Update elements based on mouse position
  function updateParallax() {
    if (!container || !cardGrid) return;
    
    // Update center reference
    centerX = container.getBoundingClientRect().left + (container.offsetWidth / 2);
    centerY = container.getBoundingClientRect().top + (container.offsetHeight / 2);
    
    // Calculate mouse position relative to center
    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;
    
    // Update grid rotation (subtle)
    cardGrid.style.transform = `rotateX(${-deltaY * 5}deg) rotateY(${deltaX * 5}deg)`;
    
    // Update each card and its layers
    cards.forEach(card => {
      const depth = parseFloat(card.dataset.depth) || 20;
      const cardRect = card.getBoundingClientRect();
      const cardX = (mouseX - (cardRect.left + card.offsetWidth / 2)) / 25;
      const cardY = (mouseY - (cardRect.top + card.offsetHeight / 2)) / 25;
      
      // Apply parallax to card layers
      const layers = card.querySelectorAll('.card-layer');
      layers.forEach(layer => {
        const layerStyle = window.getComputedStyle(layer);
        const transform = layerStyle.transform || layerStyle.webkitTransform;
        const layerDepth = depth * (parseFloat(transform.split(',')[14] || 1) / 20);
        
        layer.style.transform = `translateX(${cardX * layerDepth * -1}px) translateY(${cardY * layerDepth * -1}px) translateZ(${depth}px)`;
      });
    });
  }
  
  // Initial update
  updateParallax();
  
  // Resize event to update center position
  window.addEventListener('resize', () => {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  });
  
  // Add keyboard navigation for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      // Tab navigation is handled by the browser
      return;
    }
    
    if (e.key === 'Enter' || e.key === ' ') {
      // Activate focused card
      const focusedCard = document.activeElement;
      if (focusedCard && focusedCard.classList.contains('card')) {
        focusedCard.click();
        e.preventDefault();
      }
    }
    
    // Arrow key navigation between cards
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      
      // Find the currently focused card index
      let focusedCardIndex = -1;
      cards.forEach((card, index) => {
        if (card === document.activeElement) {
          focusedCardIndex = index;
        }
      });
      
      // Calculate new index based on arrow key
      let newIndex = focusedCardIndex;
      const cardWidth = cards[0]?.offsetWidth || 0;
      const gridGap = parseFloat(getComputedStyle(cardGrid).gap) || 0;
      const cardsPerRow = Math.floor(cardGrid.offsetWidth / (cardWidth + gridGap));
      
      switch (e.key) {
        case 'ArrowLeft':
          newIndex = Math.max(0, focusedCardIndex - 1);
          break;
        case 'ArrowRight':
          newIndex = Math.min(cards.length - 1, focusedCardIndex + 1);
          break;
        case 'ArrowUp':
          newIndex = Math.max(0, focusedCardIndex - cardsPerRow);
          break;
        case 'ArrowDown':
          newIndex = Math.min(cards.length - 1, focusedCardIndex + cardsPerRow);
          break;
      }
      
      // Focus the new card
      if (newIndex >= 0 && newIndex < cards.length) {
        cards[newIndex].focus();
      }
    }
  });
}

export default initCardAnimation;