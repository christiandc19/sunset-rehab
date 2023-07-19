import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Method from '../components/method/Method'
import MethodSection from '../components/method/MethodSection'

import Footer from '../components/footer/Footer'

const MethodPage = () => {
    return (
        <>
           <Navbar /> 
           <Method />
           <MethodSection/>
           <Footer />
        </>
    )
}

export default MethodPage
