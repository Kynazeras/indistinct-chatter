import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import _ from "lodash"

import { TagHelper } from "../constants/helpers"

export const TagPage = ({ pageContext, data, location }) => {
  const tagName: string = pageContext.tag
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const helper = TagHelper[tagName]
  const { name, description, emoji } = helper
  const head = `${emoji} ${_.capitalize(name)} Posts`
  const { edges, totalCount } = data.allMdx
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={`${_.capitalize(tagName)} Posts`}
        description={`${_.capitalize(tagName)} Posts from indistinct chatter`}
      />
      <h1>{head}</h1>
      {edges.map(({ node }) => {
        console.log(node)
        const { slug } = node.fields
        const { title } = node.frontmatter
        return (
          <li key={slug}>
            <Link to={slug}>{title}</Link>
          </li>
        )
      })}
      <Bio />
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query TagByName($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
