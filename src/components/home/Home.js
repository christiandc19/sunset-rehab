import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Section2 from '../section2/Section2';
import Contact2 from '../contact/Contact2';
import MissionHome from '../mission/MissionHome';
import Section1 from '../section1/Section1';

const home = () => {
  return (
    <>
    <Section2 />
    <Section1 />
    <InsuranceSection />
    <MissionHome />
    <Contact2 />
    </>
  )
}

export default home
