import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import styles from './Home.module.css';

const Home = () => {
  return (
    <PageWrapper className={styles.home}>
      <div className={styles.hero}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Available for Opportunities
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi, I'm <span className={styles.highlight}>Hanzelius</span>.<br />
          I build premium digital experiences.
        </motion.h1>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Informatics Student | Full-Stack Developer | iOS Developer
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/projects" className="button">
            View My Work
          </Link>
          <Link to="/contact" className="button outline">
            Get in Touch
          </Link>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.highlights}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className={styles.stat}>
          <h3>3+</h3>
          <p>Major Projects</p>
        </div>
        <div className={styles.stat}>
          <h3>Full-Stack</h3>
          <p>Web & Mobile</p>
        </div>
        <div className={styles.stat}>
          <h3>National</h3>
          <p>Award Winner</p>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default Home;
