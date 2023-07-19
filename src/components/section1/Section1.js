import React from "react";
import "./Section1.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import { BiBrain } from "react-icons/bi";
import { TbPill } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";

const Section1 = () => {
  return (
    <>
      <div className="section1">
        <div className="section1-content">
          <div className="section1-box section1-box1">
            <div className="section1-flexBox section1-flexItem1">
              <div className="section1-icon">
                <h3>
                  <BiBrain />
                </h3>
              </div>
              <div className="title">
                <h1>Mental Disorder Treatment</h1>
              </div>
            </div>

            <div className="section1-caption section1-caption1">
              <p>
                Depending on your needs, we offer treatment for co-occurring
                disorders that can address both mental health and addiction
                disorders at the same time.
              </p>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health">
                  <button>LEARN MORE</button>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="section1-box section1-box2">
            <div className="section1-flexBox section1-flexItem2">
              <div className="section1-icon">
                <h3>
                  <TbPill />
                </h3>
              </div>
              <div className="title">
                <h1>Substance Addiction Treatment</h1>
              </div>
            </div>

            <div className="section1-caption section1-caption2">
              <p>
                No matter what type of addiction or mental health condition you
                are dealing with, there’s something for everyone at Sacramento
                Rehab.
              </p>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/substance-abuse">
                  <button>LEARN MORE</button>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="section1-box section1-box3">
            <div className="section1-flexBox section1-flexItem3">
              <div className="section1-icon">
                <h3>
                  <MdOutlineWorkOutline />
                </h3>
              </div>
              <div className="title">
                <h1>Job Assistance Program</h1>
              </div>
            </div>

            <div className="section1-caption section1-caption3">
              <p>
                We offer a variety of employment tools and resources to help you
                land on your feet and get hired at a great company in recovery.
              </p>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/jobs">
                  <button>LEARN MORE</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
