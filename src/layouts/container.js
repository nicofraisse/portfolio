import React from "react"

import '../styles/imports.scss'

const Container = (props) => (
  <div className='container'>
    { props.children }
  </div>
);

export default Container;
