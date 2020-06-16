import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/primary/Layout"
import { Link } from "gatsby"
import Blob from "../components/secondary/Blob"

const NotFoundPage = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thank you! </title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Layout>
        <main className="error-page">
          <Blob />
          <div className="error-container">
            <h1>Nice...</h1>
            <h4> I've got your email! </h4>
            <p>I'll be in touch shortly.</p>
            <Link to="/">
              <button>Back Home</button>
            </Link>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default NotFoundPage
