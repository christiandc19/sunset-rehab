import React from "react";
import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./MenusMH.css";


const MenusMH = () => {
  return (
    <>



<div className="mental-health container">

      <div className="mental-health-header">
        <h1>SUNSET REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH PROGRAMS</h1>
        <p>At Sunset Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>

      </div>


  <div className="mental-health-flex">

{/* ANXIETY */}
    <div class="card mental-health-card">
        <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">Anxiety</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/anxiety">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


{/* DEPRESSION */}
<div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">DEPRESSION</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/depression">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


{/* PANIC DISORDER */}
    <div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">PANIC DISORDER</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/panic-disorder">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


{/* ASD */}
    <div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">ACUTE STRESS DISORDER</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/acute-stress-disorder">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


{/* ADHD */}
<div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">ADHD</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/adhd">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>



{/* ANGER DISORDER */}
<div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">ANGER DISORDER</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/anger-disorder">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


{/* BIPOLAR DISORDER */}
<div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">BIPOLAR DISORDER</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/bipolar-disorder">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>



{/* PTSD */}
<div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">PTSD</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/ptsd">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


{/* Schizoaffective */}
<div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">Schizoaffective</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/Schizoaffective">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


{/* Schizophrenia */}
<div class="card mental-health-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg" alt="Mental Health" loading="lazy" />
      <div class="card-body">
        <h3 class="card-title">Schizophrenia</h3>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/Schizophrenia">
                <button>Learn More</button>
              </Link>
        </LinkRoll>
      </div>
    </div>


    </div>
</div>

    </>
  );
};

export default MenusMH;
