import React, { useState, useEffect } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import '../styles/imports.scss'
import storage from 'local-storage-fallback'

const GlobalStyle = createGlobalStyle`
#header i {
  color: ${props => props.theme.mode === 'dark' ? '#FBFBFB' : '#0E0E0E'};
}

.background-css-animation {
  background: ${props => props.theme.mode === 'dark' ? 'rgba(49, 52, 67, 1.00)' : 'rgba(229, 224, 214, 1.00)'}
}

html, body {
  // background-color: ${props => props.theme.mode === 'dark' ? 'rgba(50, 52, 66, 1.00)' : 'rgba(252,250,249, 1);'};
  transition: 0.15s background-color, color;
}

#header, {
  color: ${props => props.theme.mode === 'dark' ? 'rgba(14,14,14, 0.95)' : 'rgba(254,253,252, 0.95)'};
  transition: 0.15s background-color, color;
}

.arrow i {
  color:${props => props.theme.mode === 'dark' ? 'rgba(254, 253, 252, 0.35)' : 'rgba(50, 50, 50, 0.3)'}
}

.header-background {
    background-color: ${props => props.theme.mode === 'dark' ? 'rgb(50, 52, 66)' : 'rgba(229, 224, 214, 1.00)'};
    transition: 0.15s background-color, color;
}

.nicolas, .logo-description {
  color: ${props => props.theme.mode === 'dark' ? '#FBFBFB' : '#0E0E0E'};
  transition: 0.15s background-color, color;
}
.fraisse {
  color: ${props => props.theme.mode === 'dark' ? '#EBEBEB' : 'rgba(0,0,0,0.8)'};
  transition: 0.15s background-color, color;
}

p, h1, h2, h3, i  {
  color: ${props => props.theme.mode === 'dark' ? '#0E0E0E' : '#FBFBFB'};
  transition: 0.15s background-color, color;
}

.date-section {
  color: ${props => props.theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.4);' : 'rgba(255, 255, 255, 0.4);'}
}

.arrow:hover {
  color: ${props => props.theme.mode === 'dark' ? '#FBFBFB' : '#1C1C1C'};
  text-shadow: 0px 5px 15px ${props => props.theme.mode === 'dark' ? 'rgba(230,230,230,0.3)' : 'rgba(0,0,0,0.15)'};
  background-color: none;
  transition: 0.1s;
}
.code-wrapper {
  background-color: ${props => props.theme.mode === 'dark' ? 'rgba(228, 224, 215, 1.00)' : 'rgba(50, 52, 66, 1.00)'};
  padding-bottom: 40px;
  transition: 0.15s background-color, color;
}

.photography {
  background-color: ${props => props.theme.mode === 'dark' ? 'rgba(228, 224, 215, 0.3)' : 'rgba(50, 52, 66, 0.9)'};
  transition: 0.15s background-color, color;
}

.about {
  background-color: ${props => props.theme.mode === 'dark' ? 'rgba(228, 224, 215, 1.00)' : 'rgba(50, 52, 66, 1.00)'};
  transition: 0.15s background-color, color;
}
#footer {
  background-color: ${props => props.theme.mode === 'dark' ? 'rgba(228, 224, 215, 1.00)' : 'rgba(50, 52, 66, 1.00)'};
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
