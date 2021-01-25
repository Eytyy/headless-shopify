import React from "react"
import { useState } from "react"
import { MdAdd, MdRemove, MdClose } from "react-icons/md"

import {
  client,
  useRemoveItemFromCart,
  useUpdateItemsFromCart,
} from "../../context/siteContext"
import { CartButton, QuantityButton } from "./cart.style"
import {
  Item,
  ItemImage,
  ItemContent,
  ItemContentTop,
  PriceQunatityWrapper,
  ItemPrice,
  Quantity,
  QuantityValue,
  DeleteItemWrapper,
} from "./item.styles"

const CartItem = ({
  id,
  title,
  quantity,
  variant: { price, compareAtPrice, image },
  customAttributes,
}) => {
  const updateItemsFromCart = useUpdateItemsFromCart()
  const removeFromCart = useRemoveItemFromCart()

  const [stateQuantity, setQuantity] = useState(quantity)

  const updateQuantity = quantity => {
    updateItemsFromCart({ id, quantity })
    setQuantity(quantity)
  }

  const itemImage = client.image.helpers.imageForSize(image, {
    maxWidth: 300,
    maxHeight: 300,
  })

  return (
    <Item>
      <ItemImage src={itemImage} alt={title} />
      <ItemContent>
        <ItemContentTop>
          <span>{title}</span>
          <DeleteItemWrapper>
            <CartButton onClick={() => removeFromCart(id)}>
              <MdClose className="block" />
            </CartButton>
          </DeleteItemWrapper>
        </ItemContentTop>
        <PriceQunatityWrapper>
          <Quantity>
            <QuantityButton
              aria-label="decrease quantity"
              onClick={() =>
                stateQuantity === 1
                  ? removeFromCart(id)
                  : updateQuantity(stateQuantity - 1)
              }
            >
              <MdRemove />
            </QuantityButton>
            <QuantityValue>{stateQuantity}</QuantityValue>
            <QuantityButton
              aria-label="increase quantity"
              onClick={() => updateQuantity(stateQuantity + 1)}
            >
              <MdAdd />
            </QuantityButton>
          </Quantity>

          <ItemPrice>
            {compareAtPrice && (
              <>
                <span className="original-price">
                  ${parseFloat(compareAtPrice) * stateQuantity}
                </span>
                <span className="sep">&rarr;</span>
              </>
            )}
            <span className="current-price">
              ${parseFloat(price) * stateQuantity}
            </span>
          </ItemPrice>
        </PriceQunatityWrapper>
      </ItemContent>
    </Item>
  )
}

export default CartItem
