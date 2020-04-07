import React from "react"
import { Link } from "gatsby"

const navbar = props => (
  <nav>
    <div className="logo">
      <Link to="/#">Logo</Link>
    </div>
    <input type="checkbox" className="menu-btn" id="menu-btn" />
    <label htmlFor="menu-btn" className="menu-icon">
      <span className="menu-icon__line"></span>
    </label>

    <div className="navigation">
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
    <div className="hamburger">
      {/* <HamburgerIcon handleClick={props.handleHamburgerClick} /> */}
    </div>
  </nav>
)

export default navbar
