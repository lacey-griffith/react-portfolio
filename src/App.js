import React from 'react';
import About from "../src/components/AboutMe"
import NavBar from "../src/components/NavBar"
import Projects from "../src/components/Projects"
import './App.css';
import './index.css'

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
