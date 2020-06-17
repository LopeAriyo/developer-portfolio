import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectSwiper from "../secondary/ProjectSwiper"

import Blob from "../secondary/Blob"
import BlobButton from "../secondary/BlobButton"

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

const ProjectsBanner = props => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(projectQuery)

  return (
    <div id="projects-banner" className="banner">
      {/* <div id="small-squiggle"></div>
    <div id="small-squiggle"></div>
    <div id="large-squiggle"></div> */}
      <Blob />

      <div className="section">
        <p className="title">Projects</p>
        <p className="info">
          I have a passion for mobile first and responsive design. I enjoy
          building web apps which can be optimized to become PWAs. Technologies
          I use include Ruby on Rails, Vanilla JS, React.js, and Gatsby.
        </p>
        <h4>Featured</h4>
        <section className="carousel">
          <ProjectSwiper projects={projects} />
        </section>
        <BlobButton slug="projects" callToAction="View Projects" />
      </div>
    </div>
  )
}
export default ProjectsBanner
