import { useState, useEffect } from "react";

export default function Timer({timeout, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(() => {
            onTimeout();
        }, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime - 100));
        }, 100); 
    
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    
    return (
        <progress id="quertion-time" max={timeout} value={remainingTime} className={mode}/>
    )
}