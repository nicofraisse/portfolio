import React from "react"
import Main from "../layouts/main.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Toolkit from "../components/toolkit.js"
import Intro from './intro.js'
import Code from './code.js'
import Photography from './photography.js'
import About from './about.js'
import Contact from './contact.js'
import ReactTooltip from "react-tooltip";

export default () =>

  <Main>
    <span id='top'></span>
    <Intro />
    <Code />
    <Photography />
    <About />
    <Contact />
  </Main>
