import * as React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
// Layout
import Header from "../components/header"
// Utils
import Image from "../components/image"
import { MovieCard } from "./MovieCard"
// styled components
import styled from "styled-components"

const StyledMain = styled.div`
  /* height: 95vh; */
`

const shortCodes = { Image, MovieCard }

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <MDXProvider components={shortCodes}>
      <Header siteTitle={title} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <StyledMain>{children}</StyledMain>
        <footer className="global-footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </MDXProvider>
  )
}

export default Layout
