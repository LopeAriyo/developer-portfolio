import React from "react"
import Layout from "../components/primary/Layout"
import { Link } from "gatsby"
import Blob from "../components/secondary/Blob"

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="error-page">
        <Blob />
        <div className="error-container">
          <h1>Ooops...</h1>
          <h4> 404 - Page not found! </h4>
          <p>
            Sorry but the page you are looking for doesn&#39;t exist, may have
            been removed, name changed or is temporarily unavailable.
          </p>
          <Link to="/">
            <button>Back Home</button>
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
