import React from 'react';

interface BinaryClockProps {
  date: Date;
}

export const BinaryClock: React.FC<BinaryClockProps> = ({ date }) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const getBits = (val: number) => {
    const tens = Math.floor(val / 10);
    const ones = val % 10;
    return [tens, ones]; // [tens_digit, ones_digit]
  };

  const [h1, h2] = getBits(hours);
  const [m1, m2] = getBits(minutes);
  const [s1, s2] = getBits(seconds);

  // 4 rows (8, 4, 2, 1)
  const rows = [8, 4, 2, 1];
  const columns = [
    { val: h1, max: 2, label: 'H' }, 
    { val: h2, max: 9, label: 'h' },
    { val: m1, max: 5, label: 'M' },
    { val: m2, max: 9, label: 'm' },
    { val: s1, max: 5, label: 'S' },
    { val: s2, max: 9, label: 's' }
  ];

  return (
    <div className="flex flex-col gap-1 items-center opacity-70 hover:opacity-100 transition-opacity">
      <div className="text-[10px] tracking-[0.4em] mb-1 font-mono text-gray-500">BINARY</div>
      <div className="flex gap-2">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-1">
            {rows.map((bit) => {
              // Check if this bit is theoretically possible for this digit position
              // e.g. tens of minutes (0-5) never needs bit 8.
              const isPossible = (col.label === 'H' && bit > 2) || (col.label === 'M' && bit > 4) || (col.label === 'S' && bit > 4) ? false : true;
              
              if (!isPossible) {
                  return <div key={bit} className="w-3 h-3" />; // Spacer
              }

              const isOn = (col.val & bit) === bit;
              return (
                <div
                  key={bit}
                  className={`w-3 h-3 rounded-sm transition-colors duration-200 ${
                    isOn ? 'bg-widget-fg shadow-[0_0_4px_rgba(229,229,229,0.5)]' : 'bg-gray-800'
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};