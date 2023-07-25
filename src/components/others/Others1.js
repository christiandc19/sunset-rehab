import React from 'react'
import './Others1.css'
import { AiOutlineCheck } from 'react-icons/ai';

import Others1 from '../../assets/others1.png'

const StorySection1 = () => {
    return (
        <>
                    <div className='others1'>
                        <div className='others1-flex container'>
                            <div className='others1-left'>
                                <h1>Other Resources</h1>
                                <p>Explore other services to create a well-balanced plan for re-entry.</p>
                                <ul>
                                    <li>
                                        <p> <span><AiOutlineCheck /> </span>Substance Abuse Programs.</p>
                                    </li>
                                    <li>
                                        <p><span><AiOutlineCheck /> </span>Mental Health Programs.</p>
                                    </li>
                                    <li>
                                        <p><span><AiOutlineCheck /> </span>Medical Assistance.</p>
                                    </li>
                                    <li>
                                        <p><span><AiOutlineCheck /> </span>EBT/GR Assistance</p>
                                    </li>

                                </ul>

                            </div>


                    <div className='others1-right'>
                        <div className='others1-images'>
                            <img src={ Others1 } alt="individual therapy" loading="lazy"/>
                        </div>
                    </div>
                </div>

        </div>    

        </>
    )
}

export default StorySection1
