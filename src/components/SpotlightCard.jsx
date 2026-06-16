import { useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styles from './SpotlightCard.module.css';

const SpotlightCard = ({ children, className = '', layoutId, onClick }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMoveCorrected = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={layoutId}
      onClick={onClick}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
      onMouseMove={handleMouseMoveCorrected}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`${styles.cardWrapper} ${className}`}
      data-magnetic="true" // Hook for custom cursor to grow
    >
      <div className={styles.cardInner}>
        {/* Spotlight effect element */}
        <motion.div
          className={styles.spotlight}
          style={{
            background: isHovered ? 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 126, 103, 0.1), transparent 40%)' : 'transparent',
          }}
          animate={{
            '--mouse-x': `${mouseX.get()}px`,
            '--mouse-y': `${mouseY.get()}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
        />
        
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
