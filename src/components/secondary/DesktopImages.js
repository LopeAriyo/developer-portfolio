import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DesktopImages = ({ display }) => {
  const desktopImg = useStaticQuery(graphql`
    query {
      developer: file(relativePath: { eq: "projects/developer-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hibiscus: file(relativePath: { eq: "projects/hibiscus-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="desktop-image">
      {display === "Developer Portfolio" && (
        <Img fluid={desktopImg.developer.childImageSharp.fluid} alt={display} />
      )}
      {display === "Hibiscus" && (
        <Img fluid={desktopImg.hibiscus.childImageSharp.fluid} alt={display} />
      )}
    </div>
  )
}

export default DesktopImages
