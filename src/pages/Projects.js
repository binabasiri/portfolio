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
      <Fade>
        <div className="project__list">
          {
            projects?.map(
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
            )

            // <ProjectItem
            //     id={'123'}
            //     github={'https://github.com/binabasiri/imin'}
            //     name={"I'm in"}
            //     image={iminImage}
            //   />
            //   <ProjectItem
            //     id={'123'}
            //     name={'ChesStamina'}
            //     github={'https://github.com/binabasiri/ChesStamina'}
            //     image={chesstaminaImage}
            //     website={'https://chesstamina.netlify.app/'}
            //   />
          }
          {/* <ProjectItem id={'123'} name={'bina'} image={chesstamina} /> */}
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
