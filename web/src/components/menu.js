import { Link } from "gatsby"
import React from "react"
import { MenuNav } from "./menu.styles"

const Menu = () => {
  return (
    <MenuNav>
      <Link to="/shop">Shop</Link>
    </MenuNav>
  )
}

export default Menu
