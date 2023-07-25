import React from 'react'
import Section1 from '../section1/Section1'
// import Section2 from '../section2/Section2'
// import Section3 from '../section3/Section3'
// import Section4 from '../section4/Section4'
// import Section5 from '../section5/Section5'
import ContactForm from '../contact/ContactForm';
import ContactCards from '../contact/ContactCards'

const home = () => {
  return (
    <>
    <Section1 />
    {/* <Section2 />
    <Section3 />
    <Section4 />
    <Section5 /> */}
    <ContactForm />
    <ContactCards />
    </>
  )
}

export default home
