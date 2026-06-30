import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiCheckCircle, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import styles from './About.module.css';

export default function About() {
  const scrollTransition = {
    type: 'spring',
    stiffness: 50,
    damping: 15
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: scrollTransition }
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: scrollTransition }
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={styles.subtitle}>
            My professional biography, aspirations, and personal development path.
          </p>
        </div>

        {/* Info Grid */}
        <div className={styles.aboutGrid}>
          {/* Left Column: Intro & Stats */}
          <motion.div 
            className={styles.aboutInfo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftColumnVariants}
          >
            <h3 className={styles.highlightText}>
              I'm Shreyas Suresh Bhor, a BCA First Year student with a Commerce background based in Maharashtra, India.
            </h3>
            <p className={styles.description}>
              I have a strong interest in software development, web technologies, and modern IT solutions. I enjoy learning new technologies, building creative projects, and continuously improving my programming skills.
            </p>
            <p className={styles.description}>
              My ultimate career goal is to become a successful Full-Stack Developer, and my grand dream is to become a successful Businessman. I want to contribute to innovative technology solutions that solve real-world problems and eventually build my own tech enterprise.
            </p>

            {/* Stats Cards */}
            <div className={styles.statsGrid}>
              <div className={`${styles.statCard} glass-card`}>
                <div className={styles.statNumber}>3+</div>
                <div className={styles.statLabel}>Completed Projects</div>
              </div>
              <div className={`${styles.statCard} glass-card`}>
                <div className={styles.statNumber}>1st Year</div>
                <div className={styles.statLabel}>BCA Student</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Career Objectives & Growth Timeline */}
          <motion.div 
            className={styles.aboutDetails}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={rightColumnVariants}
          >
            {/* Career Objectives */}
            <div className={`${styles.goalsCard} glass-card`}>
              <h3 className={styles.cardTitle}>
                <FiTarget className={styles.cardTitleIcon} /> Career Objectives
              </h3>
              <ul className={styles.goalsList}>
                <li>
                  <FiCheckCircle className={styles.goalIcon} />
                  <span>My ultimate dream is to become a successful Businessman and tech entrepreneur.</span>
                </li>
                <li>
                  <FiCheckCircle className={styles.goalIcon} />
                  <span>Build complete full-stack web architectures utilizing modern frameworks.</span>
                </li>
                <li>
                  <FiCheckCircle className={styles.goalIcon} />
                  <span>Master databases, query caching, and scalable state managers.</span>
                </li>
                <li>
                  <FiCheckCircle className={styles.goalIcon} />
                  <span>Bridge academic coding concepts with real-world development environments.</span>
                </li>
              </ul>
            </div>

            {/* Personal Growth Timeline */}
            <div className={`${styles.goalsCard} glass-card`}>
              <h3 className={styles.cardTitle}>
                <FiTrendingUp className={styles.cardTitleIcon} /> Personal Growth Timeline
              </h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <span className={styles.timelineDot}></span>
                  <div className={styles.timelinePeriod}>2025 - 2026</div>
                  <h4 className={styles.timelineTitle}>Enrolled in BCA Degree & Coding Deep-Dive</h4>
                  <p className={styles.timelineDesc}>
                    Began formal computer applications studies, focusing on programming logic, structural styling, and framework engineering.
                  </p>
                </div>
                
                <div className={styles.timelineItem}>
                  <span className={styles.timelineDot}></span>
                  <div className={styles.timelinePeriod}>2025 - Trainee</div>
                  <h4 className={styles.timelineTitle}>Hands-on Corporate Intern Exposure</h4>
                  <p className={styles.timelineDesc}>
                    Gaining exposure to company workflows, version control protocols, and production environments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
