import React from "react";
import Fade from "react-reveal/Fade";
import "./PhpSection.css";

import MenusSA from "../menusSA/MenusSA";

const PhpSection = () => {
  return (
    <>
      <div className="php-wrap">
        <Fade right>
          <div className="php-wrap-left">
            <h1 className="header">WHAT IS PARTIAL HOSPITALIZATION PROGRAM?</h1>
          </div>
        </Fade>

        <Fade left>
          <div className="php-wrap-right">
            <br />
            <p>
              A partial hospitalization program (PHP) offers a hybridized
              approach to addiction treatment by combining elements of inpatient
              and outpatient programs. PHP patients don’t live at the treatment
              facility like they would during residential treatment, but they do
              make regular on-site appearances throughout the week.
              <br /> <br />
              We, at Santa Monica requires PHP patients to attend therapeutic
              group sessions five times a week. These sessions teach vital
              coping skills and healthy ways to communicate and manage emotions.{" "}
              <br /> <br />
              Other aspects of PHP treatment include weekly check-ins with a
              licensed psychiatrist and 24/7 on-call support. All of these serve
              to provide the necessary support someone needs to have the
              smoothest, most successful recovery possible. <br />
              <br /> PHP can be a smart choice for recovery. This substance
              abuse treatment in California serves as a middle ground between
              inpatient hospitalization and outpatient programs. In some cases,
              it can be a step down from a residential inpatient program. For
              others with severe addiction histories or other serious medical
              issues, a partial hospitalization can serve as a good starting
              point.
            </p>
            <br />
          </div>
        </Fade>
      </div>

      <div className="php-wrap2">
        <div className="wrap2-content container">
          <h1>BENEFITS OF OUTPATIENT TREATMENT FOR SUBSTANCE ABUSE</h1>
          <br /> <br />
          <p>
            For people with mild to moderate symptoms, strong support systems at
            home, and the ability to function independently, outpatient
            treatment is usually an ideal choice. Patients can:
            <br /> <br />
            <ul>
              <li>
                Stay connected with loved ones while still receiving the
                treatment they need
              </li>
              <br />
              <li>
                Maintain commitments and responsibilities with work and school
              </li>
              <br />
              <li>
                Apply the skills and strategies they learn in treatment to real
                life situations
              </li>
              <br />
              <li>
                Stay connected with their treatment team and remain accountable
                to their personalized care plan
              </li>
              <br />
              <li>
                Transition slowly back into everyday situations, equipped with
                tools to help optimize their independence and live a meaningful
                life
              </li>
              <br />
              <li>
                Stay connected with loved ones while still receiving the
                treatment they need
              </li>
              <br />
            </ul>
            Most outpatient treatment programs also have the added benefit of
            being less expensive than residential programs.
          </p>
        </div>
      </div>

      <MenusSA />
    </>
  );
};

export default PhpSection;
