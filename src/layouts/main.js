import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

import '../styles/imports.scss'


const Main = ({ children }) => (
  <div>
    <Header />
      <div className="main">
        { children }
      </div>
    <Footer />
  </div>
);

export default Main;
