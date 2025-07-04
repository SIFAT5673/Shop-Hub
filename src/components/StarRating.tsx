
import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'lg';
}

export const StarRating = ({ 
  rating, 
  onRatingChange, 
  readonly = false, 
  size = 'sm' 
}: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const starSize = size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';
  
  const handleClick = (index: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(index + 1);
    }
  };
  
  const handleMouseEnter = (index: number) => {
    if (!readonly) {
      setHoverRating(index + 1);
    }
  };
  
  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };
  
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = (hoverRating || rating) > index;
        return (
          <Star
            key={index}
            className={`${starSize} transition-colors cursor-pointer ${
              isActive 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 hover:text-yellow-400'
            } ${readonly ? 'cursor-default' : ''}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};
