import { useState } from "react";

import "./main_content.css";
import rocket from "../assets/light_rocket.svg";
import tick from "../assets/tick.svg";
import Timer from "./timer";

const MainContent = () => {
  const [valid, setValid] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEmail = () => {
    // const submitButton = document.getElementById("submit");
    // submitButton.innerHTML = "<div class='loader'></div>";
    setLoading(true);
    setTimeout(() => {
      // this.innerHTML = "<img src={tick} alt='tick' width={16} height={16} />";
      setLoading(false);
    }, 2000);
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (emailRegex.test(email)) {
      setValid(1);
      setEmail("");
    } else {
      setValid(-1);
      console.log("Invalid Email");
      // submitButton.style.color = "rgba(255, 255, 255, 0.5)";
      // submitButton.disabled = true;
    }
  };

  return (
    <div className="content">
      <div className="header">
        <div className="header_img">
          <img src={rocket} alt="rocket" width={64} height={64} />
        </div>
        <div className="header_text">Launching New Module Soon!</div>
      </div>
      <div className="body">
        Exciting things are in the works! We're currently{" "}
        <b>Crafting a new feature</b> for you. Keep an eye out for updates -
        We're working to make it available soon!
      </div>
      <div className="get_ready_parent">
        <div className="get_ready_text inner">GET READY FOR THE REVEAL!</div>
        <div className="get_ready_text outer">GET READY FOR THE REVEAL!</div>
        <div className="get_ready_text outer-2">GET READY FOR THE REVEAL!</div>
      </div>
      <Timer />
      <div className="notify">
        <div className="description">
          Be the first to know! Share your email and We'll notify you when it's
          live
        </div>
        <div className="inputs">
          <div className="input_field">
            <input
              placeholder="Please enter your email id"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValid(0);
              }}
              // onKeyUp={(e) => {
              //   const submitButton = document.getElementById("submit");
              //   if (e.target.value !== "") {
              //     submitButton.style.color = "#FFFFFF";
              //     submitButton.disabled = false;
              //   } else {
              //     submitButton.style.color = "rgba(255, 255, 255, 0.5)";
              //     submitButton.disabled = true;
              //   }
              // }}
              id="input_email"
            />
          </div>
          <div className="button">
            <div className="notify_button">
              <div className="submit_button">
                {loading ? (
                  <div className="loader"></div>
                ) : valid === 1 ? (
                  <img src={tick} alt="tick" className="tick-mark" />
                ) : (
                  <input
                    id="submit"
                    className={`${
                      email.length > 0 &&
                      email.includes("@") &&
                      email.includes(".")
                        ? ""
                        : "disabled-btn"
                    }`}
                    value="Notify Me"
                    disabled={
                      email.length === 0 ||
                      !email.includes("@") ||
                      !email.includes(".")
                    }
                    type="button"
                    onClick={checkEmail}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`invaid-warn ${valid !== -1 ? "hide" : ""}`}>
          {" "}
          Invalid Email{" "}
        </div>
      </div>
    </div>
  );
};
export default MainContent;
