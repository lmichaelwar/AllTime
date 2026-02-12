import { useState, useEffect, useRef } from 'react';
import { TimeState } from '../types';

export const usePreciseTime = () => {
  const [timeState, setTimeState] = useState<TimeState>({
    date: new Date(),
    synced: false,
    offset: 0
  });
  
  const frameRef = useRef<number>(0);

  // Simulate NIST Sync logic
  useEffect(() => {
    const syncTime = async () => {
      try {
        // In a real production app, we might hit a time API. 
        // Here we simulate a "sync" check to enable the green indicator.
        // We add a tiny random delay to simulate network latency.
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setTimeState(prev => ({
          ...prev,
          synced: true,
          // Calculate a mock offset usually found in NTP (just for data completeness)
          offset: 0 
        }));
      } catch (e) {
        console.error("Sync failed", e);
        setTimeState(prev => ({ ...prev, synced: false }));
      }
    };

    syncTime();
    // Re-sync check every minute
    const interval = setInterval(syncTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // High precision update loop using RequestAnimationFrame
  useEffect(() => {
    const update = () => {
      setTimeState(prev => ({
        ...prev,
        date: new Date()
      }));
      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return timeState;
};