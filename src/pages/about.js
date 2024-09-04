import React from "react"
import Separator from "../components/separator.js"
import "../styles/imports.scss"

export default () => (
  <div className="about pt-4 px-2 px-sm-4 px-lg-5 pb-5">
    <div id="invisibleScrollLocation"></div>
    <div className="container-lg">
      <div className="row">
        <div className="col-md-12 pr-md-4 pr-lg-5">
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <h2 className="my-5 text-color-shadow">What I do</h2>
            <div id="sc4">
              <Separator
                marginBottom="-56px"
                transform="perspective(48px) rotateX(18deg)"
              />
            </div>
          </div>
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p className="text-justify">
              As a full-stack web developer with a passion for product creation,
              I bring ideas to life through code and design. My work involves:
            </p>
            <ul className="text-list">
              <li>
                Transforming concepts into user-friendly web applications using
                modern JavaScript frameworks, primarily React
              </li>
              <li>
                Designing and implementing both frontend interfaces and backend
                APIs to create cohesive, functional products
              </li>
              <li>
                Collaborating with designers and stakeholders to craft intuitive
                user experiences and visually appealing interfaces
              </li>
              <li>
                Optimizing application performance and ensuring cross-browser
                compatibility
              </li>
              <li>
                Writing clean, maintainable code and conducting code reviews to
                elevate team skills and product quality
              </li>
            </ul>
          </div>
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p className="text-justify mt-4">
              Beyond simply coding, I'm passionate about:
            </p>
            <ul className="text-list">
              <li>
                Creating products focusing on both technical implementation and
                user-centered design
              </li>
              <li>
                Understanding user emotions and needs to deliver empathetic,
                impactful digital experiences
              </li>
              <li>
                Exploring emerging technologies and their potential to solve
                real-world problems
              </li>
              <li>
                Optimizing development workflows to increase team productivity
              </li>
              <li>
                Advocating for accessibility and inclusive design in all
                projects
              </li>
              <li>
                Continuously expanding my skills in both technical development
                and product strategy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
