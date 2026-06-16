import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from './Projects';
import PageWrapper from '../components/PageWrapper';
import styles from './Home.module.css';

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(intervalId);
      }
    }, 150);
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <PageWrapper className={styles.home}>
      <div className={styles.hero}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Informatics Student
        </motion.div>
        <div className={styles.heroContent}>
          <div style={{ perspective: 1000 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                className={styles.profileImageContainer}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ cursor: 'pointer', transformStyle: 'preserve-3d', position: 'relative' }}
              >
                <img 
                  src="/assets/profile/Profile Hanzelius.png" 
                  alt="Hanzelius" 
                  className={styles.profileImage} 
                  style={{ position: 'absolute', top: 0, left: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                />
                <img 
                  src="/assets/profile/Profile Hanzelius Flipped.png" 
                  alt="Hanzelius Flipped" 
                  className={styles.profileImage} 
                  style={{ position: 'absolute', top: 0, left: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                />
              </motion.div>
            </motion.div>
          </div>
          
          <div className={styles.heroText}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hi, I'm <span className={styles.highlight}><TypewriterText text="Hanzelius" /></span><br />
              An Enthusiastic Full-Stack Developer.
            </motion.h1>
            
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I build premium digital experiences for Web & iOS.
            </motion.p>
          </div>
        </div>
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
          <h3>{projectsData.length - 1}+</h3>
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
