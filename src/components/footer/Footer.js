import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo-bl.png'
import './FooterStyles.css'

import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<> 
        <div className='footer'>

            <div className="footer-content container">

                <div className="top">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'>
                    <div className="logo-footer">
                        <img src={logo} width="150px" height="60px" alt="Palm Springs Rehab Logo" loading="lazy"/>
                    </div>
                    </Link>
                        </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>
                </div>


                <div className="col-container">

                    <div className="col">
                        <h3>Company</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about-us'><p>About Us</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/our-mission'><p>Our Mission</p></Link>
                        </LinkRoll>

                    </div>


                    <div className="col">
                        <h3>Navigation</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/employment'><p>Employment Assistance</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/transitional-housing'><p>Transitional Housing</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/other-resources '><p>Other Resources</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="col">
                        <h3>Contact Us</h3>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/los-angeles'><p><a href="tel:3238401234">  (323) 5840-1234</a></p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>1800 Vine St., Suite 210, <br/>Los Angeles, CA 90028</p></Link>
                        </LinkRoll>

                    </div>

                </div>
                <p className='copyright'><p>&copy; 2023 Transitions For Tomorrow. All rights reserved</p></p>


            </div>

        </div>
</>
    )
}

export default Footer
