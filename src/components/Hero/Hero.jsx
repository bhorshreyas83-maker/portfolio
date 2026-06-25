import React from 'react';
import { motion } from 'framer-motion';
import TypedText from '../TypedText/TypedText';
import { FiDownload, FiMessageSquare } from 'react-icons/fi';
import styles from './Hero.module.css';
import profileImg from '../../assets/profile.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 80, delay: 0.5 }
    }
  };

  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    alert("Place your CV file as 'resume.pdf' in the public folder to enable resume downloads!");
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className="container">
        <motion.div 
          className={styles.heroContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero text contents */}
          <div className={styles.heroContent}>
            <motion.span className={styles.greeting} variants={itemVariants}>
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 className={styles.name} variants={itemVariants}>
              Hi, I'm <span className="gradient-text">Shreyas Suresh Bhor</span>
            </motion.h1>
            
            <motion.div className={styles.tagline} variants={itemVariants}>
              <TypedText strings={["BCA Student", "Aspiring Full-Stack Developer", "IT Enthusiast"]} />
            </motion.div>
            
            <motion.p className={styles.intro} variants={itemVariants}>
              I am Shreyas Suresh Bhor, a passionate BCA First Year student with a strong interest in software development, web technologies, and modern IT solutions. I enjoy learning new technologies, building creative projects, and continuously improving my programming skills. My goal is to become a successful Full-Stack Developer and contribute to innovative technology solutions.
            </motion.p>
            
            <motion.div className={styles.ctaButtons} variants={itemVariants}>
              <a 
                href="#download" 
                onClick={handleDownloadResume} 
                className="btn btn-primary"
              >
                Download Resume <FiDownload />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleCtaClick(e, 'contact')} 
                className="btn btn-secondary"
              >
                Hire Me <FiMessageSquare />
              </a>
            </motion.div>
          </div>

          {/* Hero visual image frame */}
          <motion.div 
            className={styles.heroImageWrapper}
            variants={imageVariants}
          >
            <div className={`${styles.ring} ${styles.ring1}`}></div>
            <div className={`${styles.ring} ${styles.ring2}`}></div>
            <div className={styles.imageFrame}>
              <div className={styles.imageFrameInner}>
                <img 
                  src={profileImg} 
                  alt="Shreyas Suresh Bhor" 
                  className={styles.profileImage}
                  onError={(e) => {
                    // Fail-safe default avatar if image doesn't load
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
