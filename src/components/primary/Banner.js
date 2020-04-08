import React from "react"
import BannerImage from "../secondary/BannerImage"
import SocialMediaBar from "../secondary/SocialMediaBar"

const Banner = props => (
  <div className="banner">
    <BannerImage />
    <div className="name">Lope Ariyo</div>
    <SocialMediaBar iconSize={"60px"} />
    <div>
      Hi, I'm a full stack developer with a passion for UI and design. Welcome
      to my portfolio.{" "}
    </div>
  </div>
)

export default Banner
