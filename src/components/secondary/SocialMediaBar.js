import React from "react"
import { Link } from "gatsby"
import GithubIcon from "../../assets/icons/social-media/github.svg"
import LinkedInIcon from "../../assets/icons/social-media/linkedin.svg"
import MediumIcon from "../../assets/icons/social-media/medium.svg"
import TwitterIcon from "../../assets/icons/social-media/twitter.svg"

const BannerImage = props => (
  <div className="social-media-bar">
    <ul className="social-media-icons">
      <li className="social-media-icon">
        <Link to="/#">
          <GithubIcon height={"60px"} width={"60px"} />
          <p>LinkedIn</p>
        </Link>
      </li>
      <li className="social-media-icon">
        <Link to="/#">
          <GithubIcon height={"60px"} width={"60px"} />
          <p>Github</p>
        </Link>
      </li>
      <li className="social-media-icon">
        <Link to="/#">
          <GithubIcon height={"60px"} width={"60px"} />
          <p>Medium</p>
        </Link>
      </li>
      <li className="social-media-icon">
        <Link to="/#">
          <GithubIcon height={"60px"} width={"60px"} />
          <p>Twitter</p>
        </Link>
      </li>
    </ul>
  </div>
)

export default BannerImage
