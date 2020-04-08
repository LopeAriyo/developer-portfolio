import React from "react"
import { Link } from "gatsby"
import LopeIcon from "../../assets/images/lope-icon-2.svg"

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

      <div className="menu-icon" onClick={props.handleSideNavBarOpen}>
        <span className="menu-icon__line"></span>
      </div>
    </nav>
  )
}

export default navbar
