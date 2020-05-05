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

  const activeIfCurrentPath = (page) => {
    var pathname = window.location.pathname
    if (pathname == page) {
      return 'active-link'
    }
    return ''
  }

  return (
    <div className="vw-100" id="header">
      <div className="container-md h-100 d-flex align-items-center justify-content-between">
        <div id="header-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/code" className={`mx-md-2 link ${activeIfCurrentPath("/code")}`}>code</Link>
          <Link to="/photography" className={`mx-md-1 link ${activeIfCurrentPath("/photography")}`}>photo</Link>
          <Link to="/about" className={`mx-md-1 link ${activeIfCurrentPath("/about")}`}>about</Link>
          <a href="mailto:ni.fraisse@gmail.com?subject=hey" className="ml-md-1 mr-md-4 link">contact</a>

          <button id="dark-mode-icon" className="ml-3" onClick={onClickity}>
            <i class="fas fa-adjust" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default Header;
