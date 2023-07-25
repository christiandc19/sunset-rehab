import React from 'react'
import './ContactCards.css'
import Call from '../../assets/call_us.png'
import Email from '../../assets/email.png'
import Visit from '../../assets/visit_us.png'


const ContactCards = () => {
  return (
    <>
    <div className='contact-cards'>
        <div className='contact-cards-contents'>

                <div className='contact-card'>
                    <div className='contact-card-icon'>
                        <img src={ Call } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='contact-card-info'>
                        <h1>CALL US</h1>
                        <p>+1 (323) 840-1234</p>
                    </div>
                </div>

                <div className='contact-card'>
                    <div className='contact-card-icon'>
                        <img src={ Email } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='contact-card-info'>
                        <h1>EMAIL</h1>
                        <p>info@transitionsfortomorrow.org</p>
                    </div>
                </div>


                <div className='contact-card'>
                    <div className='contact-card-icon'>
                        <img src={ Visit } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='contact-card-info'>
                        <h1>CONNECT</h1>
                        <p>11800 Vine St., Suite 210, Los Angeles, CA 90028</p>
                    </div>
                </div>



        </div>

    </div>
    </>
  )
}

export default ContactCards