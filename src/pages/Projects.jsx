import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

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
      github: "https://github.com/Jeruk-Kurej/YukDebat",
      image: "/assets/projects/yukdebat.png"
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
      link: "https://ruang-temu-gold.vercel.app",
      image: "/assets/projects/ruangtemu.png"
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
      github: "https://github.com/Jeruk-Kurej/Dagify",
      image: "/assets/projects/dagify.png"
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
      github: "https://github.com/TanggaRusakk/LKI",
      image: "/assets/projects/lki.png"
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

      <AnimatePresence>
        {selectedIndex === null ? (
          <motion.div 
            key="grid"
            className={styles.grid}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
          >
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProjectCard 
                  {...project} 
                  layoutId={`project-${idx}`}
                  onClick={() => {
                    setSelectedIndex(idx);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            className={styles.detailContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
          >
            <div className={styles.detailHeader}>
              <button 
                className={styles.closeBtn} 
                onClick={() => setSelectedIndex(null)}
                aria-label="Close detail view"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className={styles.detailBody}>
              <button 
                className={`${styles.navBtn} ${selectedIndex === 0 ? styles.disabled : ''}`}
                onClick={() => setSelectedIndex(prev => Math.max(0, prev - 1))}
                disabled={selectedIndex === 0}
                aria-label="Previous project"
              >
                <ChevronLeft size={36} />
              </button>
              
              <div className={styles.detailCardWrapper}>
                <ProjectCard 
                  {...projects[selectedIndex]} 
                  isExpanded={true} 
                  layoutId={`project-${selectedIndex}`}
                />
              </div>
              
              <button 
                className={`${styles.navBtn} ${selectedIndex === projects.length - 1 ? styles.disabled : ''}`}
                onClick={() => setSelectedIndex(prev => Math.min(projects.length - 1, prev + 1))}
                disabled={selectedIndex === projects.length - 1}
                aria-label="Next project"
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Projects;
