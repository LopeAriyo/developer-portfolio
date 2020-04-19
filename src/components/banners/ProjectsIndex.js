import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProjectSwiper from "../secondary/ProjectSwiper"

import Blob from "../secondary/Blob"

// const query = graphql`
//   {
//     allStrapiProject(sort: { fields: publishDate, order: DESC }) {
//       nodes {
//         tabletImage {
//            childImageSharp {
//              fluid {
//                  ...GatsbyImageSharpFluid_withWebp
//              }
//            }
//        }
//       }
//     }
//   }
// `

const query = graphql`
  {
    allStrapiProject(sort: { fields: publishDate, order: DESC }) {
      nodes {
        id
        title
        description
        githubLink
        websiteLink
        demoLink
        phoneImage {
          url
        }
        tabletImage {
          url
        }
        desktopImage {
          url
        }
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
        <ProjectSwiper projects={projects} />
      </div>
    </div>
  )
}

export default ProjectsIndex
