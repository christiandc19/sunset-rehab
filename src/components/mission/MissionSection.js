import React from "react";
import "./MissionSection.css";
import Fade from "react-reveal/Fade";
import Contact2 from "../contact/Contact2";

import Therapy from "../../assets/therapy.jpg";

const MissionSection = () => {
  return (
    <>
      <div className="mission-section">
        <Fade left>
          <div className="mission-section-left">
            <h1>Our Mission</h1>
            <p>
              Our mission is to create an environment where each individual has
              the right and opportunity to develop a solid foundation towards
              long-term sobriety. Sunset Rehab will provide every individual a
              quiet, calm, and safe place to begin the journey. It is our
              philosophy that in order to reduce the incidence and prevalence of
              substance abuse and other behavioral health problems among adults
              through the provision of addiction treatment services, each
              individual must be empowered to make decisions about their care
              with the expected outcome of an increased quality of life.
            </p>
          </div>
        </Fade>

        <Fade right>
          <div className="mission-section-right">
            <img src={Therapy} alt="therapy" />
          </div>
        </Fade>
      </div>




      <Contact2 />
    </>
  );
};

export default MissionSection;
