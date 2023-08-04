import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PHP from '../components/php/Php'
import PhpSection from '../components/php/PhpSection'
import Section1 from '../components/section1/Section1';
import Menu from '../components/menu/Menu';
import Contact2 from '../components/contact/Contact2';


const Php = () => {
  return (
    <>
    <Navbar /> 
    <PHP />
    <PhpSection />
    <Menu />
    <Section1 />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Php