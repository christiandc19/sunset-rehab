import React from 'react'
import './Mission1.css'
import Rehabilitation from '../../assets/rehabilitation.png'
import Community from '../../assets/community.png'
import Support from '../../assets/support.png'
import Assitance from '../../assets/assist.png'


const Mission1 = () => {
  return (
    <>
        <div className='mission1'>
                <div className='mission1-content'>
                        <div className='mission1-header'>
                            <h1>Our Mission</h1>
                            <h2>Creating a better future to help vulnerable groups rebuild, repair, and progress in their lives.</h2>
                        </div>


<div className='mission1-flex'>


                            <div className='mission1-flexItem'>
                                <div className='mission1-left'>
                                        <img src={ Rehabilitation } alt="individual therapy" loading="lazy"/>
                                </div>

                                <div className='mission1-right'>
                                    <h1>Rehabilitation</h1>
                                    <p>Rehabilitate those with a desire to move forward.</p>
                                </div>
                            </div>


                            <div className='mission1-flexItem'>
                                <div className='mission1-left'>
                                        <img src={ Community } alt="individual therapy" loading="lazy"/>
                                </div>

                                <div className='mission1-right'>
                                    <h1>Community</h1>
                                    <p>Reintroduce formerly incarcerated back into the  communmity.</p>
                                </div>
                            </div>


                            <div className='mission1-flexItem'>
                                <div className='mission1-left'>
                                        <img src={ Support } alt="individual therapy" loading="lazy"/>
                                </div>

                                <div className='mission1-right'>
                                    <h1>Support</h1>
                                    <p>Support veterans adjusting to civilian life.</p>
                                </div>
                            </div>


                            <div className='mission1-flexItem'>
                                <div className='mission1-left'>
                                        <img src={ Assitance } alt="individual therapy" loading="lazy"/>
                                </div>

                                <div className='mission1-right'>
                                    <h1>Assistance</h1>
                                    <p>Assist the homeless, domestic abuse victims, and other vulnerable groups.</p>
                                </div>
                            </div>


                </div>

                </div>


        </div>  
    </>
    
  )
}

export default Mission1