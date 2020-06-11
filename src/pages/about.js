import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import Toolkit from "../components/toolkit.js"
import Separator from "../components/separator.js"
import '../styles/imports.scss'
import ReactTooltip from "react-tooltip";


export default () =>

<div id="about">
  <ReactTooltip effect="solid" html={true} />
  <div className="container">
    <h2 className="my-5 text-color-shadow">What I do</h2>
    <Separator
      color='rgba(86, 99, 238, 0.3)'
      width='200px'
      marginBottom= '60px'
      marginTop= '-90px'
      transform= 'perspective(48px) rotateX(18deg)'
    />
    <div className="row">
      <div className="col-md-4">
        <img src="nicolas-fraisse.jpg" className="profile-picture rounded" alt=""/>
      </div>
      <div className="col-md-8">
        <div className="px-4">
          <p style={{fontSize: '24px'}}>👉 I build digital products.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate accusamus eligendi sequi temporibus minus consectetur rerum nisi velit neque, sint doloribus animi odio officia aut consequuntur vel corrupti voluptates numquam.</p>
          <p style={{fontSize: '24px'}}>👉 I teach code.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus molestias quasi neque velit quae, a quam totam magnam et molestiae cupiditate! Suscipit cumque qui, consequatur sapiente eum molestiae praesentium omnis commodi modi veniam. Provident accusantium ipsam ea, optio vero.</p>
          <p style={{fontSize: '24px'}}>👉 I stay creative.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus molestias quasi neque velit quae, a quam totam magnam et molestiae cupiditate! Suscipit cumque qui, consequatur sapiente eum molestiae praesentium omnis commodi modi veniam. Provident accusantium ipsam ea, optio vero.</p>

        </div>
      </div>
    </div>

    <div className="row mt-5 mb-5">
      <div className="col-md-7 pr-lg-5 pr-md-4">
        <h2 className="my-5 text-color-shadow">Experience</h2>
        <Separator
          color='rgba(86, 99, 238, 0.3)'
          width='240px'
          marginBottom= '60px'
          marginTop= '-90px'
          transform= 'perspective(48px) rotateX(18deg)'
        />
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
        <h2 className="my-5 text-color-shadow">Education</h2>
        <Separator
          color='rgba(86, 99, 238, 0.3)'
          width='220px'
          marginBottom= '60px'
          marginTop= '-90px'
          transform= 'perspective(48px) rotateX(18deg)'
        />
        <h3>Le Wagon | 2020</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
        <h3>HEC Montréal | 2017-2020</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo qui debitis facere, perferendis fuga animi nesciunt vero, pariatur quisquam quia in quasi magni iusto cum mollitia temporibus nihil culpa ea!</p>
      </div>
    </div>
  </div>
</div>
