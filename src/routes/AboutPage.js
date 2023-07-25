import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import TEAM from '../components/about/About'
import TEAMSECTION from '../components/about/About1'


const About = () => {
  return (
    <>
    <Navbar /> 
    <TEAM />
    <TEAMSECTION />
    <Footer />
     </>
  )
}

export default About