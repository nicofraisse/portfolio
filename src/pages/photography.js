import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Flick from "../components/flick.js"
import '../styles/imports.scss'


export default () =>

  <Main>
    <Flick source='montreal.jpg'></Flick>
    <Flick source='jellyfish.jpg'></Flick>
    <Flick source='eiffel.jpg'></Flick>
  </Main>
