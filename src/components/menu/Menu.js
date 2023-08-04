import React from 'react'
import './Menu.css'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


import PHP from "../../assets/cognitive.png";
import IOP from "../../assets/dialectal.png";
import OP from "../../assets/interpersonal.png";


const Menu = () => {
  return (

    <>
    <div className='menu'>
        <div className='menu-content '>

        <div className="menu-header container">
          <h1>What We Can Offer</h1> <br />
            <p>
              At Sunset Rehab, we offer different levels of care based on each
              individual’s needs. Our programs consist of an intensive
              outpatient program (IOP) and a more demanding and structured
              partial hospitalization program (PHP). <br /> 
              You can be confident that our caring and professional staff will
              recommend the right level of care for you or your loved one.
            </p>{" "}
          </div>



            <div className='menu-flex'>

                <div className='menu-flexItem'>
                    <div className='menu-flexItem-img'>
                        <img src={PHP} alt="activities" />
                    </div>
                    <h5>Partial Hospitalization Program</h5>
                    <p>Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety.</p>
                    <div className='menu-flexItem-btn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                            <Link to="/php">
                                <button>LEARN MORE</button>
                            </Link>
                        </LinkRoll>
                    </div>
                </div>




                <div className='menu-flexItem'>
                    <div className='menu-flexItem-img'>
                        <img src={IOP} alt="activities" />
                    </div>
                    <h5>Intensive Outpatient Program</h5>
                    <p>No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Sunset Rehab.</p>
                    <div className='menu-flexItem-btn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                            <Link to="/iop">
                                <button>LEARN MORE</button>
                            </Link>
                        </LinkRoll>
                    </div>
                </div>





                <div className='menu-flexItem'>
                    <div className='menu-flexItem-img'>
                        <img src={OP} alt="activities" />
                    </div>
                    <h5>Outpatient <br/>Program</h5>
                    <p>We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
                    <div className='menu-flexItem-btn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                            <Link to="/op">
                                <button>LEARN MORE</button>
                            </Link>
                        </LinkRoll>
                    </div>
                </div>







            </div>

        </div>
    </div>
    </>
    
  )
}

export default Menu