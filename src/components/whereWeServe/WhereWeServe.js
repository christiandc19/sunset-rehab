import React from 'react'
import './WhereWeServe.css'
import Splatter3 from '../../assets/splatter3.png'

import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';

const WhereWeServe = () => {
    return (
        <>
        <div className='wws container'>

                <div className="wws-content">
                    <div className='wws-content-img'>
                        <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                    </div>
                    <h1>Where We Serve</h1>
            </div>
        </div>

        

        <div className='wws-locations container'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/los-angeles">
                        <h2>Los Angeles</h2>
                    </Link>
                </LinkRoll>

                <h2>Location2</h2>
                <h2>Location3</h2>
                <h2>Location4</h2>

            </div>

</>

    )
}

export default WhereWeServe
