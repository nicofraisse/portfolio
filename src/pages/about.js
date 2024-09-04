import React from "react"
import Separator from "../components/separator.js"
import "../styles/imports.scss"

export default () => (
  <div className="about pt-4 pl-lg-5 pr-lg-5 pl-sm-4 pr-sm-4 pl-2 pr-2 pb-5">
    <div id="invisibleScrollLocation"></div>
    <div className="container-lg">
      <div className="row">
        <div className="col-md-12 pr-lg-5 pr-md-4">
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
              As a full-stack web developer with a focus on frontend
              development, I bring ideas to life through code. My day-to-day
              activities involve:
            </p>
            <ul className="text-list">
              <li>
                Architecting and implementing user-facing features using modern
                JavaScript frameworks, primarily React
              </li>
              <li>
                Designing and developing RESTful and GraphQL APIs to support
                frontend functionality
              </li>
              <li>
                Optimizing application performance and ensuring cross-browser
                compatibility
              </li>
              <li>
                Collaborating with UI/UX designers to transform wireframes and
                mockups into responsive, interactive interfaces
              </li>
              <li>
                Implementing state management solutions to handle complex
                application logic
              </li>
              <li>
                Writing clean, maintainable, and well-documented code adhering
                to best practices and coding standards
              </li>
              <li>
                Conducting code reviews and mentoring junior developers to
                elevate team skills and code quality
              </li>
              <li>
                Integrating third-party services and APIs to extend application
                functionality
              </li>
              <li>
                Implementing automated testing strategies to ensure application
                reliability and reduce bugs
              </li>
              <li>
                Participating in agile development processes, including sprint
                planning and retrospectives
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
              Beyond my core responsibilities, I'm passionate about:
            </p>
            <ul className="text-list">
              <li>
                Exploring emerging web technologies and their potential
                applications in real-world scenarios
              </li>
              <li>
                Optimizing development workflows and tooling to increase team
                productivity
              </li>
              <li>
                Advocating for accessibility and inclusive design in web
                applications
              </li>
              <li>
                Continuously refining my skills in full-stack development, with
                a particular interest in serverless architectures and
                microservices
              </li>
              <li>
                Contributing to open-source projects and staying engaged with
                the developer community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
