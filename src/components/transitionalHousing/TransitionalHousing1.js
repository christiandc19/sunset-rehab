import React from 'react'
import './TransitionalHousing1.css'
import EmploymentIMG1 from '../../assets/housing1.png'

import { AiOutlineCheck } from 'react-icons/ai';

const TransitionalHousing1 = () => {
  return (
    <>
      <div className='housing1'>
        <div className='housing1-content'>

{/* FLEX ITEMS */}

            <div className='housing1-flex container'>
                <div className='housing1-icon'>
                    <img src={ EmploymentIMG1 } alt="Employment Program" loading="lazy"/>
                </div>

                <div className='housing1-caption'>
                    <div>
                        <h1>Better Transitional Housing</h1>
                        <p>Make yourself at home. Stay as long as you need. We provide all the basics while you rebuild your life.</p>
                        <ul>
                            <li>
                                <p> <span><AiOutlineCheck /> </span>Food and basic necessitites included.</p>
                            </li>
                            <li>
                                <p><span><AiOutlineCheck /> </span>Pay rent only after you get paid.</p>
                            </li>
                            <li>
                                <p><span><AiOutlineCheck /> </span>Transportation provided to & from work.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
      </div>
    </>
  )
}

export default TransitionalHousing1
