import React from "react"
import Separator from "../components/separator.js"
import "../styles/imports.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div
        data-sal="fade"
        data-sal-delay="0"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <h2 className="my-5 text-color-shadow">Contact</h2>
        <div id="sc6">
          <Separator
            marginBottom="-80px"
            transform="perspective(48px) rotateX(18deg)"
          />
        </div>
      </div>
      <div
        className="px-sm-5 px-3 pt-xl-2 pb-xl-1"
        data-sal="fade"
        data-sal-delay="0"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <h3 className="justify-max-xs text-center  mt-5 text-large">
          For any inquiries, please{" "}
          <span className="email-link clicky-effect">
            <a
              href="mailto:ni.fraisse@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              email me here
            </a>
          </span>{" "}
          <span role="img" aria-label="peace emoji">
            ✌️
          </span>
        </h3>
      </div>

      <div
        className="profile-card-container"
        data-sal="fade"
        data-sal-delay="0"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <div className="profile-card">
          <img src="nicolas-fraisse.jpg" className="nicolas-pdp" alt="" />
          <div className="text-center icon-grid">
            <a
              href="https://github.com/nicofraisse"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github social-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/nicofraisse/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram social-icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolasfraisse/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in social-icon"></i>
            </a>
            <a
              href="https://www.flickr.com/photos/129462013@N05/"
              title="Flickr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-flickr social-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
