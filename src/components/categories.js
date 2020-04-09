import React from "react"

import '../styles/imports.scss'

const Categories = (props) => (

  <div className="categories">
    <div className="category">
      <img src="rails.png" alt="rails"/>
      <span>Ruby On Rails</span>
    </div>
    <div className="category">
      <img src="html.png" alt="html"/>
      <span>HTML</span>
    </div>
    <div className="category">
      <img src="css.png" alt="css"/>
      <span>CSS</span>
    </div>
    <div className="category">
      <img src="javascript.png" alt="javascript"/>
      <span>JavaScript</span>
    </div>
    <div className="category">
      <img src="react.png" alt="react"/>
      <span>React.js</span>
    </div>
    <div className="category">
      <img src="gatsby.png" alt="gatsby"/>
      <span>Gatsby.js</span>
    </div>
    <div className="category">
      <img src="wordpress.png" alt="wordpress"/>
      <span>WordPress</span>
    </div>

  </div>

);

export default Categories;
