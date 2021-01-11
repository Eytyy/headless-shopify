require("dotenv").config()

const crypto = require("crypto")
const sanityClient = require("@sanity/client")
const fetch = require("node-fetch")

const { PRODUCT_QUERY } = require("./queries")
const { preparePayload, statusReturn } = require("./helpers")
const { shopifyConfig } = require("./config")

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_TOKEN,
  SHOPIFY_SECRET,
  SHOPIFY_API_KEY,
  SHOPIFY_API_PASSWORD,
  SHOPIFY_URL,
} = process.env

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_API_TOKEN,
  useCdn: false,
})

export const handler = async event => {
  if (event.httpMethod !== "POST" || !event.body) {
    return statusReturn(400, "")
  }
  let data
  const hmac = event.headers["x-shopify-hmac-sha256"]

  try {
    data = JSON.parse(event.body)
    const hash = crypto
      .createHmac("sha256", SHOPIFY_SECRET)
      .update(event.body, "utf8", "hex")
      .digest("base64")

    if (generatedHash !== hmac) {
      return statusReturn(400, { error: "Invalid Webhook" })
    }
  } catch (error) {
    console.error("JSON parsing error:", error)
    return statusReturn(400, { error: "Bad request body" })
  }

  // Create / Update
  if (data.hasOwnProperty("title") && data.hasOwnProperty("handle")) {
    // Build our initial product
    const payload = preparePayload(PRODUCT_QUERY, {
      id: data.admin_graphql_api_id,
    })
    try {
      const product = await fetch(
        `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_PASSWORD}@${SHOPIFY_URL}/admin/api/2020-10/graphql.json`,
        {
          method: "POST",
          headers: shopifyConfig,
          data: JSON.stringify(payload),
        }
      )
      console.log(product)
      return statusReturn(200, {})
    } catch (error) {
      console.log(error)
      return statusReturn(400, {})
    }
  }
  // Delete
  else if (
    data.hasOwnProperty("id") &&
    !data.hasOwnProperty("title") &&
    !data.hasOwnProperty("handle")
  ) {
  }
}
