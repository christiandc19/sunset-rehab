import React from "react";
import "./Cards.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Fade from "react-reveal/Fade";

import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
import Card3 from "../../assets/card3.jpg";

const Cards = () => {
  return (
    <>
      <div id="cards">
        <div className="main-cards-header container">
          <h1>WELCOME TO SACRAMENTO REHAB</h1>
          <h2>“Taking a step today will help you lead a better tomorrow.”</h2>
        </div>

        <div className="cards-header ">
          <div class="card-wrap">
            <div className="cards-header-left">
              <h3>
                Sacramento Rehab makes getting treatment <span>possible.</span>
              </h3>
              <br />
              <p>
                At Sacramento Rehab Treatment Center, clients receive individual
                therapy alongside a range of additional treatments, including
                relapse prevention, trauma therapy, mindfulness meditation,
                yoga, and more. We offer support that clients need to allow them
                to gradually go back to treatment.{" "}
              </p>
            </div>

            <div class="tile">
              <Fade left>
                <img src={Card1} alt="Mental Health" loading="lazy" />
              </Fade>
              <div class="text">
                <h1>MENTAL HEALTH TREATMENT​</h1>
                <p class="animate-text">
                  Depending on your needs, we offer treatment for co-occurring
                  disorders that can address both mental health and addiction
                  disorders at the same time.
                </p>
                <div class="animate-text">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/mental-health">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div class="tile">
              <Fade left>
                <img src={Card2} alt="Mental Health" loading="lazy" />
              </Fade>
              <div class="text">
                <h1>ADDICTION TREATMENT​</h1>
                <p class="animate-text">
                  No matter what type of addiction or mental health condition
                  you are dealing with, there’s something for everyone at Buena
                  Park Rehab.
                </p>
                <div class="animate-text">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/substance-abuse">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div class="tile">
              <Fade right>
                <img src={Card3} alt="Warehouse Employees" loading="lazy" />
              </Fade>
              <div class="text">
                <h1>EMPLOYMENT ASSISTANCE</h1>
                <p class="animate-text">
                  We offer a variety of employment tools and resources to help
                  you land on your feet and get hired at a great company in
                  recovery.
                </p>
                <div class="animate-text">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/jobs">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
