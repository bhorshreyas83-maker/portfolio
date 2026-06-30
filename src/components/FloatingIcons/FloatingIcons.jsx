import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '../../data/socialLinks';
import styles from './FloatingIcons.module.css';

export default function FloatingIcons() {
  return (
    <div className={styles.floatingContainer}>
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Contact Shreyas on WhatsApp"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', delay: 1 }}
      >
        <FaWhatsapp />
        {/* Pulsing ring visual helpers */}
        <span className={styles.pulseRing}></span>
        <span className={`${styles.pulseRing} ${styles.pulseRingDelay}`}></span>
      </motion.a>
    </div>
  );
}
