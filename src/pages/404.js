import React, { useEffect } from "react"
import '../styles/imports.scss'


const FourOFour = () => {
  useEffect(() => {
    console.log('yo')
    setTimeout(() => {
      console.log('yo')
      document.body.style.opacity = 1
      document.body.classList.add('fade-in')
    }, 150)
  });



  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      <div>
        <h1>Page not found</h1>
        <a href="/">Return to homepage</a>
      </div>
    </div>
  )
}

export default FourOFour;
