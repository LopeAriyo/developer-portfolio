import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Swiper from "swiper"

import Blob from "../secondary/Blob"
import ProjectCard from "../secondary/ProjectsCard"

const query = graphql`
  {
    allStrapiProject(sort: { fields: publishDate, order: DESC }) {
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

  var swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  return (
    <div id="projects-index" className="banner">
      <Blob />
      <div className="carousel">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {projects.map(project => {
              return (
                <div className="swiper-slide">
                  <ProjectCard key={project.id} {...project} />
                </div>
              )
            })}
          </div>
          <br />
          <br />
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsIndex
