import React from 'react'
import Container from '../layouts/container'
import '../styles/imports.scss'
import {useSpring, animated} from 'react-spring'
import { Link, animateScroll as scroll } from "react-scroll";


const Intro = () =>  {

  return(
    <div className="intro">
      <Container>
        <div className="intro-text d-flex flex-column align-items-center justify-content-center">
          <div>
            <h1>HI</h1>
            <h3>I build elegant, stable & accessible web-applications for front-end and full-stack projects. I also give private lessons for programming Python, JavaScript, HTML, CSS, Webscraping, and more. Scroll around to view some of my work ;-)
            </h3>
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
