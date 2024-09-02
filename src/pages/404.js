import React, { useEffect } from "react"
import "../styles/imports.scss"

const FourOFour = () => {
  useEffect(() => {
    setTimeout(() => {
      document.body.style.opacity = 1
      document.body.classList.add("fade-in")
    }, 150)
  })

  return (
    <div className="err-layout d-flex vh-100 align-items-center justify-content-center">
      <div className="err-card">
        <h1>
          Page not found{" "}
          <span role="img" aria-label="sadface">
            😢
          </span>
        </h1>
        <a href="/" className="link clicky-effect">
          Back to homepage
        </a>
      </div>
    </div>
  )
}

export default FourOFour
