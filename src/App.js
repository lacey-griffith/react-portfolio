import React from 'react';
import About from "../src/components/AboutMe"
import NavBar from "../src/components/NavBar"
import './App.css';
import './index.css'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
