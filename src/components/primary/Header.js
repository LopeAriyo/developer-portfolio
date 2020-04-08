import React from "react"
import Navbar from "./Navbar"
import SideNavbar from "./SideNavbar"

const Header = props => (
  <header className="main-header">
    <Navbar handleSideNavBarOpen={props.handleSideNavBarClick} />
    <SideNavbar
      sideNavBarVisible={props.sideNavBarVisible}
      handleSideNavBarClose={props.handleSideNavBarClick}
    />
  </header>
)

export default Header
