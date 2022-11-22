import React from 'react';
import ProjectItem from '../components/ProjectItem';

import { projects } from '../assets/dataBase';

import Fade from 'react-reveal/Bounce';
import '../styles/Projects.css';
function Projects({ projectsRef }) {
  console.log(projects);
  return (
    <div ref={projectsRef} className="projects">
      <h1 className="projects__heading">Projects</h1>
      <div className="project__list">
        <Fade>
          {projects?.map(
            ({
              id,
              image,
              name,
              description,
              githubLink,
              websiteLink,
              demoLink,
              technologies,
            }) => {
              return (
                <ProjectItem
                  key={id}
                  image={image}
                  name={name}
                  description={description}
                  githubLink={githubLink}
                  websiteLink={websiteLink}
                  demoLink={demoLink}
                  technologies={technologies}
                />
              );
            }
          )}
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
