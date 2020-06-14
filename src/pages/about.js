import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Toolkit from "../components/toolkit.js"
import Separator from "../components/separator.js"
import '../styles/imports.scss'
import ReactTooltip from "react-tooltip";


export default () =>

<div className="about p-5">
  <div className="container">


    <div className="row mb-5">
      <div className="col-md-7 pr-lg-5 pr-md-4">
        <h2 className="my-5 text-color-shadow">Experience</h2>
        <Separator
          width='240px'
          marginBottom= '60px'
          marginTop= '-90px'
          transform= 'perspective(48px) rotateX(18deg)'
        />
        <h3>Front-end teacher <span className="date-section">/ 2020</span></h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <h3>Teacher assistant <span className="date-section">/ 2020</span></h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <h3>Freelance developer <span className="date-section">/ 2020</span></h3>
        <p className="text-justify"><a href="#">View projects</a> - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <a href="#">Full CV by request</a>
      </div>
      <div className="col-md-5">
        <h2 className="my-5 text-color-shadow">Education</h2>
        <Separator
          width='220px'
          marginBottom= '60px'
          marginTop= '-90px'
          transform= 'perspective(48px) rotateX(18deg)'
        />
        <h3>Le Wagon <span className="date-section">/ 2017-2020</span></h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <h3>HEC Montréal <span className="date-section">/ 2017-2020</span></h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
      </div>
    </div>
  </div>
</div>
