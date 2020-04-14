import React from "react"
import BannerImage from "../secondary/BannerImage"
import SocialMediaBar from "../secondary/SocialMediaBar"

const Banner = props => (
  <div className="banner">
    <div id="small-circles"></div>
    <div id="medium-circles"></div>
    <div id="large-circles"></div>
    <div id="extra-large-circles"></div>
    {/* <BannerImage /> */}
    <div className="intro">
      <p className="greeting">Hello. Kilonshele. 안녕하세요.</p>
      <br />
      <p className="name">Lopè Ariyo</p>
      <p className="title">Fullstack Developer </p>
      <div className="social-media">
        <SocialMediaBar />
      </div>

      <br />
      <p> Welcome to my portfolio! </p>
      {/* <p>I love UI and design.</p>  This bit will type*/}
    </div>
  </div>
)

export default Banner
