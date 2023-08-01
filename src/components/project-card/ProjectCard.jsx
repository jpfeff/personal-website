import React from 'react';
import './style.scss';

function ProjectCard(props) {
  const { project } = props;

  const cardStyle = {
    backgroundImage: `url(${project.image})`,
    border: `2px solid ${project.borderColor}`,
  };

  const headerStyle = {
    color: project.whiteText ? 'rgb(249,249,249)' : 'inherit',
  };

  const descriptionStyle = {
    color: project.whiteText ? 'rgba(249,249,249,0.5)' : 'rgba(33,33,33,0.7)',
  };

  const typeStyle = {
    backgroundColor: project.typeColor,
  };

  return (
    <div className="project-card-wrapper"
      style={cardStyle}
    >
      <div className="project-info">
        <div className="project-card-header">
          <h2 className="project-card-title" style={headerStyle}>{project.title}</h2>
          <p className="project-card-type" style={typeStyle}>{project.type}</p>
        </div>
        <p className="project-card-description" style={descriptionStyle}>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
