import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "../../components/secondary/ProjectCard"

// allStrapiProject(sort: { fields: publishDate, order: DESC }) {

const projectQuery = graphql`
  {
    allStrapiProject(sort: { order: DESC, fields: createdAt }) {
      nodes {
        id
        avatar {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
        title
        description
        technologies {
          item
        }
        github_link
        app_link
        platform
      }
    }
  }
`

const ProjectsIndex = () => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(projectQuery)

  return (
    <div id="projects-index" className="banner">
      <h1 className="page-title">Projects</h1>

      <section className="project-portfolio">
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </section>
    </div>
  )
}

export default ProjectsIndex
