import React from 'react'
import './Alcohol1.css'

import Alcohol2IMG from '../../assets/alcohol2img.jpg'

import Section2IMG from '../../assets/alcohol1IMG.jpg'
import Splatter from '../../assets/splatter-purple.png'
import Splatter3 from '../../assets/splatter3.png'


const Alcohol1 = () => {
  return (
    <>
            <div className='alcohol1 container'>




{/* ALCOHOL 1 */}

                <div className='alcohol1-flex'>
                    <div className='alcohol1-left'>
                        <h1>If you are struggling, we can help.</h1>
                        <p>Alcohol doesn’t have to wreak havoc on your health or your relationships.</p>
                        <p>One in eight American adults meets diagnostic criteria for an alcohol-use disorder. Aware’s Yale University inspired, evidence-based treatment has shown that long-term, in-home care is an effective way to treat chronic alcoholism.</p>
                    </div>


                    <div className='alcohol1-right'>
                        <div className='alcohol1-images'>
                            <img src={ Section2IMG } alt="individual therapy" loading="lazy"/>

                            <div className='alcohol1-accent'>
                                <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                            </div>
                            <div className='alcohol1-accent2'>
                                <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>


{/* ALCOHOL 2 */}


                <div className='alcohol2-flex'>
                    <div className='alcohol2-left'>
                        <div className='alcohol2-images'>
                            <img src={ Alcohol2IMG } alt="individual therapy" loading="lazy"/>

                                <div className='alcohol2-accent'>
                                    <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                                </div>
                                <div className='alcohol2-accent2'>
                                    <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                                </div>
                        </div>
                    </div>

                    <div className='alcohol2-right'>
                        <h1>Life isn’t linear.
                            Neither is our treatment model.</h1>
                        <p>We tailor our approach to address your needs.</p>
                        <p>Our In-Home Addiction Treatment (IHAT) based model is supportive, nonjudgmental, and compassionate.</p>
                    </div>
                </div>


            </div>
    </>
  )
}

export default Alcohol1
