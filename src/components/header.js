// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { ThemeProvider, createGlobalStyle } from "styled-components"



import React, { useState, useEffect } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
// import { Link } from "gatsby"
import "../styles/imports.scss"
import Logo from "./logo.js"



const Header = ({onClickity}) => {
  // for header shrinking on scroll
  const [headerBig, setHeaderBig] = useState(false);
  const initialViewHeight = window.innerHeight;
  useEffect(() => {
    const navLinks = document.getElementById('nav-links');
    const handleScroll = () => {
      let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const scrollPosition = window.scrollY;
      if (viewportWidth > 768) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${184 - Math.round(window.scrollY / 3)}px`
          arrow.style.opacity = 1;
        } else {
          arrow.style.opacity = 0;
          headerDesktopContainer.style.height = '104px'
          if (scrollPosition > (window.innerHeight - 104)) {
            headerBackground.style.opacity = 1;
            headerDesktopContainer.style.boxShadow = '0 0 16px rgba(0, 0, 0, 0.3)'
          } else {
            headerBackground.style.opacity = 0;
            headerDesktopContainer.style.boxShadow = 'none'
          }
        }
      }
     else if (viewportWidth > 576) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${148 - Math.round(window.scrollY / 6)}px`
          arrow.style.opacity = 1;
          headerBackground.style.opacity = 0;
        } else {
          arrow.style.opacity = 0;
          headerDesktopContainer.style.height = '104px'
          if (scrollPosition > (window.innerHeight - 104)) {
            headerBackground.style.opacity = 1;
            headerDesktopContainer.style.boxShadow = '0 0 16px rgba(0, 0, 0, 0.3)'
          } else {
            headerBackground.style.opacity = 0;
            headerDesktopContainer.style.boxShadow = 'none'
          }
        }
      }
      else {
        headerDesktopContainer.style.boxShadow = 'none'
        if (scrollPosition > (window.innerHeight - 120)) {
          headerMobile.style.opacity = 1;
          headerBackground.style.opacity = 1;
        }
        else {
          headerMobile.style.opacity = 0;
          headerBackground.style.opacity = 0;

        }
        if (Math.abs(lastScrollTop - scrollPosition) <= delta) {
          return;
        }

        if (scrollPosition > lastScrollTop && scrollPosition > navbarHeight) {
          headerMobile.style.top = '-84px'
        } else {
          console.log('NO')
          headerMobile.style.top = '0px'
        }
        lastScrollTop = scrollPosition;
      }
    }
    const handleResize = () => {
      console.log('hey')
      let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const scrollPosition = window.scrollY;
      if (viewportWidth > 768) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${184 - Math.round(window.scrollY / 3)}px`
          arrow.style.opacity = 1;
        } else {
          arrow.style.opacity = 0;
          headerDesktopContainer.style.height = '104px'
          if (scrollPosition > (window.innerHeight - 104)) {
            headerBackground.style.opacity = 1;
            headerDesktopContainer.style.boxShadow = '0 0 16px rgba(0, 0, 0, 0.3)'
          } else {
            headerBackground.style.opacity = 0;
            headerDesktopContainer.style.boxShadow = 'none'
          }
        }
      }
     else if (viewportWidth > 576) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${148 - Math.round(window.scrollY / 6)}px`
          arrow.style.opacity = 1;
        } else {
          arrow.style.opacity = 0;
          headerDesktopContainer.style.height = '104px'
          if (scrollPosition > (window.innerHeight - 104)) {
            headerBackground.style.opacity = 1;
            headerDesktopContainer.style.boxShadow = '0 0 16px rgba(0, 0, 0, 0.3)'
          } else {
            headerBackground.style.opacity = 0;
            headerDesktopContainer.style.boxShadow = 'none'
          }
        }
      }
      else {
        if (scrollPosition > (window.innerHeight - 120)) {
          headerMobile.style.opacity = 1
        }
        else {
          headerMobile.style.opacity = 0
        }
        if (Math.abs(lastScrollTop - scrollPosition) <= delta) {
          return;
        }

        if (scrollPosition > lastScrollTop && scrollPosition > navbarHeight) {
          headerMobile.style.top = '-84px'
        } else {
          console.log('NO')
          headerMobile.style.top = '0px'
        }
        lastScrollTop = scrollPosition;
      }
    }

    var lastScrollTop = 0;
    var delta = 80;
    var navbarHeight = 100

    const headerDesktop = document.getElementById('header');
    const headerMobile = document.getElementById('header-mobile');
    const headerDesktopContainer = document.querySelector('.header-content-container');
    const arrow = document.querySelector('.arrow');
    const headerBackground = document.querySelector('.header-background')
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  }, [headerBig])


  return (
    <div>
      <div className="w-100" id="header">
        <div className="header-background"></div>
        <div className="header-content-container">
          <div className="header-content container-lg px-md-5 px-lg-2 d-sm-flex flex-column flex-sm-row align-items-center justify-content-sm-between">
            <div id="header-logo">
              <Link
                  activeClass="active-link"
                  className="mx-md-2"
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
                className="mx-md-2 navlink clicky-effect"
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
                  className="mx-md-1 navlink clicky-effect"
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
                  className="mx-md-1 navlink clicky-effect"
                  id="aboutlink"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration= {500}
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollBy(0, 2)
                    }, 550)
                  }}

              >about</Link>
              <Link
                  activeClass="active-link"
                  className="mx-md-1 navlink clicky-effect"
                  id="contactlink"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration= {500}
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollBy(0, 2)
                    }, 550)
                  }}
              >contact</Link>
              <button id="dark-mode-icon-desktop" className="ml-3 ml-md-4 ml-lg-5 d-sm-inline-block" onClick={onClickity}>
                <i className="fas fa-adjust" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="header-mobile" className="d-sm-none">
        <div id="header-logo">
          <Link
              activeClass="active-link"
              className="mx-md-2"
              to="top"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
            <Logo />
          </Link>
        </div>
        <div className="header-content container-lg flex-column align-items-center">
          <div className="header-link-container d-flex align-items-center" id="nav-links">
            <Link
              activeClass="active-link"
              className="mx-md-2 navlink clicky-effect"
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
                className="mx-md-1 navlink clicky-effect"
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
                className="mx-md-1 navlink clicky-effect"
                id="aboutlink"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration= {500}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollBy(0, 2)
                  }, 550)
                }}

            >about</Link>
            <Link
                activeClass="active-link"
                className="mx-md-1 navlink clicky-effect"
                id="contactlink"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration= {500}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollBy(0, 2)
                  }, 550)
                }}
            >contact</Link>
            <button id="dark-mode-icon-mobile" onClick={onClickity}>
              <i className="fas fa-adjust" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
