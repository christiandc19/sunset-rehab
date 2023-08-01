import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar" name="top">
      <div className="topbar-content container">
        <div className="address bar-box1">
          <p>515 W. Santa Monica Ave. #215, Fullerton CA 92832</p>
        </div>

        <div className="email bar-box2">
          <p>info@buenapark.com</p>
        </div>

        <div className="number bar-box3">
          <p> +1 (323) 576-6689</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
