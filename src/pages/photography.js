import React, { useState } from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Flick from "../components/flick.js"
import Separator from "../components/separator.js"
import ReactTooltip from "react-tooltip";
import {useSpring, animated} from 'react-spring'

import '../styles/imports.scss'

export default () => {
  const [morePhotos, setMorePhotos] = useState(false);

  const animation = useSpring({
    to: {opacity: morePhotos ? 1 : 0, transform: morePhotos ? 'translateY(20px)'  : 'translateY(0px)'},
    from: {opacity: 0}
  })

  const handleClickPhotos = () => {
    console.log(morePhotos)
    setMorePhotos((morePhotos) => !morePhotos)
  }
  return(
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
        <Flick source='photos/hk.jpg' description="Hong Kong"></Flick>
        <Flick source='photos/japan.jpg' description="Hakone, Japan"></Flick>
        <Flick source='photos/ardennes3.jpg' description="Saint Julien Chapteuil, Auvergne, France"></Flick>
        <Flick source='photos/japan2.jpg' description="Tokyo, Japan"></Flick>
        <Flick source='eiffel.jpg' description="Paris, France"></Flick>
        <Flick source='photos/londres3.jpg' description="London, UK"></Flick>
        <Flick source='photos/maurice13.jpg' description="La Réunion"></Flick>
        <Flick source='photos/reunion.jpg' description="La Réunion"></Flick>
        <Flick source='jellyfish.jpg' description="Toronto, Canada"></Flick>
      </div>
      <button
        onClick={() => handleClickPhotos()}
        className="btn-more">
        Show {morePhotos ? 'less' : 'more'}
      </button>
      <animated.div id="other-photos" className={morePhotos ? 'd-block' : 'd-none'} style={animation}>
        <div className="flick-container">
          <Flick source='photos/split.jpg' description="Split, Croatia"></Flick>
          <Flick source='photos/ardennes10.jpg' description="Saint Julien Chapteuil, Auvergne, France"></Flick>
          <Flick source='photos/saintes.jpg' description="Saintes, Charente Maritime, France"></Flick>
          <Flick source='photos/sc.jpg' description="Greenvilla, South Carolina USA"></Flick>
          <Flick source='photos/toronto2.jpg' description="Toronto, Canada"></Flick>
          <Flick source='photos/toronto.jpg' description="Toronto, Canada"></Flick>
          <Flick source='photos/maurice11.jpg' description="Ile Maurice"></Flick>
          <Flick source='photos/ski.jpg' description="Plomb du Cantal, Auvergne, France"></Flick>
          <Flick source='photos/maurice2.jpg' description="Ile Maurice"></Flick>
          <Flick source='photos/maurice5.jpg' description="Ile Maurice"></Flick>
          <Flick source='photos/maurice10.jpg' description="Ile Maurice"></Flick>
          <Flick source='photos/split2.jpg' description="Split, Croatia"></Flick>
        </div>
        <a href="https://www.flickr.com/photos/129462013@N05/" className="btn-more" target="blank">View all photos<i className="fas fa-external-link-alt"></i></a>
      </animated.div>
      <ReactTooltip  effect="solid" className="photo-tooltip" place="bottom" backgroundColor="rgba(0, 0, 0, 0)" offset={{top: 8}}/>
    </Container>

  </div>
  )
}
