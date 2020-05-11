import React, { useState, useEffect } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
// import { Link } from "gatsby"
import "../styles/imports.scss"
import Logo from "./logo.js"
import { Link, animateScroll as scroll } from "react-scroll";


const Header = ({onClickity}) => {
  // for header shrinking on scroll
  const [headerBig, setHeaderBig] = useState(false);

  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  useEffect(() => {
    const navLinks = document.getElementById('nav-links');
    // if (viewportWidth <= 576) {
    //   navLinks.classList.add('sticky-links')
    // }
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let height = viewportWidth > 576 ? 184 : 300;
      if (viewportWidth > 576) {
        if (scrollPosition < 240) {
          header.style.height = `${184 - Math.round(window.scrollY / 3)}px`
        } else {
          header.style.height = '104px'
        }
      }
      else {
        if (scrollPosition > 100) {
          navLinks.classList.add('sticky-links')
        }
        else {
          navLinks.classList.remove('sticky-links')
        }
      }
    }
    const header = document.getElementById('header');
    window.addEventListener('scroll', handleScroll);
  }, [headerBig])


  return (
    <div className="vw-100" id="header">
      <div className="container-md h-100 d-flex flex-column flex-sm-row align-items-center justify-content-sm-between">
        <div id="header-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="d-flex align-items-center" id="nav-links">
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
              className="mx-md-1 link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-240}
              duration= {500}
          >contact</Link>
          <button id="dark-mode-icon" className="ml-3 d-none d-sm-inline-block" onClick={onClickity}>
            <i class="fas fa-adjust" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default Header;
