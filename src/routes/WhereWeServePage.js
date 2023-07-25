import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import WWS from '../components/whereWeServe/WhereWeServe'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'


const OtherSubstances = () => {
  return (
    <>
    <Navbar /> 
    <WWS />
    <ContactForm />
    <ContactCards />
    <Footer />
     </>
  )
}

export default OtherSubstances