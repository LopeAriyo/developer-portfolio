import React from "react"
import BannerImage from "../secondary/BannerImage"
import SocialMediaBar from "../secondary/SocialMediaBar"

const Banner = props => (
  <div className="banner">
    <div id="small-circles"></div>
    <div id="medium-circles"></div>
    <div id="large-circles"></div>
    <div className="intro">
      <p className="greeting">Hello. Bonjour. 안녕하세요.</p>
      <p className="name">Lope Ariyo</p>
      <p id="title">Fullstack Developer </p>
      <br />
      {/* <p>I love UI and design.</p> */}

      <p> Welcome to my portfolio! </p>
      {/* <SocialMediaBar iconSize={"60px"} /> */}
    </div>
    {/* <BannerImage /> */}
  </div>
)

export default Banner
