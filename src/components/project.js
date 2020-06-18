import React from "react"
import ReactTooltip from "react-tooltip";
import '../styles/imports.scss'


const Project = (props) => {
  const projectIcons = props.icons.map((icon) =>
    <li
    key={icon} data-for="bis"
    className='skill-icon list-inline-item'
    html={true} data-delay-hide='200'
    data-tip={`<span>${icon.split('.')[0]}</span>`}
    >
      <img src={"/skill_icons/" + icon} alt=""/>
    </li>
  );
  const reverse = props.reverse ? 'reverse' : ''
  const borderBottomLight = props.borderBottomLight ? 'border-bottom-light' : ''

  return (
    <div className={`project d-flex mt-5 mb-0 mt-md-5 mb-md-5 pb-4 pb-md-0 ${reverse} ${borderBottomLight}`}>
      <img
      className='project-img mx-1 mx-xl-2 mb-md-0 mb-3'
      src={"/projects/" + props.img}
      alt={props.img}
      style={{ width: props.imgWidth || '320px'}}
      onClick={() => window.open(props.site, "_blank")}
      />
      <div className="project-description mt-4 mb-3 mt-md-5 mb-md-5 my-md-auto px-2 px-sm-4 px-xl-5" style={props.reverse ? {textAlign: 'right'} : {}}>
        <h3>{props.title} <span className='date-section'>/ {props.date}</span></h3>
        {props.description.split('<br>').map(text => <p className="text-justify-mobile">{text}</p>)}
        <ul className={`list-inline mt-4 ${props.reverse ? "ul-right" : ""}`}>
          {projectIcons}
        </ul>
        <ReactTooltip id="bis" className="no-select" effect="solid" html={true} textColor={"rgba(251, 251, 251, 1.00)"} offset={{'top': -4, 'left': 0}}/>
        <div className="source-center-mobile">
          <a href={props.site} class="p-0 clicky-effect link" target="blank">View site</a>
          <span className="text-grey no-select"> / </span>
          <a href={props.source} className={props.source ? "clicky-effect link" : "d-none"} target="blank">View source</a>
          <span className={props.source ? "d-none" : "disabled-link no-select"} target="blank">Source private</span>
        </div>
      </div>
    </div>
  )
};

export default Project;
