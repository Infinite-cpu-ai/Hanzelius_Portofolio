import styles from './Footer.module.css';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logoGroup}>
              <img src="/assets/Logo.png" alt="Hanzelius Logo" className={styles.footerLogo} />
              <span className={styles.logoText}>Hanzelius</span>
            </div>
            <p>Informatics Student | Full-Stack Developer</p>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/Infinite-cpu-ai" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hanzelius-3b4924394/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kwanhanzelius@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Hanzelius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
