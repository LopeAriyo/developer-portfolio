import React from "react"

// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { StaticQuery, graphql } from "gatsby"

import "../../assets/sass/main.scss"

import Header from "./Header"
// import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">{children}</div>
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Layout
