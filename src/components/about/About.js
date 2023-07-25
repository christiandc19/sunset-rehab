import React from 'react'
import Splatter3 from '../../assets/splatter3.png'

import './About.css'



const Team = () => {
    return (
<>
<div className='about'>
        <div className="about-content">
            <h1>About Us</h1>
                <div className='about-accent'>
                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                </div>
        </div>
    </div>
</>
)
}

export default Team