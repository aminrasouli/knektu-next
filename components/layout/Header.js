import * as React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const Header = () => {
  return (
    <>
      <Navbar
        className="top-header sticky-top flex-md-nowrap navbar-shadow">
        <NavbarBrand href="#">
          <img className="nav-image-logo" src="/assets/image/logo.png" alt=""/>
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="#">
              <img className="svg-icon" src="/assets/svg/bell.svg"
                   alt="Notification"/>
              Notification</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img className="svg-icon" src="/assets/svg/user.svg"
                   alt="Notification"/>
              My Account</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header