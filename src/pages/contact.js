import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/primary/Layout"
import SocialMediaBar from "../components/secondary/SocialMediaBar"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Lopè </title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Layout>
        <section className="contact-page">
          <div className="contact-container">
            <h1>Contact</h1>
            <p>Need to get in touch with me? I&#39;m all ears.</p>
            <br />
            <br />
            <h4>Want to send a message</h4>
            <form
              className="form-group"
              name="Contact Form"
              method="POST"
              data-netlify="true"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  rows="8"
                ></textarea>
              </div>
              <button type="submit">Email Me</button>
            </form>
            <h4>Want to meet instead?</h4>
            <Link to="/">
              <button>Meet Me</button>
            </Link>
            <h4>Other ways to connect</h4>
            <SocialMediaBar />
            <p>I can't wait to hear from you</p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default NotFoundPage
