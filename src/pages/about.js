import React from "react"
import Separator from "../components/separator.js"
import "../styles/imports.scss"

export default () => (
  <div className="about pt-4 pl-lg-5 pr-lg-5 pl-sm-4 pr-sm-4 pl-2 pr-2 pb-5">
    <div id="invisibleScrollLocation"></div>
    <div className="container-lg">
      <div className="row">
        <div className="col-md-7 pr-lg-5 pr-md-4">
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
            <h3 className="mt-4">
              Fullstack Web Development <span className="date-section"></span>
            </h3>
            <p className="text-justify">
              Develops web-based applications using React.JS in the front-end
              and Ruby On Rails or Node.JS in the backend. Day-to-day work
              includes:
              <ul className="text-list">
                <li>Building & maintaining user-facing features in React</li>
                <li>
                  Building & maintaining backend code including GraphQL
                  endpoints
                </li>
                <li>
                  Writing automated tests (Jest, RSpec) Conducting code reviews
                </li>
                <li>
                  Communicating with development, UI/UX, QA & CS teams to
                  deliver the best possible product
                </li>
              </ul>
            </p>
          </div>
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <h3 className="mt-4">
              Teaching & tutoring<span className="date-section"></span>
            </h3>
            <p className="text-justify">
              Programming teacher at Le Wagon Montreal:
            </p>

            <ul className="text-list">
              <li>
                Gives lectures on JavaScript, Python, Ruby, HTML, CSS, and
                related technologies
              </li>

              <li>
                Leads teams to carry out their own projects using Ruby On Rails.
                Gives feedback on the teams' products regarding their user
                stories, value proposition, pitches, and UI/UX
              </li>

              <li>
                Conducts technical interviews for prospective Data Science
                students
              </li>

              <li>Ran coding workshops</li>
            </ul>
          </div>
        </div>

        <div className="col-md-5">
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <h2 className="my-5 text-color-shadow">Education</h2>
            <div id="sc5">
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
            <h3 className="mt-4">
              Le Wagon<span className="date-section"> / 2019</span>
            </h3>
            <p className="text-justify">
              Attended Le Wagon coding bootcamp (Batch #281). 9-week intensive
              coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,
              SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented
              and shipped to production a clone of AirBnB and a Rails prototype
              of{" "}
              <a
                className="link clicky-effect"
                href="http://bandwizard.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                bandwizard.co.
              </a>
            </p>
          </div>
          <div
            data-sal="fade"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <h3 className="mt-4">
              HEC Montréal<span className="date-section"> / 2017-2020</span>
            </h3>
            <p className="text-justify">
              Bachelor's of Business Administration, major in Business
              Intelligence (BI). Selected for student exchange at Hong Kong
              Polytechnic University. Various academic work using tools such as
              Tableau, MS SQL Server, MS Power BI, DAX language, SAS language,
              SAS Enterprise Miner, SAP, Pandas pyton library, GitLab, and
              Jupyter Notebook.
            </p>
            <a
              href="mailto:ni.fraisse@gmail.com"
              className="link clicky-effect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full CV by request
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
