import React from "react"
import styled from "styled-components"

interface FlexProps {
  justifyContent?: string
  alignItems?: string
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`
