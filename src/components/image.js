import React from "react"
// styled-components
import styled from "styled-components"

const ConfigurableImage = styled.img`
  width: ${({ width }) => `${width}px`};
`

const Image = ({ imageSrc, width }) => {
  return <ConfigurableImage src={imageSrc} width={width} />
}

export default Image
