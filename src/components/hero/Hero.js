import React from "react";
import Fade from "react-reveal/Fade";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div class="fullscreen">
        <div class="hero-content">
          <div className="caption">
            <Fade left>
              <h1>SUNSET REHAB</h1>
            </Fade>
            <Fade right>
              <h2>
                Substance Abuse Addiction and Mental Health Treatment Facility
              </h2>
            </Fade>
            <Fade left>
            <p>Find your happiness and learn to put it first.</p>
            </Fade>
            <div className="hero-btn">
              <button class="hero-cta">
                <span>CONTACT US</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
