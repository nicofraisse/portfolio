import React from "react"

import '../styles/imports.scss'

const Categories = (props) => (
  <div className="categories sticky-onscroll">
    <div className="category">
      <span style={{textDecoration: 'underline'}}>Select All</span>
    </div>
    <div className="category">
      <span>Ruby On Rails</span>
    </div>
    <div className="category">
      <span>Vanilla JavaScript</span>
    </div>
    <div className="category">
      <span>React.js</span>
    </div>
    <div className="category">
      <span>Gatsby.js</span>
    </div>
    <div className="category">
      <span>WordPress</span>
    </div>
    <div className="category">
      <span>Python</span>
    </div>
  </div>
);

export default Categories;
