import React, { useRef } from "react";
import Pin from "../../assets/pin.png";
import Call from "../../assets/Call.png";
import Email from "../../assets/email.png";



import './Contact2.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



                // Popup message after send button is clicked
                const feedbackEl = document.querySelector(".feedback");
                feedbackEl.setAttribute("class", "feedback");
                setTimeout(function() {
                feedbackEl.setAttribute("class", "feedback hidden");
                }, 4000);






        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

        
            <div className="contact-form2-bg">
              
            <div className="contactform2">
                <div className="contact2-header contact2-container">
                    <h1>DO YOU NEED URGENT HELP?</h1>
                    <p>Our Support team is available to asssist you.</p>
                </div>



              <div class="contact2-container">
                  <div class="contact-form-content container">

                      <div class="left-side">

                      <iframe title="map" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=7235%20Santa%20Monica%20Blvd,%20Hollywood,%20CA%2090046+(Sunset%20Rehab)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>

                      </div>


                      <div class="right-side">
                          <div class="topic-text">Send us a message</div> <br/>
                              <p className="topic-text-p">We'll keep your contact information strictly confidential.</p>
                                <form ref={form} onSubmit={sendEmail}>
                                  <div class="input-box">
                                  <input type="text" name='name' placeholder='Your Name' required />
                                  </div>
                                  <div class="input-box">
                                  <input type="email" name='email' placeholder='Your Email' required />
                                  </div>
                                  <div class="input-box">
                                  <input type="tel" name='telephone' placeholder='Your Phone' required />
                                  </div>
                                  <div class="input-box">
                                  <input type="text" name='subject' placeholder='Subject' required />
                                  </div>
                                  <div class="input-box message-box">
                                  <textarea name="message" rows="4" placeholder="How can we help?" required ></textarea>
                                  </div>
                                  <input className="contact-btn" type="submit" value="Submit" />
                                  <div className="textarea2 feedback hidden">
                                  <textarea name="message2" cols="30" rows="3" required>Message Sent to Sunset Rehab!</textarea>
                                  </div>

                                </form>
                          </div>
                      </div>
              </div>

                      <div className="contact-cards">

                          <div class="contact-card address details">
                            <div className="card-icon">
                              <img src={Pin} alt="Pin Icon" loading="lazy"/>
                            </div>
                            <h1>Address</h1>
                            <div class="text-one">7235 Santa Monica Blvd,</div>
                            <div class="text-two">West Hollywood, CA 90046</div>
                          </div>

                          <div class="contact-card phone details">
                            <div className="card-icon">
                              <img src={Call} alt="Pin Icon" loading="lazy"/>
                            </div>
                            <h1>Phone</h1>
                            <div class="text-one"><a href="tel:3233304151"> +1 (323) 330-4151</a></div>
                          </div>

                          <div class="contact-card email details">
                            <div className="card-icon">
                              <img src={Email} alt="Pin Icon" loading="lazy"/>
                            </div>
                            <h1>Email</h1>
                            <div class="text-one">info@sunsetrehab.biz</div>
                          </div>

                      </div>

                      




          </div>
        </div>
        </>
    )
}

export default ContactForm