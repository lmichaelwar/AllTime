import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, Minimize2, RefreshCcw } from 'lucide-react';
import { usePreciseTime } from './hooks/usePreciseTime';
import { AnalogClock } from './components/AnalogClock';
import { InfoPanel } from './components/InfoPanel';
import { DisplayMode } from './types';

const App: React.FC = () => {
  const { date, synced } = usePreciseTime();
  const [isMinimal, setIsMinimal] = useState(false);

  const handleReset = useCallback(() => {
    setIsMinimal(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsMinimal(prev => !prev);
      }
      if (e.code === 'Escape') {
        handleReset();
      }
      if (e.code === 'KeyM' && e.ctrlKey) {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {
            console.warn("Error attempting to enable full-screen mode:", err);
          });
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleReset]);

  return (
    <div className={`
      relative w-screen h-screen bg-widget-bg overflow-hidden flex items-center justify-center
      transition-all duration-300 ease-in-out
      ${isMinimal ? 'scale-90 opacity-80 blur-sm' : 'scale-100 opacity-100'}
    `}>
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Container */}
      <main className="z-10 w-full max-w-7xl h-full max-h-screen p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        
        {/* Left Column: Analog Clock */}
        {/* Added flex items-center to ensure vertical centering and removed bottom flush issues */}
        <div className="flex items-center justify-center w-full h-full order-2 md:order-1 min-h-[40vh] md:min-h-0">
          <div className="w-full max-w-[600px] aspect-square flex items-center justify-center">
             <AnalogClock date={date} />
          </div>
        </div>

        {/* Right Column: Digital Info */}
        <div className="flex items-center justify-end w-full h-full order-1 md:order-2">
            <InfoPanel date={date} isSynced={synced} />
        </div>

      </main>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handleReset}
          className="p-2 text-gray-500 hover:text-widget-fg bg-gray-800/50 hover:bg-gray-700/50 rounded-lg backdrop-blur-sm transition-colors"
        >
          <RefreshCcw size={20} />
        </button>
        <button 
          onClick={() => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
          }}
          className="p-2 text-gray-500 hover:text-widget-fg bg-gray-800/50 hover:bg-gray-700/50 rounded-lg backdrop-blur-sm transition-colors"
        >
          {typeof document !== 'undefined' && document.fullscreenElement ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

    </div>
  );
};

export default App;