import React from "react"
import BlobButton from "../secondary/BlobButton"

const ProjectsBanner = props => (
  <div id="projects-banner" className="banner">
    {/* <div id="small-squiggle"></div>
    <div id="small-squiggle"></div>
    <div id="large-squiggle"></div> */}
    <div id="wrapper">
      <div className="blob">
        <div className="ball"></div>
        <div className="ball"></div>
        {/* <div className="ball"></div> */}
      </div>

      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="18"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>

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
