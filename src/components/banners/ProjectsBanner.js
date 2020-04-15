import React from "react"

const ProjectsBanner = props => (
  <div className="projects-banner">
    {/* <div id="small-squiggle"></div>
    <div id="small-squiggle"></div>
    <div id="large-squiggle"></div>
    <div id="blob"></div> */}
    <div className="section">
      <p className="title">Projects</p>
      <p className="info">
        I have a passion for mobile first and responsive design. I enjoy
        building both web apps which can be optimized to become PWAs.
        Technologies I use include Vanilla JS, React, Next.js and Gatsby.
      </p>
      <a href="#/">
        <button className="primary-button">View Projects</button>
      </a>
    </div>
  </div>
)

export default ProjectsBanner
