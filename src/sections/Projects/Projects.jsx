// Import CSS module for styling
import styles from './ProjectsStyles.module.css'
// Import the ProjectsCard component
import ProjectsCard from '../../common/ProjectCard'
// Import images for each project
import Todo from '../../assets/TODO.png'
import insta from '../../assets/insta.png'
import ms from '../../assets/ms.png'
import db from '../../assets/db.png'
import ta from '../../assets/ta.png'
import more from '../../assets/more.png'

// Projects section component
function Projects() {
    return (
        // Section container with an id for navigation
        <section id="projects" className={styles.container}>
            {/* Section title */}
            <h1 className="sectionTitle">Projects</h1>
            {/* Container for all project cards */}
            <div className={styles.projectsContainer}>
                {/* Individual project cards with props for image, link, title, and description */}
                <ProjectsCard 
                    src={Todo} 
                    link="https://github.com/Hirbod03/HeroSurfer" 
                    h3="HeroSurfer" 
                    p="Chrome Extension"
                />
                <ProjectsCard 
                    src={insta} 
                    link="https://github.com/Hirbod03/AutoInstaUnfollow" 
                    h3="AutoInstaUnfollow" 
                    p="Instagram Tool"
                />
                <ProjectsCard 
                    src={db} 
                    link="https://github.com/Hirbod03/TAMDB" 
                    h3="TA Manager" 
                    p="SQL Database"
                />
                <ProjectsCard 
                    src={ms} 
                    link="https://github.com/Hirbod03/MyMinesweeper" 
                    h3="Minesweeper" 
                    p="Classic Game"
                />
                <ProjectsCard 
                    src={ta} 
                    link="https://github.com/Hirbod03/Projects/tree/main/Python/Tweet%20Sentiment%20Analysis" 
                    h3="Sentiment Analysis" 
                    p="Tweet analysis"
                />
                <ProjectsCard 
                    src={more} 
                    link="https://github.com/Hirbod03" 
                    h3="Looking for more?" 
                    p="Visit my GitHub!"
                />
            </div>
        </section>
    )
}

export default Projects