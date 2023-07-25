import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Others from '../components/others/Others'
import Others1 from '../components/others/Others1'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'


const OthersPage = () => {
    return (
        <>
           <Navbar /> 
           <Others />
           <Others1 />
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default OthersPage
