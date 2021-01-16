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

exports.PRODUCT_UPDATE = `mutation productMetaUpdate($input: ProductInput!) {
  productUpdate(input: $input) {
    product {
      metafields(first: 100) {
        edges {
          node {
            id
            namespace
            key
            value
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
  `
