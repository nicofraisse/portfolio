import React from "react"
import { Link } from "gatsby"
import "../styles/imports.scss"
import Logo from "./logo.js"

const Header = () => {
  return(
  <div className="header-container">
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header-links">
        <Link to="/">Code</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </div>
  )
};

export default Header;
