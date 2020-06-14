import React from "react"
import Img from "gatsby-image"
// import BlobButton from "./BlobButton"

const ProjectCard = ({ post }) => {
  const url = `/${post.preview}/`
  //   const readingTime = readingTimeHelper(post)
  return (
    <div className="post-card">
      <h2 className="post-title">{post.frontmatter.title}</h2>
      {post.cover && (
        <Img
          className="cover-image"
          fluid={post.cover.childImageSharp.fluid}
          // alt={data.markdownRemark.frontmatter.featuredImgAlt}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="post-excerpt">{post.frontmatter.description}</div>
      <div className="post-publish-date">{post.frontmatter.publish_date}</div>
      <div className="post-read-time">I'm the reading time</div>
      <a href={post.preview} target="_blank" rel="noopener noreferrer">
        <button>Read More</button>
      </a>
    </div>
  )
}
export default ProjectCard
