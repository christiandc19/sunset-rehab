import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/VidBg.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero overlay'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">

                <div className="content">
                        <h1>Sunset Rehab</h1>
                    <Fade left>
                        <h2>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Contact Us</button>
                    </Link>
                    </div>
                    <br />
                    <Fade bottom>
                        <p><i>"Find your happiness and learn to put it first."</i></p>
                    </Fade>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero