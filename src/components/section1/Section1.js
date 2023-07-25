import React from 'react'
import './Section1.css'

import Employment from '../../assets/employment-icon.png'
import Housing from '../../assets/housing-icon.png'
import Other from '../../assets/other-resources-icon.png'

import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';


const Section1 = () => {
  return (
    <>
      <div className='section1'>
                    <div className='section1-header'>
                    <h1>Providing better resources to help you move forward with whatever comes next.</h1>
                    </div>
                      

        <div className='section1-content'>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/employment">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ Employment } alt="hand shake" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>Empoloyment Assitance</h1>
                    </div>
                </div>
              </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/transitional-housing">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ Housing } alt="Transitional Housing" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>Transitional Housing</h1>
                    </div>
                </div>
              </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/other-resources">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ Other } alt="Other Resources" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>Other Resources</h1>
                    </div>
                </div>
              </Link>
              </LinkRoll>



        </div>

      </div>
    </>
  )
}

export default Section1
