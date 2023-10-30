import React, { useEffect, useState } from "react";
import "./timer.css";
import { useNavigate } from "react-router-dom";

const Timer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
      const i = setInterval(() => {
        if(seconds === 0) {
            if(minutes === 0) {
              navigate("/live");
              return; 
            }
            setSeconds(59);
            setMinutes(minutes - 1);
        }
        else setSeconds(seconds - 1);
      }, 1000);
    
      return () => {
        clearInterval(i);
      }
    },[seconds])
    
  return (
    <div className="timer-container">
      <div className="time-box">
        <div>{minutes < 10 ? "0" + minutes : minutes}</div>
        <div className="unit">Minutes</div>
      </div>
      <div style={{fontWeight: 300}}>:</div>
      <div className="time-box">
        <div>{seconds < 10 ? "0" + seconds : seconds}</div>
        <div className="unit">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;
