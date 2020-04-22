import React from "react"


import '../styles/imports.scss'


const Footer = () => (
  <div id="footer" className="border-top d-flex align-items-center justify-content-center">
    <div className="footer-inc">
      <p>© Nicolas Fraisse | { (new Date()).getFullYear() }</p>
    </div>
  </div>
);

export default Footer;
