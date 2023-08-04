import React from "react";
import "./Section2.css";

import wrapper1 from "../../assets/wrapper1-min.jpg";

const Section2 = () => {
  return (
    <>
      <div className="section2 ">
        <div className="section2-content container">

          <div className="section2-flex">

          <div className="section2-content-left">
            <img src={wrapper1} alt="Smiling man" loading="lazy" />
          </div>

          <div className="section2-content-right">
            
            <h1>Treatment</h1> <br />
            <p>
              All treatment clients will have a recovery/treatment plan
              developed within 30 days of admission. Measurement and
              reassessment of treatment plan progress happen on a weekly basis
              through the weekly summary. <br />
              <br /> In the weekly summary, the drug and alcohol counselor will
              ensure that action steps to be taken by client or counselor are on
              target and that the action step achievements will enable
              resolution of the objective. All treatment plans are reviewed by
              and signed off on by the clinical director.
            </p>
          </div>
        </div>
        </div>


      </div>
    </>
  );
};

export default Section2;
