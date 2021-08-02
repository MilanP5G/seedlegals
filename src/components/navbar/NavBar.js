import React from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../../assets/seedlegals-logo.png';
import phone from '../../assets/phoneo.png';
import '../../styling/navbar.css';

const NavBar = () => {

  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <NavLink className='nav-seedlegal-logo' to='/'>
          <img alt='Seed Legals' src={navLogo} />
        </NavLink>
      </div>
      <div className='nav-routes'>
        <NavLink className='nav-founders' to='/'>
          For Founders
        </NavLink>
        <NavLink className='nav-investors' to='/'>
          For Investors
        </NavLink>
        <NavLink className='nav-pricing' to='/'>
          Pricing
        </NavLink>
        <NavLink className='nav-resources' to='/'>
          Resources
        </NavLink>
        <NavLink className='nav-company' to='/'>
          Company
        </NavLink>
      </div>
      <div className='nav-phone'>
       <img alt='Call' src={phone} />
        2O 7947 9213
      </div>
    </div>
  )

}

export default NavBar;
