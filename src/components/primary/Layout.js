import React, { Component } from "react"

// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { StaticQuery, graphql } from "gatsby"

import "../../assets/sass/main.scss"

import Header from "./Header"
import Banner from "./Banner"
// import Footer from "./Footer"

class Layout extends Component {
  state = {
    sideNavigationVisible: false,
  }

  handleSideNavigationToggle = () => {
    this.setState(prevState => {
      return { sideNavigationVisible: !prevState.sideNavigationVisible }
    })
  }
  render() {
    return (
      <React.Fragment>
        <Header
          sideNavBarVisible={this.state.sideNavigationVisible}
          handleSideNavBarClick={this.handleSideNavigationToggle}
        />
        <div className="wrapper">{this.props.children}</div>
        <Banner />
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default Layout
