import React from "react"
// import BlobButton from "./BlobButton"
import PhoneImages from "./PhoneImages"
import TabletImages from "./TabletImages"
import DesktopImages from "./DesktopImages"

const ProjectCard = ({
  title,
  description,
  demoLink,
  websiteLink,
  githubLink,
}) => {
  // const phoneImg = phoneImage.childImageSharp.fluid
  // const tabletImg = tabletImage.childImageSharp.fluid
  // const desktopPath = "projects/developer-desktop.png"

  return (
    <div className="project-card">
      <p className="project-title">{title}</p>
      <p className="project-description">{description}</p>
      <div className="device-images">
        <PhoneImages display={title} />
        <TabletImages display={title} />

        <DesktopImages display={title} />
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
