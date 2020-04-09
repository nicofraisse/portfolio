import React from "react"

import '../styles/imports.scss'

const Flick = (props) => (

  <div className="flick" style={{ backgroundImage: `url(${props.source})`}}>

  </div>

);

export default Flick;
