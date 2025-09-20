import styles from './HeroStyles.module.css'
// import heroImg from '../../assets/hero-anime.png'
// eslint-disable-next-line no-unused-vars
import img from '../../assets/gd-md.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.png'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg' 
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext.jsx'  

function Hero() {
    // Get current theme and toggle function from context
    const {theme, toggleTheme} = useTheme();

    // Select icons based on current theme
    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark

    return (
    <div className={`${styles.container} heroSection`}>
        {/* Main hero section */}
        <section id = "hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                {/* Profile image */}
                <img 
                    className={styles.hero} 
                    src= {img} 
                    alt="profile-image"
                />
                {/* Theme toggle icon */}
                <img 
                    className = {styles.colorMode}
                    src ={themeIcon} 
                    alt="light/dark-mode-selector"
                    onClick={toggleTheme}
                />
            </div> 
            <div className={styles.info}>
                {/* Name and title */}
                <h1>Hirbod<br/>Hosseini</h1>
                <h2>Software Developer</h2>
                {/* Social icons */}
                <span>
                    <a href="https://www.linkedin.com/in/hirbod03/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn-Icon" />
                    </a>
                    <a href="https://github.com/Hirbod03" target="_blank">
                        <img src={githubIcon} alt="GitHub-Icon" />  
                    </a>
                </span>
                {/* Short description */}
                <p className={styles.description}>
                    I like building cool stuff while listening to music and drinking excessive amounts of coffee.
                </p>
                {/* Resume download button */}
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
