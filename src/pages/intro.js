import React from 'react'
import Container from '../layouts/container'
import '../styles/imports.scss'
import {useSpring, animated} from 'react-spring'
import { Link, animateScroll as scroll } from "react-scroll";


const Intro = () =>  {

  return(
    <div className="intro">
      <div class="background-css-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Container>
        <div className="intro-text-wrapper d-flex flex-column align-items-center justify-content-center">
          <div className="intro-text">
          <h1>Hey!</h1>
            <h1 style={{fontSize: 36}}>
              I'm Nicolas, a web developer, programming teacher and code hobbyist based in Montreal.
            </h1>
          </div>
        </div>
        <Link
            activeClass="active-link"
            to="code"
            spy={true}
            smooth={true}
            offset={-200}
            duration= {800}
        >
          <div className="arrow bounce">
            <i class="fas fa-angle-double-down"></i>
          </div>
        </Link>
      </Container>
    </div>
  )
}

export default Intro;
