import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnetic = ({ children, padding = 20 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Calculate distance to limit pull
    const distance = Math.sqrt(middleX * middleX + middleY * middleY);
    const maxDistance = width / 2 + padding;

    if (distance < maxDistance) {
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      data-magnetic="true"
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
