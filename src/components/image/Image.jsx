import React from 'react';
import './style.scss';
import Me from '../../img/me_cutout.png';
import Logo from '../../img/logo-white.png';

function Image(props) {
  return (
    <div className="image-wrapper article-wrapper">
      <img src={Me} alt="me" className="me" />
      <img src={Logo} alt="logo" className="logo-white" />
    </div>
  );
}

export default Image;
