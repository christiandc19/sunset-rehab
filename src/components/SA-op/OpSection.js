import React from 'react'
import Fade from 'react-reveal/Fade';
import './OpSection.css'


import MenusSA from '../menusSA/MenusSA';

const OpSection = () => {
  return (
    <>
<div className='op-wrap'>

<Fade right>
        <div className="op-wrap-left">
        <h1 className='header'>WHAT IS OUTPATIENT PROGRAM TREATMENT FOR SUBSTANCE ABUSE?</h1>

        </div>
    </Fade>


    <Fade left>
    <div className="op-wrap-right">
        <br/>
        <p>Outpatient treatment refers to non-residential treatment, in which the patient spends structured time in treatment during the day or evening and returns home each night. People who choose to participate in outpatient mental health treatment do so for a variety of reasons. They may have small children at home or businesses to run and cannot take weeks or months out of their lives to live in a residential facility. Others may be transitioning out of an inpatient program but still require the support and structure that outpatient treatment provides. Outpatient treatment programs are beneficial for those with mild to moderate symptoms who have a strong support system at home.  
        <br /> <br />
        The outpatient program is designed to be a maintenance phase, where clients can attend this specific level of care for however long they dictate. We aim to teach you the tools you’ll need in order to achieve long-term recovery from addiction.</p>
        <br />
    </div>
    </Fade>

</div>
    



<div className='op-wrap2'>
    <div className='op-content container'>
    <h1>WHAT TO EXPECT THROUGHOUT THE PROGRAM</h1><br /> <br />
<p>Considered the final step in the treatment plan, the outpatient program has patients attend three group therapy sessions per week with one individual session as well. Other therapeutic options that are involved:  
<br /> <br />
<ul>
    <li>Art therapy</li><br />
    <li>Hypnotherapy</li><br />
    <li>Family Theraphy</li><br />
    <li>Cognitive-behavioral therapy</li><br />
</ul>
Near conclusion, patients and their case manager work together to plan a proper discharge. For most cases, it is advised that the outpatient program should not be the first step in one’s journey to recovery. For other options, please visit our full list of treatment options.
</p>
</div>
</div>

<MenusSA />
    </>
  )
}

export default OpSection




