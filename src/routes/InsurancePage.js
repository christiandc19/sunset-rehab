import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Insurance from '../components/insurance/Insurance'
import Footer from '../components/footer/Footer'
import InsuranceSection from '../components/insurance/InsuranceSection';
import Contact2 from '../components/contact/Contact2';




const InsurancePage = () => {
    return (
        <>
           <Navbar /> 
           <Insurance />
           <InsuranceSection />
           <Contact2 />
           <Footer />
        </>
    )
}

export default InsurancePage
