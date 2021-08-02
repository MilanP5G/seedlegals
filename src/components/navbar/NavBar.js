import React from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../../assets/seedlegals-logo.png';
import '../../styling/navbar.css';

const NavBar = () => {

  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <NavLink className='nav-seedlegal-logo' to='/'>
          <img id='nav-logo' alt='Seed Legals' src={navLogo} />
        </NavLink>
      </div>
    </div>
  )

}

export default NavBar;
