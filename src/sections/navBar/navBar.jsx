// Import the CSS module for styling the Navbar component
import styles from './navBarStyles.module.css';

// Define the Navbar functional component
const Navbar = () => (
  // Main navigation element with a CSS class for styling
  <nav className={styles.navbar}>
    {/* Container div for navbar content */}
    <div className={styles.navbarContainer}>
      {/* Unordered list for navigation links */}
      <ul className={styles.navList}>
        {/* Navigation items linking to different sections of the page */}
        <li><a href="#hero">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#tictactoe">Game</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

// Export the Navbar component as the default export
export default Navbar;