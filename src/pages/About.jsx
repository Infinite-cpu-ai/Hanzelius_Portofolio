import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import styles from './About.module.css';

const About = () => {
  const skills = {
    "Programming Languages": ["Swift", "Kotlin", "Java", "PHP", "JavaScript/TypeScript", "Python"],
    "Web & Mobile Development": ["Laravel", "SwiftUI", "Android Jetpack Compose", "React", "Next.js"],
    "Backend & Database": ["MySQL", "PostgreSQL", "Firebase", "TiDB", "Prisma", "Cloudinary"],
    "Deployment, Tools & Testing": ["Vercel", "Railway", "SwiftTesting", "XCTest", "Git"]
  };

  return (
    <PageWrapper className={styles.about}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>About Me</h1>
        <p className={styles.intro}>
          Informatics student at Universitas Ciputra Surabaya with hands-on experience in full-stack web development (Laravel, SQL), mobile development (Kotlin, SwiftUI), and applied machine learning (Python). Detail-oriented and adaptable, with a growing focus on iOS development and AI.
        </p>
      </motion.div>

      <div className={styles.grid}>
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>Universitas Ciputra Surabaya</h3>
                <span className={styles.date}>September 2024 - October 2028</span>
                <p>Informatics - Full Stack Development</p>
                <ul>
                  <li>IPK: 3.74/4.00</li>
                  <li>Related courses: Web Development (Laravel), Visual Programming (Kotlin), Mobile Apps Development (Swift), Software Engineering, and Statistics (Python).</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>SMA Katolik Santa Agnes Surabaya</h3>
                <span className={styles.date}>July 2021 - June 2024</span>
                <p>Science & Mathematics (MIPA)</p>
                <ul>
                  <li>3rd Place in Parallel Class Academic Ranking - Grade 11 & 12</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
          <div className={styles.skillsContainer}>
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className={styles.skillCategory}>
                <h3>{category}</h3>
                <div className={styles.skillTags}>
                  {items.map((skill, i) => (
                    <span key={i} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
};

export default About;
