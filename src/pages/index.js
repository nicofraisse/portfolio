import React from "react"
import Main from "../layouts/main.js"
import '../styles/imports.scss'
import Intro from './intro.js'
import Code from './code.js'
import Photography from './photography.js'
import About from './about.js'
import Contact from './contact.js'
import { Helmet } from "react-helmet";
import fbLogo from '../images/fb-thumbnail.jpg'
import socialLogo from '../images/social-logo.png'

const Index = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://nicolasfraisse.com';
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>code by @nicofraisse</title>
        <link rel="canonical" href="https://nicolasfraisse.com"/>
        <meta property="og:image"        content='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v384-ning-07b-gradientbg_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e7c1136bf8c780d34b25e02c9d99defc'  />
        <meta name="description"         content="web development portfolio · creative freelance developer based in montreal · get in touch at info@nicolasfraisse.com" />
        <meta property="og:url"          content="https://nicolasfraisse.com" />
        <meta property="og:type"         content="website" />
        <meta property="og:title"        content="code by @nicofraisse" />
        <meta property="og:description"  content="web development portfolio · creative freelance developer based in montreal · get in touch at info@nicolasfraisse.com" />
        <meta property="fb:app_id"       content="195304371816649" />
        <meta name="twitter:title"       content="code by @nicofraisse" />
        <meta name="twitter:description" content="web development portfolio · creative freelance developer based in montreal · get in touch at info@nicolasfraisse.com" />
        <meta name="twitter:image"       content='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v384-ning-07b-gradientbg_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e7c1136bf8c780d34b25e02c9d99defc' />
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
