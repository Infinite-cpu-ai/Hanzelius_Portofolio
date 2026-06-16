import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <PageWrapper className={styles.contact}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Get in Touch</h1>
        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      </motion.div>

      <div className={styles.content}>
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Mail size={24} />
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:kwanhanzelius@gmail.com">kwanhanzelius@gmail.com</a>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Phone size={24} />
            </div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+6285336348531">+62 853 3634 8531</a>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <MapPin size={24} />
            </div>
            <div>
              <h3>Location</h3>
              <p>Surabaya, Jawa Timur</p>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/Infinite-cpu-ai" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/hanzelius-3b4924394/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.form 
          className={styles.form}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
          </div>
          <button type="submit" className="button">Send Message</button>
        </motion.form>
      </div>
    </PageWrapper>
  );
};

export default Contact;
