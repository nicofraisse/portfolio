import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"

import '../styles/imports.scss'


const Contact = () => {

  var btn = document.querySelector('.btn-3d');
  var linkers = document.querySelectorAll('.btn-linker');

  for (const linker of linkers) {
    btn.addEventListener("mouseenter", (e) => {
      linker.classList.add('shrink');
    })
    btn.addEventListener("mouseleave", (e) => {
      linker.classList.remove('shrink');
    })
    btn.addEventListener("mousedown", (e) => {
      linker.classList.add('shrink-more');
    })
    document.addEventListener("mouseup", (e) => {
      linker.classList.remove('shrink-more');
    })
  }

  return (
  <div className="contact">
    <div style={{backgroundColor: '#e6948a'}}className="list-inline text-center mb-0 py-4">
      <a href="#!" className="list-inline-item mx-5"><i className="fab fa-linkedin-in social-icon"></i></a>
      <a href="#!" className="list-inline-item mx-5"><i className="fab fa-instagram social-icon"></i></a>
      <a href="#!" className="list-inline-item mx-5"><i className="fab fa-flickr social-icon"></i></a>
      <a href="#!" className="list-inline-item mx-5"><i className="fab fa-github social-icon"></i></a>
    </div>
    <div className="contact-center-container">
      <h2>Contact Me.</h2>
      <div className="contact-buttons">
        <div className="btn-3d-container">
          <div className="btn-3d">
            <a href="mailto:ni.fraisse@gmail.com?subject=hey" className="btn-front">contact</a>
            <div className="btn-back"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Contact;
