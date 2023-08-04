import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import AboutSection from "../components/about/AboutSection";
import Contact2 from "../components/contact/Contact2";


const AboutPage = () => {
    return (
        <>
           <Navbar /> 
           <About />
           <AboutSection />
           <Contact2 />
           <Footer />
        </>
    )
}

export default AboutPage