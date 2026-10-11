import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="background-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
