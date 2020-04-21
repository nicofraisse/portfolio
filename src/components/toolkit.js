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
    <div class="toolkit-container">
      <div>
        <img src="tools.png" alt="" style={{width: 64, margin:48}}/>
      </div>
      <div className="toolkit">
        <div className="main-tools" onClick={() => toggle(!state)}>
          <p>Ruby On Rails・HTML・CSS・JavaScript・React.js・Gatsby.js・Python</p>
        </div>
        <animated.div style={animation} className="misc-tools">
          <p>Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text・Photoshop・GitHum・MacOS・Bootstrap</p>
        </animated.div>
      </div>
    </div>
  )
};

export default Toolkit;
