exports.PRODUCT_QUERY = `query getProduct($id: ID!) {
  node(id: $id) {
    ... on Product {
      id
      handle
      title
      totalVariants
      images(first: 100) {
        edges {
          node {
            id
            originalSrc
          }
        }
      }
      variants(first: 100) {
        edges {
          node {
            id
            title
            price
            displayName
          }
        }
      }
      metafield(namespace: "sync", key: "productData") {
        value
        id
      }
    }
  }
}
`
