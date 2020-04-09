import React from "react"
import BannerImage from "../secondary/BannerImage"
import SocialMediaBar from "../secondary/SocialMediaBar"

const Banner = props => (
  <div className="banner">
    <div id="small-circles"></div>
    <div id="medium-circles"></div>
    <div id="large-circles"></div>
    {/* <BannerImage /> */}
    <div className="intro">
      <p className="greeting">Hello. Bonjour. 안녕하세요.</p>
      <p className="name">Lope Ariyo</p>
      <p className="title">Fullstack Developer </p>
      <SocialMediaBar iconSize={"60px"} />
      <br />
      <p> Welcome to my portfolio! </p>
      {/* <p>I love UI and design.</p>  This bit will type*/}
    </div>
  </div>
)

export default Banner
