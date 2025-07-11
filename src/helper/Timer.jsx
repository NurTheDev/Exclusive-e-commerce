import React, {useEffect, useState} from 'react';

const Timer = ({className, active, time}) => {
    // Initialize countdown timer with 3 days in milliseconds
    const [count, setCount] = useState(time * 24 * 60 * 60 * 1000 || 0);
// Set up web worker for countdown timer to prevent blocking main thread
    useEffect(() => {
        let worker
        if (count > 0) {
            // Create worker and send current count value
            worker = new Worker(new URL('../workerAPI/worker.js', import.meta.url));
            worker.postMessage({count: count});

            // Listen for updated count from worker
            worker.onmessage = (event) => {
                setCount(event.data);
            };
        }

        // Cleanup: terminate worker when component unmounts or count changes
        return () => {
            if (worker) {
                worker.terminate()
            }
        }
    }, [count]);

// Convert milliseconds to days, hours, minutes, and seconds
    const handleCount = (time) => {
        const day = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        if (time > 0) {
            return {day, hours, minutes, seconds}
        } else {
            return {day: 0, hours: 0, minutes: 0, seconds: 0}
        }
    }
// Extract time units for display
    const {day, hours, minutes, seconds} = handleCount(count)
    return (
        <div className={`grid grid-flow-col gap-1 lg:gap-3 text-center items-center auto-cols-max ${className}`}>
            <div className={`flex flex-col p-2 w-14 h-14 justify-center items-center rounded-full bg-white text-black ${active ? "text-xs" : ""}`}>
                days
                <span className={`countdown mt-1 ${active ? "small-heading-semi-bold" : "large-heading-bold"}`}>
      <span style={{"--value": day}} aria-live="polite" aria-label={day}></span>
    </span>
            </div>
            {!active && <span className="countdown large-heading-bold mt-3">:</span>}
            <div className={`flex flex-col p-2 w-14 h-14 justify-center items-center rounded-full bg-white text-black ${active ? "text-xs" : ""}`}>
                hours

                <span className={`countdown mt-1 ${active ? "small-heading-semi-bold" : "large-heading-bold"}`}>
      <span style={{"--value": hours}} aria-live="polite" aria-label={hours}>10</span>
    </span>
            </div>
            {!active && <span className="countdown large-heading-bold mt-3">:</span>}
            <div className={`flex flex-col p-2 w-14 h-14 justify-center items-center rounded-full bg-white text-black ${active ? "text-xs" : ""}`}>
                min
                <span className={`countdown mt-1 ${active ? "small-heading-semi-bold" : "large-heading-bold"}`}>
      <span style={{"--value": minutes}} aria-live="polite"></span>
    </span>
            </div>
            {!active && <span className="countdown large-heading-bold mt-3">:</span>}
            <div className={`flex flex-col p-2 w-14 h-14 justify-center items-center rounded-full bg-white text-black ${active ? "text-xs" : ""}`}>
                sec
                <span className={`countdown mt-1 ${active ? "small-heading-semi-bold" : "large-heading-bold"}`}>

      <span style={{"--value": seconds}} aria-live="polite"></span>
    </span>

            </div>
        </div>
    );
};

export default Timer;
