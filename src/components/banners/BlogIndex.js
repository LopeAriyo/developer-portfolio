import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogCard from "../secondary/BlogCard"

const blogQuery = graphql`
  {
    allDevNode {
      nodes {
        id
        frontmatter {
          cover
          title
          publish_date
          description
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
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
      <section className="blog-feed">
        {blog.map(post => {
          return <BlogCard key={post.id} post={post} />
        })}
      </section>
    </div>
  )
}

export default BlogIndex
