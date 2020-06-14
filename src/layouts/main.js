import React, { useState, useEffect } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import '../styles/imports.scss'
import storage from 'local-storage-fallback'


const moonBlue = '#323442'
const moonBlueSecondary = '#464854'
const dayCream = '#e5e0d6'
const dayCreamSecondary = '#f5f3ef'

const intenseOrange = '#ea3223'
const intensePink = '#75187b'

const gradedPink = '#c863ee'
const gradedBlue = '#5663ee'

const darkText = '#0e0e0e'
const darkTextSecondary = '#2e2d2b'
const darkTextThird = '#969696'

const lightText = '#fbfbfb'
const lightTextSecondary = '#ebebeb'
const lightTextThird = '#84858e'

const linkBlue = '#9aa2ef'
const linkBlueActive = '#575ff7'

const GlobalStyle = createGlobalStyle`

//
// TEXT
//

.nicolas {
  color: ${props => props.theme.mode === 'dark' ? lightText : darkText};
  transition: 0.15s background-color, color;
}

.fraisse, .logo-description {
  color: ${props => props.theme.mode === 'dark' ? lightTextSecondary : darkTextSecondary};
  transition: 0.15s background-color, color;
}

#header i {
  color: ${props => props.theme.mode === 'dark' ? lightText : darkText};
}

h1, h2  {
  color: ${props => props.theme.mode === 'dark' ? darkText : lightText};
  transition: 0.15s background-color, color;
}

p, h3, i  {
  color: ${props => props.theme.mode === 'dark' ? darkTextSecondary : lightTextSecondary};
  transition: 0.15s background-color, color;
}

.link, a {
  color: ${props => props.theme.mode === 'dark' ? linkBlue : linkBlue} !important;
}

.active-link {
  background-color: ${props => props.theme.mode === 'dark' ? linkBlueActive : linkBlueActive} !important;
  color: white !important;
  &:hover {
    color: white !important;
  }
}

.date-section, .misc-tools > p {
  color: ${props => props.theme.mode === 'dark' ? lightTextThird : darkTextThird}
}

//
// BACKGROUND
//

.header-background {
  background-color: ${props => props.theme.mode === 'dark' ? moonBlue : dayCream };
  transition: 0.15s background-color;
}

.background-css-animation {
  background-color: ${props => props.theme.mode === 'dark' ? moonBlue : dayCream};
  transition: 0.15s background-color;
}

.code-wrapper {
  background-color: ${props => props.theme.mode === 'dark' ? dayCream : moonBlue};
  padding-bottom: 40px;
  transition: 0.15s background-color;
}

.photography {
  background-color: ${props => props.theme.mode === 'dark' ? dayCreamSecondary : moonBlueSecondary};
  transition: 0.15s background-color;
}

.about {
  background-color: ${props => props.theme.mode === 'dark' ? dayCream : moonBlue};
  transition: 0.15s background-color;
}
#footer {
  background-color: ${props => props.theme.mode === 'dark' ? dayCream : moonBlue};
  transition: 0.15s background-color;
}
.separator {
  background: ${props => props.theme.mode === 'dark' ? 'linear-gradient(135deg, rgba(200, 99, 238, 0.6), rgba(86, 99, 238, 0.8))' : 'linear-gradient(135deg, rgba(200, 99, 238, 0.6), rgba(86, 99, 238, 0.8))'};
}

//
// COMPONENTS
//

.arrow i {
  color:${props => props.theme.mode === 'dark' ? lightTextThird : darkTextThird }
}

.bounce { transition: 0.25s }
.bounce:hover {
  text-shadow: 0px 5px 15px ${props => props.theme.mode === 'dark' ? 'rgba(230,230,230,0.3)' : 'rgba(0,0,0,0.15)'};
}

.btn-more, .btn-more i {
  color: ${props => props.theme.mode === 'dark' ? lightTextThird : darkTextThird } !important;
}

.btn-more {
  border: 1px solid ${props => props.theme.mode === 'dark' ? lightTextThird : darkTextThird };
}

.btn-more:hover {
  color: ${props => props.theme.mode === 'dark' ? lightTextThird : moonBlueSecondary } !important;
  border: 1px solid ${props => props.theme.mode === 'dark' ? lightTextThird : dayCream };
  background-color: ${props => props.theme.mode === 'dark' ? 'white' : dayCream };
  box-shadow: 0px 5px 10px ${props => props.theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.3)' };
}
.btn-more:hover i{
  color: ${props => props.theme.mode === 'dark' ? lightTextThird : moonBlueSecondary } !important;
  transition: 0.15s;
}

.btn-more:active {
  box-shadow: 0px 2px 6px ${props => props.theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.6)' };
}

//
// FX
//

.cube__face--front  {
  background: linear-gradient(159deg, rgba(117, 24, 123, 0.9) 0%, rgba(234, 50, 35, 0.9) 100%);
  transition: 0.3s;
}
.cube__face--right  {
  background: linear-gradient(159deg, rgba(234, 50, 35, 0.9) 0%, rgba(117, 24, 123, 0.9) 100%);
  transition: 0.3s;
}
.cube__face--back   {
  background: linear-gradient(159deg, rgba(117, 24, 123, 0.9) 0%, rgba(234, 50, 35, 0.9) 100%);
  transition: 0.3s;
}
.cube__face--left   {
  background: linear-gradient(159deg, rgba(234, 50, 35, 0.9) 0%, rgba(117, 24, 123, 0.9) 100%);
  transition: 0.3s;
}
.cube__face--top    {
  background: linear-gradient(159deg, rgba(117, 24, 123, 0.9) 0%, rgba(234, 50, 35, 0.9) 100%);
  transition: 0.3s;
}
.cube__face--bottom {
  background: linear-gradient(159deg, rgba(234, 50, 35, 0.9) 0%, rgba(117, 24, 123, 0.9) 100%);
  transition: 0.3s;
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
