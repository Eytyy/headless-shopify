import React from "react"
import Figure from "../figure"
import PortableText from "../portableText"

const ProductHero = ({ product, main }) => {
  const { title, body, mainImage } = main
  return (
    <div className="product__hero">
      <div>
        {mainImage && <Figure image={mainImage} />}
        <div className="col c12 c6--800">
          <div className="p4--800">
            <h1 className="mb2">{title}</h1>
            {body["en"] && <PortableText blocks={body["en"]} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductHero
