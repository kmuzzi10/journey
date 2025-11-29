import NextButton from '../components/NextButton';
import FloatingHearts from '../components/FloatingHearts';

interface SunflowerPageProps {
  onNext: () => void;
}

function SunflowerPage({ onNext }: SunflowerPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/30 to-white flex flex-col items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <FloatingHearts fillColor="#fbbf24" />

      <div className="max-w-4xl w-full flex flex-col items-center gap-12 relative z-10">
        <div className="relative w-full max-w-md aspect-square animate-float">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full drop-shadow-2xl animate-slow-spin-reverse"
          >
            <defs>
              <radialGradient id="sunflowerPetal" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#fbbf24" />
              </radialGradient>
              <radialGradient id="sunflowerCenter" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#451a03" />
              </radialGradient>
            </defs>

            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16;
              const rad = (angle * Math.PI) / 180;
              const x = 200 + Math.cos(rad) * 90;
              const y = 200 + Math.sin(rad) * 90;

              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx="45"
                  ry="20"
                  fill="url(#sunflowerPetal)"
                  transform={`rotate(${angle}, ${x}, ${y})`}
                  className="animate-petal-float"
                  style={{ animationDelay: `${i * 0.08}s` }}
                />
              );
            })}

            <circle cx="200" cy="200" r="50" fill="url(#sunflowerCenter)" />

            {Array.from({ length: 30 }).map((_, i) => {
              const angle = (i * 360) / 30;
              const rad = (angle * Math.PI) / 180;
              const dist = 20 + (i % 3) * 10;
              const x = 200 + Math.cos(rad) * dist;
              const y = 200 + Math.sin(rad) * dist;

              return (
                <circle
                  key={`seed-${i}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#92400e"
                  opacity="0.6"
                />
              );
            })}
          </svg>
        </div>

        <div className="text-center space-y-6 animate-slide-up">
          <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic max-w-2xl">
            "Like a sunflower, you turn even the darkest moments into something warm and golden."
          </blockquote>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <NextButton onClick={onNext} />
        </div>
      </div>
    </div>
  );
}

export default SunflowerPage;
