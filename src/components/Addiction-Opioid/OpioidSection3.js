import React from 'react'
import './OpioidSection3.css'
import OpioidSection3IMG2 from '../../assets/OpioidSection3IMG2.jpg'
import Splatter from '../../assets/splatter-green.png'
import Splatter3 from '../../assets/paint-navy.png'


const OpioidSection3 = () => {
  return (
    <>
      <div className='opioidSection3 container'>
        <div className='opioidSection3-content'>

            <div className='opioidSection3-flex'>

                <div className='opioidSection3-left'>
                    <div className='opioidSection3-images'>
                    <img src={ OpioidSection3IMG2 } alt="individual therapy" loading="lazy"/>
                    <div className='opioidSection3-accent'>
                        <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='opioidSection3-accent2'>
                        <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                    </div>
                    </div>
                </div>



                <div className='opioidSection3-right'>
                    <h1>Life isn’t linear. <br/> Neither is our treatment model.</h1>
                    <p>We tailor our approach to address your needs. Our team-based model is supportive, nonjudgmental, and compassionate.</p>

                </div>


            </div>
        </div>

      </div>
    </>
  )
}

export default OpioidSection3
