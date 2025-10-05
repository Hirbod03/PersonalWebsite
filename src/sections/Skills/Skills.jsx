// Import CSS module for styling
import styles from './SkillsStyles.module.css';
// Import checkmark icons for dark and light themes
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
// Import SkillList component to display individual skills
import SkillList from '../../common/SkillList';
// Import custom hook to get current theme
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  // Get current theme from context
  const { theme } = useTheme();
  // Select checkmark icon based on theme
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    // Main container for the Skills section
    <section id="skills" className={styles.container} aria-label="Skills section">
      {/* Section title */}
      <h1 className="sectionTitle">Skills</h1>
      {/* First group of skills */}
        <div className={styles.skillList} aria-label="Programming languages">
          <SkillList src={checkMarkIcon} skill="Java" />
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="C/C++" />
        </div>
      <hr />
      {/* Second group of skills */}
        <div className={styles.skillList} aria-label="Web technologies">
          <SkillList src={checkMarkIcon} skill="React JS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="TypeScript" />
          {/* <SkillList src={checkMarkIcon} skill="HTML/CSS" /> */}
          <SkillList src={checkMarkIcon} skill="Tailwind" />
          <SkillList src={checkMarkIcon} skill="Node.js" />
          {/* <SkillList src={checkMarkIcon} skill="Vite" /> */}
          <SkillList src={checkMarkIcon} skill="Playwright" />
          <SkillList src={checkMarkIcon} skill="SQL" />
          <SkillList src={checkMarkIcon} skill="PHP" />
        </div>
      <hr />
      {/* Third group of skills */}
        <div className={styles.skillList} aria-label="Tools">
          <SkillList src={checkMarkIcon} skill="Git/Bitbucket" />
          <SkillList src={checkMarkIcon} skill="Jira" />
          {/* <SkillList src={checkMarkIcon} skill="Slack" /> */}
          <SkillList src={checkMarkIcon} skill="Confluence" />
        </div>
    </section>
  );
}

export default Skills;
