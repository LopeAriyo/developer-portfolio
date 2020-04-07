import React from "react"
import Layout from "../components/primary/Layout"

const IndexPage = () => (
  <Layout>
    {/* <div id="wrapper">
      <Introduction />
      <Features />
      <Capabilities />
      <Contact />
    </div>*/}

    <div className="hero">
      <h1>Hero Text</h1>
    </div>
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
        vehicula sem vel ullamcorper. Nulla dictum bibendum turpis, sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        odio elementum, consectetur dolor eu, ornare massa. Nam vitae eros eget
        risus bibendum porta sed eget sem. Proin id elit eget ligula convallis
        iaculis. Donec nec ultrices lacus. Nunc tincidunt tempor porttitor.
        Aliquam ac sem justo. Proin sit amet mauris.
      </p>
    </div>
  </Layout>
)

export default IndexPage
