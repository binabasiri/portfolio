import React from 'react';

import GitHubIcon from '@material-ui/icons//GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/binabasiri">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/bina-basiri/">
          <LinkedInIcon />
        </a>
        <a href="mailto:bina712010@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <p> &copy; Bina's portfolio</p>
    </div>
  );
}

export default Footer;
