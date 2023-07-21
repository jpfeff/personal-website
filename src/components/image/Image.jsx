import React from 'react';
import './style.scss';
import Me from '../../img/me_cutout.png';

function Image(props) {
  return (
    <div className="image-wrapper article-wrapper">
      <img src={Me} alt="me" className="me" />
    </div>
  );
}

export default Image;
