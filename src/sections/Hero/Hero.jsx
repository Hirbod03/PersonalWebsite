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
        <section id="hero" className={styles.container} aria-label="Hero section">
            <div className={styles.colorModeContainer}>
                {/* Profile image */}
                <img 
                    className={styles.hero} 
                    src={img} 
                    alt="Profile image of Hirbod Hosseini"
                    loading="lazy"
                />
                {/* Theme toggle icon */}
                <img 
                    className={styles.colorMode}
                    src={themeIcon} 
                    alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    onClick={toggleTheme}
                    role="button"
                    aria-label="Toggle color mode"
                    tabIndex={0}
                    onKeyPress={e => { if (e.key === 'Enter') toggleTheme(); }}
                />
            </div> 
            <div className={styles.info}>
                {/* Name and title */}
                <h1>Hirbod<br/>Hosseini</h1>
                <h2>Software Developer</h2>
                {/* Social icons */}
                <span>
                    <a href="https://www.linkedin.com/in/hirbod03/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <img src={linkedinIcon} alt="LinkedIn icon" loading="lazy" />
                    </a>
                    <a href="https://github.com/Hirbod03" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                        <img src={githubIcon} alt="GitHub icon" loading="lazy" />  
                    </a>
                </span>
                {/* Short description */}
                <p className={styles.description}>
                    I like building cool stuff while listening to music and drinking excessive amounts of coffee.
                </p>
                {/* Resume download button */}
                <a href={CV} download aria-label="Download resume">
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    </div>)
}

export default Hero
