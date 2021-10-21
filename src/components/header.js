import React from "react"
import styled from "styled-components"

const SiteHeader = styled.header`
  margin-bottom: 3rem;
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    letter-spacing: 0.2rem;
    font-family: mendl-sans-dawn, sans-serif;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <SiteHeader>
      <h1 className="main-heading">{siteTitle}</h1>
    </SiteHeader>
  )
}

export default Header
