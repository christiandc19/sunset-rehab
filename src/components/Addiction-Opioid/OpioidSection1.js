import React from 'react'
import './OpioidSection1.css'

import opioidSection1 from '../../assets/opioidSection1.jpg'
import opioidSection2 from '../../assets/opioidSection2.jpg'
import Splatter from '../../assets/splatter-green.png'
import Splatter2 from '../../assets/splatter-yellow.png'
import Splatter3 from '../../assets/paint-navy.png'
import Splatter4 from '../../assets/paint-red.png'


const OpioidSection1 = () => {
  return (
    <>
            <div className='opioidSection1 container'>


{/* OPIOID 1 */}

                <div className='opioidSection1-flex'>
                    <div className='opioidSection1-left'>
                        <h2>Drug addiction is heartbreaking.</h2>
                        <h1>We offers an innovative solution that works</h1>
                        <p>The over-prescribing of opioid pain relievers has created a crisis that has touched—and taken—lives in our families and communities. The epidemic’s magnitude calls for innovative solutions.</p>

                        <h2>Signs and symptoms of opioid addiction</h2>
                        <p>Since opioids are often prescribed by doctors, it can be hard to know when someone is addicted. Signs and symptoms may include: Taking more than the prescribed amount; taking the opioid even when not in pain, “just in case”; changes in mood and/or sleep patterns; borrowing medication from others; or “losing” medication and seeking prescriptions from multiple doctors.</p>
                    </div>


                    <div className='opioidSection1-right'>
                        <div className='opioidSection1-images'>
                            <img src={ opioidSection2 } alt="individual therapy" loading="lazy"/>

                            <div className='opioidSection1-accent'>
                                <img src={ Splatter2 } alt="individual therapy" loading="lazy"/>
                            </div>
                            <div className='opioidSection1-accent2'>
                                <img src={ Splatter4 } alt="individual therapy" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>


{/* OPIOID 2 */}


<div className='opioidSection1B-flex'>
                    <div className='opioidSection1B-left'>
                        <div className='opioidSection1B-images'>
                            <img src={ opioidSection1 } alt="individual therapy" loading="lazy"/>

                                <div className='opioidSection1B-accent'>
                                    <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                                </div>
                                <div className='opioidSection1B-accent2'>
                                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                                </div>
                        </div>
                    </div>

                    <div className='opioidSection1B-right'>
                        <h1>Yes, you can recover at home!</h1>
                        <p>Aware offers a state-of-the-art alternative to traditional rehab care. Our dedicated team helps clients navigate their individual recovery plan using a range of proven tools, from 12-step programs and medically assisted treatment (MAT), to mindfulness, family therapy, nutrition, yoga, and more.</p>
                    </div>
                </div>


            </div>
    </>
  )
}

export default OpioidSection1
