import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Mission from '../components/mission/Mission'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm';
import Mission1 from '../components/mission/Mission1';
import ContactCards from '../components/contact/ContactCards'




const MissionPage = () => {
    return (
        <>
           <Navbar /> 
           <Mission />
           <Mission1 />
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default MissionPage
