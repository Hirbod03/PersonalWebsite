import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-dark.svg'
import githubIcon from '../../assets/github-dark.svg' 

function Hero() {
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
            />
        </div> 
        <div className={styles.info}>
            <h1>Hirbod<br />Hosseini</h1>
            <h2>Software Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/hirbod03/" target="_blank">
                    <img src={twitterIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/Hirbod03" target="_blank">
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
            </span>
        </div>
    </section>
  )
}

export default Hero