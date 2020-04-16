import React from "react"

const Blob = props => (
  <div id="wrapper">
    <div className="blob">
      <div className="ball"></div>
      <div className="ball"></div>
      {/* <div className="ball"></div> */}
    </div>

    <svg>
      <defs>
        <filter id="filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
            result="filter"
          />
          <feComposite in="SourceGraphic" in2="filter" operator="atop" />
        </filter>
      </defs>
    </svg>
  </div>
)

export default Blob
