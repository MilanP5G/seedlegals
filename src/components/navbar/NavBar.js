import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { debounce } from '../../utilities/helpers'
import navLogo from '../../assets/seedlegals-logo.png';
import phone from '../../assets/phoneo.png';
import '../../styling/navbar.css';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(0);

  const navbarStyles = {
    transition: 'top 0.6s'
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className='nav-bar' style={{ ...navbarStyles, top: visible ? '0' : '-100px' }}>
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
      <button className="nav-start" type="submit">
        Start Free
      </button>
      <div className='nav-login'>
        Login
      </div>
      <div className='nav-phone'>
        <img alt='Call' src={phone} />
        2O 7947 9213
      </div>
    </div>
  )

}

export default NavBar;
