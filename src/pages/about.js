import React from "react"
import Separator from "../components/separator.js"
import '../styles/imports.scss'

export default () =>
<div className="about pt-4 pl-lg-5 pr-lg-5 pl-sm-4 pr-sm-4 pl-2 pr-2 pb-5">
  <div id="invisibleScrollLocation"></div>
  <div className="container-lg">
    <div className="row">
      <div className="col-md-7 pr-lg-5 pr-md-4">
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h2 className="my-5 text-color-shadow">What I do</h2>
          <div id="sc4">
            <Separator
              marginBottom= '-56px'
              transform= 'perspective(48px) rotateX(18deg)'
            />
          </div>
        </div>
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h3 className="mt-4">Freelance developer <span className="date-section"> / 2020</span></h3>
          <p className="text-justify">Designs and implements dynamic and responsive web applications using React.js, Ruby On Rails, or Wordpress, depending on the needs of the client and the project.</p>
        </div>
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h3 className="mt-4">Programming teacher<span className="date-section"> / 2020</span></h3>
          <p className="text-justify">Programming teacher at Le Wagon Montreal. Gives HTML, CSS and JS classes; accompanies students in carrying out their projects using Ruby On Rails, JavaScript, AJAX, SQL, APIs and more.</p>
        </div>
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h3 className="mt-4">Private tutoring<span className="date-section"> / 2020</span></h3>
          <p className="text-justify">
          Gives interactive one-on-one programming classes to motivated students who want to discover or enhance their abilities in JavaScript, Python, HTML/CSS... Material covered includes:
          </p>
          <ul className="text-list">
            <li>Programming fundamentals</li>
            <li>Responsive web design</li>
            <li>Web scraping, interactions with APIs</li>
            <li>Data science with python (pandas library)</li>
          </ul>
        </div>
      </div>
      <div className="col-md-5">
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h2 className="my-5 text-color-shadow">Education</h2>
          <div id="sc5">
            <Separator
              marginBottom= '-56px'
              transform= 'perspective(48px) rotateX(18deg)'
            />
          </div>
        </div>
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h3 className="mt-4">Le Wagon<span className="date-section"> / 2017-2020</span></h3>
          <p className="" style={{textAlign: 'justify', textJustify: 'inter-word'}}>Attended Le Wagon Montreal (Batch #281). 9-week intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to production a clone of AirBnB and a Rails prototype of <a className="link clicky-effect" href="http://bandwizard.co/" target="_blank">bandwizard.co.</a></p>
        </div>
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h3 className="mt-4">HEC Montréal<span className="date-section"> / 2017-2020</span></h3>
          <p className="text-justify">Bachelor's of Business Administration, major in business intelligence (BI). Student exchange at Hong Kong Polytechnic University. Among other skills aquired during a bachelor's degree, learned to use tools such as GitLab, Jupyter Notebook, Tableau, MS SQL Server, MS Power BI, DAX, SAP, SAS, and SAS EM.</p>
          <a href="mailto:ni.fraisse@gmail.com" className="link clicky-effect" target="_blank" rel="noopener noreferrer">Full CV by request</a>
        </div>
      </div>
    </div>
  </div>
</div>
