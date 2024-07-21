import styles from './ProjectsStyles.module.css'
import ProjectsCard from '../../common/ProjectCard'
import Todo from '../../assets/TODO.png'
import insta from '../../assets/insta.png'
import ms from '../../assets/ms.png'
import db from '../../assets/db.png'
import ta from '../../assets/ta.png'
import more from '../../assets/more.png'

function Projects() {
  return <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectsCard 
            src={Todo} 
            link="https://github.com/Hirbod03/HeroSurfer" 
            h3="HeroSurfer" 
            p="TO-DO List Chrome Extension"
        />
        <ProjectsCard 
            src={insta} 
            link="https://github.com/Hirbod03/AutoInstaUnfollow" 
            h3="AutoInstaUnfollow" 
            p="Instagram Unfollower Tool"
        />
        <ProjectsCard 
            src={db} 
            link="https://github.com/Hirbod03/TAMDB" 
            h3="TA Manager" 
            p="SQL Database for managing teacher assistants"
        />
        <ProjectsCard 
            src={ms} 
            link="https://github.com/Hirbod03/MyMinesweeper" 
            h3="Minesweeper" 
            p="Minesweeper Game"
        />
        <ProjectsCard 
            src={ta} 
            link="https://github.com/Hirbod03/Projects/tree/main/Python/Tweet%20Sentiment%20Analysis" 
            h3="Tweet Sentiment Analysis" 
            p="Happiness Analysis of Tweets"
        />
        <ProjectsCard 
            src={more} 
            link="https://github.com/Hirbod03s" 
            h3="Looking for more?" 
            p="Visit my GitHub!"
        />
    </div>
  </section>
}

export default Projects