import NextButton from '../components/NextButton';
import FloatingHearts from '../components/FloatingHearts';
import portraitImage from '../assets/image1.jpeg';

interface MainPageProps {
  onNext: () => void;
}

function MainPage({ onNext }: MainPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/40 via-white to-purple-50/40 flex flex-col items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <FloatingHearts />

      {/* Scroll down message */}
      <div className="absolute top-8 left-0 right-0 text-center z-20 animate-slide-up">
        <p className="text-lg md:text-xl text-gray-600 font-light italic">
          Please scroll down your highness
        </p>
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center gap-12 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Portrait Image */}
          <div className="w-64 h-80 md:w-80 md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 animate-float-slow">
            <img
              src={portraitImage}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-8">
            Sundus
          </h1>

          <blockquote className="text-xl md:text-3xl text-gray-700 font-light italic max-w-3xl leading-relaxed">
            "Sundus, you're beautiful in a way that feels effortless—
            just like these flowers, you bloom softly, quietly, and still manage to brighten everything around you."
          </blockquote>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <NextButton onClick={onNext} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;

