import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import styles from './Achievements.module.css';

const Achievements = () => {
  const awards = [
    {
      title: "1st Place - Best Social Media, PKM-PM",
      description: "Program Kreativitas Mahasiswa. National competition hosted externally, participated across all Indonesian universities.",
      date: "2025"
    },
    {
      title: "2nd Place - Management Days 10 Business Plan Competition",
      description: "Theme: Strengthening Entrepreneurship through AI Implementation | National level",
      date: "2026"
    },
    {
      title: "2nd Place - Morafest Business Plan Competition",
      description: "Theme: \"Empowering Minds, Advancing Ideas, Transforming the Future\" | National level",
      date: "2026"
    }
  ];

  const orgs = [
    {
      title: "Student Union of Informatics (SU IMT)",
      role: "Secretary General (Sekretaris Jenderal)",
      date: "June 2026 - Present",
      points: [
        "Oversaw administrative systems, correspondence, documentation, and meeting records for the department's student union.",
        "Coordinated between divisions to ensure timely completion of proposals and activity reports."
      ]
    },
    {
      title: "Universitas Ciputra Debate Society (UCDS)",
      role: "Head of Department - Treasurer",
      date: "September 2025 - June 2026",
      points: [
        "Managed the organization's financial records, budget planning, and fund disbursement for all UCDS activities.",
        "Coordinated with the executive board to ensure transparent and efficient financial operations."
      ]
    }
  ];

  return (
    <PageWrapper className={styles.achievements}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Achievements & Experience</h1>
        <p>Awards, competitions, and organizational leadership roles.</p>
      </motion.div>

      <div className={styles.content}>
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Awards & Achievements</h2>
          <div className={styles.list}>
            {awards.map((award, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{award.title}</h3>
                  <span className={styles.date}>{award.date}</span>
                </div>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Organizational Experience</h2>
          <div className={styles.list}>
            {orgs.map((org, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{org.title}</h3>
                  <span className={styles.date}>{org.date}</span>
                </div>
                <h4 className={styles.role}>{org.role}</h4>
                <ul>
                  {org.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
};

export default Achievements;
