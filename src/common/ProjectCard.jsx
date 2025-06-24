import React from 'react'

// ProjectCard component displays a project as a clickable card
function ProjectCard({src, link, h3, p}) {
  return (
    // Anchor tag wraps the entire card, opens link in new tab
    <a href={link} target="_blank" rel="noopener noreferrer">
      {/* Project image */}
      <img className="hover" src={src} alt="" />
      {/* Project title */}
      <h3>{h3}</h3>
      {/* Project description */}
      <p>{p}</p>
    </a>
  )
}

export default ProjectCard