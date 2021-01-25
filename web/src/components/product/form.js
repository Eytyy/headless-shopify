import React, { useEffect, useState } from "react"
import { encode, decode } from "shopify-gid"

import Waitlist from "./waitlist"
import { client, useAddItemToCart } from "../../context/siteContext"

export const ProductForm = ({
  slug,
  defaultPrice,
  productId,
  showQuantity,
  waitlist = true,
  addText,
}) => {
  const addItemToCart = useAddItemToCart()

  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)
  const [price, setPrice] = useState(defaultPrice)
  const [available, setAvailable] = useState(false)
  const [variants, setVariants] = useState([])
  const [activeVariantId, setActiveVariantId] = useState("")
  const [compareAtPrice, setCompareAtPrice] = useState(undefined)
  const [check, setCheck] = useState(true)

  const [gift, setGift] = useState({
    giftEmail: "",
    giftMessage: "",
  })

  const form = React.createRef()

  useEffect(() => {
    if (check) {
      const shopifyId = encode("Product", productId, {
        accessToken: process.env.GATSBY_STOREFRONT_TOKEN,
      })

      client.product.fetch(shopifyId).then(product => {
        const decodedVariants = []
        product.variants.forEach(variant => {
          decodedVariants.push({
            ...variant,
            cleanId: parseInt(decode(variant.id).id, 0),
          })
        })

        setVariants(decodedVariants)
        setActiveVariantId(decodedVariants[0].id)
        setAvailable(decodedVariants[0].available)

        if (decodedVariants[0].compareAtPrice)
          setCompareAtPrice(decodedVariants[0].compareAtPrice)

        setCheck(false)
      })
    }
  }, [check])

  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    const attributes = []
    if (available) {
      addItemToCart(activeVariantId, quantity, attributes).then(() => {
        setAdding(false)
      })
    }
  }

  const handleChange = e => {
    setActiveVariantId(e.target.value)
    variants.forEach(variant => {
      if (variant.id === e.target.value) {
        if (variant.compareAtPrice) {
          setCompareAtPrice(variant.compareAtPrice)
        }
        setPrice(variant.price)
      }
    })
  }

  const handleGiftChange = e => {
    setGift({ ...gift, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={e => handleSubmit(e)} ref={form}>
      {available && !check ? (
        <div>
          {variants.length > 1 && (
            <div>
              <select onChange={handleChange}>
                {variants.map(({ id, title, available }) => (
                  <option disabled={!available} key={id} value={id}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="product__form">
            {showQuantity && (
              <div className="product__form-qty">
                <div className="product__form-qty-wrapper">
                  <button
                    type="button"
                    onClick={() =>
                      quantity === 1 ? null : setQuantity(quantity - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={e =>
                      setQuantity(parseInt(e.currentTarget.value, 10))
                    }
                    name="quantity"
                    min="1"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            <button type="submit">
              <span>
                {adding ? "Adding" : addText ? addText : "Add to Cart"}
              </span>
              {compareAtPrice && (
                <span className="strikethrough">
                  ${parseFloat(compareAtPrice * quantity)}
                </span>
              )}
              <span>${parseFloat(price * quantity)}</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {available ? (
            <span>Checking Stock</span>
          ) : waitlist ? (
            <div>
              <h5>Get notifed when stock is replenished</h5>
              <Waitlist
                accountId="KKfBYU"
                message="Got it! We'll update you when it's back"
                buttonText="Notify Me"
                variantId={activeVariantId}
              />
            </div>
          ) : (
            <div>
              <span />
            </div>
          )}
        </div>
      )}
    </form>
  )
}
