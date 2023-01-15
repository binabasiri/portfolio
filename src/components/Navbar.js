import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar({ executeScroll, aboutRef, projectsRef, skillsRef }) {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="links">
        <span className="nav-links" onClick={() => window.scrollTo(0, 0)}>
          About
        </span>
        <span className="nav-links" onClick={() => executeScroll(skillsRef)}>
          Skills
        </span>
        <span className="nav-links" onClick={() => executeScroll(projectsRef)}>
          Projects
        </span>
        <a
          href="https://drive.google.com/file/d/1Lihkg-foF8U488rEm8tKVu0Oz8k20BPZ/view?usp=sharing"
          className="nav-links"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
