import React from 'react'
import Container from '../layouts/container'
import '../styles/imports.scss'
import {useSpring, animated} from 'react-spring'
import { Link, animateScroll as scroll } from "react-scroll";
import Bokeh from "../components/bokeh.js"
import Cube from "../components/cube.js"

const Intro = () =>  {
  return(
    <div className="intro">
      <Bokeh />
      <div className="intro-text-wrapper d-flex flex-column align-items-center justify-content-center">
        <div className="cube-container">
          <Cube />
        </div>
      </div>
      <Link
      to="code"
      smooth={true}
      offset={-100}
      duration= {500}>
        <div className="arrow bounce">
          <i class="fas fa-chevron-down"></i>
        </div>
      </Link>
    </div>
  )
}

export default Intro;
