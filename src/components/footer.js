import React from "react"


import '../styles/imports.scss'


const Footer = () => (
  <div id="footer" className="d-flex align-items-center justify-content-center">
    <p data-sal="fade" data-sal-delay="0" data-sal-duration="500" data-sal-easing="ease">
      © Nicolas Fraisse | { (new Date()).getFullYear() }
    </p>
  </div>
);

export default Footer;
