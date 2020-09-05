import React, { useState, useEffect } from 'react'
import '../styles/imports.scss'

const Flick = (props) => {
  const [showPhoto, setShowPhoto] = useState(false);

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

  const toggleFullSize = () => {
    setShowPhoto((showPhoto) => !showPhoto)
  }

  return (
    <div onClick={toggleFullSize} style={{cursor: "pointer"}}>
      <div
      className="flick"
      data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease"
      style={{ backgroundImage: `url(${props.source})`}}
      data-for={props.souce}
      data-tip={props.description}
      data-event="touchstart"
      data-event-off="touchend"
      >
      </div>
      {
        showPhoto ?
        <div className="fullwidth-flick-container">
          <img src={props.source}/>
        </div>
        : null
      }
    </div>
  )
};

export default Flick;
