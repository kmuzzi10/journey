import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface FloatingHeartsProps {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  gradientColors?: string[];
}

function FloatingHearts({ 
  fillColor = '#ff69b4', 
  strokeColor, 
  strokeWidth = 0,
  gradientColors 
}: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate random hearts
    const newHearts: Heart[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 30,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setHearts(newHearts);
  }, []);

  const gradientId = `heart-gradient-${gradientColors?.join('-') || 'default'}`;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute heart-3d"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <div className="heart-shape">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              {gradientColors && (
                <defs>
                  <linearGradient id={`${gradientId}-${heart.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    {gradientColors.map((color, index) => (
                      <stop 
                        key={index} 
                        offset={`${(index / (gradientColors.length - 1)) * 100}%`} 
                        stopColor={color} 
                      />
                    ))}
                  </linearGradient>
                </defs>
              )}
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill={gradientColors ? `url(#${gradientId}-${heart.id})` : fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;

