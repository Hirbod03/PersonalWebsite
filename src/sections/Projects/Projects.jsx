// Import CSS module for styling
import styles from './ProjectsStyles.module.css'
// Import the ProjectsCard component
import ProjectsCard from '../../common/ProjectCard'
// Import images for each project
// Removed static asset imports; now loaded from API

// Projects section component
import React, { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/projects')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch projects');
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                {loading && <p>Loading projects...</p>}
                {error && <p style={{color: 'red'}}>Error: {error}</p>}
                {!loading && !error && projects.map((project, idx) => (
                    <ProjectsCard
                        key={idx}
                        src={project.src}
                        link={project.link}
                        h3={project.h3}
                        p={project.p}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects