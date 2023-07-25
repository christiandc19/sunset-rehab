import React from 'react'
import './OpioidSection2.css'
import OpioidSection2IMG2 from '../../assets/OpioidSection2IMG2.jpg'
import Splatter from '../../assets/splatter-green.png'
import Splatter3 from '../../assets/paint-navy.png'
import { BsCheck } from 'react-icons/bs';


const OpioidSection2 = () => {
  return (
    <>
      <div className='opioidSection2 container'>
        <div className='opioidSection2-content'>

            <div className='opioidSection2-flex'>

                <div className='opioidSection2-left'>
                    <h1>Aware clients recover from a broad spectrum of addictions.</h1>
                    <div>
                      <p><span><BsCheck/></span>Heroin</p>
                      <p><span><BsCheck/></span>Fentanyl</p>
                      <p><span><BsCheck/></span>Methadone</p>
                      <p><span><BsCheck/></span>Oxycodone</p>
                      <p><span><BsCheck/></span>Inhalants</p>
                      <p><span><BsCheck/></span>Suboxone</p>
                    </div>
                </div>


                <div className='opioidSection2-right'>
                    <div className='opioidSection2-images'>
                      <img src={ OpioidSection2IMG2 } alt="individual therapy" loading="lazy"/>
                        <div className='opioidSection2-accent'>
                          <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                        </div>
                        <div className='opioidSection2-accent2'>
                          <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                        </div>
                      </div>
                    </div>
                </div>


        </div>

      </div>
    </>
  )
}

export default OpioidSection2
