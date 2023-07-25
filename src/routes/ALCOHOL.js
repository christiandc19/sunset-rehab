import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ALCOHOL from '../components/Addiction-Alcohol/Alcohol'
import Alcohol1 from '../components/Addiction-Alcohol/Alcohol1'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import HowItWorks from '../components/howItWorks/HowItWorks'


const Alcohol = () => {
  return (
    <>
    <Navbar /> 
    <ALCOHOL />
    <Alcohol1 />
    <HowItWorks />
    <ContactForm />
    <ContactCards />
    <Footer />
     </>
  )
}

export default Alcohol