import React from 'react'
import './TransitionalHousing.css'
import Splatter3 from '../../assets/paint-navy.png'

const TransitionalHousing = () => {
  return (
    <>
<div className='housing '>
        <div className="housing-content">
            <h1>Transitional Housing</h1>
                <div className='housing-accent'>
                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                </div>
        </div>
    </div>
</>
  )
}

export default TransitionalHousing
