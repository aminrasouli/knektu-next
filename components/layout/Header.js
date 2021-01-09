import * as React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const Header = () => {
  return (
    <>
      <Navbar
        className="top-header sticky-top flex-md-nowrap navbar-shadow">
        <NavbarBrand href="#">
          <img className="nav-image-logo" src="/assets/logo.png" alt=""/>
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="#">Notification</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">My Account</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header