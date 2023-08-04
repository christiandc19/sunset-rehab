import React from 'react'
import Contact2 from '../contact/Contact2'
import { FaRegStar } from 'react-icons/fa';

import './BipolarDisorderSection.css'

const BipolarDisorder = () => {
  return (
<>
<div className="BipolarDisorder-section-header container">
                <h1>BIPOLAR DISORDER</h1><br/>
                <p>Also known as manic depression, bipolar disorder is a mental health condition in which one suffers extreme mood swings (mania/hypomania to lows/depression). Episodes of mania may create feelings of euphoria, energy, or irritability.<br/> <br/>
                Episodes of bipolar depression can include symptoms of:<br/><br/>
                <ul>
                <li><FaRegStar className='star'/> Sadness</li><br/>
                <li><FaRegStar className='star'/> Hopelessness</li><br/>
                <li><FaRegStar className='star'/> Loss of pleasure/interest in activities</li><br/>
                <li><FaRegStar className='star'/> Mood swings</li><br/>
                </ul>
                Although these mood swings aren’t frequent, they can cause changes to energy levels, sleep, judgment, decision-making, and overall behavior.<br/><br/>
                <ul>
                <li><FaRegStar className='star'/> Stress</li><br/>
                <li><FaRegStar className='star'/> Drug use</li><br/>
                <li><FaRegStar className='star'/> Alcohol abuse</li><br/>
                <li><FaRegStar className='star'/> Irregular sleep patterns</li><br/>
                </ul>
                </p>
</div>
<Contact2 />

    </>
  )
}

export default BipolarDisorder
