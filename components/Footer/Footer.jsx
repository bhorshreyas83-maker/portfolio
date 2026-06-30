import React from 'react';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks, getWhatsAppLink } from '../../data/socialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        {/* Social media icons grid with hover glow styling */}
        <div className={styles.socials}>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
            <FaWhatsapp />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
            <FaInstagram />
          </a>

          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
            <FaLinkedin />
          </a>
        </div>

        <p className={styles.text}>Designed &amp; Developed by Shreyas Suresh Bhor</p>
        <p className={styles.tagline}>BCA Student | Aspiring Full Stack Developer</p>
        <p className={styles.copyright}>&copy; 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}
