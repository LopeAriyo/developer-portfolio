import React from "react"
import GithubIcon from "../../assets/icons/social-media/github.svg"
import LinkedInIcon from "../../assets/icons/social-media/linkedin.svg"
import MediumIcon from "../../assets/icons/social-media/medium.svg"
import TwitterIcon from "../../assets/icons/social-media/twitter.svg"

const BannerImage = props => (
  <div className="social-media-bar">
    <ul className="social-media-icons">
      <li className="social-media-icon">
        <a
          href="https://www.linkedin.com/in/lopeariyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon height={"60px"} width={"60px"} />

          <p>LinkedIn</p>
        </a>
      </li>
      <li className="social-media-icon">
        <a
          href="https://github.com/LopeAriyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon height={"60px"} width={"60px"} />
          <p>Github</p>
        </a>
      </li>
      <li className="social-media-icon">
        <a
          href="https://medium.com/@lope.ariyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediumIcon height={"60px"} width={"60px"} />
          <p>Medium</p>
        </a>
      </li>
      <li className="social-media-icon">
        <a
          href="https://twitter.com/lopeariyodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon height={"60px"} width={"60px"} />
          <p>Twitter</p>
        </a>
      </li>
    </ul>
  </div>
)

export default BannerImage
