import React from "react"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
// Types
import { PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { capitalize } from "lodash"

const TagPage = ({ data, location }) => {
  const {
    allMdx: { group },
  } = data
  const {
    site: {
      siteMetadata: { title },
    },
  } = data
  return (
    <Layout location={location} title={title}>
      <Seo title="tags" description="tage" />
      <h1>Tags</h1>
      <div>
        {group.map(item => (
          <p>
            <Link to={`/tags/${item.fieldValue}`}>
              {capitalize(item.fieldValue)}
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
