import { ChevronRight } from 'lucide-react';

interface NextButtonProps {
  onClick: () => void;
}

function NextButton({ onClick }: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative px-8 py-4 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2 font-medium">
        Next
        <ChevronRight
          size={20}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

export default NextButton;
