import NextButton from '../components/NextButton';
import FloatingHearts from '../components/FloatingHearts';

interface LavenderPageProps {
  onNext: () => void;
}

function LavenderPage({ onNext }: LavenderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-white flex flex-col items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <FloatingHearts fillColor="#a78bfa" />

      <div className="max-w-4xl w-full flex flex-col items-center gap-12 relative z-10">
        <div className="relative w-full max-w-md aspect-square animate-float">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="lavenderStem" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <radialGradient id="lavenderBud" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#e9d5ff" />
                <stop offset="100%" stopColor="#a78bfa" />
              </radialGradient>
            </defs>

            {Array.from({ length: 3 }).map((_, stemIndex) => {
              const xOffset = (stemIndex - 1) * 60;
              const heightOffset = stemIndex === 1 ? 0 : 30;

              return (
                <g key={stemIndex} className="animate-sway" style={{ animationDelay: `${stemIndex * 0.2}s` }}>
                  <rect
                    x={195 + xOffset}
                    y={250 + heightOffset}
                    width="10"
                    height="100"
                    fill="url(#lavenderStem)"
                    rx="5"
                  />

                  {Array.from({ length: 8 }).map((_, budIndex) => {
                    const y = 240 + heightOffset - budIndex * 18;
                    const size = 12 - budIndex * 0.5;

                    return (
                      <ellipse
                        key={budIndex}
                        cx={200 + xOffset}
                        cy={y}
                        rx={size}
                        ry={size * 1.5}
                        fill="url(#lavenderBud)"
                        className="animate-petal-float"
                        style={{ animationDelay: `${(stemIndex * 8 + budIndex) * 0.1}s` }}
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="text-center space-y-6 animate-slide-up">
          <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic max-w-2xl">
            "Your presence is like lavender—calm, gentle, and effortlessly soothing to the heart."
          </blockquote>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <NextButton onClick={onNext} />
        </div>
      </div>
    </div>
  );
}

export default LavenderPage;
