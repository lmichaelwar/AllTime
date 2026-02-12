import React from 'react';
import { BinaryClock } from './BinaryClock';

interface InfoPanelProps {
  date: Date;
  isSynced: boolean;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ date, isSynced }) => {
  // UTC Formatting
  const utcDateStr = date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  const utcH = date.getUTCHours().toString().padStart(2, '0');
  const utcM = date.getUTCMinutes().toString().padStart(2, '0');
  const utcS = date.getUTCSeconds().toString().padStart(2, '0');
  const utcTimeStr = `${utcH}:${utcM}:${utcS}`;

  // Local Formatting (24h)
  const localH = date.getHours().toString().padStart(2, '0');
  const localM = date.getMinutes().toString().padStart(2, '0');
  const localS = date.getSeconds().toString().padStart(2, '0');
  const localMs = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
  const localTimeStr = `${localH}:${localM}:${localS}`;

  // POSIX
  const posix = Math.floor(date.getTime() / 1000);

  return (
    <div className="flex flex-col justify-center h-full w-full font-mono relative py-4 select-none">
      
      {/* Sync Indicator - Reduced size (1/4 of previous w-4 -> w-1.5) */}
      <div className="absolute top-2 right-2 flex items-center justify-end">
         <div 
           className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
             isSynced 
               ? 'bg-nist-green shadow-[0_0_6px_#00ff00] opacity-80' 
               : 'bg-red-900 animate-pulse'
           }`} 
           title={isSynced ? "Synced with NIST" : "Syncing..."}
         />
      </div>

      {/* Main Info Stack */}
      <div className="flex flex-col gap-12 w-full pr-4 md:pr-0">
        
        {/* UTC Section (Primary, Top) */}
        <div className="flex flex-col items-end group">
          <span className="text-xs text-gray-600 tracking-[0.3em] font-sans font-bold mb-1 transition-colors group-hover:text-gray-400">UTC</span>
          <div className="text-5xl lg:text-7xl text-widget-fg font-bold tracking-tight tabular-nums leading-none">
            {utcTimeStr}
          </div>
          <div className="text-lg lg:text-xl text-gray-500 mt-2 font-light tracking-widest uppercase">
            {utcDateStr}
          </div>
        </div>

        {/* Local Section (First Class Citizen) */}
        <div className="flex flex-col items-end group">
          <span className="text-xs text-gray-600 tracking-[0.3em] font-sans font-bold mb-1 transition-colors group-hover:text-gray-400">LOCAL</span>
          <div className="flex items-baseline gap-3">
            <div className="text-5xl lg:text-7xl text-widget-fg font-bold tracking-tight tabular-nums leading-none">
                {localTimeStr}
            </div>
            {/* Keeping milliseconds but subtle */}
            <div className="text-xl lg:text-2xl text-gray-700 font-bold tabular-nums w-[2ch]">
                {localMs}
            </div>
          </div>
        </div>

        {/* POSIX Section (First Class Citizen) */}
        <div className="flex flex-col items-end group">
          <span className="text-xs text-gray-600 tracking-[0.3em] font-sans font-bold mb-1 transition-colors group-hover:text-gray-400">UNIX</span>
          <div className="text-4xl lg:text-5xl text-gray-300 font-bold tracking-tight tabular-nums font-mono">
            {posix}
          </div>
        </div>

        {/* Binary Section (Footer) */}
        <div className="flex flex-col items-end mt-2 pt-6 border-t border-gray-800/30 w-full opacity-60 hover:opacity-100 transition-opacity">
            <BinaryClock date={date} />
        </div>

      </div>
    </div>
  );
};