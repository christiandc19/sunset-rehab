import React from 'react'
import Contact from '../components/contact/Contact'
import Contact2 from '../components/contact/Contact2'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Contact />
            <Contact2 />
            <Footer />   
        </>
    )
}

export default ContactPage
