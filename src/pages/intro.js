import React from 'react'
import Container from '../layouts/container'
import '../styles/imports.scss'
import {useSpring, animated} from 'react-spring'
import { Link, animateScroll as scroll } from "react-scroll";


const Intro = () =>  {

  return(
    <div className="intro">
      <div className="background-css-animation">
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
          <h1>W E L C O M E</h1>
          </div>
        </div>
        <Link
            to="code"
            smooth={true}
            offset={0}
            duration= {500}
        >
          <div className="arrow bounce">
            <i className="fas fa-angle-double-down"></i>
          </div>
        </Link>
      </Container>
    </div>
  )
}

export default Intro;
