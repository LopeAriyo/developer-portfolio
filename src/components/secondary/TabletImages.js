import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TabletImages = ({ display }) => {
  const tabletImg = useStaticQuery(graphql`
    query {
      developer: file(relativePath: { eq: "projects/developer-tablet.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hibiscus: file(relativePath: { eq: "projects/hibiscus-tablet.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="tablet-image">
      {display === "Developer Portfolio" && (
        <Img fluid={tabletImg.developer.childImageSharp.fluid} alt={display} />
      )}
      {display === "Hibiscus" && (
        <Img fluid={tabletImg.hibiscus.childImageSharp.fluid} alt={display} />
      )}
    </div>
  )
}

export default TabletImages
