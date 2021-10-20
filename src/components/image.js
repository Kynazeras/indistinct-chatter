import React from "react"

const Image = ({ imageSrc, width }) => {
  const widthStyle = `${width}px`
  return <img src={imageSrc} style={{ width: widthStyle }} />
}

export default Image
