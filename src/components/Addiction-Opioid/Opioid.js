import React from 'react'
import Splatter3 from '../../assets/splatter3.png'
import './Opioid.css'
const Opioid = () => {
    return (
        <div className='opioid container'>

                <div className="opioid-content">
                    <div className='opioid-content-img'>
                        <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                    </div>
                    <h1>Opioid</h1>
            </div>
        </div>
    )
}

export default Opioid
