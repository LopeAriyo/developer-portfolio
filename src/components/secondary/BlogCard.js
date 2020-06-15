import React from "react"
import Img from "gatsby-image"
// import BlobButton from "./BlobButton"

const ProjectCard = ({ post }) => {
  //   const readingTime = readingTimeHelper(post)

  const { title, description, tags, readable_publish_date, url } = post.article

  return (
    <div className="post-card">
      <h2 className="post-title">{title}</h2>
      {post.cover && (
        <Img
          className="cover-image"
          fluid={post.cover.childImageSharp.fluid}
          // alt={data.markdownRemark.frontmatter.featuredImgAlt}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="post-excerpt">{description}</div>
      <div className="post-publish-date">{readable_publish_date}</div>
      {/* <div className="post-read-time">I'm the reading time</div> */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button>Read More</button>
      </a>
    </div>
  )
}
export default ProjectCard
