import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Abstract representation of the W/Vi form from the user image */}
      <path 
        d="M20 25 L35 80 L55 35 L65 75 L85 25" 
        stroke="#F2F2EC" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* The Mint Ribbon Accent */}
      <path 
        d="M25 55 C 35 45, 55 45, 65 65 C 75 85, 90 40, 90 40" 
        stroke="#A0C4B8" 
        strokeWidth="8" 
        strokeLinecap="round"
        className="opacity-90"
      />
      {/* The Dot */}
      <circle cx="82" cy="25" r="7" fill="#F2F2EC" />
    </svg>
  );
};