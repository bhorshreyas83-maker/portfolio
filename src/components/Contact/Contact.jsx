import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks, getWhatsAppLink } from '../../data/socialLinks';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/bhorshreyas83@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
        })
      });
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTransition = {
    type: 'spring',
    stiffness: 50,
    damping: 15
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind, a question, or just want to say hi? Feel free to contact me!
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Info & Socials */}
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={scrollTransition}
          >
            <div>
              <h3 className={styles.heading}>Let's discuss something great</h3>
              <p className={styles.text}>
                I am always open to discussing new software development opportunities, web engineering roles, creative project ideas, or partnership options.
              </p>
            </div>

            {/* Info Cards */}
            <div className={styles.detailsList}>
              <div className={`${styles.detailCard} glass-card`}>
                <div className={styles.iconWrapper}>
                  <FiMail />
                </div>
                <div>
                  <div className={styles.detailTitle}>Email Me</div>
                  <a href="mailto:bhorshreyas83@gmail.com" className={styles.detailValue}>
                    bhorshreyas83@gmail.com
                  </a>
                </div>
              </div>

              <div className={`${styles.detailCard} glass-card`}>
                <div className={styles.iconWrapper}>
                  <FiPhone />
                </div>
                <div>
                  <div className={styles.detailTitle}>Call / Message</div>
                  <a href="tel:+919699376607" className={styles.detailValue}>+91 9699376607</a>
                </div>
              </div>

              <div className={`${styles.detailCard} glass-card`}>
                <div className={styles.iconWrapper}>
                  <FiMapPin />
                </div>
                <div>
                  <div className={styles.detailTitle}>Location</div>
                  <span className={styles.detailValue}>{socialLinks.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className={styles.actionGrid}>
              <a href="tel:+919699376607" className="btn btn-secondary" style={{ width: '100%' }}>
                <FiPhone /> Call Now
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                <FaWhatsapp /> WhatsApp Chat
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
                <FaInstagram /> Instagram
              </a>
            </div>

            {/* Social Links Row */}
            <div className={styles.socialsWrapper}>
              <h4 className={styles.socialsTitle}>Connect with me:</h4>
              <ul className={styles.socialsList}>
                <li>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${styles.socialBtn} ${styles.whatsappBtn}`}
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${styles.socialBtn} ${styles.instagramBtn}`}
                    aria-label="Follow on Instagram"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a 
                    href={socialLinks.telegram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${styles.socialBtn} ${styles.telegramBtn}`}
                    aria-label="Send message on Telegram"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li>
                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${styles.socialBtn} ${styles.githubBtn}`}
                    aria-label="Visit GitHub Profile"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${styles.socialBtn} ${styles.linkedinBtn}`}
                    aria-label="Visit LinkedIn Profile"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className={`${styles.formCard} glass-card`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={scrollTransition}
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{ fontSize: '3rem', color: 'var(--accent-cyan)', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ marginBottom: '8px' }}>Thank You!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Your message has been received. I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="name" className={styles.label}>Your Name</label>
                  </div>
                  <div className={styles.formGroup}>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="email" className={styles.label}>Your Email</label>
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="phone" className={styles.label}>Your Mobile Number</label>
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder=" "
                      className={styles.textarea}
                    />
                    <label htmlFor="message" className={styles.label}>Message</label>
                  </div>
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <FiSend />}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Map of Sangamner, Maharashtra */}
        <motion.div 
          className={`${styles.mapCard} glass-card`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=Sangamner,%20Maharashtra,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Sangamner Location Map"
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
