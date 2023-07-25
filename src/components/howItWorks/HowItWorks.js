import React from 'react'
import './HowItWorks.css'
import Hiw1 from '../../assets/section1-card2.png'
import Hiw2 from '../../assets/hiw2.png'
import Hiw3 from '../../assets/hiw3.png'
import Hiw4 from '../../assets/hiw4.png'
import Hiw5 from '../../assets/hiw5.png'

import FIRST from '../../assets/step1.png'


import Arrow1 from '../../assets/arrow1.png'
import Arrow2 from '../../assets/arrow2.png'


const HowItWorks = () => {
  return (
    <>

        <div className='hiw container'>
            <div className='hiw-content'>

                    <div className='hiw-header'>
                            <div className='hiw-header-image'>
                                <img src={ Hiw1 } alt="How It Works" loading="lazy"/>
                            </div>
                            <h1>Here's how it works: </h1>
                    </div>



            <div className='hiw-first'>

                    <div className='hiw-item'>
                            <div className='first-image'>
                                <img src={ FIRST } alt="How It Works" loading="lazy"/>
                            </div>
                            <h1>First home visit</h1>
                            <p>At an agreed-upon time, you’ll meet your Care Coordinator and two Client Recovery Advisors, receive an overview of the IHAT program, and identify any family or friends that you’d like to include in your recovery journey.</p>
                    </div>


                    <div className='hiw-item'>
                            <div className='first-image second-image'>
                                <img src={ Hiw2 } alt="How It Works" loading="lazy"/>

                                <div className='arrow1'>
                                    <img src={ Arrow1 } alt="How It Works" loading="lazy"/>
                                </div>

                            </div>

                            <h1>Creating your custom treatment plan</h1>
                            <p>Your Care Coordinator—a Nurse/Social Worker who develops and maintains your IHAT treatment plan—will help customize your program, schedule your psychiatric evaluation, and identify any necessary outside providers (Primary Care Provider, Therapist, or Medical Specialists).</p>
                    </div>


                    <div className='hiw-item'>
                            <div className='first-image third-image'>
                                <img src={ Hiw3 } alt="How It Works" loading="lazy"/>

                                <div className='arrow2'>
                                    <img src={ Arrow2 } alt="How It Works" loading="lazy"/>
                                </div>

                            </div>
                            <h1>Goal-setting & community resources</h1>
                            <p>Your two Client Recovery Advisors (CRAs)—the peer support members of your IHAT team—will meet with you weekly, connecting you with community recovery resources and putting your Recovery Wellness Plan into place.</p>
                    </div>


                    <div className='hiw-item'>
                            <div className='first-image second-image'>
                                <img src={ Hiw4 } alt="How It Works" loading="lazy"/>

                                <div className='arrow1'>
                                    <img src={ Arrow1 } alt="How It Works" loading="lazy"/>
                                </div>

                            </div>

                            <h1>Building family supports</h1>
                            <p>A Family Education Facilitator will meet with your family to support them in your recovery, educate them about the recovery process, encourage self-care, and connect the family to recovery resources.</p>
                    </div>

                    <div className='hiw-item'>
                            <div className='first-image third-image'>
                                <img src={ Hiw5 } alt="How It Works" loading="lazy"/>
                                
                                <div className='arrow2'>
                                    <img src={ Arrow2 } alt="How It Works" loading="lazy"/>
                                </div>

                            </div>
                            <h1>Virtual talk therapy</h1>
                            <p>You’ll be assigned an Internal Psychotherapist (IPT), receiving up to 20 telehealth sessions. Your IPT will help you with issues like managing stress, improving self-esteem and self-compassion, enhancing communication skills, addressing negative thought patterns, and identifying and supporting your unique needs and goals.</p>
                    </div>



            </div>



            </div>
        </div>

    </>
  )
}

export default HowItWorks