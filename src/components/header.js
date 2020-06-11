// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



import React, { useState, useEffect } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
// import { Link } from "gatsby"
import "../styles/imports.scss"
import Logo from "./logo.js"



const Header = ({onClickity}) => {
  // for header shrinking on scroll
  const [headerBig, setHeaderBig] = useState(false);
  useEffect(() => {
    const navLinks = document.getElementById('nav-links');
    const handleScroll = () => {
      let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const scrollPosition = window.scrollY;
      let height = viewportWidth > 768 ? 184 : 300;
      if (viewportWidth > 768) {
        if (scrollPosition < 240) {
          header.style.height = `${184 - Math.round(window.scrollY / 3)}px`
          header.style.opacity = 0
          logoFull.style.opacity = 1
          logoFull.style.position = 'static'
          logoInitials.style.opacity = 0
          logoInitials.style.position = 'absolute'

        } else {
          header.style.height = '104px'
          logoFull.style.position = 'absolute'
          header.style.opacity = 0
          logoInitials.style.opacity = 1
          logoInitials.style.position = 'static'
          if (scrollPosition > 500) {
            header.style.opacity = 1
          }
        }
      }
      else {
        if (scrollPosition > 100) {
          header.style.height = '212px'
          navLinks.classList.add('sticky-links')
        }
        else {
          navLinks.classList.remove('sticky-links')
        }
      }
    }
    const header = document.getElementById('header');
    const logoFull = document.querySelector('.logo-full');
    const logoInitials = document.querySelector('.logo-initials');
    window.addEventListener('scroll', handleScroll);
  }, [headerBig])


  return (
    <div className="w-100" id="header">
      <div className="container-md h-100 d-flex flex-column flex-md-row align-items-center justify-content-md-between">
        <div id="header-logo">
        <img src="logo-full.png" width='64'alt="" style={{marginTop: '16px'}}/>
          <Link
              activeClass="active-link"
              className="mx-md-2 link clicky-effect box-shadow-3d"
              to="top"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
            <Logo />
          </Link>
        </div>
        <div className="d-flex align-items-center" id="nav-links">
          <Link
            activeClass="active-link"
            className="mx-md-2 link clicky-effect box-shadow-3d"
            id="codelink"
            to="code"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => {
              setTimeout(() => {
                window.scrollBy(0, 2)
              }, 550)
            }}
          >code</Link>
          <Link
              activeClass="active-link"
              className="mx-md-1 link clicky-effect box-shadow-3d"
              id="photolink"
              to="photo"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 550)
              }}
          >photo</Link>
          <Link
              activeClass="active-link"
              className="mx-md-1 link clicky-effect box-shadow-3d"
              id="aboutlink"
              to="about"
              spy={true}
              smooth={true}
              offset={-144}
              duration= {500}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 550)
              }}

          >about</Link>
          <Link
              activeClass="active-link"
              className="mx-md-1 link clicky-effect box-shadow-3d"
              id="contactlink"
              to="contact"
              spy={true}
              smooth={true}
              offset={-107}
              duration= {500}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 550)
              }}
          >contact</Link>
          <button id="dark-mode-icon" className="ml-4 ml-lg-5 d-none d-sm-inline-block clicky-effect" onClick={onClickity}>
            <i className="fas fa-adjust" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default Header;
