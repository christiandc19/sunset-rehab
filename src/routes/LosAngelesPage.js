import React from 'react'
import Navbar from '../components/navbar/Navbar'
import LosAngeles from '../components/location/LosAngeles'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm';
import ContactCards from '../components/contact/ContactCards'
import LosAngeles1 from '../components/location/LosAngeles1';
import Metric from '../components/metric/Metric';




const LosAngelesPage = () => {
    return (
        <>
           <Navbar /> 
           <LosAngeles />
           <LosAngeles1 />
           <Metric />
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default LosAngelesPage
