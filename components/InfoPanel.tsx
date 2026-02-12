import React from 'react';
import { BinaryClock } from './BinaryClock';

interface InfoPanelProps {
  date: Date;
  isSynced: boolean;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ date, isSynced }) => {
  // UTC Formatting - ISO 8601 date
  const utcYear = date.getUTCFullYear();
  const utcMonth = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const utcDay = date.getUTCDate().toString().padStart(2, '0');
  const utcDateStr = `${utcYear}-${utcMonth}-${utcDay}`;
  
  const utcH = date.getUTCHours().toString().padStart(2, '0');
  const utcM = date.getUTCMinutes().toString().padStart(2, '0');
  const utcS = date.getUTCSeconds().toString().padStart(2, '0');
  const utcMs = date.getMilliseconds().toString().padStart(3, '0');
  const utcTimeStr = `${utcH}:${utcM}:${utcS}`;

  // Local Formatting (24h)
  const localH = date.getHours().toString().padStart(2, '0');
  const localM = date.getMinutes().toString().padStart(2, '0');
  const localS = date.getSeconds().toString().padStart(2, '0');
  const localTimeStr = `${localH}:${localM}:${localS}`;

  // POSIX with milliseconds
  const posixSec = Math.floor(date.getTime() / 1000);
  const posixMs = date.getMilliseconds().toString().padStart(3, '0');

  return (
    <div className="flex flex-col justify-center h-full w-full font-mono relative py-4 select-none">
      
      {/* Sync Indicator - Ultra tiny with dim NIST label */}
      <div className="absolute top-2 right-2 flex items-center gap-1">
         <span className="text-[10px] text-gray-700 opacity-40 font-mono tracking-wider">NIST</span>
         <div 
           className={`w-1 h-1 rounded-full transition-all duration-500 ${
             isSynced 
               ? 'bg-nist-green shadow-[0_0_4px_#00ff00]' 
               : 'bg-red-900 animate-pulse'
           }`}
         />
      </div>

      {/* Main Info Stack - UTC is dominant, POSIX and Binary are co-equal universal times */}
      <div className="flex flex-col gap-8 w-full pr-4 md:pr-0">
        
        {/* UTC Section (PRIMARY/DOMINANT - The Real Time) */}
        <div className="flex flex-col items-end group">
          <span className="text-sm text-gray-400 tracking-[0.4em] font-sans font-bold mb-2 transition-colors group-hover:text-gray-300">UTC</span>
          <div className="flex items-baseline gap-2">
            <div className="text-6xl lg:text-8xl text-widget-fg font-bold tracking-tight tabular-nums leading-none drop-shadow-[0_0_20px_rgba(229,229,229,0.3)]">
              {utcTimeStr}
            </div>
            {/* Milliseconds for UTC precision - smaller and dimmer */}
            <div className="text-xl lg:text-2xl text-gray-500 font-bold tabular-nums">
                .{utcMs}
            </div>
          </div>
          <div className="text-xl lg:text-2xl text-gray-400 mt-3 font-light tracking-[0.2em] font-mono">
            {utcDateStr}
          </div>
        </div>

        {/* Universal Times Section - Co-equal ultimate times */}
        <div className="flex flex-col gap-8 pt-6 border-t border-gray-700/50">
          
          {/* POSIX Section (Ultimate Time - Co-equal with UTC) */}
          <div className="flex flex-col items-end group">
            <span className="text-xs text-gray-500 tracking-[0.3em] font-sans font-bold mb-1 transition-colors group-hover:text-gray-300">POSIX</span>
            <div className="text-5xl lg:text-6xl text-widget-fg font-bold tracking-tight tabular-nums font-mono">
              {posixSec}<span className="text-3xl lg:text-4xl text-gray-500">.{posixMs}</span>
            </div>
          </div>

          {/* Binary Section (Universal Time) */}
          <div className="flex flex-col items-end">
            <BinaryClock date={date} />
          </div>

        </div>

        {/* Local Section (Present but not dominant) */}
        <div className="flex flex-col items-end group pt-6 border-t border-gray-800/30 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs text-gray-600 tracking-[0.3em] font-sans font-bold mb-1 transition-colors group-hover:text-gray-400">LOCAL</span>
          <div className="text-4xl lg:text-5xl text-gray-400 font-bold tracking-tight tabular-nums leading-none">
              {localTimeStr}
          </div>
        </div>

      </div>
    </div>
  );
};