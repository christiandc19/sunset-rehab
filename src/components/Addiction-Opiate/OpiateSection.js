import React from 'react'
import Contact2 from '../contact/Contact2'
import { FaRegStar } from 'react-icons/fa';

import './OpiateSection.css'

const OpiateSection = () => {
  return (
<>
<div className="opiate-section-header container">
                <h1>OPIATE</h1><br/>
                <p>Easily addictive and often associated with synthetic opioids, opiates can be specifically categorized as natural opioids, including: 
                <br/><br/> 
                <ul>
                <li><FaRegStar className='star'/> Opium</li><br/>
                <li><FaRegStar className='star'/> Heroin</li><br/>
                <li><FaRegStar className='star'/> Codeine</li><br/>
                <li><FaRegStar className='star'/> Drug cravings</li><br/>
                <li><FaRegStar className='star'/> Morphine</li>
                </ul><br/> 
                Opiates’ original, medically intended use was for treating pain, however they are highly misused and addictive. Patients that are prescribed or receive opiates for medical remedies can quickly find themselves on a fast path to addiction.<br/><br/>
                Like other addictive substances, addiction is often a vicious cycle, where the user will go to extreme measures to obtain opiates and use them in higher amounts over time to achieve the same feelings or high.
                </p>
</div>
<Contact2 />

    </>
  )
}

export default OpiateSection
