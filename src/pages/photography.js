import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Flick from "../components/flick.js"
import Separator from "../components/separator.js"
import '../styles/imports.scss'

export default () =>
  <div className="photography" id="photo">
    <h2 className="text-color-shadow">Photography</h2>
    <Separator
      width='288px'
      marginBottom= '60px'
      marginTop= '-110px'
      transform= "perspective(48px) rotateX(18deg)"
    />
    <Container>
      <div className="flick-container">
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
    </Container>

    <a href="https://www.flickr.com/photos/129462013@N05/" className="btn-more" target="blank">View all photos<i className="fas fa-external-link-alt"></i></a>
  </div>
