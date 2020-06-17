import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Separator from "../components/separator.js"
import '../styles/imports.scss'


const Contact = () => {
  return (
  <div className="contact">
    <h2 className="my-5 text-color-shadow">Contact</h2>
    <div id="sc6">
      <Separator
        marginBottom= '-80px'
        transform= 'perspective(48px) rotateX(18deg)'
      />
    </div>
    <div className="px-sm-5 px-3">
      <h3 className="text-center mt-5 text-large">Available for hire ✌️</h3>
      <h3 className="justify-max-xs text-center mb-md-4 mb-3 text-large">For any enquiries, please <span style={{textDecoration: 'underline'}}>email me here.</span></h3>
    </div>
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
