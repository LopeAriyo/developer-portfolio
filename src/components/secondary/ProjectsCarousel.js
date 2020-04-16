import React from "react"
import BlobButton from "../secondary/BlobButton"

const ProjectCarousel = props => (
  <div className="carousel">
    {/* <Mockup projectScreenshots={props.project.screenshots} /> */}
    <p className="project-title">yemoja.</p>
    {/* <p className="project-title">{props.project.title}</p> */}
    <p className="project-description">
      A period tracking app created using Python and React Native.{" "}
    </p>
    {/* <p className="project-description">{props.project.description}</p> */}
    <BlobButton slug="/projects/#" callToAction="Show Details" />
    {/* <BlobButton slug={props.project.slug} callToAction="Show Details" /> */}
    {/* <ProjectSocials gitHub={props.project.githubLink} App={props.project.appLink}/> */}
  </div>
)

export default ProjectCarousel
