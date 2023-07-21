/* eslint-disable max-len */
import React from 'react';
import './style.scss';

function Introduction(props) {
  return (
    <div className="intro-wrapper article-wrapper">
      <div className="intro-header">
        <h1 className="intro-text">Hi, I&apos;m Josh, a software developer and UI/UX designer.</h1>
        <p className="intro-subtext">I&apos;m a student at Dartmouth College studying Computer Science and Digital Arts. I&apos;m passionate about problem-solving, both through programming and elegant, user-conscious design. In my free time, I enjoy lifting weights, hiking and camping, and teaching myself new skills.</p>
      </div>

      <div className="contact-and-icons">
        <button type="button" className="contact-me">Contact me</button>
        <div className="icons">
          <button type="button" className="resume">Resume</button>
          <button type="button" className="github">Github</button>
          <button type="button" className="linkedin">LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
