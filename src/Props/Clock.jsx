// change the background color of the clock
import React from 'react';
import { useEffect } from 'react';

const Clock = ({color}) => {
    const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());
    
   
    
    useEffect(() => {
        const timer = setInterval(() => {
            // This will cause the component to re-render every second
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        
        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

  return (
    <div>
        <h1>Change the Backgroung</h1>
        
        <h2 style={{backgroundColor:color , padding: "10px", borderRadius: "5px"}}>
            Current Time: <span style={{color: "darkblue"}}>{currentTime}</span>
        </h2>
    </div>
  )
}

export default Clock