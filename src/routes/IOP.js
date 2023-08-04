import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import IOP from '../components/iop/Iop'
import IopSection from '../components/iop/IopSection'
import Section1 from '../components/section1/Section1';
import Menu from '../components/menu/Menu';
import Contact2 from '../components/contact/Contact2';



const Iop = () => {
  return (
    <>
    <Navbar /> 
    <IOP />
    <IopSection />
    <Menu />
    <Section1 />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Iop