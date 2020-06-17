import React from "react"
import GithubIcon from "../../assets/icons/social-media/github.svg"
import ExternalLinkIcon from "../../assets/icons/social-media/external-link.svg"

const BannerImage = ({ gitHub, app }) => (
  <ul className="external-project-links">
    <li className="project-link">
      <a href={app} target="_blank" rel="noopener noreferrer">
        <ExternalLinkIcon height={"60px"} width={"60px"} />
      </a>
    </li>
    <li className="project-link">
      <a href={gitHub} target="_blank" rel="noopener noreferrer">
        <GithubIcon height={"60px"} width={"60px"} />
      </a>
    </li>
  </ul>
)

export default BannerImage
