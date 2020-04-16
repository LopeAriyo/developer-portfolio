import React from "react"
import { Link } from "gatsby"
import LopeIcon from "../../assets/images/lope-icon-1.svg"

const navbar = props => {
  return (
    <nav className="main-navigation">
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
        <div className="logo-text">
          <Link to="/#">Lope Ariyo</Link>
        </div>
      </div>

      <div className="spacer"></div>

      <div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/#about">About </Link>
          </li>
          <li className="nav-link">
            <Link to="/#projects">Projects </Link>
          </li>
          <li className="nav-link">
            <Link to="/#blog">Blog</Link>
          </li>
          <li className="nav-link">
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="menu-icon" onClick={props.handleSideNavBarOpen}>
        <span className="menu-icon__line"></span>
      </div>
    </nav>
  )
}

export default navbar
