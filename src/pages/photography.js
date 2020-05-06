import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Flick from "../components/flick.js"
import '../styles/imports.scss'

export default () =>

  <div className="photography flick-container" id="photo">
    <Flick source='montreal.jpg'></Flick>
    <Flick source='montreal.jpg'></Flick>
    <Flick source='montreal.jpg'></Flick>
    <Flick source='montreal.jpg'></Flick>
    <Flick source='jellyfish.jpg'></Flick>
    <Flick source='jellyfish.jpg'></Flick>
    <Flick source='eiffel.jpg'></Flick>
    <Flick source='eiffel.jpg'></Flick>
    <Flick source='eiffel.jpg'></Flick>


  </div>
