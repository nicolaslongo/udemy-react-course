import { useEffect, useState } from "react";

// SetInterval will re-render this component every 10 milliseconds, so it's a good practice to make the component as small as possible
export default function ProgressBar({ timer }) {
  const intervalTimer = 10;
  const [remainingTime, setRemainingTime] = useState(timer)

  useEffect(() => {
    // if this code was outside the useEffect it would create an infinit loop: the setInterval runs every intervalTimer miliseconds,
    // then setRemainingTime would be called, and then the component would re-render, hence redefining setInterval to run every intervalTimer
    // millisendos, so setRemainingTime would be called, and the component re-rendered...
    const interval = setInterval(() => { 
      console.log('Interval!')
      setRemainingTime((previousTime) => previousTime - intervalTimer);
    }, intervalTimer);
    
    // Cleanup function.
    return () => {
      clearInterval(interval);
      console.log('Interval cleaned up')
    }
  }, [])
  
  return <progress 
    value={remainingTime} 
    max={timer}
  />
}