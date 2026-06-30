import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiTrendingUp, FiCpu, FiUsers, FiLayers } from 'react-icons/fi';
import styles from './Experience.module.css';

const experienceData = {
  role: 'Software Development Trainee',
  company: 'Technology Intern Environment',
  period: 'Current Intern / Exposure',
  description: 'Currently gaining valuable industry exposure and learning real-world software engineering practices. Experiencing the collaborative dynamics of a corporate dev team and applying fundamental scripting concepts to hands-on practical setups.',
  highlights: [
    {
      id: 1,
      icon: FiCpu,
      title: 'Practical Work',
      desc: 'Translating BCA software fundamentals into practical scripts, learning production structure patterns.'
    },
    {
      id: 2,
      icon: FiTrendingUp,
      title: 'Real-world Concepts',
      desc: 'Exploring API configurations, database queries, responsive web states, and dynamic render loops.'
    },
    {
      id: 3,
      icon: FiUsers,
      title: 'Company Environment',
      desc: 'Gaining industry exposure and getting mentored on professional workflow methodologies and lifecycle phases.'
    },
    {
      id: 4,
      icon: FiLayers,
      title: 'Workflow Tooling',
      desc: 'Utilizing version control, package managers, and editors inside a live collaborative environment.'
    }
  ]
};

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        {/* Heading */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className={styles.subtitle}>
            Bridging theoretical learning with corporate software environments and collaborative setups.
          </p>
        </div>

        {/* Experience Card */}
        <div className={styles.experienceContainer}>
          <motion.div 
            className={`${styles.experienceCard} glass-card`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          >
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.roleTitle}>{experienceData.role}</h3>
                <span className={styles.company}>{experienceData.company}</span>
              </div>
              <span className={styles.period}>{experienceData.period}</span>
            </div>

            <p className={styles.introText}>{experienceData.description}</p>

            <div className={styles.highlightsList}>
              {experienceData.highlights.map((highlight) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={highlight.id} className={styles.highlightItem}>
                    <div className={styles.iconWrapper}>
                      <IconComponent />
                    </div>
                    <div>
                      <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                      <p className={styles.highlightDesc}>{highlight.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
