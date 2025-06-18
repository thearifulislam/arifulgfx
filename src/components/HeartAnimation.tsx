
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface HeartAnimationProps {
  x: number;
  y: number;
  delay?: number;
}

const HeartAnimation = ({ x, y, delay = 0 }: HeartAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      
      // Remove element after animation completes
      const removeTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Match animation duration
      
      return () => clearTimeout(removeTimeout);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div 
      className="heart-animation absolute pointer-events-none" 
      style={{ 
        left: `${x}px`, 
        top: `${y}px`,
        zIndex: 100
      }}
    >
      <Heart className="text-pink-500 fill-pink-500" size={20} />
    </div>
  );
};

export default HeartAnimation;
