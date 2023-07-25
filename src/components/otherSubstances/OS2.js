import React from 'react'
import './OS2.css'
import OS2IMG1 from '../../assets/OS2IMG1.jpg'
import Splatter from '../../assets/splatter-green.png'
import Splatter3 from '../../assets/paint-navy.png'
import { BsCheck } from 'react-icons/bs';


const OS2 = () => {
  return (
    <>
      <div className='os2 container'>
        <div className='os2-content'>
            <div className='os2-flex'>
                <div className='os2-left'>
                    <h1>Aware clients recover from a broad spectrum of addictions.</h1>

                <div className='os2-flex'>
                    <div>
                    <p><span><BsCheck/></span>Amphetamine</p>
                    <p><span><BsCheck/></span>Benzodiazepines</p>
                    <p><span><BsCheck/></span>Cocaine</p>
                    <p><span><BsCheck/></span>Hallucinogens</p>
                    <p><span><BsCheck/></span>Inhalants</p>
                    <p><span><BsCheck/></span>Ketamine</p>
                    </div>

                    <div>
                    <p><span><BsCheck/></span>Marijuana</p>
                    <p><span><BsCheck/></span>MDMA</p>
                    <p><span><BsCheck/></span>Meth</p>
                    <p><span><BsCheck/></span>PCP</p>
                    <p><span><BsCheck/></span>Research Chemicals</p>
                    </div>
                </div>


            </div>


                <div className='os2-right'>
                    <div className='os2-images'>
                    <img src={ OS2IMG1 } alt="individual therapy" loading="lazy"/>
                    <div className='os2-accent'>
                        <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='os2-accent2'>
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

export default OS2
