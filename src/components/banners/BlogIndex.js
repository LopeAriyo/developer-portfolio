import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogCard from "../secondary/BlogCard"

const blogQuery = graphql`
  {
    allDevNode(sort: { fields: id, order: DESC }) {
      nodes {
        id
        frontmatter {
          cover
          title
          description
          publish_date
        }
        preview
      }
    }
  }
`
const BlogIndex = () => {
  const {
    allDevNode: { nodes: blog },
  } = useStaticQuery(blogQuery)

  return (
    <div id="blog-index" className="banner">
      {blog.map(post => {
        return (
          <div key={post.id}>
            <BlogCard {...post} />
          </div>
        )
      })}
    </div>
  )
}

export default BlogIndex
