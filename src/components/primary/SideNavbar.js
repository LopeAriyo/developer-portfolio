import React from "react"
import { Link } from "gatsby"

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
            <img src="../../assets/images/gatsby-icon.png" />
          </Link>
        </div>
      </div>
      <div>
        <ul className="side-nav-links">
          <li className="side-nav-link">
            <Link to="/#">Link 1 </Link>
          </li>
          <li className="side-nav-link">
            <Link to="/#">Link 2 </Link>
          </li>
          <li className="side-nav-link">
            <Link to="/#">Link 3 </Link>
          </li>
          <li className="side-nav-link">
            <Link to="/#">Link 4 </Link>
          </li>
        </ul>
      </div>
      <div className="spacer"></div>
      <div className="social-media">
        This is where social media icons will go
      </div>
    </nav>
  )
}

export default sideNavbar
