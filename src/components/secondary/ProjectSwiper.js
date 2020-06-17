import React, { Component } from "react"
import Swiper from "swiper"

import ProjectCard from "./FeaturedProjectCard"

class ProjectSwiper extends Component {
  componentDidMount() {
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.props.projects.map(project => {
            return (
              <div className="swiper-slide" key={project.id}>
                <ProjectCard {...project} />
              </div>
            )
          })}
        </div>
        <br />
        <br />
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    )
  }
}

export default ProjectSwiper
