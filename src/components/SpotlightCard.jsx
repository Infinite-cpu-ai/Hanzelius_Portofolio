import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './SpotlightCard.module.css';

const SpotlightCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // For spotlight (pixel coordinates)
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // For 3D tilt (normalized coordinates -0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    
    // We update the motion values for the tilt implicitly since rotateX/Y depend on mouseX/Y...
    // Wait, let's just use separate values or override them for tilt
    // Actually, useTransform expects the input value. Let's make separate motion values for tilt.
  };

  // Dedicated motion values for tilt to avoid conflict with spotlight pixels
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springRotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [10, -10]), springConfig);
  const springRotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMoveCorrected = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // Tilt
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMoveCorrected}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`${styles.cardWrapper} ${className}`}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
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
        
        {/* Card Content */}
        <div className={styles.content} style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
