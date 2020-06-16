import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogCard from "../secondary/BlogCard"

const blogQuery = graphql`
  {
    allDevArticles {
      nodes {
        id
        article {
          tags
          title
          description
          readable_publish_date
          url
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const BlogIndex = () => {
  const {
    allDevArticles: { nodes: blog },
  } = useStaticQuery(blogQuery)

  return (
    <div id="blog-index" className="banner">
      <h1 className="page-title">Blog</h1>
      <section className="blog-feed">
        {blog.map(post => {
          return <BlogCard key={post.id} post={post} />
        })}
      </section>
    </div>
  )
}

export default BlogIndex
