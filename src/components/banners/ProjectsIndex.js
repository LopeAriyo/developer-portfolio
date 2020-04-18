import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Blob from "../secondary/Blob"
import ProjectCard from "../secondary/ProjectsCard"

const query = graphql`
  {
    allStrapiProject(sort: { fields: Published, order: DESC }) {
      nodes {
        id
        title
        description
        phoneImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tabletImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        githubLink
        websiteLink
        demoLink
      }
    }
  }
`

const ProjectsIndex = () => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <div id="projects-index" className="banner">
      <Blob />
      <div className="carousel">
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default ProjectsIndex
