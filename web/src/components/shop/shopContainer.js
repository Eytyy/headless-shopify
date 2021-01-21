import React from "react"
import ShopDisplay from "./shopDisplay"

const ShopContainer = ({ data }) => {
  return <ShopDisplay products={data.allSanityProduct.nodes} />
}

export default ShopContainer
