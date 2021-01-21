import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Wrapper, Inner, Logo } from "./header.styles"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
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
    </Inner>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
