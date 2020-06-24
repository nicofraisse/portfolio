import React from "react"
import Main from "../layouts/main.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Intro from './intro.js'
import Code from './code.js'
import Photography from './photography.js'
import About from './about.js'
import Contact from './contact.js'
import ReactTooltip from "react-tooltip";
import { Helmet } from "react-helmet";
import logo from '../images/logo.png'

const Index = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.nicolasfraisse.com';
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>code by nicolas fraisse · creative freelance developer</title>

      </Helmet>
      <Main>
        <span id='top'></span>
        <Intro />
        <Code />
        <Photography />
        <About />
        <Contact />
      </Main>
    </div>
  )
}

export default Index;
