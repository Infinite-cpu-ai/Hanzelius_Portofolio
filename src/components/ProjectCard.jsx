import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

import SpotlightCard from './SpotlightCard';

const ProjectCard = ({ title, role, date, description, tags, link, github, features, image, isExpanded, onClick, layoutId }) => {
  return (
    <SpotlightCard className={`${styles.card} ${isExpanded ? styles.expandedCard : ''}`} onClick={onClick} layoutId={layoutId}>
      {image && (
        <div className={`${styles.imageContainer} ${isExpanded ? styles.expandedImageContainer : ''}`}>
          <img src={image} alt={title} className={styles.projectImage} />
        </div>
      )}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h3>{title}</h3>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.links}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub Repository" onClick={(e) => e.stopPropagation()}>
              <Github size={20} />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" aria-label="Live Project" onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className={styles.role}>{role}</div>
      
      <p className={`${styles.description} ${!isExpanded ? styles.descriptionLimit : ''}`}>{description}</p>
      
      {isExpanded && features && (
        <motion.ul 
          className={styles.features}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </motion.ul>
      )}
      
      <div className={styles.tags}>
        {tags.map((tag, idx) => (
          <span key={idx} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
