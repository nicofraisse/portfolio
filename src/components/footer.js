import React from "react"


import '../styles/imports.scss'


const Footer = () => (
  <div id="footer" className="border-top d-flex align-items-center justify-content-center">
    <p>© Nicolas Fraisse | { (new Date()).getFullYear() }</p>
  </div>
);

export default Footer;
