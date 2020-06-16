import React from "react"

import { Helmet } from "react-helmet"
import Layout from "../components/primary/Layout"
import BlogIndex from "../components/banners/BlogIndex"

const BlogPage = () => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Lopè's Tech Blog </title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
    <Layout>
      <BlogIndex />
    </Layout>
  </div>
)

export default BlogPage
