'use client';

import React, { useEffect, useState } from 'react';
import './GPPreloader.css';

/**
 * GPPreloader Component
 * Shows a multi-stage loading animation:
 * 1. Initial preloader logo with progress bar
 * 2. Fade out initial logo and progress bar
 * 3. Fade in application logo
 * 4. Fade out application logo
 * 5. Fade out background to reveal content
 */
const GPPreloader = ({
  active = true,
  progress = 0,
  initialLogoSrc = "/logo/LogoGP.svg",
  initialLogoAlt = "Preloader Logo",
  appLogoSrc = "/logo/prompt-library.svg",
  appLogoAlt = "Application Logo",
}) => {
  // Animation states
  const [stage, setStage] = useState(1); // Stage 1: Initial logo and progress bar
  const [visible, setVisible] = useState(true);

  // Handle progress changes and stage transitions
  useEffect(() => {
    // When progress reaches 100%, start the animation sequence
    if (progress >= 100 && active && stage === 1) {
      // Stage 1 complete - wait for progress bar animation to finish
      setTimeout(() => {
        setStage(2); // Move to stage 2 (fade out initial logo and progress)
        
        // Stage 2 complete - initial logo and progress faded out
        setTimeout(() => {
          setStage(3); // Move to stage 3 (fade in app logo)
          
          // Stage 3 complete - app logo fully visible
          setTimeout(() => {
            setStage(4); // Move to stage 4 (fade out app logo)
            
            // Stage 4 complete - app logo faded out
            setTimeout(() => {
              setStage(5); // Move to stage 5 (fade out background)
            }, 1000); // App logo fade duration
          }, 1500); // App logo visible duration
        }, 1000); // Initial logo and progress fade duration
      }, 500); // Delay after progress reaches 100%
    }
  }, [progress, active, stage]);

  // If preloader is no longer visible, don't render anything
  if (!visible && stage === 5) return null;

  return (
    <div className={`gp-preloader ${getStageClass(stage)}`}>
      <div className="gp-preloader__container">
        {/* Initial logo - visible in stage 1, fading in stage 2 */}
        {(stage === 1 || stage === 2) && initialLogoSrc && (
          <img
            className="gp-preloader__initial-logo"
            src={initialLogoSrc}
            alt={initialLogoAlt}
          />
        )}
        
        {/* Progress bar - visible in stage 1, fading in stage 2 */}
        {(stage === 1 || stage === 2) && (
          <div className="gp-preloader__progress-container">
            <div
              className="gp-preloader__progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        
        {/* App logo - visible in stages 3-4 */}
        {(stage === 3 || stage === 4) && appLogoSrc && (
          <img
            className="gp-preloader__app-logo"
            src={appLogoSrc}
            alt={appLogoAlt}
          />
        )}
      </div>
    </div>
  );
};

// Helper function to get the appropriate class based on current stage
const getStageClass = (stage) => {
  switch (stage) {
    case 2: return "gp-preloader--fade-initial";
    case 3: return "gp-preloader--show-app-logo";
    case 4: return "gp-preloader--fade-app-logo";
    case 5: return "gp-preloader--fade-background";
    default: return "";
  }
};

export default GPPreloader;