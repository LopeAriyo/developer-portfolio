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
          <GithubIcon height={props.iconSize} width={props.iconSize} />
          <p>LinkedIn</p>
        </Link>
      </li>
      <li className="social-media-icon">
        <Link to="/#">
          <GithubIcon height={props.iconSize} width={props.iconSize} />
          <p>Github</p>
        </Link>
      </li>
      <li className="social-media-icon">
        <Link to="/#">
          <GithubIcon height={props.iconSize} width={props.iconSize} />
          <p>Medium</p>
        </Link>
      </li>
      <li className="social-media-icon">
        <Link to="/#">
          <GithubIcon height={props.iconSize} width={props.iconSize} />
          <p>Twitter</p>
        </Link>
      </li>
    </ul>
  </div>
)

export default BannerImage
