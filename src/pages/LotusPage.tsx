import NextButton from '../components/NextButton';
import FloatingHearts from '../components/FloatingHearts';

interface LotusPageProps {
  onNext: () => void;
}

function LotusPage({ onNext }: LotusPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white flex flex-col items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <FloatingHearts fillColor="#fbbf24" />
      
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
            className="w-full h-full drop-shadow-2xl"
          >
            <defs>
              <radialGradient id="lotusPetal" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#fbbf24" />
              </radialGradient>
              <radialGradient id="lotusInner" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#facc15" />
              </radialGradient>
              <radialGradient id="lotusCenter" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fde047" />
              </radialGradient>
            </defs>

            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8;
              const rad = (angle * Math.PI) / 180;
              const x = 200 + Math.cos(rad) * 100;
              const y = 200 + Math.sin(rad) * 100;

              return (
                <ellipse
                  key={`outer-${i}`}
                  cx={x}
                  cy={y}
                  rx="60"
                  ry="35"
                  fill="url(#lotusPetal)"
                  transform={`rotate(${angle}, ${x}, ${y})`}
                  className="animate-petal-breathe"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              );
            })}

            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8 + 22.5;
              const rad = (angle * Math.PI) / 180;
              const x = 200 + Math.cos(rad) * 60;
              const y = 200 + Math.sin(rad) * 60;

              return (
                <ellipse
                  key={`inner-${i}`}
                  cx={x}
                  cy={y}
                  rx="50"
                  ry="30"
                  fill="url(#lotusInner)"
                  transform={`rotate(${angle}, ${x}, ${y})`}
                  className="animate-petal-breathe"
                  style={{ animationDelay: `${i * 0.15 + 0.5}s` }}
                />
              );
            })}

            <circle cx="200" cy="200" r="35" fill="url(#lotusCenter)" className="animate-pulse-slow" />

            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              const rad = (angle * Math.PI) / 180;
              const x = 200 + Math.cos(rad) * 20;
              const y = 200 + Math.sin(rad) * 20;

              return (
                <circle
                  key={`stamen-${i}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#f59e0b"
                />
              );
            })}
          </svg>
        </div>

        <div className="text-center space-y-6 animate-slide-up">
          <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic max-w-2xl">
            "You bloom like a lotus—rising above every worry, untouched, graceful, and strong."
          </blockquote>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <NextButton onClick={onNext} />
        </div>
      </div>
    </div>
  );
}

export default LotusPage;
