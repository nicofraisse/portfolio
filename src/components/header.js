import React, { useState, useEffect } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import { Link } from "gatsby"
import "../styles/imports.scss"
import Logo from "./logo.js"



const Header = () => {
  // for header opaque on scroll
  const [headerBig, setHeaderBig] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 800) {
        header.style.height = `${184 - Math.round(window.scrollY / 10)}px`
      } else {
        header.style.height = '104px'
      }
    }
    const header = document.getElementById('header');
    window.addEventListener('scroll', handleScroll)
  }, [headerBig])

  return (
    <div className="header-container d-flex" id="header">
      <div className="header container d-flex">
        <div>
          <img src="moon.png" style={{width: 24}} alt=""/>
        </div>
        <div className="header-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="header-links d-flex">
          <Link to="/code">code</Link>
          <Link to="/photography">photo</Link>
          <Link to="/about">about</Link>
          <a href="mailto:ni.fraisse@gmail.com?subject=hey">contact</a>
        </div>
      </div>
    </div>
  )
};

export default Header;
