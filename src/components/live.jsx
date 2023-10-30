import React, { useEffect } from "react";
import "./live.css";
import { useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

const Live = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("https://www.google.com/");
    }, 5000);
  }, []);

  return (
    <div className="live-box">
      <div>
        <div className="explosion">
          <ConfettiExplosion />
        </div>
        <h1>We are Live Now!</h1>
        <p>
          Our new feature is now <strong>Live and ready</strong> for you
        </p>
        <p>to expore.Go ahead and give it a try.</p>
      </div>
      <div>
        <button
          className="get-started"
          onClick={() => {
            navigate("/");
          }}
        >
          Get Started{" "}
        </button>
      </div>
    </div>
  );
};

export default Live;
