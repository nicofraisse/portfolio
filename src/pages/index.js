
import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'

import Logo from "../components/logo.js"
export default () =>

<div style={{
  height: '100vh',
  padding: '0 4em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #ECE9E6, white)'

}}>
  <Logo />
  <p style={{
    fontFamily: 'inherit',
    marginTop: 100,
  }}>
    <strong>Coming soon</strong>. For now, you can find me <a href="https://www.linkedin.com/in/nicolasfraisse/">here</a> or contact me <a href="mailto:ni.fraisse@gmail.com">here</a>.
  </p>
  <p style={{
    fontFamily: 'inherit',
    marginTop: 20
  }}></p>
</div>
