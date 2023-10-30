import { Outlet } from "react-router-dom";
import "./bg.css";

const Bg = () => {
  return (
    <div className="bg">
      <div id="blob1"></div>
      <div id="blob2"></div>
      <div className="heading">
        <div className="text">
          <div className="one">THE</div>
          <div className="two">PRODUCT</div>
          <div className="three">PLATFORM</div>
        </div>
      </div>
      <div className="main_content">
        <Outlet/>
      </div>
    </div>
  );
};

export default Bg;
