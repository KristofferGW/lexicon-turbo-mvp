import { useState, useEffect } from 'react';

export default function H2Container({ headline, shortHeadline }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const displayHeadline = isSmallScreen ? (shortHeadline || headline) : headline;

  return (
    <div className="w-full max-w-[636px] bg-white border-t border-lexicon shadow-md flex items-center justify-center text-l font-semibold text-gray-800 mx-auto py-3">
      {displayHeadline}
    </div>
  );
};