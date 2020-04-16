import React from "react"

const BlobButton = props => (
  <a href={props.slug}>
    <button className="primary-button">{props.callToAction}</button>
  </a>
)

export default BlobButton
