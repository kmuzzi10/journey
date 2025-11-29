import { Home, Flower2, Sun, Flower, Droplets, Leaf, Heart } from 'lucide-react';

interface NavigationProps {
  currentPage: number;
  onNavigate: (page: number) => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = [
    { icon: Home, label: 'Home' },
    { icon: Flower2, label: 'Daisy' },
    { icon: Sun, label: 'Sunflower' },
    { icon: Flower, label: 'Rose' },
    { icon: Droplets, label: 'Lavender' },
    { icon: Leaf, label: 'Lotus' },
    { icon: Heart, label: 'Final' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-around items-center">
          {pages.map((page, index) => {
            const Icon = page.icon;
            const isActive = currentPage === index;

            return (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`flex flex-col items-center transition-all duration-300 hover:scale-110 ${
                  isActive ? 'text-pink-500' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon
                  size={24}
                  className={`transition-all duration-300 ${
                    isActive ? 'animate-bounce' : ''
                  }`}
                />
                <span className="text-xs mt-1 font-medium hidden sm:block">
                  {page.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
