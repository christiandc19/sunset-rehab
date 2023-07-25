import React from 'react'
import './OtherSubstances.css'
import Splatter3 from '../../assets/splatter3.png'

const SA = () => {
    return (
        <div className='sa container'>

                <div className="sa-content">
                    <div className='sa-content-img'>
                        <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                    </div>
                    <h1>Other Substances</h1>
            </div>
        </div>
    )
}

export default SA
