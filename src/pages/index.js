import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Categories from "../components/categories.js"

export default () =>

  <Main>
    <Container>
      <h3>I'm a web developer based in Montreal, building front-end and full-stack projects.</h3>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Categories />
      </div>

    </Container>
  </Main>
