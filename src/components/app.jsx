import React from 'react';
import Header from './header/header';
import Introduction from './introduction/Introduction';
import Image from './image/Image';
import projects from '../data/projects';
import ProjectCard from './project-card/ProjectCard';
import '../style.scss';
import '../index.css';

function App() {
  return (
    <>
      <Header />
      <section id="about" className="section">
        <Introduction />
        <Image />
      </section>
      <section id="projects" className="section">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}

export default App;
