import React, { useState } from "react"
import {useSpring, animated} from 'react-spring'
import '../styles/imports.scss'


const Toolkit = () => {

  const [state, toggle] = useState(true)
  const animation = useSpring({
    to: {opacity: state ? 1 : 0, transform: state ? 'translateY(0px)'  : 'translateY(10px)'},
    from: {opacity: 0}
  })

  return (
    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
      <img src="tools.png" alt="" width="64" className="m-5"/>
      <div className="toolkit">
        <div className="main-tools" onClick={() => toggle(!state)}>
          <p className="text-center text-sm-justify">Ruby On Rails・HTML・CSS・JavaScript・React.js・Gatsby.js・Python</p>
        </div>
        <animated.div style={animation} className="misc-tools">
          <p className="text-center text-sm-justify">Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text・Photoshop・GitHum・MacOS・Bootstrap</p>
        </animated.div>
      </div>
    </div>
  )
};

export default Toolkit;
