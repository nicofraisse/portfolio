import React, { useState } from "react"
import Flick from "../components/flick.js"
import Separator from "../components/separator.js"
import ReactTooltip from "react-tooltip";
import {useSpring, animated} from 'react-spring'

import '../styles/imports.scss'

export default () => {
  const [morePhotos, setMorePhotos] = useState(false);

  const animation = useSpring({
    to: {opacity: morePhotos ? 1 : 0},
    from: {opacity: 0}
  })

  const handleMorePhotos = () => {
    setMorePhotos((morePhotos) => !morePhotos)
  }

  return(
  <div className="photography" id="photo">
    <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
      <h2 className="text-color-shadow">Photography</h2>
      <div id="sc3">
        <Separator
          marginBottom= '-44px'
          transform= "perspective(48px) rotateX(18deg)"
        />
      </div>
    </div>
    <div className="flick-container-wrap">
      <div className="flick-container">
        <Flick source='photography/hk_nicolas.jpg' description="Hong Kong, 2019"></Flick>
        <Flick source='photography/japan_nicolas.jpg' description="Hakone, Japan, 2019"></Flick>
        <Flick source='photography/ardennes3_nicolas.jpg' description="Saint Julien Chapteuil, Auvergne, France, 2014"></Flick>
        <Flick source='photography/japan2_nicolas.jpg' description="Tokyo, Japan, 2019"></Flick>
        <Flick source='photography/eiffel_nicolas.jpg' description="Paris, France, 2016"></Flick>
        <Flick source='photography/londres3_nicolas.jpg' description="London, UK, 2015"></Flick>
        <Flick source='photography/maurice13_nicolas.jpg' description="La Réunion, 2015"></Flick>
        <Flick source='photography/reunion_nicolas.jpg' description="La Réunion, 2015"></Flick>
        <Flick source='photography/jellyfish_nicolas.jpg' description="Toronto, Canada, 2018"></Flick>
      </div>
      <button
        onClick={() => handleMorePhotos()}
        className="btn-more">
        View {morePhotos ? 'less' : 'more'}
      </button>
      <animated.div id="other-photos" className={morePhotos ? 'd-inset' : 'd-none'} style={animation}>
        <div className="flick-container">
          <Flick source='photography/split_nicolas.jpg' description="Split, Croatia"></Flick>
          <Flick source='photography/ardennes10_nicolas.jpg' description="Saint Julien Chapteuil, Auvergne, France, 2014"></Flick>
          <Flick source='photography/saintes_nicolas.jpg' description="Saintes, Charente Maritime, France, 2015"></Flick>
          <Flick source='photography/sc_nicolas.jpg' description="Greenvilla SC, USA, 2016"></Flick>
          <Flick source='photography/toronto2_nicolas.jpg' description="Toronto, Canada, 2018"></Flick>
          <Flick source='photography/toronto_nicolas.jpg' description="Toronto, Canada, 2018"></Flick>
          <Flick source='photography/maurice11_nicolas.jpg' description="Ile Maurice, 2015"></Flick>
          <Flick source='photography/ski_nicolas.jpg' description="Plomb du Cantal, Auvergne, France, 2014"></Flick>
          <Flick source='photography/maurice2_nicolas.jpg' description="Ile Maurice, 2015"></Flick>
          <Flick source='photography/maurice5_nicolas.jpg' description="Ile Maurice, 2015"></Flick>
          <Flick source='photography/maurice10_nicolas.jpg' description="Ile Maurice, 2015"></Flick>
          <Flick source='photography/split2_nicolas.jpg' description="Split, Croatia, 2015"></Flick>
        </div>
        <a href="https://www.flickr.com/photos/129462013@N05/" className="btn-more" target="_blank" rel="noopener noreferrer">View all photos<i className="fas fa-external-link-alt"></i></a>
      </animated.div>
      <ReactTooltip  effect="solid" event='touchstart' eventOff='touchend' className="photo-tooltip" place="bottom" backgroundColor="rgba(0, 0, 0, 0)" offset={{top: 8}}/>
    </div>

  </div>
  )
}
