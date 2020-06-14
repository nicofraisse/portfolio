import React from "react"
import ReactTooltip from "react-tooltip";
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
    <div>
      <div className="flick" style={{ backgroundImage: `url(${props.source})`}} data-for="photo-tooltip" data-tip={props.description} data-delay-hide='1000'>
      </div>
      <ReactTooltip id="photo-tooltip" effect="solid" place="bottom" backgroundColor="rgba(0, 0, 0, 0)" offset={{top: 8}}/>
    </div>
  )

};

export default Flick;
