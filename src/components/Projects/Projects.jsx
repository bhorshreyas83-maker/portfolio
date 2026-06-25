import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A showcase of some of my works and project contributions.
          </p>
        </div>

        {/* Project Grid */}
        <motion.div 
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} glass-card`}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image Frame */}
              <div className={styles.imageWrapper}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage}
                  onError={(e) => {
                    // Fail-safe fallbacks if unsplash URL is blocked or offline
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600';
                  }}
                />
              </div>

              {/* Card Body */}
              <div className={styles.cardContent}>
                {/* Tags */}
                <div className={styles.tagsContainer}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                {/* External Actions */}
                <div className={styles.actions}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.linkBtn}
                    aria-label={`View GitHub source code for ${project.title}`}
                  >
                    <FiGithub className={styles.linkBtnIcon} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.linkBtn}
                    aria-label={`Visit live demo for ${project.title}`}
                  >
                    <FiExternalLink className={styles.linkBtnIcon} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
