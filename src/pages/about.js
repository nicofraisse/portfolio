import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Toolkit from "../components/toolkit.js"
import '../styles/imports.scss'


export default () =>

<Main>
  <div className="container">
    <h2 className="my-5">Summary</h2>

    <div className="row">
      <div className="col-3">
        <img src="nicolas-fraisse.jpg" className="avatar-round" alt=""/>
      </div>
      <div className="col-9">
        <div className="p-5">
          <ul>
            <li>I teach front-end (HTML & CSS) at Le Wagon coding bootcamp in Montreal, Canada.</li>
            <li>I work on <a href="#">full-stack projects</a> using React.JS and Ruby On Rails.</li>
            <li>I give one on one classes in Python for data science.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="list-inline text-center border-bottom border-top my-5 py-3">
      <a href="#!" className="list-inline-item mx-5"><i class="fab fa-linkedin-in social-icon"></i></a>
      <a href="#!" className="list-inline-item mx-5"><i class="fab fa-instagram social-icon"></i></a>
      <a href="#!" className="list-inline-item mx-5"><i class="fab fa-flickr social-icon"></i></a>
      <a href="#!" className="list-inline-item mx-5"><i class="fab fa-github social-icon"></i></a>
    </div>
  <h2 className="my-5">Toolkit</h2>
  <Toolkit className="mb-5"></Toolkit>

  <h2 className="my-5">Experience</h2>
  <h3>Front-end teacher | 2020</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
  <h3>Teacher assistant | 2020</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
  <h3>Freelance developer | 2020</h3>
  <p><a href="#">View projects</a> - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
  <a href="#">Full CV by request</a>

  <h2 className="my-5">Education</h2>
  <h3>Le Wagon | 2020</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>

  <h3>HEC Montréal | 2017-2020</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>


  </div>


</Main>
