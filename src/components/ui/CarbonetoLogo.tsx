import React from 'react';

export const CarbonetoLogo = ({ 
  className = "w-8 h-8" 
}: { 
  className?: string 
}) => {
  return (
    <img 
      src="assets/lc.webp" 
      alt="Carboneto logo" 
      className={className}
    />
  );
};
