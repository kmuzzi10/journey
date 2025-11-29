import NextButton from '../components/NextButton';
import FloatingHearts from '../components/FloatingHearts';

interface DaisyPageProps {
  onNext: () => void;
}

function DaisyPage({ onNext }: DaisyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-white flex flex-col items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <FloatingHearts fillColor="#ffffff" strokeColor="#ef4444" strokeWidth={3} />
      
      {/* Scroll down message */}
      <div className="absolute top-8 left-0 right-0 text-center z-20 animate-slide-up">
        <p className="text-lg md:text-xl text-gray-600 font-light italic">
          Please scroll down your highness
        </p>
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center gap-12 relative z-10">
        <div className="relative w-full max-w-md aspect-square animate-float">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full drop-shadow-2xl animate-slow-spin"
          >
            <defs>
              <radialGradient id="petalGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fce7f3" />
              </radialGradient>
              <radialGradient id="centerGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#fde047" />
              </radialGradient>
            </defs>

            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              const rad = (angle * Math.PI) / 180;
              const x = 200 + Math.cos(rad) * 80;
              const y = 200 + Math.sin(rad) * 80;

              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx="50"
                  ry="25"
                  fill="url(#petalGradient)"
                  transform={`rotate(${angle}, ${x}, ${y})`}
                  className="animate-petal-float"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              );
            })}

            <circle cx="200" cy="200" r="40" fill="url(#centerGradient)" />
          </svg>
        </div>

        <div className="text-center space-y-6 animate-slide-up">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white animate-float-slow">
            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <span className="text-6xl">🌸</span>
            </div>
          </div>

          <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic max-w-2xl">
            "You remind me of a daisy simple, pure, and softly stealing every bit of light around you."
          </blockquote>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <NextButton onClick={onNext} />
        </div>
      </div>
    </div>
  );
}

export default DaisyPage;
