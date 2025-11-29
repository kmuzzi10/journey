import { Heart, Sparkles } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';

function FinalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 via-white to-purple-50/30 flex flex-col items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <FloatingHearts gradientColors={['#ec4899', '#a78bfa', '#fbbf24', '#fb7185', '#60a5fa']} />
      <div className="max-w-4xl w-full flex flex-col items-center gap-12 text-center relative z-10">
        <div className="relative flex items-center justify-center">
          <Heart
            size={120}
            className="text-pink-400 animate-pulse-slow drop-shadow-lg"
            fill="currentColor"
          />
          <Sparkles
            size={40}
            className="absolute -top-4 -right-4 text-yellow-400 animate-bounce"
          />
          <Sparkles
            size={30}
            className="absolute -bottom-2 -left-2 text-purple-400 animate-bounce"
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        <div className="space-y-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-light text-gray-800">
            Thank You
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl">
            For taking this journey through nature's most beautiful creations
          </p>

          <blockquote className="text-lg md:text-xl text-gray-500 italic max-w-2xl border-l-4 border-pink-300 pl-6 py-4">
            "In every flower, there's a story of resilience, beauty, and hope.
            May you carry these lessons with you wherever you go."
          </blockquote>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {[
            { emoji: '🌼', name: 'Daisy', color: 'from-pink-100 to-pink-200' },
            { emoji: '🌻', name: 'Sunflower', color: 'from-yellow-100 to-yellow-200' },
            { emoji: '🌹', name: 'Rose', color: 'from-red-100 to-red-200' },
            { emoji: '💜', name: 'Lavender', color: 'from-purple-100 to-purple-200' },
            { emoji: '🪷', name: 'Lotus', color: 'from-blue-100 to-blue-200' },
            { emoji: '✨', name: 'Magic', color: 'from-pink-100 to-purple-200' },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 animate-float-slow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{item.name}</div>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          Click any flower in the navigation below to revisit
        </p>
      </div>
    </div>
  );
}

export default FinalPage;
