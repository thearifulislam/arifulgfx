
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const IntroLogo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Check if intro has already been shown
    const hasShownIntro = sessionStorage.getItem('hasShownIntro');
    
    if (hasShownIntro) {
      setIsLoading(false);
      return;
    }
    
    // Show intro and navigate to intended path after timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasShownIntro', 'true');
    }, 3000); // 3 seconds intro
    
    return () => clearTimeout(timer);
  }, [navigate, location.pathname]);
  
  if (!isLoading) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center theme-bg-primary">
      {/* Animated background elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
      
      {/* Logo container */}
      <div className="relative flex flex-col items-center">
        {/* Ellipse with text */}
        <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
          <h1 className="text-3xl font-bold theme-color-primary uppercase tracking-wider">Ariful</h1>
        </div>
        
        {/* Tagline */}
        <p className="text-white text-xl mb-6 tracking-wider">Brand Identity Designer</p>
        
        {/* Animated bar */}
        <div className="w-40 h-1 bg-white/80 rounded-full overflow-hidden">
          <div className="h-full bg-[var(--color-secondary)] animate-[progress_2.5s_ease-in-out]"></div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style>
        {`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default IntroLogo;
