import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/primary/Layout"
import Landing from "../components/banners/Landing"
// import ProjectsBanner from "../components/banners/ProjectsBanner"

const IndexPage = props => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lopè Ariyo - Fullstack Developer</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <Layout>
        <Landing />
        {/* <div id="wrapper"> */}
        {/* <AboutBanner /> */}
        {/* <ProjectsBanner /> */}
        {/* <BlogBanner/> */}
        {/* <Contact /> */}
        {/* </div>*/}
      </Layout>
    </div>
  )
}

export default IndexPage
