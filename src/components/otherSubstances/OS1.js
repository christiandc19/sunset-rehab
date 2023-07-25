import React from 'react'
import './OS1.css'
import OS1IMG1 from '../../assets/OS1IMG1.jpg'
import Splatter from '../../assets/splatter-purple.png'
import Splatter3 from '../../assets/paint-red.png'


const OS1 = () => {
  return (
    <>
      <div className='os1 container'>
        <div className='os1-content'>
            <div className='os1-flex'>
                <div className='os1-left'>
                    <h2>It’s never too late to get help.</h2>
                    <h1>Find your path to recovery with in-home treatment.</h1>
                    <p>Substance Use Disorder is misunderstood: It’s not a lack of willpower but a complex disease. It goes deep into our psyche and physiology, so when it comes to recovery, we can’t expect to go it alone. Rather, it takes a village of trained experts and allies.</p><br />
                    <p>Abuse of any substance, whether it’s prescription medications or illicit drugs, can eventually turn into an addiction. Generally, substances that are abused fall into three categories: stimulants, sedatives, and narcotics. But not all substances are created equal, and some drugs are more addictive than others.</p>
                </div>

                <div className='os1-right'>
                    <div className='os1-images'>
                    <img src={ OS1IMG1 } alt="individual therapy" loading="lazy"/>
                    <div className='os1-accent'>
                        <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='os1-accent2'>
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

export default OS1
