import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedInIconLight from '../../assets/linkedin-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedInIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg' 
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/themeContext.jsx'  

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark
    const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark

    return (
    <section id = "hero">
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.Hero} 
                src= {heroImg} 
                alt="looking for something?"
            />
            <img 
                className = {styles.colorMode}
                src ={themeIcon} 
                alt="hmm, light or dark mode?"
                onClick={toggleTheme}
            />
        </div> 
        <div className={styles.info}>
            <h1>Hirbod<br />Hosseini</h1>
            <h2>Software Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/hirbod03/" target="_blank">
                    <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/Hirbod03" target="_blank">
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
            </span>
            <p>
                I'm a software developer with a passion for creating meaningful and impactful projects. 
                I'm always looking for new opportunities to learn and grow.
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