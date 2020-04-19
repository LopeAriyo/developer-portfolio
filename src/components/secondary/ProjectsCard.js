import React from "react"
// import BlobButton from "./BlobButton"
import Image from "gatsby-image"

const ProjectCard = ({
  title,
  description,
  phoneImage,
  tabletImage,
  desktopImage,
  demoLink,
  websiteLink,
  githubLink,
}) => {
  const phoneImg = phoneImage.url
  const tabletImg = tabletImage.url
  const desktopImg = desktopImage.url

  return (
    <div className="project-card">
      <p className="project-title">{title}</p>
      <p className="project-description">{description}</p>
      <div className="device-images">
        <div className="phone-image">
          <img src={phoneImg} />
          {/* <Image fluid={phoneImg} alt={title} /> */}
        </div>
        <div className="tablet-image">
          <img src={tabletImg} />
          <Image fluid={tabletImg} alt={title} />
        </div>
        <div className="desktop-image">
          <img src={desktopImg} />
          {/* <Image fluid={desktopImg} alt={title} /> */}
        </div>
      </div>

      <div className="project-socials">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <p>Github</p>
        </a>
        {websiteLink ? (
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <p>Website</p>
          </a>
        ) : (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <p>Demo</p>
          </a>
        )}
      </div>
      {/* <BlobButton /> */}
    </div>
  )
}
export default ProjectCard
