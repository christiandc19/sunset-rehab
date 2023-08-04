import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MHOP from '../components/op/Op'
import MHOpSection from '../components/op/OpSection'
import Section1 from '../components/section1/Section1';
import Menu from '../components/menu/Menu';
import Contact2 from '../components/contact/Contact2';



const Op = () => {
  return (
    <>
    <Navbar /> 
    <MHOP />
    <MHOpSection />
    <Menu />
    <Section1 />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Op