import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Hanzelius
        </NavLink>
        <div className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
          <NavLink to="/achievements" className={({ isActive }) => isActive ? styles.active : ''}>Achievements</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
