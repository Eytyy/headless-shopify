import { graphql } from "gatsby"
import React from "react"
import ShopContainer from "../components/shop/shopContainer"

const shop = ({ data }) => {
  return <ShopContainer data={data} />
}

export default shop

export const query = graphql`
  query GetProducts {
    allSanityProduct(
      filter: { content: { main: { slug: { current: { ne: null } } } } }
    ) {
      nodes {
        id
        content: _rawContent(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`
