import React from "react"

import '../styles/imports.scss'

const Flick = (props) => {

  const adjustImgHeight = () => {
    var images = document.querySelectorAll('.flick')
    for (let image of images) {
      image.style.width = "100%"
      var imgWidth = image.clientWidth
      image.style.height = `${imgWidth}px`
    }
  }
  window.addEventListener('resize', adjustImgHeight);
  return (
    <div className="flick" style={{ backgroundImage: `url(${props.source})`}}>
    </div>
  )

};

export default Flick;
