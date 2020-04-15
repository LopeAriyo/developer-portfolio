import React from "react"
import SocialMediaBar from "../secondary/SocialMediaBar"

const Landing = props => (
  <div className="landing">
    <div id="small-circles"></div>
    <div id="medium-circles"></div>
    <div id="large-circles"></div>
    <div id="extra-large-circles"></div>
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
    </div>
  </div>
)

export default Landing
