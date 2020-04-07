import React from "react"
import { Link } from "gatsby"

const navbar = props => (
  <nav className="main-navigation">
    <div className="logo">
      <div className="logo-img">
        <Link to="/#">
          <img src="../../assets/images/gatsby-icon.png" />
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
          <Link to="/#">Link 1 </Link>
        </li>
        <li className="nav-link">
          <Link to="/#">Link 2 </Link>
        </li>
        <li className="nav-link">
          <Link to="/#">Link 3</Link>
        </li>
        <li className="nav-link">
          <Link to="/#">Link 4 </Link>
        </li>
      </ul>
    </div>

    <div className="menu-icon">
      <span className="menu-icon__line"></span>
    </div>
  </nav>
)

export default navbar
