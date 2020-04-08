import React from "react"
import GithubIcon from "../../assets/icons/social-media/github.svg"
import LinkedInIcon from "../../assets/icons/social-media/linkedin.svg"
import MediumIcon from "../../assets/icons/social-media/medium.svg"
import TwitterIcon from "../../assets/icons/social-media/twitter.svg"
import InstagramIcon from "../../assets/icons/social-media/instagram.svg"
import DribbleIcon from "../../assets/icons/social-media/dribble.svg"

const BannerImage = props => (
  <div className="social-media-bar">
    <div className="social-media-icon">
      {" "}
      <GithubIcon height={props.iconSize} width={props.iconSize}/>
      Github
    </div>
    <div className="social-media-icon">
      {" "}
      <LinkedInIcon height={props.iconSize} width={props.iconSize}/>
      LinkedIn
    </div>

    <div className="social-media-icon">
      {" "}
      <MediumIcon height={props.iconSize} width={props.iconSize}  />
      Medium
    </div>
    <div className="social-media-icon">
      {" "}
      <TwitterIcon height={props.iconSize} width={props.iconSize} />
      Twitter
    </div>
    <div className="social-media-icon">
      {" "}
      <DribbleIcon height={props.iconSize} width={props.iconSize} />
      Dribble
    </div>
    <div className="social-media-icon">
      {" "}
      <InstagramIcon height={props.iconSize} width={props.iconSize}/>
      Instagram
    </div>
  </div>
)

export default BannerImage
