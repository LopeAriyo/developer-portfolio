import React from "react"

import { Helmet } from "react-helmet"
import Layout from "../components/primary/Layout"
import ProjectsIndex from "../components/banners/ProjectsIndex"

const ProjectsPage = () => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Lopè's Tech Projects</title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>

    <Layout>
      <ProjectsIndex />
    </Layout>
  </div>
)

export default ProjectsPage
