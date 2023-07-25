import React from 'react'
import './Mission2.css'
import Section2IMG from '../../assets/alcohol1IMG.jpg'
import Splatter from '../../assets/splatter-purple.png'
import Splatter3 from '../../assets/splatter3.png'


const InsuranceSection2 = () => {
  return (
    <>
        <div className='insuranceSection2 container'>
        <div className='insuranceSection2-flex'>
                    <div className='insuranceSection2-left'>
                        <h1>You’re worth it.</h1>
                        <p>No matter your situation, Aware may be able to help. Connect with one of our care specialists to talk through your needs or help someone you care about understand our treatment options.</p>
                    </div>


                    <div className='insuranceSection2-right'>
                        <div className='insuranceSection2-images'>
                            <img src={ Section2IMG } alt="individual therapy" loading="lazy"/>

                            <div className='insuranceSection2-accent'>
                                <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                            </div>
                            <div className='insuranceSection2-accent2'>
                                <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>

        </div>    
    </>
  )
}

export default InsuranceSection2