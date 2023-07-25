import React from 'react'
import Splatter3 from '../../assets/splatter3.png'

import './Alcohol.css'



const Alcohol = () => {
    return (
        <>
        <div className='alcohol container'>
            <div className="alcohol-content">
                <div className='alcohol-content-img'>
                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                </div>
                <h1>Alcohol</h1>
            </div>
        </div>
        </>
    )
}

export default Alcohol
