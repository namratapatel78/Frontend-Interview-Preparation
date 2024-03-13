import React, { useState, useEffect } from 'react';
import './AnalogClock.css'; // You can define your own styles

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12; // Convert to 12-hour format

  // Calculate rotation angles
  const secondHandRotation = (seconds / 60) * 360;
  const minuteHandRotation = (minutes / 60) * 360 + (seconds / 60) * 6; // Adjust for seconds
  const hourHandRotation = (hours / 12) * 360 + (minutes / 60) * 30; // Adjust for minutes

  return (
    <div className="analog-clock">
      <div className="hand second-hand" style={{ transform: `rotate(${secondHandRotation}deg)` }}></div>
      <div className="hand minute-hand" style={{ transform: `rotate(${minuteHandRotation}deg)` }}></div>
      <div className="hand hour-hand" style={{ transform: `rotate(${hourHandRotation}deg)` }}></div>
    </div>
  );
};

export default AnalogClock;
