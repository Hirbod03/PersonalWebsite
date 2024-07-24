import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.png'
import linkedInIconLight from '../../assets/linkedin-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedInIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg' 
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext.jsx'  

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark
    const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark

    return (
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
                    <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/Hirbod03" target="_blank">
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
            </span>
            <p className={styles.description}>
            Experienced in developing various software using Java, Python and SQL. Looking for new opportunities and challenges.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
    )
}

export default Hero
