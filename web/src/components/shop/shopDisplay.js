import React from "react"
import ProductCard from "../product/card"
import { ProductsList, ProductsListItem } from "./ShopDisplay.styles"

const ShopDisplay = ({ products }) => {
  return (
    <ProductsList>
      {products.map(({ id, content }) => (
        <ProductsListItem key={id}>
          <ProductCard content={content} />
        </ProductsListItem>
      ))}
    </ProductsList>
  )
}

export default ShopDisplay
