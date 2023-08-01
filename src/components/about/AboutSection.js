import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about-section-min.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content container">
          <div className="about-content-left">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="about-content-right">
            <h1>ABOUT US</h1> <br />
            <h2>
              <i>Get the right care from the people who care</i>
            </h2>{" "}
            <br />
            <p>
              Antioch Rehab Treatment Center has refined and well educated staff
              that is committed to providing the best possible level of care to
              our clients. We are there for you, through every stage of
              recovery. No matter where you’re located, you can reach out and
              get in touch with someone from our staff today
            </p>{" "}
            <br />
            <p>
              We strives to make sobriety less stressful by focusing on sobriety
              and utilize established medical treatments to help you get sober
              and stay sober. <br />
              <br />
              Antioch Rehab helps you taper in a safe, structured environment.
              We are there for you, through every stage of recovery. No matter
              where you’re located, you can reach out and get in touch with
              someone from our staff today.
            </p>
            <br />
            <br />
            <div className="about-btn">
              <button class="about-cta">
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

export default AboutSection;
