import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MH from '../components/MH/MH'
import Contact2 from '../components/contact/Contact2'
import MenusMH from '../components/menusMH/MenusMH';



const MHealth = () => {
  return (
    <>
    <Navbar /> 
    <MH />
    <MenusMH />
    <Contact2 />
    <Footer />
     </>
  )
}

export default MHealth