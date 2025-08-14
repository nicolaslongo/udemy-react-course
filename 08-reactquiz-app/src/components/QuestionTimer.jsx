import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const intervalTimer = 100;
  const [remainingTime, setRemainingTime] = useState(timeout);

  // This useEffect is only needed because of the setInterval!
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    } 
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => { 
      setRemainingTime((previousTime) => previousTime - intervalTimer);
    }, intervalTimer);
    
    // Cleanup function.
    return () => {
      clearInterval(interval);
    }
  }, []);
  
  return <progress id="question-time"
    value={remainingTime} 
    max={timeout}
  />
}