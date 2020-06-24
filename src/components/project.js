import React from "react"
import ReactTooltip from "react-tooltip";
import '../styles/imports.scss'
import socialLogo from '../images/social-logo.png'

const Project = (props) => {
  const projectIcons = props.icons.map((icon) =>
    <li
    key={icon.toString()}
    value={icon}
    data-for="bis"
    className='skill-icon list-inline-item'
    data-html={true} data-delay-hide='200'
    data-tip={`<span>${icon.split('.')[0]}</span>`}
    >
      <img src={"/skill_icons/" + icon} alt={icon} />
    </li>
  );
  const reverse = props.reverse ? 'reverse' : ''
  const borderBottomLight = props.borderBottomLight ? 'border-bottom-light' : ''

  return (
    <div className={`project d-flex mt-5 mb-0 mt-md-5 mb-md-5 pb-4 pb-md-0 ${reverse} ${borderBottomLight}`}>
      <img src={`${socialLogo}`} alt="SH" style={{display: 'none', width: '400'}}/>
      <a href={props.site} target="_blank" rel="noopener noreferrer" className="project-img-link">
        <img
        className='project-img mx-1 mx-xl-2 mb-md-0 mb-3'
        src={"/projects/" + props.img}
        alt={props.img}
        style={{ width: props.imgWidth || '320px'}}
        />
      </a>
      <div className="project-description mt-4 mb-3 mt-md-5 mb-md-5 my-md-auto px-2 px-sm-4 px-xl-5" style={props.reverse ? {textAlign: 'right'} : {}}>
        <h3>{props.title} <span className='date-section'>/ {props.date}</span></h3>
        {props.description.split('<br>').map(text => <p className="text-justify-mobile" key={text}>{text}</p>)}
        <ul className={`list-inline mt-4 ${props.reverse ? "ul-right" : ""}`}>
          {projectIcons}
        </ul>
        <ReactTooltip id="bis" className="no-select" effect="solid" data-html={true} textColor={"rgba(251, 251, 251, 1.00)"} offset={{'top': -4, 'left': 0}}/>
        <div className="source-center-mobile">
          <span className={props.noSite ? "d-none" : ""}>
            <a href={props.site} className="p-0 clicky-effect link" target="_blank" rel="noopener noreferrer">View site</a>
            <span className="text-grey no-select"> / </span>
          </span>
          <a href={props.source} className={props.source ? "clicky-effect link" : "d-none"} target="_blank" rel="noopener noreferrer">View source</a>
          <span className={props.source ? "d-none" : "disabled-link no-select"} target="_blank" rel="noopener noreferrer">Source private</span>
        </div>
      </div>
    </div>
  )
};

export default Project;
