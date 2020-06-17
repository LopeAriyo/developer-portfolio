import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "../../components/secondary/ProjectCard"

const projectQuery = graphql`
  {
    allStrapiProject(sort: { fields: publishDate, order: DESC }) {
      nodes {
        id
        title
        description
        githubLink
        websiteLink
        demoLink
      }
    }
  }
`

const ProjectsIndex = () => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(projectQuery)

  return (
    <div id="projects-index" className="banner">
      <h1 className="page-title">Projects</h1>

      <section className="project-portfolio">
        {/* {project.map(post => {
          return <ProjectCard key={post.id} post={post} />
        })} */}

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </div>
  )
}

export default ProjectsIndex
