import React from "react";
import Fade from "react-reveal/Fade";
import "./Conditions.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import ConditionsLogos from "./ConditionsLogos";

import ADHD from "../../assets/adhd.jpg";
import AngerDisorder from "../../assets/angerDisorder.jpg";
import AnxietyDisorder from "../../assets/anxietyDisorder.jpg";
import BipolarDisorder from "../../assets/bipolarDisorder.jpg";
import Depression from "../../assets/depression.jpg";
import PTSD from "../../assets/ptsd.jpg";
import SCHIZOAFFECTIVE from "../../assets/schizoaffective.jpg";
import SCHIZOPHRENIA from "../../assets/schizophrenia.jpg";

import ALCOHOL from "../../assets/alcohol.jpg";
import COCAINE from "../../assets/cocaine.jpg";
import FENTANYL from "../../assets/fentanyl.jpg";
import HEROIN from "../../assets/heroin.jpg";
import KRATOM from "../../assets/kratom.jpg";
import MDMA from "../../assets/mdma.jpg";
import METH from "../../assets/meth.jpg";
import OPIATE from "../../assets/opiate.jpg";
import OPIOID from "../../assets/opioid.jpg";
import OXYCODONE from "../../assets/oxycodone.jpg";
import PRESCRIPTION from "../../assets/prescription.jpg";
import XANAX from "../../assets/xanax.jpg";

const Conditions = () => {
  return (
    <>
      <div className="conditions">
        <div>
          <div className="condition-icons-header container">
            <h1>Types of Mental Health Disorders Do We Treat</h1>
            <p>
              Antioch Rehab provides services to adults and adolescents who have
              suffer from depression, anxiety, Bipolar disorder, and other
              mental illnesses.
            </p>
          </div>

          <div className="ConditionsLogosContainer container">
            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={Depression} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/depression">
                    <div className="condition-btn">
                      <button>DEPRESSION</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={AnxietyDisorder} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/anxiety">
                    <div className="condition-btn">
                      <button>ANXIETY</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={ADHD} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/adhd">
                    <div className="condition-btn">
                      <button>ADHD</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={AngerDisorder} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/anger-disorder">
                    <div className="condition-btn">
                      <button>ANGER</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={BipolarDisorder} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/bipolar-disorder">
                    <div className="condition-btn">
                      <button>BIPOLAR</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={PTSD} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/ptsd">
                    <div className="condition-btn">
                      <button>PTSD</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={SCHIZOAFFECTIVE} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/schizoaffective">
                    <div className="condition-btn">
                      <button>SCHIZOAFFECTIVE</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={SCHIZOPHRENIA} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/schizophrenia">
                    <div className="condition-btn">
                      <button>SCHIZOPHRENIA</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>
          </div>

          <div className="condition-icons-header container">
            <h1>Types of Substance Abuse Addiction Do We Treat</h1>
            <p>
              Here at Antioch Rehab, we offer a full array of affordable drug
              rehab programs that can take addicts from detox to inpatient or
              outpatient care and back home again.
            </p>
          </div>

          <div className="ConditionsLogosContainer container">
            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={ALCOHOL} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/alcohol">
                    <div className="condition-btn">
                      <button>ALCOHOL</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={COCAINE} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/cocaine">
                    <div className="condition-btn">
                      <button>COCAINE</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={FENTANYL} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/fentanyl">
                    <div className="condition-btn">
                      <button>FENTANYL</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={HEROIN} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/heroin">
                    <div className="condition-btn">
                      <button>HEROIN</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={KRATOM} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/kratom">
                    <div className="condition-btn">
                      <button>KRATOM</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={MDMA} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/mdma">
                    <div className="condition-btn">
                      <button>MDMA</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade bottom>
              <div className="conditions-icons">
                <ConditionsLogos Image={METH} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/meth">
                    <div className="condition-btn">
                      <button>METH</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={OPIATE} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/opiate">
                    <div className="condition-btn">
                      <button>OPIATE</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={OPIOID} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/opioid">
                    <div className="condition-btn">
                      <button>OPIOID</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={OXYCODONE} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/oxycodone">
                    <div className="condition-btn">
                      <button>OXYCODONE</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={PRESCRIPTION} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/prescription">
                    <div className="condition-btn">
                      <button>PRESCRIPTION</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>

            <Fade top>
              <div className="conditions-icons">
                <ConditionsLogos Image={XANAX} />
                <LinkRoll
                  activeClass="active"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link to="/xanax">
                    <div className="condition-btn">
                      <button>XANAX</button>
                    </div>
                  </Link>
                </LinkRoll>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conditions;
