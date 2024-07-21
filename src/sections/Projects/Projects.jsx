import styles from './ProjectsStyles.module.css'
import Viberr from '../../assets/viberr.png'
import ProjectsCard from '../../common/ProjectCard'

function Projects() {
  return <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectsCard src={Viberr} link="https://github.com/Hirbod03/HeroSurfer" h3="Viberr" p="yap"/>
        <ProjectsCard src={Viberr} link="https://github.com/Hirbod03/HeroSurfer" h3="Viberr" p="yap"/>
        <ProjectsCard src={Viberr} link="https://github.com/Hirbod03/HeroSurfer" h3="Viberr" p="yap"/>
        <ProjectsCard src={Viberr} link="https://github.com/Hirbod03/HeroSurfer" h3="Viberr" p="yap"/>
        <ProjectsCard src={Viberr} link="https://github.com/Hirbod03/HeroSurfer" h3="Viberr" p="yap"/>
    </div>
  </section>
}

export default Projects