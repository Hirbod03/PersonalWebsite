import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C/C++" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS/SCSS" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Vite" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="PHP" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git/Bitbucket" />
        <SkillList src={checkMarkIcon} skill="Jira" />
        <SkillList src={checkMarkIcon} skill="Confluence" />
        <SkillList src={checkMarkIcon} skill="Unix/Linux" />
        <SkillList src={checkMarkIcon} skill="Visual Studio" />
      </div>
    </section>
  );
}

export default Skills;
