import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Projects.css';
function ProjectItem({
  image,
  name,
  description,
  githubLink,
  websiteLink,
  demoLink,
  technologies,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="project__card"
      // onClick={() => {
      //   navigate('/project/' + id);
      // }}
    >
      <h1 className="project__name"> {name} </h1>
      <div className="project__info">
        <div className="project__image-container">
          <img src={image} className="project__image" />
        </div>
        <div className="project__features">
          <h2 className="project__info-header">About this project</h2>
          <p>{description}</p>
        </div>
        <div className="technologies">
          <h3 className="project__technologies">Technologies</h3>
          <ul>
            {technologies.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        {githubLink && (
          <a href={githubLink} className="project__button">
            GitHub
          </a>
        )}
        {websiteLink && (
          <a href={websiteLink} className="project__button">
            Website
          </a>
        )}
        {demoLink && (
          <a href={demoLink} className="project__button">
            demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
