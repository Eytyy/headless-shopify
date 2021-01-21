async function createProducts(
  pathPrefix = "/products",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProduct(
        filter: { content: { main: { slug: { current: { ne: null } } } } }
      ) {
        nodes {
          id
          content {
            main {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const products = (result.data.allSanityProduct || {}).nodes || []
  products.forEach(product => {
    const {
      id,
      content: {
        main: { slug = {} },
      },
    } = product

    const path = `${pathPrefix}/${slug.current}/`
    reporter.info(`Creating Product: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/product.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProducts("/products", graphql, actions, reporter)
}
