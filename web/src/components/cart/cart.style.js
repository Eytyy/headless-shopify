import styled from "@emotion/styled"
import { Link } from "gatsby"

export const EmptyCartState = styled.div`
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  svg {
    margin-left: 8px;
  }
`

export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  min-height: 100vh;
  width: 40vw;
  min-width: 320px;
  max-width: 640px;
  color: red;
  background: #fff;
  border-left: 2px solid blue;
  transform: ${props =>
    props.cartIsOpen ? `translateX(0)` : `translateX(100%)`};
  transition: transform 200ms ease-in-out;
`

export const CartHeader = styled.div`
  padding: 16px;
`

export const CartFooter = styled.div`
  background: #fff;
  padding: 16px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const CartInner = styled.div`
  padding: 16px;
  padding-bottom: 120px;
`

export const CartButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 4px;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  color: blue;
  font-size: 32px;
  cursor: pointer;
`

export const CartToggleButton = styled(CartButton)`
  position: relative;
`

export const CartDot = styled.span`
  width: 10px;
  height: 10px;
  display: block;
  background: red;
  border-radius: 100%;
  position: absolute;
  right: 0px;
`

export const QuantityButton = styled(CartButton)`
  font-size: 18px;
`

export const CheckoutButton = styled(CartButton)`
  background: blue;
  color: #fff;
  width: 100%;
  grid-column: 1 / 3;
  margin: 12px 0;
  padding: 16px 4px;
  font-size: 24px;
`

export const ContinueShoppingLink = styled(Link)`
  color: blue;
  width: 100%;
  grid-column: 1 / 3;
  margin: 12px 0;
  padding: 16px 4px;
  font-size: 24px;
  text-align: center;
  border: 4px solid blue;
  text-decoration: none;
  &:hover {
    color: #fff;
    background: blue;
  }
`
