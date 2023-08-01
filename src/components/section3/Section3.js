import React from "react";
import "./Section3.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import s31 from "../../assets/s31.jpg";
import s32 from "../../assets/s32.jpg";
import s33 from "../../assets/s33.jpg";

import { BiBrain } from "react-icons/bi";

const Section3 = () => {
  return (
    <>
      <div className="section3">
        <div className="section3-top">
          <div className="s3-flexItem">
            <img src={s31} alt="Problem Discussion With Psychologist" />
          </div>

          <div className="s3-flexItem">
            <img src={s32} alt="Crying Woman Participating In Group" />
          </div>

          <div className="s3-flexItem">
            <img src={s33} alt="Depressed Man In Counseling Session " />
          </div>
        </div>

        <div className="component3">
          <div className="c3-left">
            <h2>MENTAL HEALTH SERVICES </h2>
            <h1>
              Antioch Rehab makes getting treatment{" "}
              <i>
                <span>simple</span>
              </i>
            </h1>
            <p>
              Your personal medical assistant is always a message away for
              anything you need, at no cost.
            </p>
            <div className="c2-btn">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health">
                  <button>View All</button>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="c3-right">
            <div className="c3-card c3-card1">
              <div className="c2-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>STRESS MANAGEMENT</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c3-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>DEPRESSION</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c2-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>ANXIETY DISORDER</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>

            <div className="c3-card c3-card1">
              <div className="c3-card-img"></div>
              <div className="c3-card-flex">
                <h2>
                  <BiBrain />
                </h2>
                <h1>ANGER MANAGEMENT</h1>
              </div>
              <p>
                Answer a few questions about your medical history to match with
                your free medical assistant.
              </p>
              <div className="c3-link">
                <p>LEARN MORE</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='section3-bottom'>

                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>


                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                </div>


                <div className='s3-bot-flex'>
                    <div className='s3-bot-icon'>
                    <h2><BiBrain /></h2>
                    </div>
                    <div className='s3-bot-caption'>
                        <h1>Stress Management</h1>
                    </div>
                </div> */}

        {/* </div> */}
      </div>
    </>
  );
};

export default Section3;
