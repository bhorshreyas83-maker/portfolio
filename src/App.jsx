import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingIcons from './components/FloatingIcons/FloatingIcons';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import styles from './App.module.css';

export default function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className={styles.appWrapper}>
        {/* Mouse spotlight overlay layer */}
        <div className={styles.mouseSpotlight}></div>

        {/* Interactive canvas particle background and custom overlay patterns */}
        <ParticlesBackground />
        
        <div className={styles.gridOverlay}></div>
        <div className={`${styles.glowOrb} ${styles.glowOrb1}`}></div>
        <div className={`${styles.glowOrb} ${styles.glowOrb2}`}></div>
        <div className={`${styles.glowOrb} ${styles.glowOrb3}`}></div>

        {/* Global Page Layout elements */}
        <Navbar />
        
        <main style={{ position: 'relative', zIndex: 2 }}>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
        <FloatingIcons />
      </div>
    </Router>
  );
}
