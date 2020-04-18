import React from "react"
import BlobButton from "./BlobButton"
import Image from "gatsby-image"

const ProjectCard = ({
  title,
  description,
  phoneImage,
  tabletImage,
  desktopImage,
  websiteLink,
  demoLink,
  githubLink,
}) => {
  const imageOne = phoneImage.childImageSharp.fluid
  const imageTwo = tabletImage.childImageSharp.fluid
  const imageThree = desktopImage.childImageSharp.fluid

  return (
    <div className="project-card">
      <p className="project-title">{title}</p>
      <p className="project-description">{description}</p>
      <div className="device-images">
        <div className="phone-image">
          <Image fluid={imageOne} alt={title} />
        </div>
        <div className="tablet-image">
          <Image fluid={imageTwo} alt={title} />
        </div>
        <div className="desktop-image">
          <Image fluid={imageThree} alt={title} />
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
      <BlobButton />
    </div>
  )
}
export default ProjectCard
