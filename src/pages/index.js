import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/primary/Layout"

const IndexPage = () => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Lope Ariyo</title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>

    <Layout>
      {/* <div id="wrapper">
      <Introduction />
      <Features />
      <Capabilities />
      <Contact />
    </div>*/}
    </Layout>
  </div>
)

export default IndexPage
