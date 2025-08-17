
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Education from './pages/Education';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>About Me</Link>
        <Link to="/education" style={{ margin: '0 1rem' }}>Education</Link>
        <Link to="/certifications" style={{ margin: '0 1rem' }}>Certifications</Link>
        <Link to="/projects" style={{ margin: '0 1rem' }}>Projects</Link>
        <Link to="/contact" style={{ margin: '0 1rem' }}>Contact Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
