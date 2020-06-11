import React, { useState, useEffect } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import '../styles/imports.scss'
import storage from 'local-storage-fallback'

const GlobalStyle = createGlobalStyle`
* {
  color: ${props => props.theme.mode === 'dark' ? '#FBFBFB' : '#0E0E0E'};
}
html, body {
  background-color: ${props => props.theme.mode === 'dark' ? '#1C1C1C' : 'rgba(252,250,249, 1);'};
    transition: background-color 0.2s;
}
#header {
  background-color: ${props => props.theme.mode === 'dark' ? 'rgba(14,14,14, 0.95)' : 'rgba(254,253,252, 0.95);'};
  box-shadow: 0px 0px 20px ${props => props.theme.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'};
}
.nicolas, .logo-description {
  color: ${props => props.theme.mode === 'dark' ? '#FBFBFB' : '#0E0E0E'};
  transition: color 0.2;
}
.fraisse {
  color: ${props => props.theme.mode === 'dark' ? '#EBEBEB' : 'rgba(0,0,0,0.8)'};
  transition: color 0.2;
}
.arrow:hover {
  color: ${props => props.theme.mode === 'dark' ? '#FBFBFB' : '#1C1C1C'};
  text-shadow: 0px 5px 15px ${props => props.theme.mode === 'dark' ? 'rgba(230,230,230,0.3)' : 'rgba(0,0,0,0.15)'};
  background-color: none;
  transition: 0.1s;
}
.code-wrapper {
  background-color: ${props => props.theme.mode === 'dark' ? '#1C1C1C' : 'rgba(254,253,252, 0.95);'};
  box-shadow: inset 0px 0px 20px ${props => props.theme.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)'};
  padding-bottom: 40px;
}

`

const getInitialTheme = () => {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode : 'light' }
}

const Main = ({ children }) => {

  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(
    () => {
      storage.setItem('theme', JSON.stringify(theme))
    }
  )
  return (
    <ThemeProvider theme={theme}>
      <div className="invisible-hover-box"></div>
      <Header onClickity={e=>setTheme(theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'})}/>
      <GlobalStyle />
        <div className="main">
          { children }
        </div>
      <Footer />
    </ThemeProvider>
  )
};

export default Main;
