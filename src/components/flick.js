import React, { useEffect } from 'react'
import '../styles/imports.scss'

const Flick = (props) => {
  useEffect(() => {
    const adjustImgHeight = () => {
      var images = document.querySelectorAll('.flick')
      for (let image of images) {
        image.style.width = "100%"
        var imgWidth = image.clientWidth
        image.style.height = `${imgWidth}px`
      }
    }
    setTimeout(() => {
      adjustImgHeight()
    }, 100)
    window.addEventListener('resize', adjustImgHeight);
  })
  return (
    <div>
      <div
      className="flick"
      data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease"
      style={{ backgroundImage: `url(${props.source})`}}
      data-for={props.souce}
      data-tip={props.description}
      >
      </div>
    </div>
  )
};

export default Flick;
