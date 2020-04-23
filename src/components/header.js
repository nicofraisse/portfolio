import React, { useState, useEffect } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import { Link } from "gatsby"
import "../styles/imports.scss"
import Logo from "./logo.js"

const Header = ({onClickity}) => {
  // for header shrinking on scroll
  const [headerBig, setHeaderBig] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 240) {
        header.style.height = `${184 - Math.round(window.scrollY / 3)}px`
      } else {
        header.style.height = '104px'
      }
    }
    const header = document.getElementById('header');
    window.addEventListener('scroll', handleScroll)
  }, [headerBig])

  return (
    <div className="vw-100" id="header">
      <div className="container-md h-100 d-flex align-items-center justify-content-between">
        <div id="header-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/code" className="mx-1 mx-sm-2 mx-md-3">code</Link>
          <Link to="/photography" className="mx-1 mx-sm-2 mx-md-3">photo</Link>
          <Link to="/about" className="mx-1 mx-sm-2 mx-md-3 active-link">about</Link>
          <a href="mailto:ni.fraisse@gmail.com?subject=hey" className="mx-1 mx-sm-2 mx-md-3">contact</a>

          <button id="dark-mode-icon" className="ml-3" onClick={onClickity}>
            <i class="fas fa-adjust" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default Header;
