import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>

<div className='contact-hero'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>Got Questions? <br/>We’d love to hear from you!</h1>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact