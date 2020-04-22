import React from "react"

import '../styles/imports.scss'

const Project = (props) => {
  const projectIcons = props.icons.map((icon) =>
    <li key={icon} className='skill-icon list-inline-item'><img src={icon} alt=""/></li>
  );
  const reverse = props.reverse ? 'reverse' : ''

  return (
    <div className={`project d-flex my-5 ${reverse}`}>
      <img
      className='project-img mx-1 mx-xl-2'
      src={props.img}
      alt={props.img}
      style={{
        width: props.imgWidth || '320px',
      }}
      />
      <div className="project-description my-5 my-md-auto px-2 px-sm-4 px-xl-5" style={props.reverse ? {textAlign: 'right'} : {}}>
        <h3>{props.title}</h3>
        {props.description.split('<br>').map(text => <p>{text}</p>)}
        <ul className='list-inline text-center mt-4'>
          {projectIcons}
        </ul>
        <a href={props.source} className="text-center d-block">View source</a>
      </div>
    </div>
  )
};

export default Project;
