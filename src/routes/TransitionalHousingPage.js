import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import TransitionalHousing from '../components/transitionalHousing/TransitionalHousing'
import TransitionalHousing1 from '../components/transitionalHousing/TransitionalHousing1'
import ContactCards from '../components/contact/ContactCards'

const TransitionalHousingPage = () => {
  return (
    <>
          <Navbar /> 
          <TransitionalHousing />
          <TransitionalHousing1 />
          <ContactForm />
          <ContactCards />
          <Footer />

    </>
  )
}

export default TransitionalHousingPage
