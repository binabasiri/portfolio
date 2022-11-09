import '../src/styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const executeScroll = (myRef) =>
    window.scrollTo(0, myRef.current.offsetTop - 80);
  return (
    <div className="App">
      <Router>
        <Navbar
          executeScroll={executeScroll}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
        />
        <Home aboutRef={aboutRef} skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
