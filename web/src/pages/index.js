import { graphql } from "gatsby"
import React from "react"

import SEO from "../components/seo"

export const query = graphql`
  query productsQuery {
    products: allSanityProduct {
      nodes {
        id
        content {
          shopify {
            defaultPrice
          }
          main {
            title
            mainImage {
              ...SanityImage
            }
            slug {
              current
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <h1>Hello</h1>
    </>
  )
}

export default IndexPage
