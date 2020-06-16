import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProjectSwiper from "../secondary/ProjectSwiper"

import Blob from "../secondary/Blob"

// tabletImage {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid_withWebp
//     }
//   }
// }
// desktopImage {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid_withWebp
//     }
//   }
// }

const projectQuery = graphql`
  {
    allStrapiProject(sort: { fields: publishDate, order: DESC }) {
      nodes {
        id
        title
        description
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
  } = useStaticQuery(projectQuery)

  return (
    <div id="projects-index" className="banner">
      <Blob />
      <h1 className="page-title">Projects</h1>
      <section className="carousel">
        <ProjectSwiper projects={projects} />
      </section>
    </div>
  )
}

export default ProjectsIndex
