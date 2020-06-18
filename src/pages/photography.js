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
    setMorePhotos((morePhotos) => !morePhotos)
  }
  return(
  <div className="photography" id="photo">
    <h2 className="text-color-shadow">Photography</h2>
    <div id="sc3">
      <Separator
        marginBottom= '-44px'
        transform= "perspective(48px) rotateX(18deg)"
      />
    </div>
    <Container>
      <div className="flick-container">
        <Flick source='photography/hk_.jpg' description="Hong Kong"></Flick>
        <Flick source='photography/japan_.jpg' description="Hakone, Japan"></Flick>
        <Flick source='photography/ardennes3_.jpg' description="Saint Julien Chapteuil, Auvergne, France"></Flick>
        <Flick source='photography/japan2_.jpg' description="Tokyo, Japan"></Flick>
        <Flick source='photography/eiffel_.jpg' description="Paris, France"></Flick>
        <Flick source='photography/londres3_.jpg' description="London, UK"></Flick>
        <Flick source='photography/maurice13_.jpg' description="La Réunion"></Flick>
        <Flick source='photography/reunion_.jpg' description="La Réunion"></Flick>
        <Flick source='photography/jellyfish_.jpg' description="Toronto, Canada"></Flick>
      </div>
      <button
        onClick={() => handleClickPhotos()}
        className="btn-more">
        View {morePhotos ? 'less' : 'more'}
      </button>
      <animated.div id="other-photos" className={morePhotos ? 'd-block' : 'd-none'} style={animation}>
        <div className="flick-container">
          <Flick source='photography/split_.jpg' description="Split, Croatia"></Flick>
          <Flick source='photography/ardennes10_.jpg' description="Saint Julien Chapteuil, Auvergne, France"></Flick>
          <Flick source='photography/saintes_.jpg' description="Saintes, Charente Maritime, France"></Flick>
          <Flick source='photography/sc_.jpg' description="Greenvilla, South Carolina USA"></Flick>
          <Flick source='photography/toronto2_.jpg' description="Toronto, Canada"></Flick>
          <Flick source='photography/toronto_.jpg' description="Toronto, Canada"></Flick>
          <Flick source='photography/maurice11_.jpg' description="Ile Maurice"></Flick>
          <Flick source='photography/ski_.jpg' description="Plomb du Cantal, Auvergne, France"></Flick>
          <Flick source='photography/maurice2_.jpg' description="Ile Maurice"></Flick>
          <Flick source='photography/maurice5_.jpg' description="Ile Maurice"></Flick>
          <Flick source='photography/maurice10_.jpg' description="Ile Maurice"></Flick>
          <Flick source='photography/split2_.jpg' description="Split, Croatia"></Flick>
        </div>
        <a href="https://www.flickr.com/photos/129462013@N05/" className="btn-more" target="blank">View all photos<i className="fas fa-external-link-alt"></i></a>
      </animated.div>
      <ReactTooltip  effect="solid" className="photo-tooltip" place="bottom" backgroundColor="rgba(0, 0, 0, 0)" offset={{top: 8}}/>
    </Container>

  </div>
  )
}
