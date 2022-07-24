import React from 'react';
import styledComponents from 'styled-components';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
<div className="brand">
    <img src={logo} alt="logo" />
</div>
<div className="toggle"></div>
<div className="links">
    <ul>
        <li>
        <a href="#"> HOME </a>
        </li>

        <li>
        <a href="#"> Marketplace </a>
        </li>

        <li>
        <a href="#"> Sellers </a>
        </li>

        <li>
        <a href="#"> Create </a>
        </li>
    </ul>
</div>
<button className='btn'> Contact </button>
    </>
   
  )
}

export default Navbar;