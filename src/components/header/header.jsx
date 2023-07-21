import React from 'react';
import './style.scss';
import Logo from '../../img/logo.svg';

function Header(props) {
  return (
    <div className="header-wrapper">
      <img src={Logo} alt="logo" className="logo" />
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Header;
