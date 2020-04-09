import React from "react"

import '../styles/imports.scss'

const Project = (props) => {
  console.log(props)
  const projectIcons = props.icons.map((icon) =>
    <li key={icon} className='skill-icon'><img src={icon} alt=""/></li>
  );
  const reverse = props.reverse ? 'reverse' : ''

  return(
  <div className={`project ${reverse}`}>
    <img
    className='project-img'
    src={props.img}
    alt={props.img}
    style={{
      width: props.imgWidth || '320px',
    }}
    />
    <div className="project-description" style={props.reverse ? {textAlign: 'right'} : {}}>
      <h3>{props.title}</h3>

      {props.description.split('<br>').map(text => <p>{text}</p>)}
      <ul className='skill-list'>
        {projectIcons}
      </ul>
      <a href={props.source} className="project-source">View source</a>
    </div>
  </div>
  )
};

export default Project;
