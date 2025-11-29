import NextButton from '../components/NextButton';
import FloatingHearts from '../components/FloatingHearts';

interface RosePageProps {
  onNext: () => void;
}

function RosePage({ onNext }: RosePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/20 to-white flex flex-col items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <FloatingHearts fillColor="#ec4899" />

      <div className="max-w-4xl w-full flex flex-col items-center gap-12 relative z-10">
        <div className="relative w-full max-w-md aspect-square animate-float">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full drop-shadow-2xl"
          >
            <defs>
              <radialGradient id="rosePetal" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#ffe4e6" />
                <stop offset="50%" stopColor="#fecdd3" />
                <stop offset="100%" stopColor="#fb7185" />
              </radialGradient>
              <radialGradient id="roseCenter" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="100%" stopColor="#f43f5e" />
              </radialGradient>
            </defs>

            {Array.from({ length: 5 }).map((_, layer) => {
              const petalCount = 8 - layer;
              const radius = 90 - layer * 15;
              const rotation = layer * 15;

              return Array.from({ length: petalCount }).map((_, i) => {
                const angle = (i * 360) / petalCount + rotation;
                const rad = (angle * Math.PI) / 180;
                const x = 200 + Math.cos(rad) * radius;
                const y = 200 + Math.sin(rad) * radius;
                const size = 55 - layer * 8;

                return (
                  <ellipse
                    key={`${layer}-${i}`}
                    cx={x}
                    cy={y}
                    rx={size}
                    ry={size * 0.6}
                    fill="url(#rosePetal)"
                    opacity={1 - layer * 0.1}
                    transform={`rotate(${angle}, ${x}, ${y})`}
                    className="animate-petal-breathe"
                    style={{ animationDelay: `${(layer * petalCount + i) * 0.1}s` }}
                  />
                );
              });
            })}

            <circle cx="200" cy="200" r="25" fill="url(#roseCenter)" className="animate-pulse-slow" />
          </svg>
        </div>

        <div className="text-center space-y-6 animate-slide-up">
          <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic max-w-2xl">
            "You're a rose—beautiful, delicate, and worth every moment of patience it takes to understand you."
          </blockquote>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <NextButton onClick={onNext} />
        </div>
      </div>
    </div>
  );
}

export default RosePage;
