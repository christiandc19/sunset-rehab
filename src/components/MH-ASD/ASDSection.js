import React from 'react'
import ContactForm from '../contact/ContactForm'

import './ASDSection.css'
import { FaRegStar } from 'react-icons/fa';

const ASDSection = () => {
  return (
<>
<div className="ASDSection-header container">
                <h1>ACUTE STRESS DISORDER</h1><br/>
                <p>Acute Stress Disorder (ASD) is your brain’s reaction to a traumatic event. Trauma can be direct or indirect. That is, the trauma that causes disorders like ASD can either be a direct, first-hand experience (ex. violence, harm, and sexual assault), or through indirect involvement in a traumatic event, for example, learning about the abrupt passing of a loved one. Acute Stress Disorder affects not just the individual, but also those nearest and dearest to them. If left untreated for an extended time, ASD can cause further development of other disorders. 
                </p>
</div>

<div className="ASDSection-header container">
                <h1>WHAT IS ASD?</h1><br/>
                <p>Trauma can be direct or indirect. That is, the trauma that causes ASD can either be a direct, first-hand experience (ex. violence, harm, and sexual assault), or through experiencing a traumatic event indirectly, like discovering the abrupt and unexpected passing of a loved one. <br/> <br />
                Acute Stress Disorder affects not just you, the one coping with the trauma, but also those nearest and dearest to you. If left untreated for an extended amount of time, ASD can cause the development of other disorders and complications
                </p>
</div>


<div className="ASDSection-header container">
                <h1>SIGNS AND SYMPTOMS OF ASD</h1><br/>                
                <h5>MENTAL</h5>
                <p>
                <ul><br/>
                <li><FaRegStar className='star'/> Negative mood swings.</li>
                <li><FaRegStar className='star'/> Inability to focus.</li>
                <li><FaRegStar className='star'/> Distortion of reality.</li>
                <li><FaRegStar className='star'/> Psychologic distress.</li>
                <li><FaRegStar className='star'/> Flashbacks of the traumatic event.</li>
                <li><FaRegStar className='star'/> Avoiding certain related places, people, or memories.</li>
                </ul><br/>
                
                <h5>PHYSICAL</h5>
              
                <ul><br/>
                <li><FaRegStar className='star'/> Chest pain.</li>
                <li><FaRegStar className='star'/> Headaches.</li>
                <li><FaRegStar className='star'/> Trouble sleeping.</li>
                <li><FaRegStar className='star'/> Difficulty breathing.</li>
                <li><FaRegStar className='star'/> Heart palpitation.</li>
                </ul><br/>

                <h5>BEHAVIOR</h5>
              
                <ul><br/>
                <li><FaRegStar className='star'/> Dissociative symptoms (Numbness, Isolation, Disconnection from others)</li>
                <li><FaRegStar className='star'/> Exaggerated response to external stimuli related to the event.</li>
                </ul>
                </p>
</div>

<div className="ASDSection-header container">
                <h1>DETECTING ACUTE STRESS DISORDER</h1><br/>
                <p>Diagnosing ASD typically comes after displaying at least 9 of these symptoms consistently for 3 days and up to 1 month after the traumatic event: <br/> <br/>
                <h5>RELATIONSHIP TO SELF</h5>
                <ul><br/>
                <li><FaRegStar className='star'/> Trouble concentrating.</li>
                <li><FaRegStar className='star'/> Avoiding distressing memories.</li>
                <li><FaRegStar className='star'/> Memory loss of the traumatic event.</li>
                <li><FaRegStar className='star'/> Avoiding external reminders of the traumatic event.</li>
                <li><FaRegStar className='star'/> Recurring, involuntary memories of the traumatic event.</li>
                <li><FaRegStar className='star'/> Consistent inability to experience positive emotions.</li>
                </ul><br/>

                <h5>RELATIONSHIP TO OTHERS</h5>
                <ul><br/>
                <li><FaRegStar className='star'/> Hypervigilance.</li>
                <li><FaRegStar className='star'/> Startled responses.</li>
                <li><FaRegStar className='star'/> Angry outbursts/Lashing out.</li>
                </ul><br/>

                <h5>RELATIONSHIP TO YOUR SORROUNDINGS</h5>
                <ul><br/>
                <li><FaRegStar className='star'/> Altered perception of reality.</li>
                <li><FaRegStar className='star'/> Recurring dreams of the event.</li>
                <li><FaRegStar className='star'/> Exaggerated responses to loud stimuli.</li>
                <li><FaRegStar className='star'/> Attempting to avoid any reminders of the event.</li>
                <li><FaRegStar className='star'/> Psychological or physical stress when reminded of the event.</li>

                </ul><br/>

                </p>



</div>


<div className="contact2-header contact2-container">
            <h1>DO YOU NEED URGENT HELP?</h1>
            <p>Our Addiction and Recovery Support team is available 24 hours a day 7 Days a week.</p>
        </div>
<ContactForm />

    </>
  )
}

export default ASDSection
