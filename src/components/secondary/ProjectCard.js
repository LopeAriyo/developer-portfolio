import React from "react"
import Img from "gatsby-image"
import ProjectLinks from "../secondary/ProjectLinks"

const ProjectCard = ({
  avatar,
  category,
  title,
  description,
  technologies,
  app_link,
  github_link,
  platform,
}) => {
  return (
    <article className="project-card">
      <p className="project-platform">{platform} Development</p>
      <div className="project-avatar">
        {" "}
        <Img
          className="cover-image"
          fluid={avatar.childImageSharp.fluid}
          // alt={data.markdownRemark.frontmatter.featuredImgAlt}
        />
      </div>

      <p className="project-category">{category}</p>
      <p className="project-title">{title}</p>
      <p className="project-description">{description}</p>
      <div className="project-tech-list">
        {technologies.map(tech => {
          return <p className="project-tech">{tech.item}</p>
        })}
      </div>
      <div className="project-links">
        <ProjectLinks gitHub={github_link} app={app_link} />
        {/* <a href={app_link} target="_blank" rel="noopener noreferrer">
          <button>Details</button>
        </a> */}
      </div>
    </article>
  )
}
export default ProjectCard
