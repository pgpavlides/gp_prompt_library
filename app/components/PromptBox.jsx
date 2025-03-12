'use client';

import React, { useState } from 'react';
import './PromptBox.css';

const PromptBox = ({ title, content }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <div className="prompt-box">
      <h3 className="prompt-box__title">{title}</h3>
      <p className="prompt-box__content">{content}</p>
      <button 
        className={`prompt-box__copy-btn ${copied ? 'prompt-box__copy-btn--copied' : ''}`}
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default PromptBox;