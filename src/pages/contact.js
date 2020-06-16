import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Separator from "../components/separator.js"
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
    <h2 className="my-5 text-color-shadow">Contact</h2>
    <Separator
      width='220px'
      marginBottom= '80px'
      marginTop= '-90px'
      transform= 'perspective(48px) rotateX(18deg)'
    />

    <h3 className="text-center my-5" style={{fontSize: 28}}>Available for hire ✌️ <br/>For any enquiries, please <span style={{textDecoration: 'underline'}}>email me here.</span></h3>
    <div className="profile-card-container">
      <div className="profile-card">
        <img src="nicolas-fraisse.jpg" class="nicolas-pdp" alt=""/>
        <div className="text-center icon-grid">
          <a href="https://github.com/nicofraisse" title="GitHub" target="blank"><i className="fab fa-github social-icon"></i></a>
          <a href="https://www.linkedin.com/in/nicolasfraisse/" title="LinkedIn" target="blank"><i className="fab fa-linkedin-in social-icon"></i></a>
          <a href="https://www.instagram.com/nicofraisse/" title="Instagram" target="blank"><i className="fab fa-instagram social-icon"></i></a>
          <a href="https://www.flickr.com/photos/129462013@N05/" title="Flickr" target="blank"><i className="fab fa-flickr social-icon"></i></a>
        </div>
      </div>
    </div>


  </div>
  )
}


export default Contact;
