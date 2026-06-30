import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import styles from './Education.module.css';

const educationData = [
  {
    id: 1,
    year: '2025 - 2026',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'College / University Name',
    score: 'First Year (Current)',
    text: 'Acquiring knowledge in core computing fields: Database Management Systems, Web Development, Object-Oriented Programming, and Data Structures. Actively engaged in self-study and building side projects to bridge academic learning with industrial capabilities.'
  },
  {
    id: 2,
    year: '2022 - 2024',
    degree: 'Higher Secondary School Certificate (12th - HSC)',
    institution: 'Junior College / High School',
    score: 'Score: 45.00%',
    text: 'Completed under the Commerce and Information Technology track. Studied core commerce subjects along with computer application concepts.'
  },
  {
    id: 3,
    year: '2021 - 2022',
    degree: 'Secondary School Certificate (10th - SSC)',
    institution: 'High School Board',
    score: 'Score: 62.70%',
    text: 'Completed general schooling with primary interests in mathematics, computer literacy, and basic technological applications.'
  }
];

export default function Education() {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="education" className={styles.educationSection}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className={styles.subtitle}>
            My educational background and academic journey in computer sciences.
          </p>
        </div>

        {/* Timeline Path */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>

          {educationData.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={edu.id} className={styles.timelineItem}>
                {/* Visual node marker */}
                <div className={styles.timelineNode}></div>

                {/* Left/Right Container placement */}
                <div className={isEven ? styles.timelineContentLeft : styles.timelineContentRight}>
                  <motion.div
                    className={`${styles.timelineCard} glass-card`}
                    variants={isEven ? cardVariantsLeft : cardVariantsRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <span className={styles.timelineYear}>{edu.year}</span>
                    <h3 className={styles.timelineDegree}>{edu.degree}</h3>
                    <h4 className={styles.timelineInstitution}>{edu.institution}</h4>
                    <div className={styles.timelineScore}>
                      <FiAward /> {edu.score}
                    </div>
                    <p className={styles.timelineText}>{edu.text}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
