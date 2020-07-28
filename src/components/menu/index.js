import React from 'react';
import Logo from '../../assets/img/logo.png'
import './menu.css'
import Button from "../button";

const Menu = () => {
  return(
    <nav className='menu'>
      <a href='/'>
        <img src={Logo} alt="DEVFLIX Logo" className='logo'></img>
      </a>

      <Button as='a' href='/'>
        New Video
      </Button>
    </nav>
  )
}

export default Menu;
