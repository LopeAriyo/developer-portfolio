import React from "react"
import { Link } from "gatsby"
import LopeIcon from "../../assets/images/lope-icon-white.svg"

import SocialMediaBar from "../secondary/SocialMediaBar"

const sideNavbar = props => {
  let navClassName = "side-navigation"

  if (props.sideNavBarVisible) {
    navClassName = "side-navigation open"
  }
  return (
    <nav className={navClassName}>
      <div className="cross-icon" onClick={props.handleSideNavBarClose}>
        <span className="cross-icon__line"></span>
      </div>
      <div className="logo">
        <div className="logo-img">
          <Link to="/#">
            <LopeIcon
              height={"60px"}
              width={"70px"}
              fill={"rgb(236, 82, 129)"}
            />
          </Link>
        </div>
      </div>
      <div>
        <ul className="side-nav-links">
          {/* <li className="side-nav-link">
            <Link to="/#">About</Link>
          </li> */}
          <li className="side-nav-link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="side-nav-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="side-nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="spacer"></div>
      <div className="social-media">
        <SocialMediaBar />
      </div>
    </nav>
  )
}

export default sideNavbar
