import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.png'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg' 
// import leetcodeIconLight from '../../assets/leetcode-light.png'
// import leetcodeIconDark from '../../assets/leetcode-dark.png'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext.jsx'  

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark
    // const leetcodeIcon = theme == 'light' ? leetcodeIconLight : leetcodeIconDark

    return (
    <div className={`${styles.container} heroSection`}>
        <section id = "hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src= {heroImg} 
                    alt="profile-image"
                />
                <img 
                    className = {styles.colorMode}
                    src ={themeIcon} 
                    alt="light/dark-mode-selector"
                    onClick={toggleTheme}
                />
            </div> 
            <div className={styles.info}>
                <h1>Hirbod<br/>Hosseini</h1>
                <h2>Software Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/hirbod03/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn-Icon" />
                    </a>
                    <a href="https://github.com/Hirbod03" target="_blank">
                        <img src={githubIcon} alt="GitHub-Icon" />
                    </a>
                    {/* <a href="https://leetcode.com/u/Hirbod/" target="_blank">
                        <img src={leetcodeIcon} alt="LeetCode-Icon" />
                    </a> */}
                </span>
                <p className={styles.description}>
                CS Student skilled in React, Node, Java and SQL.
                Always seeking new challenges to learn alongside experienced professionals.
                </p>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    </div>)
}

export default Hero
