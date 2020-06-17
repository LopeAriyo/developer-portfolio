import React from "react"

const ProjectCard = ({
  category,
  title,
  description,
  technologies,
  app_link,
  github_link,
}) => {
  const testTech = ["React", "Node", "Netlify", "Heroku"]

  return (
    <div className="project-card">
      <div className="project-avatar"></div>
      <p className="project-category">Web App</p>
      <p className="project-title">Yemoja</p>
      <p className="project-description">A period tracking app</p>
      <div className="project-tech-list">
        {testTech.map(tech => {
          return <p className="project-tech">{tech}</p>
        })}
      </div>
      <div className="project-links">
        <div className="external-project-links">
          <a href={github_link} target="_blank" rel="noopener noreferrer">
            <p>GH</p>
          </a>
          <a href={app_link} target="_blank" rel="noopener noreferrer">
            <p>W</p>
          </a>
        </div>
        <a href={app_link} target="_blank" rel="noopener noreferrer">
          <button>Details</button>
        </a>
      </div>
    </div>
  )
}
export default ProjectCard
