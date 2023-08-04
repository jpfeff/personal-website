import React from 'react';
import './style.scss';
import Logo from '../../img/logo.svg';

function Header(props) {
  const handleScrollToAbout = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const { offsetTop } = aboutSection;
      const headerHeight = 20;
      window.scrollTo({ top: offsetTop - headerHeight, behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const { offsetTop } = projectsSection;
      const headerHeight = 20;
      window.scrollTo({ top: offsetTop - headerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="header-wrapper">
      <img src={Logo} alt="logo" className="logo" />
      <div className="links">
        <a href="#about" onClick={handleScrollToAbout}>About</a>
        <a href="#projects" onClick={handleScrollToProjects}>Projects</a>
      </div>
    </div>
  );
}

export default Header;
