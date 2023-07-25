import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FAQ1 from '../components/faq/Faq1'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import Faq from '../components/faq/Faq'

const FaqPage = () => {
  return (
    <>
    <Navbar /> 
    <Faq />
    <FAQ1 />
    <ContactForm />
    <ContactCards />
    <Footer />
     </>
  )
}

export default FaqPage