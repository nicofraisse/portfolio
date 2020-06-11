import React from "react"

import '../styles/imports.scss'

const Logo = () => (

  <div className="logo">
    <div className="logo-full">
      <span className="nicolas">n<span className="">icolas</span></span><span className="fraisse">fraisse</span>
      <div className="logo-description">fullstack web developer</div>
    </div>
    <div className="logo-initials">
      <img src="logo-full.png" alt="" height="80" width="80" />
      <span className="n">n</span><span className="f">f</span>
    </div>
  </div>

);

export default Logo;
