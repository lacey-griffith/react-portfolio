import React, {useState} from 'react';
import About from "../src/components/AboutMe"
import NavBar from "../src/components/NavBar"
import Projects from "../src/components/Projects"
import ContactForm from './components/Contact';

import './App.css';
import './index.css'

function App() {
  const [navLinks] = useState([
    {
      name: 'about me'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    }
  ]);
  
  const [currentLink, setCurrentLink] = useState(navLinks[0])
  return (
    <div>
      <NavBar
      navLinks = {navLinks}
      setCurrentLink = {setCurrentLink}
      currentLink = {currentLink}
      >
      </NavBar>
      <main>
        <ContactForm />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
