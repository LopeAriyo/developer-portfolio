import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/primary/Layout"
import { Link } from "gatsby"
import Blob from "../components/secondary/Blob"

const MeetingConfirmationPage = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Meeting Confirmed! </title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Layout>
        <main className="error-page">
          <Blob />
          <div className="error-container">
            <h1>Nice...</h1>
            <h4> Our meeting is set!</h4>
            <p>I'm looking forward to our conversation.</p>
            <Link to="/">
              <button>Back Home</button>
            </Link>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default MeetingConfirmationPage
