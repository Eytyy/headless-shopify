import React from "react"
import { graphql } from "gatsby"
import ProductHero from "../components/product/hero"

const Product = ({ data, errors }) => {
  const product = data && data.product
  const {
    content: { main, shopify },
  } = product
  return (
    <div>
      <ProductHero main={main} product={shopify} />
    </div>
  )
}

export const query = graphql`
  query GetProduct($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      id
      content: _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`

export default Product
