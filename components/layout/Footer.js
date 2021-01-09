import * as React from 'react'
import { NavbarBrand } from 'reactstrap'

const Footer = () => {
  return (
    <footer className="footer mx-auto">
      <div className="container text-center">
        <img className="footer-logo" src="/assets/logo-dark.png" alt=""/>
        <span className="footer-copyright-text">Knektu 2020. © Copyright, All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer