import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import Employment from '../components/employment/Employment'
import Employment1 from '../components/employment/Employment1'
import ContactCards from '../components/contact/ContactCards'

const EmploymentPage = () => {
  return (
    <>
          <Navbar /> 
          <Employment />
          <Employment1 />
          <ContactForm />
          <ContactCards />
          <Footer />

    </>
  )
}

export default EmploymentPage
