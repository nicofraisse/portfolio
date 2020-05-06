import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Toolkit from "../components/toolkit.js"
import '../styles/imports.scss'
import ReactTooltip from "react-tooltip";


export default () =>

<div id="about">
  <ReactTooltip effect="solid" html="true" />
  <div className="container">
    <h2 className="my-5">About me</h2>
    <div className="row">
      <div className="col-md-4">
        <img src="nicolas-fraisse.jpg" className="profile-picture rounded" alt=""/>
      </div>
      <div className="col-md-8">
        <div className="p-5">
          <ul>
            <li>I teach front-end (HTML & CSS) at Le Wagon coding bootcamp in Montreal, Canada.</li>
            <li>I work on <a href="#">full-stack projects</a> using React.JS and Ruby On Rails.</li>
            <li>I give one on one classes in Python for data science.</li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat numquam quibusdam ipsum itaque alias! Minus quas, earum at fugiat perferendis atque, deleniti placeat voluptas non reprehenderit eligendi neque. Possimus, soluta impedit porro quisquam iste quibusdam, adipisci delectus, perferendis esse totam quas veniam repellendus praesentium, officiis accusantium excepturi quod laudantium. Maxime.</p>
          </ul>
        </div>
      </div>
    </div>
    <h2 className="mb-4 mt-5">Toolkit</h2>
    <div className="row">
      <div className="col-md-4">
        <i
          data-tip="<h3 class='icon-tooltip'>Frameworks</h3>"
          style={{fontSize: 64}}
          class="fas fa-tools text-center w-100 my-4"
        />
        <div className="toolkit">
          <div className="main-tools">
            <p className="text-center text-sm-justify">Ruby On Rails・HTML・CSS・JavaScript・React.js</p>
          </div>
          <div className="misc-tools">
            <p className="text-center text-sm-justify">Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <i
          data-tip="<h3 class='icon-tooltip'>Front-end</h3>"
          style={{fontSize: 64}}
          class="fas fa-magic text-center w-100 my-4"
        />
        <div className="toolkit">
          <div className="main-tools">
            <p className="text-center text-sm-justify">Ruby On Rails・HTML・CSS・JavaScript・React.js</p>
          </div>
          <div className="misc-tools">
            <p className="text-center text-sm-justify">Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <i
          data-tip="<h3 class='icon-tooltip'>Back-end</h3>"
          style={{fontSize: 64}}
          class="fas fa-database text-center w-100 my-4"
        />
        <div className="toolkit">
          <div className="main-tools">
            <p className="text-center text-sm-justify">Ruby On Rails・HTML・CSS・JavaScript・React.js</p>
          </div>
          <div className="misc-tools">
            <p className="text-center text-sm-justify">Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5 mb-5">
      <div className="col-md-7 pr-lg-5 pr-md-4">
        <h2 className="my-5">Experience</h2>
        <h3>Front-end teacher | 2020</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <h3>Teacher assistant | 2020</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <h3>Freelance developer | 2020</h3>
        <p className="text-justify"><a href="#">View projects</a> - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <a href="#">Full CV by request</a>
      </div>
      <div className="col-md-5">
        <h2 className="my-5">Education</h2>
        <h3>Le Wagon | 2020</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <h3>HEC Montréal | 2017-2020</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
      </div>
    </div>
  </div>
  <div className="list-inline text-center mb-4 py-3">
    <a href="#!" className="list-inline-item mx-5"><i class="fab fa-linkedin-in social-icon"></i></a>
    <a href="#!" className="list-inline-item mx-5"><i class="fab fa-instagram social-icon"></i></a>
    <a href="#!" className="list-inline-item mx-5"><i class="fab fa-flickr social-icon"></i></a>
    <a href="#!" className="list-inline-item mx-5"><i class="fab fa-github social-icon"></i></a>
  </div>

</div>
