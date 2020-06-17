import React from "react"

import '../styles/imports.scss'

const Container = (props) => (
  <div className='my-container'>
    { props.children }
  </div>
);

export default Container;
