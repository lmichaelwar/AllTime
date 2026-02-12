import React, { useMemo } from 'react';

interface AnalogClockProps {
  date: Date;
}

export const AnalogClock: React.FC<AnalogClockProps> = ({ date }) => {
  const seconds = date.getSeconds() + date.getMilliseconds() / 1000;
  const minutes = date.getMinutes() + seconds / 60;
  const hours = (date.getHours() % 12) + minutes / 60;

  // Rotation calculations
  const secDeg = seconds * 6;
  const minDeg = minutes * 6;
  const hourDeg = hours * 30;

  // Generate ticks
  const ticks = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const isHour = i % 5 === 0;
      const deg = i * 6;
      const length = isHour ? 15 : 7;
      const width = isHour ? 4 : 2;
      return (
        <line
          key={i}
          x1="100"
          y1={isHour ? 15 : 10}
          x2="100"
          y2={isHour ? 15 + length : 10 + length}
          stroke="currentColor"
          strokeWidth={width}
          transform={`rotate(${deg} 100 100)`}
          className="text-widget-fg"
        />
      );
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-[500px] max-h-[500px] drop-shadow-2xl"
      >
        {/* Ticks */}
        {ticks}

        {/* Hour Hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="50"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${hourDeg} 100 100)`}
          className="text-widget-fg transition-transform duration-75 ease-linear"
        />

        {/* Minute Hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${minDeg} 100 100)`}
          className="text-widget-fg transition-transform duration-75 ease-linear"
        />

        {/* Second Hand (Smooth sweep implemented via high-freq updates in parent) */}
        <line
          x1="100"
          y1="110"
          x2="100"
          y2="25"
          stroke="currentColor"
          strokeWidth="2"
          transform={`rotate(${secDeg} 100 100)`}
          className="text-widget-fg opacity-80"
        />

        {/* Center Cap */}
        <circle cx="100" cy="100" r="5" fill="currentColor" className="text-widget-fg" />
      </svg>
    </div>
  );
};