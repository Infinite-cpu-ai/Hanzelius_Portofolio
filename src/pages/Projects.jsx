import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "YukDebat",
      role: "iOS Developer - Motion Archive, Case Building Notes, Gemini AI Integration",
      date: "2026",
      description: "A competitive debate application built for iOS using Swift and SwiftUI. Engineered a complex Case Building Notes system integrating Gemini AI for motion generation. Implemented Optimistic UI updates to prevent memory leaks with Firestore snapshot listeners and created a seamless transition from private drafts to public community notes.",
      features: [
        "Architected Protocol-Oriented data models before UI to ensure clean state management.",
        "Integrated Gemini AI for automated debate motion generation.",
        "Resolved hidden memory leaks with proper Firestore snapshot lifecycle management.",
        "Built a real-time experience governed by an admin-aware UI."
      ],
      tags: ["Swift", "SwiftUI", "Firebase", "Gemini AI", "MVVM"],
      github: "https://github.com/Jeruk-Kurej/YukDebat"
    },
    {
      title: "Ruang Temu",
      role: "Full-Stack Developer (Solo Project)",
      date: "March - June 2026",
      description: "A marketplace platform connecting clients with architects. Architected an end-to-end full-stack web app focusing on a Real-Time Communication System with delivery and read receipts powered by WebSockets via Laravel Reverb.",
      features: [
        "Engineered real-time chat with three-state read receipts (sent, delivered, read) and a Quick Ask live board for guests.",
        "Implemented a centralized Architect Dashboard with dynamic profile listings and financial metrics aggregation.",
        "Integrated Midtrans payment gateway via webhook controller for seamless transactions.",
        "Optimized database queries with eager loading to resolve N+1 problems."
      ],
      tags: ["Laravel", "PHP", "WebSockets", "TiDB", "Cloudinary", "Vercel"],
      github: "https://github.com/Infinite-cpu-ai/ruang_temu",
      link: "https://ruang-temu-gold.vercel.app"
    },
    {
      title: "Dagify",
      role: "Dashboard & Cashflow Developer",
      date: "2026",
      description: "An all-in-one food and beverage management iOS application. Built the Cashflow module for instant profit tracking, trend visualization, and professional PDF report generation.",
      features: [
        "Utilized Protocol-Oriented Programming (POP) for testable ViewModels and decoupled business logic.",
        "Engineered a cross-month navigation system with zero manual state synchronization.",
        "Designed a hybrid Swift UI/UIKit solution to fix native iOS PDF page orientation bugs."
      ],
      tags: ["Swift", "SwiftUI", "Firebase", "UIKit", "POP"],
      github: "https://github.com/Jeruk-Kurej/Dagify"
    },
    {
      title: "CV. Lambang Karya Indah",
      role: "Web Developer (Team Project)",
      date: "November 2025 - Present",
      description: "A modern company profile website with a custom Content Management System (CMS) and responsive page layouts.",
      features: [
        "Co-architected database design and frontend implementation.",
        "Structured application logic for efficient content delivery.",
        "Enforced version control best practices for team collaboration."
      ],
      tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
      github: "https://github.com/TanggaRusakk/LKI"
    }
  ];

  return (
    <PageWrapper className={styles.projects}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Featured Projects</h1>
        <p>A selection of my recent work in web and mobile development.</p>
      </motion.div>

      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </PageWrapper>
  );
};

export default Projects;
