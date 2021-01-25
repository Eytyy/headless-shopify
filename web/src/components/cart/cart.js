import React from "react"
import {
  useCartItems,
  useCartTotals,
  useCheckout,
  useStore,
  useToggleCart,
} from "../../context/siteContext"
import {
  CartButton,
  CartWrapper,
  CartHeader,
  CartFooter,
  CartInner,
  CheckoutButton,
  ContinueShoppingLink,
  EmptyCartState,
} from "./cart.style"

import CartItem from "./item"
import { MdArrowForward } from "react-icons/md"
import { ImSad } from "react-icons/im"
import { Link } from "gatsby"

const Cart = () => {
  const lineItems = useCartItems()
  const { cartIsOpen } = useStore()
  const { total } = useCartTotals()
  const toggleCart = useToggleCart()
  const openCheckout = useCheckout()

  return (
    <CartWrapper cartIsOpen={cartIsOpen}>
      <CartHeader>
        <CartButton onClick={toggleCart} className="close">
          <MdArrowForward />
        </CartButton>
      </CartHeader>
      <CartInner>
        {lineItems.length > 0 ? (
          <div>
            {lineItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <EmptyCartState>
            Cart is empty <ImSad />
          </EmptyCartState>
        )}
      </CartInner>
      <CartFooter>
        {lineItems.length > 0 && (
          <>
            <span>Subtotal:</span>
            <span>{total}</span>
          </>
        )}
        {lineItems.length < 1 ? (
          <ContinueShoppingLink onClick={toggleCart} to="/shop">
            Continue Shopping
          </ContinueShoppingLink>
        ) : (
          <CheckoutButton onClick={openCheckout}>
            <span>Checkout</span>
          </CheckoutButton>
        )}
      </CartFooter>
    </CartWrapper>
  )
}

export default Cart
