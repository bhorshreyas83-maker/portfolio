import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={styles.subtitle}>
            A showcase of my technical expertise, programming languages, and design skills.
          </p>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {skillCategories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${
                activeCategory === category ? styles.filterBtnActive : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className={`${styles.skillCard} glass-card`}
                  variants={cardVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className={styles.cardHeader}>
                    <div 
                      className={styles.iconWrapper}
                      style={{ color: skill.color }}
                    >
                      <IconComponent />
                    </div>
                    <div>
                      <h3 className={styles.skillName}>{skill.name}</h3>
                      <span className={styles.skillCategory}>{skill.category}</span>
                    </div>
                  </div>

                  <div className={styles.progressContainer}>
                    <div className={styles.progressHeader}>
                      <span>Proficiency</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className={styles.progressBarTrack}>
                      <motion.div
                        className={styles.progressBarFill}
                        style={{ background: `linear-gradient(90deg, ${skill.color} 0%, var(--accent-cyan) 100%)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Neon Glow Underline */}
                  <div 
                    className={styles.cardGlowLine} 
                    style={{ background: `linear-gradient(90deg, ${skill.color}, var(--accent-cyan))` }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
