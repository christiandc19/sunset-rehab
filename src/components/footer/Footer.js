import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from "../../assets/nav-logo-bl.png";
// import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          
          <div className="top">
            
            <div className="logo-footer">
              <img src={logo} alt="Sunset Rehab Logo" loading="lazy"/>
            </div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>
          
            
            <div className="col-container">
              <div className="col">
                  <h3>COMPANY</h3>
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mission">
                    <p>Our Mission</p>
                  </Link>
                  </LinkRoll>

                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                  </LinkRoll>

                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health">
                    <p>Programs</p>
                  </Link>
                  </LinkRoll>
              </div>

            <div className="col">
              <h3>Navigation</h3>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/">
                      <p>Home</p>
                    </Link>
                    </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/treatment">
                      <p>Our Method</p>
                    </Link>
                    </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/insurance">
                      <p>Insurance</p>
                    </Link>
                    </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/contact">
                      <p>Contact</p>
                    </Link>
                    </LinkRoll>
            </div>

            <div className="col">
              <h3>MENTAL HEALTH</h3>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/mental-health-php">
                      <p>Partial Hospitalization Program</p>
                    </Link>
                    </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/mental-health-iop">
                      <p>Intensive Outpatient Program</p>
                    </Link>
                    </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/mental-health-op">
                      <p>Outpatient Program</p>
                    </Link>
                    </LinkRoll>
              </div>
            </div>

                <div className="copyright">
                  <p> &copy; 2023 Sunset Rehab Treatment Center. All rights reserved </p>
                </div>
                
        </div>
      </div>
    </>
  );  
};

export default Footer;
