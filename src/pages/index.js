import React from "react"
import Main from "../layouts/main.js"
import '../styles/imports.scss'
import Intro from './intro.js'
import Code from './code.js'
import Photography from './photography.js'
import About from './about.js'
import Contact from './contact.js'
import { Helmet } from "react-helmet";
import socialLogo from '../images/social-logo.png'

const Index = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://nicolasfraisse.com';
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>code by nicolas fraisse · creative freelance developer</title>
        <link rel="canonical" href="https://nicolasfraisse.com"/>
        <meta property="og:image"        content={`${baseUrl}${socialLogo}`}  />
        <meta name="description"         content="web development portfolio by nicolas fraisse, a developer based in montreal · get in touch at info@nicolasfraisse.com" />
        <meta property="og:url"          content="https://nicolasfraisse.com" />
        <meta property="og:type"         content="website" />
        <meta property="og:title"        content="nicolas fraisse 3· creative freelance developer" />
        <meta property="og:description"  content="web development portfolio by nicolas fraisse, a developer based in montreal · get in touch at info@nicolasfraisse.com" />
        <meta property="og:app_id"       content="195304371816649" />
        <meta name="twitter:title"       content="nicolas fraisse · creative freelance developer" />
        <meta name="twitter:description" content="web development portfolio by nicolas fraisse, a developer based in montreal · get in touch at info@nicolasfraisse.com" />
        <meta name="twitter:image"       content={`${baseUrl}${socialLogo}`} />
        <meta name="twitter:card"        content="summary_large_image" />
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
