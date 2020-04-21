import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PhoneImages = ({ display }) => {
  const phoneImg = useStaticQuery(graphql`
    query {
      developer: file(relativePath: { eq: "projects/developer-phone.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hibiscus: file(relativePath: { eq: "projects/hibiscus-phone.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="phone-image">
      {display === "Developer Portfolio" && (
        <Img fluid={phoneImg.developer.childImageSharp.fluid} alt={display} />
      )}
      {display === "Hibiscus" && (
        <Img fluid={phoneImg.hibiscus.childImageSharp.fluid} alt={display} />
      )}
    </div>
  )
}

export default PhoneImages
