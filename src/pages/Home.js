import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import sassIcon from '../assets/images/sass.png';
import reactIcon from '../assets/images/react.png';
import materialuiIcon from '../assets/images/materialui.png';
import nodeIcon from '../assets/images/node.png';
import sqliteIcon from '../assets/images/sqlite.png';
import gitIcon from '../assets/images/git.png';
import mongoIcon from '../assets/images/mongo.png';
import mysqlIcon from '../assets/images/mysql.png';
import postgreIcon from '../assets/images/postgre.png';
import yarnIcon from '../assets/images/yarn.png';
import reduxIcon from '../assets/images/redux.png';
import typescriptIcon from '../assets/images/typescript.png';
import javascriptIcon from '../assets/images/javascript.png';
import csharpIcon from '../assets/images/csharp.png';
import unityIcon from '../assets/images/unity.png';
import expressIcon from '../assets/images/express.png';
import Bounce from 'react-reveal/Bounce';

import '../styles/Home.css';

function Home({ skillsRef }) {
  return (
    <div className="home">
      <div className="about">
        <div className="typewriter">
          <h2> Hi, My Name is "Bina".</h2>
        </div>
        <div className="prompt">
          <p>A full-stack software developer</p>

          <a href="https://www.linkedin.com/in/bina-basiri/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="mailto:bina712010@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a href="https://github.com/binabasiri" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills" ref={skillsRef}>
        <h1 className="skills__header"> Skills</h1>

        <ol className="list">
          <h2 className="skills__sub-header"> Front-End</h2>
          <Bounce left cascade>
            <div className="skill-container">
              <img className="skill-icon" src={htmlIcon} />
              <img className="css-icon" src={cssIcon} />
              <img className="skill-icon" src={reactIcon} />
              <img className="skill-icon" src={reduxIcon} />
              <img className="skill-icon" src={sassIcon} />
              <img className="skill-icon" src={materialuiIcon} />
            </div>
          </Bounce>

          <h2 className="skills__sub-header">Back-End</h2>
          <Bounce right cascade>
            <div className="skill-container">
              <img className="skill-icon" src={nodeIcon} />
              <img className="skill-icon" src={postgreIcon} />
              <img className="skill-icon" src={mysqlIcon} />
              <img className="skill-icon" src={sqliteIcon} />
              <img className="skill-icon" src={mongoIcon} />
              <img className="skill-icon" src={expressIcon} />
            </div>
          </Bounce>

          <h2 className="skills__sub-header">Other Skills</h2>
          <Bounce left cascade>
            <div className="skill-container">
              <img className="skill-icon" src={gitIcon} />
              <img className="skill-icon" src={yarnIcon} />
              <img className="skill-icon" src={javascriptIcon} />
              <img className="skill-icon" src={csharpIcon} />
              <img className="skill-icon" src={unityIcon} />
              <img className="skill-icon" src={typescriptIcon} />
            </div>
          </Bounce>
        </ol>
      </div>
    </div>
  );
}

export default Home;
