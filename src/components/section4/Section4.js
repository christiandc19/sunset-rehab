import React from 'react'
import './Section4.css'
import Section4IMG from '../../assets/section4-img.jpg'
import Splatter from '../../assets/splatter-yellow.png'
import Splatter3 from '../../assets/splatter3.png'

const Section4 = () => {
  return (
    <>
      <div className='section4 container'>
        <div className='section4-content'>
            <div className='section4-flex'>

                <div className='section4-left'>
                <div className='section4-images'>
                    <img src={ Section4IMG } alt="individual therapy" loading="lazy"/>

                        <div className='section4-accent'>
                            <img src={ Splatter } alt="individual therapy" loading="lazy"/>
                        </div>
                        <div className='section4-accent2'>
                            <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                        </div>
                </div>
                </div>

                <div className='section4-right'>
                    <h1>Addiction treatment is a daily journey and we count success every day.</h1>
                    <p>Clients enrolled in Aware's IHAT program achieved an 81% completion rate at 90 days, compared to 32% in traditional programs.</p>
                    <p>At 90 days, more than 78% of participants were drug and alcohol-free based on toxicology screens.</p>
                    <p>During the 6-12 months after completion of Aware Recovery Care treatment, emergency department admissions fell 35% compared to the year before entering Aware.</p>
                </div>


            </div>

        </div>

      </div>
    </>
  )
}

export default Section4

