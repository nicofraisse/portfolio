import { Link } from "react-scroll"
import React, { useEffect } from "react"
import "../styles/imports.scss"
import Logo from "./logo.js"

const Header = ({ onClickity }) => {
  // for header shrinking on scroll
  useEffect(() => {
    const handleScroll = () => {
      let viewportWidth =
        window.innerWidth || document.documentElement.clientWidth
      const scrollPosition = window.scrollY
      if (viewportWidth > 768) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${184 -
            Math.round(window.scrollY / 3)}px`
          arrow.style.opacity = 1
          headerDesktop.style.height = "184px"
          invisibleHoverBox.style.height = "184px"
        } else {
          arrow.style.opacity = 0
          headerDesktop.style.height = "120px"
          invisibleHoverBox.style.height = "120px"
          headerDesktopContainer.style.height = "104px"
          if (scrollPosition > window.innerHeight - 104) {
            headerBackground.style.opacity = 1
            headerDesktopContainer.style.boxShadow =
              "0 0 12px rgba(0, 0, 0, 0.4)"
          } else {
            headerBackground.style.opacity = 0
            headerDesktopContainer.style.boxShadow = "none"
          }
        }
      } else if (viewportWidth > 576) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${148 -
            Math.round(window.scrollY / 6)}px`
          arrow.style.opacity = 1
          headerBackground.style.opacity = 0
          headerDesktop.style.height = "184px"
          invisibleHoverBox.style.height = "184px"
        } else {
          arrow.style.opacity = 0
          headerDesktop.style.height = "120px"
          invisibleHoverBox.style.height = "120px"
          headerDesktopContainer.style.height = "104px"
          if (scrollPosition > window.innerHeight - 104) {
            headerBackground.style.opacity = 1
            headerDesktopContainer.style.boxShadow =
              "0 0 12px rgba(0, 0, 0, 0.4)"
          } else {
            headerBackground.style.opacity = 0
            headerDesktopContainer.style.boxShadow = "none"
          }
        }
      } else {
        headerDesktopContainer.style.boxShadow = "none"
        if (scrollPosition > window.innerHeight - 120) {
          headerMobile.style.opacity = 1
          headerBackground.style.opacity = 1
          arrow.style.opacity = 0
          headerDesktop.style.height = "72px"
          invisibleHoverBox.style.height = "72px"
        } else {
          headerMobile.style.opacity = 0
          headerBackground.style.opacity = 0
          arrow.style.opacity = 1
          headerDesktop.style.height = "184px"
          invisibleHoverBox.style.height = "184px"
        }
      }

      if (Math.abs(lastScrollTop - scrollPosition) <= delta) {
        return
      } else if (
        scrollPosition > lastScrollTop &&
        scrollPosition > navbarHeight
      ) {
        headerMobile.style.top = "-100px"
      } else {
        headerMobile.style.top = "0px"
      }
      lastScrollTop = scrollPosition
    }

    const handleResize = () => {
      let viewportWidth =
        window.innerWidth || document.documentElement.clientWidth
      const scrollPosition = window.scrollY
      if (viewportWidth > 768) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${184 -
            Math.round(window.scrollY / 3)}px`
          arrow.style.opacity = 1
        } else {
          arrow.style.opacity = 0
          headerDesktopContainer.style.height = "104px"
          if (scrollPosition > window.innerHeight - 104) {
            headerBackground.style.opacity = 1
            headerDesktopContainer.style.boxShadow =
              "0 0 12px rgba(0, 0, 0, 0.4)"
          } else {
            headerBackground.style.opacity = 0
            headerDesktopContainer.style.boxShadow = "none"
          }
        }
      } else if (viewportWidth > 576) {
        if (scrollPosition < 240) {
          headerDesktopContainer.style.height = `${148 -
            Math.round(window.scrollY / 6)}px`
          arrow.style.opacity = 1
        } else {
          arrow.style.opacity = 0
          headerDesktopContainer.style.height = "104px"
          if (scrollPosition > window.innerHeight - 104) {
            headerBackground.style.opacity = 1
            headerDesktopContainer.style.boxShadow =
              "0 0 12px rgba(0, 0, 0, 0.4)"
          } else {
            headerBackground.style.opacity = 0
            headerDesktopContainer.style.boxShadow = "none"
          }
        }
      } else {
        if (scrollPosition > window.innerHeight - 120) {
          headerMobile.style.opacity = 1
        } else {
          headerMobile.style.opacity = 0
        }
      }
    }

    var lastScrollTop = 0
    var delta = 200
    var navbarHeight = 84
    const invisibleHoverBox = document.querySelector(".invisible-hover-box")
    const headerDesktop = document.getElementById("header")
    const headerMobile = document.getElementById("header-mobile")
    const headerDesktopContainer = document.querySelector(
      ".header-content-container"
    )
    const arrow = document.querySelector(".arrow")
    const headerBackground = document.querySelector(".header-background")
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    setTimeout(() => {
      document.body.classList.add("fade-in")
    }, 150)
  })

  return (
    <header>
      <div className="w-100" id="header">
        <div className="header-background"></div>
        <div className="header-content-container">
          <div className="header-content container-lg px-md-5 px-lg-2 d-sm-flex flex-column flex-sm-row align-items-center justify-content-sm-between">
            <div id="header-logo">
              <Link
                className="mx-md-2"
                to="top"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                <Logo />
              </Link>
            </div>
            <div className="d-flex align-items-center" id="nav-links">
              <Link
                activeClass="active-link"
                className="mx-md-1 navlink clicky-effect"
                id="aboutlink"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={() => {
                  setTimeout(() => {
                    console.log("hki")
                    window.scrollBy(0, 2)
                  }, 1050)
                }}
              >
                about
              </Link>
              <Link
                activeClass="active-link"
                className="mx-md-2 navlink clicky-effect"
                id="codelink"
                to="code"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollBy(0, 2)
                  }, 1050)
                }}
              >
                code
              </Link>
              <Link
                activeClass="active-link"
                className="mx-md-1 navlink clicky-effect"
                id="photolink"
                to="photo"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollBy(0, 2)
                  }, 1050)
                }}
              >
                photo
              </Link>

              <Link
                activeClass="active-link"
                className="mx-md-1 navlink clicky-effect"
                id="contactlink"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollBy(0, 2)
                  }, 1050)
                }}
              >
                contact
              </Link>
              <button
                name="toggle dark mode"
                id="dark-mode-icon-desktop"
                className="ml-3 ml-md-4 ml-lg-5 d-sm-inline-block"
                onClick={onClickity}
              >
                <i className="fas fa-adjust" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="header-mobile" className="d-sm-none">
        <div className="header-content container-lg flex-column align-items-center mt-1">
          <div
            className="header-link-container d-flex align-items-center"
            id="nav-links-mobile"
          >
            <Link
              activeClass="active-link"
              className="mx-md-1 navlink clicky-effect"
              id="aboutlink-mobile"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 1050)
              }}
            >
              about
            </Link>
            <Link
              activeClass="active-link"
              className="mx-md-2 navlink clicky-effect"
              id="codelink-mobile"
              to="code"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 1050)
              }}
            >
              code
            </Link>
            <Link
              activeClass="active-link"
              className="mx-md-1 navlink clicky-effect"
              id="photolink-mobile"
              to="photo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 1050)
              }}
            >
              photo
            </Link>

            <Link
              activeClass="active-link"
              className="mx-md-1 navlink clicky-effect"
              id="contactlink-mobile"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 1050)
              }}
            >
              contact
            </Link>
            <button
              name="toggle dark mode"
              id="dark-mode-icon-mobile"
              onClick={onClickity}
            >
              <i className="fas fa-adjust" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
