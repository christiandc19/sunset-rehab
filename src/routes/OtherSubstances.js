import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SA from '../components/otherSubstances/OtherSubstances'
import OS1 from '../components/otherSubstances/OS1'
import OS2 from '../components/otherSubstances/OS2'
import Section5 from '../components/section5/Section5'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'


const OtherSubstances = () => {
  return (
    <>
    <Navbar /> 
    <SA />
    <OS1 />
    <OS2 />
    <Section5 />
    <ContactForm />
    <ContactCards />
    <Footer />
     </>
  )
}

export default OtherSubstances