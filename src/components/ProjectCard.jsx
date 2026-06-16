import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

import SpotlightCard from './SpotlightCard';

const ProjectCard = ({ title, role, date, description, tags, link, github, features, image }) => {
  return (
    <SpotlightCard className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
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
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
              <Github size={20} />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" aria-label="Live Project">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className={styles.role}>{role}</div>
      
      <p className={styles.description}>{description}</p>
      
      {features && (
        <ul className={styles.features}>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
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
