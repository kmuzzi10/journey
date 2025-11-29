import { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import DaisyPage from './pages/DaisyPage';
import SunflowerPage from './pages/SunflowerPage';
import RosePage from './pages/RosePage';
import LavenderPage from './pages/LavenderPage';
import LotusPage from './pages/LotusPage';
import FinalPage from './pages/FinalPage';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <MainPage onNext={() => setCurrentPage(1)} />,
    <DaisyPage onNext={() => setCurrentPage(2)} />,
    <SunflowerPage onNext={() => setCurrentPage(3)} />,
    <RosePage onNext={() => setCurrentPage(4)} />,
    <LavenderPage onNext={() => setCurrentPage(5)} />,
    <LotusPage onNext={() => setCurrentPage(6)} />,
    <FinalPage />,
  ];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white relative">
      <div className="page-transition">
        {pages[currentPage]}
      </div>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
