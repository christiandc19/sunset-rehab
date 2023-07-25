import React from 'react'
import './Section5.css'
import Talk from '../../assets/talk.png'

const Section5 = () => {
  return (
    <>
        <div className='section5 container'>
            <div className='section5-content'>
                <img src={ Talk } alt="Let's Talk Icon" loading="lazy"/>
            </div>
        </div>
    </>
  )
}

export default Section5
