import React from 'react'
import './Section2.css'

import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';


import Section2IMG from '../../assets/section2-img.jpg'
import Splatter from '../../assets/splatter-purple.png'
import Splatter3 from '../../assets/splatter3.png'

const Section2 = () => {
  return (
    <>



        <div className='section2 container'>




            <div className='section2-content'>

                <div className='section2-header'>
                    <svg viewBox="0 0 70 36">
                        <path d="M6.9739 30.8153H63.0244C65.5269 25.8152 85.5358 -5.68471 35.4998 1.81531C-16.1598 11.2025 0.894099 21.9766 17.9922 22.3153C104.062 30.3153 54.5169 -6.68469 23.489 9.31527" />
                    </svg>
                    <h1>Compassionate, down-to-earth care <br/>
                        for people with substance use disorder.</h1>
                </div>

                <div className='section2-buttons'>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/alcohol">
                        <div className='section2-button'>
                            <h1>Alcohol</h1>
                        </div>
                    </Link>
                    </LinkRoll>



                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/opioid">
                        <div className='section2-button'>
                            <h1>Opioid</h1>
                        </div>
                    </Link>
                    </LinkRoll>


                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/other-substances">
                        <div className='section2-button'>
                            <h1>Other Substances</h1>
                        </div>
                    </Link>
                    </LinkRoll>

                </div>
                
                <div className='section2-subheader'>
                    <p>A specially trained team of addiction professionals will guide you every step of the way.</p>
                </div>



{/* FLEX */}

                <div className='section2-flex'>
                    <div className='section2-left'>
                        <h1>What is it?</h1>
                        <p>Our In-Home Addiction Treatment (IHAT) program is exactly what it sounds like. We deliver an all-inclusive addiction treatment program directly to you, so you don’t have to leave your home or disrupt your life.</p>

                        <br/>

                        <h1>How does it work?</h1>
                        <p>You will be assigned a team of IHAT professionals that will come to your home and work around your schedule. Tailored for lasting recovery, the treatment process has 4 phases over the course of up to 12 months. </p>
               
                        <br/>

                        <h1>Does it work?</h1>
                        <p>Our clients’ success stories are the best proof of our model’s effectiveness. So are our current clinical outcomes.</p>
                    </div>


                    <div className='section2-right'>
                        <div className='section2-images'>
                            <img src={ Section2IMG } alt="individual therapy" loading="lazy"/>

                            <div className='section2-accent'>
                                <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                            </div>
                            <div className='section2-accent2'>
                                <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      
    </>
  )
}

export default Section2
