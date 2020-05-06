import React, { useState, useEffect } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
// import { Link } from "gatsby"
import "../styles/imports.scss"
import Logo from "./logo.js"
import { Link, animateScroll as scroll } from "react-scroll";


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
          <Link
              activeClass="active-link"
              className="mx-md-2 link"
              to="code"
              spy={true}
              smooth={true}
              offset={-150}
              duration= {500}
          >code</Link>
          <Link
              activeClass="active-link"
              className="mx-md-1 link"
              to="photography"
              spy={true}
              smooth={true}
              offset={-300}
              duration= {500}
          >photo</Link>
          <Link
              activeClass="active-link"
              className="mx-md-1 link"
              to="about"
              spy={true}
              smooth={true}
              offset={-180}
              duration= {500}
          >about</Link>
          <Link
              activeClass="active-link"
              className="mx-md-1 link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
          >contact</Link>


          <button id="dark-mode-icon" className="ml-3" onClick={onClickity}>
            <i class="fas fa-adjust" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default Header;
