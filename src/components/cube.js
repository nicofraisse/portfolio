import React from 'react'
import '../styles/imports.scss'

const Cube = () =>  {


  return(
    <div>
      <div class="scene">
        <div class="cube">
          <div class="cube__face cube__face--front"><div style={{color: 'white', fontSize: 14, fontFamily: 'Avenir'}}></div></div>
          <div class="cube__face cube__face--back"><div style={{color: 'white', fontSize: 14, fontFamily: 'Avenir'}}></div></div>
          <div class="cube__face cube__face--right"><div style={{color: 'white', fontSize: 14, fontFamily: 'Avenir'}}></div></div>
          <div class="cube__face cube__face--left"><div style={{color: 'white', fontSize: 14, fontFamily: 'Avenir'}}></div></div>
          <div class="cube__face cube__face--top"><div style={{color: 'white', fontSize: 14, fontFamily: 'Avenir'}}></div></div>
          <div class="cube__face cube__face--bottom"><div style={{color: 'white', fontSize: 14, fontFamily: 'Avenir'}}></div></div>
        </div>
      </div>
    </div>
  )
}

export default Cube;
