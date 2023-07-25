import React from 'react'
import './Section3.css'

const Section3 = () => {
  return (
    <>
        <div className='section3 container'>
            <div className='section3-content'>
                <div className='section3-header'>
                    <h1>We’re proud to have helped so many people.</h1>
                </div>

                <div className='section3-flex'>
                    
                    <div className='section3-flexItem'>
                        <div className="rate">
                            <h4>95%</h4>
                            <h3>family re-engagement</h3>
                            <p>95% of our clients report improvements in their relationships with family members.</p>
                        </div>
                    </div>

                    <div className='section3-flexItem'>
                        <div className="rate">
                            <h4>60%</h4>
                            <h3>Sobriety Success</h3>
                            <p>60% of our clients are abstinent from drugs and alcohol 6 months.</p>
                        </div>
                    </div>

                    <div className='section3-flexItem'>
                        <div className="rate">
                            <h4>6X</h4>
                            <h3>more effective</h3>
                            <p>6Aware at-home treatment is 6 times more effective than traditional addiction treatment models</p>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    </>
  )
}

export default Section3
