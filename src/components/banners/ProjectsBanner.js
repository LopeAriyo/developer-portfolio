import React from "react"
import Blob from "../secondary/Blob"
import BlobButton from "../secondary/BlobButton"

const ProjectsBanner = props => (
  <div id="projects-banner" className="banner">
    {/* <div id="small-squiggle"></div>
    <div id="small-squiggle"></div>
    <div id="large-squiggle"></div> */}
    <Blob />

    <div className="section">
      <p className="title">Projects</p>
      <p className="info">
        I have a passion for mobile first and responsive design. I enjoy
        building both web apps which can be optimized to become PWAs.
        Technologies I use include Vanilla JS, React, Next.js and Gatsby.
      </p>
      <BlobButton slug="projects" callToAction="View Projects" />
    </div>
  </div>
)

export default ProjectsBanner
