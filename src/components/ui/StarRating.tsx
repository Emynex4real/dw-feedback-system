import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  maxStars?: number;
  size?: number;
  disabled?: boolean;
  className?: string;
}

export function StarRating({
  value,
  onChange,
  maxStars = 5,
  size = 32,
  disabled = false,
  className = '',
}: StarRatingProps) {
  const [hovered, setHovered] = useState(0);

  return (
    <div
      className={`flex gap-1 ${className}`}
      role="radiogroup"
      aria-label="Rating"
      onMouseLeave={() => setHovered(0)}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= (hovered || value);

        return (
          <button
            key={starValue}
            type="button"
            className={`min-h-[44px] min-w-[44px] rounded-md p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
              disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            }`}
            onClick={() => !disabled && onChange(starValue)}
            onMouseEnter={() => !disabled && setHovered(starValue)}
            aria-label={`Rate ${starValue} out of ${maxStars}`}
            aria-checked={value === starValue}
            role="radio"
            disabled={disabled}
          >
            <Star
              size={size}
              className={
                isFilled
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-none text-gray-300'
              }
            />
          </button>
        );
      })}
    </div>
  );
}
