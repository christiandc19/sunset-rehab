import React from 'react'
import Fade from 'react-reveal/Fade';
import './IopSection.css'


import Menus from '../menus/Menus';

const IopSection = () => {
  return (
    <>
<div className='iop-wrap'>

<Fade right>
        <div className="iop-wrap-left">
        <h1 className='header'>WHAT IS AN IOP?</h1>

        </div>
    </Fade>


    <Fade left>
    <div className="iop-wrap-right">
        <br/>
        <p>Intensive outpatient programs (IOPs) involve 3 to 4 hours of treatment for up to 5 days per week. IOPs are designed to provide more structure and support than standard outpatient programs while still allowing patients the time and flexibility to tend to outside responsibilities. The length of an IOP can be anywhere from a few weeks to a year—90 days is usually the recommended minimum.<br /><br />
        It is common for those struggling with addiction to not respond well to residential treatment options. An intensive outpatient program may be the best alternative, as it can offer a high level of care and more accountability (removing patients from access to drugs/alcohol, enabling peers, etc.). 
        <br /> <br />
        If the patient has a strong, supportive family and group of friends/peers, they will be able to undergo care with us, but also be able to live at home.</p>
        <br />
    </div>
    </Fade>

</div>
    



<div className='iop-wrap2'>
    <div className='iop-content container'>
    <h1>WHAT TO EXPECT THROUGHOUT THE PROGRAM</h1><br /> <br />
<p>Considered our mid-tier intensive care, the program consists of 3 hours of clinical services 3-5 days per week. Patients also participate in group therapy sessions (2 per day) with any additional sessions available if deemed necessary. We also offer several other therapeutic options, such as:  
<br /> <br />
<ul>
    <li>Art therapy</li><br />
    <li>Hypnotherapy</li><br />
    <li>Family Theraphy</li><br />
    <li>Cognitive-behavioral therapy</li><br />
</ul>

</p>
</div>
</div>


<Menus />

    </>
  )
}

export default IopSection




