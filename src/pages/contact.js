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
    <h2>Contact Me.</h2>
    <div className="contact-buttons">
      <div class="btn-3d-container">
        <div class="btn-3d">
          <a href="mailto:ni.fraisse@gmail.com?subject=hey" class="btn-front">contact</a>
          <div class="btn-back"></div>
        </div>
      </div>


    </div>
  </div>
  )
}


export default Contact;
