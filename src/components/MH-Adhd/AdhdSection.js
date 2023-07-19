import React from 'react'
import ContactForm from '../contact/ContactForm'

import { FaRegStar } from 'react-icons/fa';


import './AdhdSection.css'

const AdhdSection = () => {
  return (
<>
<div className="adhd-section-header container">
                <h1>ADHD</h1><br/>
                <p>Attention-deficit/hyperactivity disorder (commonly known as ADHD) is a chronic condition characterized by a lack of attention and focus, and increased impulsive behavior. It often begins early in life and can continue into adulthood. ADHD in children can lead to developmental issues and learning complications. 
                <br/> Although the behaviors of one with ADHD may not seem dangerous, there can be very real consequences to a state of mind like this, and ADHD can lead to problems with relationships with friends and family or performance at work or school. <br/> <br/>
                People with ADHD display a persistent pattern of impulsive hyperactivity and/or an inability to focus on any one thing for too long. <br/><br/>The causes of ADHD still aren’t clear, but current research suggests that genetics play a significant role in ADHD cases. There are other possible causes for hyperactivity and inattention wholly unrelated to ADHD:<br/><br/>
                <ul>
                <li><FaRegStar className='star'/> Brain injuries </li><br/>
                <li><FaRegStar className='star'/> Premature birth</li><br/>
                <li><FaRegStar className='star'/> Fatigue</li><br/>
                <li><FaRegStar className='star'/> Exposure to harsh chemicals during pregnancy.</li>
                </ul>

                <div className="adhd-section-header container">
                <h1>INATTENTION</h1><br/>
                <p>Inattention can take many forms. Generally, inattention can be characterized by difficulty in following instructions, making careless mistakes, missing important details, and not appearing to listen to others. <br/> <br />
                For these reasons, those with ADHD may find it difficult to focus at school and work, leading to other related issues like maintaining good grades and meeting deadlines.<br/> <br />
                With ADHD, you may have trouble with organizing and executing tasks and priorities, lose objects at a heightened rate, and become easily distracted by external stimuli or by your thoughts.
                </p>
</div>

                </p>

</div>

<div className="adhd-section-header container">
                <h1>INATTENTION</h1><br/>
                <p>Inattention can take many forms. Generally, inattention can be characterized by difficulty in following instructions, making careless mistakes, missing important details, and not appearing to listen to others.  <br/> <br />
                For these reasons, those with ADHD may find it difficult to focus at school and work, leading to other related issues like maintaining good grades and meeting deadlines.<br/> <br />
                With ADHD, you may have trouble with organizing and executing tasks and priorities, lose objects at a heightened rate, and become easily distracted by external stimuli or by your thoughts. 
                </p>
</div>

<div className="adhd-section-header container">
                <h1>HYPERACTIVITY-IMPULSIVITY</h1><br/>
                <p>Hyperactivity is the physical manifestation of the distraction and inability to focus related to ‘inattention’ relative to an ADHD diagnosis. 
                <br/> <br />
                FIt will often manifest as actions like constant interrupting, running around, an inability to engage in activities quietly, talking excessively, and constant fidgeting.
                </p>
</div>

<div className="adhd-section-header container">
                <h1>SIGNS AND SYMPTOMS OF ADHD</h1><br/>
                <p>There are many other issues with similar symptoms of ADHD. Sleep disorders, depression, anxiety, and even some learning disabilities can look very similar to ADHD and even have similar symptoms. A few common symptoms that could signify ADHD: 
                <br/> <br />
                <h5>MENTAL</h5>
                <p>
                <ul><br/>
                <li><FaRegStar className='star'/> Forgetfulness.</li>
                <li><FaRegStar className='star'/> Inability to focus.</li>
                <li><FaRegStar className='star'/> Distortion of reality.</li>
                <li><FaRegStar className='star'/> Psychologic distress.</li>
                <li><FaRegStar className='star'/> Flashbacks of the traumatic event.</li>
                <li><FaRegStar className='star'/> Avoiding certain related places, people, or memories.</li>
                </ul><br/>
                
                <h5>PHYSICAL</h5>
              
                <ul><br/>
                <li><FaRegStar className='star'/> Chest pain.</li>
                <li><FaRegStar className='star'/> Constant daydreaming.</li>
                <li><FaRegStar className='star'/> Poor decision-making.</li>
                <li><FaRegStar className='star'/> Inability to focus on/complete tasks.</li>
                </ul><br/>

                <h5>PERSONAL</h5>
              
                <ul><br/>
                <li><FaRegStar className='star'/> Impatience</li>
                <li><FaRegStar className='star'/> Disagreeable towards others</li>
                <li><FaRegStar className='star'/> Unable to resist temptation</li>
                <li><FaRegStar className='star'/> Losing & misplacing things</li>
                </ul>
                </p>

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

export default AdhdSection
