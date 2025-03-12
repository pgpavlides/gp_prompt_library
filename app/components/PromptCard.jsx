'use client';

import React, { useState } from 'react';

const PromptCard = ({ title, description, content }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(content || description)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
  };
  
  return (
    <div className="card" tabIndex="0" onClick={handleCopy}>
      <div className="card-content">
        <div className="card-text-container">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"/>
          </svg>
        </div>
      </div>
      <div className="card-accent"></div>
      
      {/* Copy indicator */}
      {copied && (
        <div className="copy-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/>
          </svg>
          <span>Copied!</span>
        </div>
      )}
    </div>
  );
};

export default PromptCard;