import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo-2.png'
import {FiChevronDown } from "react-icons/fi";
// import Topbar from '../../components/topbar/Topbar';

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }




    return (
        <>
        {/* <Topbar /> */}

        <div className='navbar' name='top'>

            <div className='nav-box'>

            <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} alt="Sunset Rehab Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/treatment'>Our Treatment</Link> </li>

                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`#`}> Programs <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/php`}> Partial Hospitalization Program (PHP)</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/iop`}> Intensive Outpatient Program (IOP)</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/op`}> Outpatient Program (OP)</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/mental-health`}> Mental Health Programs </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/substance-abuse`}> Substance Abuse Programs </NavLink> </li>
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/panic-disorder`}> Panic Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acute-stress-disorder`}> Acute Stress Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/adhd`}> ADHD</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anger-disorder`}> Anger Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/bipolar-disorder`}> Bipolar Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ptsd`}> PTSD </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizoaffective`}> Schizoaffective Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizophrenia`}> Schizophrenia </NavLink> </li> */}
                        </ul>
                    </li>


                    <li><Link to='/mission'>Our Mission</Link> </li>
                    <li><Link to='/about-us'>About Us</Link> </li>
                    <li><Link to='/insurance'>Insurance</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
        </>
    )
   
}

export default Navbar

