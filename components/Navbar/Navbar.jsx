import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiChevronDown } from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Education', path: '#education' },
  { label: 'Skills', path: '#skills' },
  { label: 'Experience', path: '#experience' },
  { label: 'Projects', path: '#projects' },
  { label: 'Achievements', path: '#achievements' },
  { label: 'Contact', path: '#contact' },
];

export const themesList = [
  { id: 'dark', label: 'Premium Dark', colors: ['#8B5CF6', '#3B82F6', '#06B6D4'] },
  { id: 'light', label: 'Light Mode', colors: ['#7c3aed', '#2563eb', '#0891b2'] },
  { id: 'emerald', label: 'Emerald Mint', colors: ['#059669', '#10B981', '#34D399'] },
  { id: 'sunset', label: 'Golden Sunset', colors: ['#D97706', '#F59E0B', '#FBBF24'] },
  { id: 'synthwave', label: 'Synthwave Neon', colors: ['#8B5CF6', '#EC4899', '#F43F5E'] },
  { id: 'cyberpunk', label: 'Cyberpunk Indigo', colors: ['#2563EB', '#0EA5E9', '#06B6D4'] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const location = useLocation();

  // Scroll detection to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme setting
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const selectTheme = (themeId) => {
    setTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setDropdownOpen(false);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownOpen && !e.target.closest(`.${styles.themeSelectorContainer}`)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  // Intersection Observer to update active nav link on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle portion
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = navItems.map(item => document.getElementById(item.path.slice(1)));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Handle nav link click
  const handleNavLinkClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveHash(path);
    const targetElement = document.getElementById(path.slice(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update hash in URL
      window.history.pushState(null, '', path);
    }
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className={styles.logo}>
          Shreyas<span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleNavLinkClick(e, item.path)}
                className={`${styles.navLink} ${
                  activeHash === item.path ? styles.navLinkActive : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: Theme selector & hamburger */}
        <div className={styles.controls}>
          <div className={styles.themeSelectorContainer}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={styles.themeSelectorBtn}
              aria-label="Select Theme"
              title="Change Theme Palette"
            >
              <FaPalette />
              <FiChevronDown className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`} />
            </button>

            {dropdownOpen && (
              <div className={`${styles.themeDropdown} glass-card`}>
                {themesList.map((item) => (
                  <button
                    key={item.id}
                    className={`${styles.themeDropdownItem} ${
                      theme === item.id ? styles.themeDropdownItemActive : ''
                    }`}
                    onClick={() => selectTheme(item.id)}
                  >
                    <span className={styles.themeLabel}>{item.label}</span>
                    <div className={styles.themePalette}>
                      {item.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className={styles.themeColorDot}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <ul className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuActive : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleNavLinkClick(e, item.path)}
                className={`${styles.navLink} ${
                  activeHash === item.path ? styles.navLinkActive : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
