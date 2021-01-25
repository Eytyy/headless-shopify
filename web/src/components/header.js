import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AiOutlineShopping } from "react-icons/ai"
import { useCartCount, useToggleCart } from "../context/siteContext"

import Menu from "./menu"
import { Wrapper, Inner, Logo } from "./header.styles"
import { CartButton, CartDot, CartToggleButton } from "./cart/cart.style"

const Header = ({ siteTitle }) => {
  const count = useCartCount()
  const toggleCart = useToggleCart()

  return (
    <Wrapper>
      <Inner>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
        <Menu />
        <div>
          <CartToggleButton onClick={toggleCart}>
            <AiOutlineShopping />
            {count > 0 && <CartDot />}
          </CartToggleButton>
        </div>
      </Inner>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
