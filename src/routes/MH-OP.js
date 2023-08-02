import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MHOP from '../components/op/Op'
import MHOpSection from '../components/op/OpSection'


const Op = () => {
  return (
    <>
    <Navbar /> 
    <MHOP />
    <MHOpSection />
    <Footer />
     </>
  )
}

export default Op