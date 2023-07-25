import React from 'react'
import './Faq.css'
import Splatter3 from '../../assets/splatter3.png'

const Faq = () => {
    return (
        <>
        <div className='faq container'>

                <div className="faq-content">
                    <div className='faq-content-img'>
                        <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                    </div>
                    <h1>Frequently Asked Questions</h1>
            </div>
        </div>
</>

    )
}

export default Faq
