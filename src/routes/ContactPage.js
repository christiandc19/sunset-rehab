import React from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ContactCards from '../components/contact/ContactCards'

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Contact />
            <ContactCards />
            <Footer />   
        </>
    )
}

export default ContactPage
