import React from "react"
import ReactTooltip from "react-tooltip";
import '../styles/imports.scss'


const Project = (props) => {
  const projectIcons = props.icons.map((icon) =>
    <li key={icon} data-for="bis" className='skill-icon list-inline-item' html={true} data-delay-hide='200' data-tip={`<span>${icon.split('.')[0]}</span>`}><img src={icon} alt=""/></li>
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
      onClick={() => window.open(props.site, "_blank")}
      />
      <div className="project-description my-5 my-md-auto px-2 px-sm-4 px-xl-5" style={props.reverse ? {textAlign: 'right'} : {}}>
        <h3>{props.title} <span className='date-section'>/ {props.date}</span></h3>
        {props.description.split('<br>').map(text => <p>{text}</p>)}
        <ul className='list-inline mt-4' style={props.reverse ? {textAlign: 'right'} : {}}>
          {projectIcons}
        </ul>
        <ReactTooltip id="bis" effect="solid" html={true} textColor={"rgba(251, 251, 251, 1.00)"} offset={{'top': -4, 'left': 0}}/>
        <div>
          <a href={props.site} class="p-0 clicky-effect link" target="blank">View site</a>
          <span className="text-grey"> / </span>
          <a href={props.source} className={props.source ? "clicky-effect link" : "d-none"} target="blank">View source</a>
          <span className={props.source ? "d-none" : "disabled-link"} target="blank">Source private</span>
        </div>
      </div>
    </div>
  )
};

export default Project;
