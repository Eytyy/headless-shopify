import { Link } from "gatsby"
import React from "react"
import Figure from "../figure"

const ProductCard = ({ content: { shopify, main } }) => {
  const { title, mainImage, slug } = main
  const { defaultPrice } = shopify
  const url = `/products/${slug.current}`
  return (
    <div>
      {mainImage && <Figure image={mainImage} width={400} />}
      <div>
        <h2>{title}</h2>
        <span>{defaultPrice}</span>
        <div>
          <Link to={url}>Know More &rarr;</Link>
          <div>Add to Cart +</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
