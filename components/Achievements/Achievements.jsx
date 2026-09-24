import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheck, FiCompass, FiTarget } from 'react-icons/fi';
import styles from './Achievements.module.css';

const achievementsList = [
  {
    id: 1,
    title: 'BCA Tech Progress',
    desc: 'Maintained high practical grading and laboratory scores in Web Technology, C-Language, and Database labs during BCA First Year.'
  },
  {
    id: 2,
    title: 'Web Engineering Track',
    desc: 'Self-studied core full-stack skills: JavaScript (ES6+), React routing, MongoDB schemas, and Node.js server configurations.'
  },
  {
    id: 3,
    title: 'Coding Consistency',
    desc: 'Built 10+ web layouts and utilities, documenting development progress and sharing open source work on GitHub.'
  }
];

const futureGoals = [
  'Deep-dive into Express.js and backend routing architectures',
  'Host and deploy projects to cloud systems (Vercel, Render, AWS)',
  'Master relational databases (MySQL) and non-relational modeling (MongoDB)',
  'Collaborate in team hackathons to build real-world app solutions'
];

export default function Achievements() {
  const scrollTransition = {
    type: 'spring',
    stiffness: 50,
    damping: 15
  };

  return (
    <section id="achievements" className={styles.achievementsSection}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Milestones & <span className="gradient-text">Goals</span>
          </h2>
          <p className={styles.subtitle}>
            Academic achievements, certifications track, and future ambitions in IT.
          </p>
        </div>

        {/* Grid Area */}
        <div className={styles.achievementsGrid}>
          {/* Left: Milestones */}
          <motion.div 
            className={`${styles.card} glass-card`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={scrollTransition}
          >
            <h3 className={styles.cardTitle}>
              <FiAward className={styles.titleIcon} /> Learning Milestones
            </h3>
            
            <div className={styles.list}>
              {achievementsList.map((item) => (
                <div key={item.id} className={styles.listItem}>
                  <span className={styles.bullet}>{item.id}</span>
                  <div className={styles.itemContent}>
                    <h4 className={styles.itemHeading}>{item.title}</h4>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Future Goals */}
          <motion.div 
            className={`${styles.card} glass-card`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={scrollTransition}
          >
            <h3 className={styles.cardTitle}>
              <FiTarget className={styles.titleIcon} /> Future Goals
            </h3>
            
            <div className={styles.goalsList}>
              {futureGoals.map((goal, idx) => (
                <div key={idx} className={styles.goalCard}>
                  <FiCheck className={styles.goalIcon} />
                  <span className={styles.goalText}>{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
