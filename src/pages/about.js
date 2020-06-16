import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Toolkit from "../components/toolkit.js"
import Separator from "../components/separator.js"
import '../styles/imports.scss'
import ReactTooltip from "react-tooltip";


export default () =>

<div className="about pt-5 pl-5 pr-5 pb-5">
  <div className="container">


    <div className="row">
      <div className="col-md-7 pr-lg-5 pr-md-4">
        <h2 className="my-5 text-color-shadow">What I do</h2>
        <Separator
          width='212px'
          marginBottom= '60px'
          marginTop= '-90px'
          transform= 'perspective(48px) rotateX(18deg)'
        />
        <h3>Freelance developer <span className="date-section"> / 2020</span></h3>
        <p className="text-justify">Designs and implements dynamic and responsive websites using React.js, Ruby On Rails, or Wordpress, depending on the needs of the client or the project.</p>
        <h3>Programming teacher<span className="date-section"> / 2020</span></h3>
        <p className="text-justify">Programming teacher at Le Wagon coding bootcamp in Montreal. Gives HTML and CSS classes, and helps students solve exercises related to JavaScript, HTML, CSS, Ruby On Rails, SQL, and object-oriented programming.</p>

        <h3>Private tutoring<span className="date-section"> / 2020</span></h3>
        <p className="text-justify">
          Gives interactive one-on-one programming classes to motivated students who want to discover or enhance their abilities in JavaScript, Python, HTML/CSS, Ruby, and much more. Material covered includes:
          <ul className="text-list">
            <li>Programming fundamentals</li>
            <li>Responsive web design</li>
            <li>Web scraping, interactions with APIs</li>
            <li>Data science with python (pandas library)</li>
          </ul>
        </p>
      </div>
      <div className="col-md-5">
        <h2 className="my-5 text-color-shadow">Education</h2>
        <Separator
          width='220px'
          marginBottom= '60px'
          marginTop= '-90px'
          transform= 'perspective(48px) rotateX(18deg)'
        />
        <h3>Le Wagon<span className="date-section"> / 2017-2020</span></h3>
        <p className="text-justify">Attended Le Wagon Montreal (Batch #281). 9-week intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES2015,SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped toproduction a clone of AirBnB and a Rails prototype of www.bandwizard.co.</p>
        <h3>HEC Montréal<span className="date-section"> / 2017-2020</span></h3>
        <p className="text-justify">Bachelor's of Business Administration, major in business intelligence (BI). Mention ef excellence. Among other skills aquired during bachelor's degree, learned to use tools such as Jupyter Notebook, Tableau, MS SQL Manager, MS Power BI, SAP, SAS, SAS EM, and much more.</p>
        <a href="#">Full CV by request</a>

      </div>
    </div>
  </div>
</div>
