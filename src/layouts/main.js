import React, { useState, useEffect } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import "../styles/imports.scss"
import storage from "local-storage-fallback"

const moonBlue = "#323442"
const moonBlueSecondary = "#1d1f26"
const dayCream = "#f7f3eb"
const dayCreamSecondary = "rgb(252, 251, 247)"

const cubeOrange = "rgba(234, 50, 35, 0.9)"
const cubePink = "rgba(117, 24, 123, 0.9)"

const gradedRed = "#ff5e62"
const gradedOrange = "#ff9966"
const gradedPink = "rgba(200, 99, 238, 0.9)"
const gradedBlue = "#5663ee"
const gradedOtherBlue = "#7c6efa"

const darkText = "#0e0e0e"
const darkTextSecondary = "#2e2d2b"
const darkTextThird = "#969696"

const lightText = "#fbfbfb"
const lightTextSecondary = "#ebebeb"
const lightTextThird = "#84858e"

const linkBlueLight = "#9aa2ef"
const linkBlueDark = "#838df2"
const linkBlueLightHover = "#bac1ff"
const linkBlueDarkHover = "#575ff7"

const GlobalStyle = createGlobalStyle`

//
// TEXT
//

.nicolas {
  color: ${props => (props.theme.mode === "dark" ? lightText : darkText)};
  transition: 0.2s color;
}

.fraisse, .logo-description {
  color: ${props =>
    props.theme.mode === "dark" ? lightTextSecondary : darkTextSecondary};
  transition: 0.2s color;
}

#header i, #dark-mode-icon-mobile i {
  color: ${props => (props.theme.mode === "dark" ? lightText : darkText)};
  0.2s color;
}

h1, h2  {
  color: ${props => (props.theme.mode === "dark" ? darkText : lightText)};
  transition: 0.2s color;
}

p, h3, i, .email-link a, .text-list {
  color: ${props =>
    props.theme.mode === "dark" ? darkTextSecondary : lightTextSecondary};
  transition: 0.2s color;
}

.navlink {
  color: ${props =>
    props.theme.mode === "dark" ? linkBlueLight : linkBlueDark} !important;
  transition: 0.2s;
}

.navlink:hover {
  color: ${props =>
    props.theme.mode === "dark"
      ? linkBlueLightHover
      : linkBlueDarkHover} !important;
}

.active-link {
  background: ${props =>
    props.theme.mode === "dark"
      ? `linear-gradient(135deg, ${gradedBlue}, ${gradedOtherBlue})`
      : `linear-gradient(135deg, ${gradedOtherBlue}, ${gradedBlue})`} !important;
  color: white !important;
  &:hover {
    color: white !important;
  }
}

.link {
  color: ${props =>
    props.theme.mode === "dark" ? linkBlueDark : linkBlueLight} !important;
  transition: 0.2s color;
}

.link:hover, .email-link a:hover {
  color: ${props =>
    props.theme.mode === "dark"
      ? linkBlueDarkHover
      : linkBlueLightHover} !important;
}


.date-section, .misc-tools > p, .text-grey {
  color: ${props =>
    props.theme.mode === "dark" ? lightTextThird : darkTextThird};
  transition: 0.2s color;
}

.disabled-link {
  color: ${props =>
    props.theme.mode === "dark" ? lightTextThird : darkTextThird};
  transition: 0.2s color;
}

.photo-tooltip {
  color: ${props =>
    props.theme.mode === "dark"
      ? "rgba(0, 0, 0, 0.6)"
      : "rgba(255, 255, 255, 0.6)"} !important;
  font-size: 14px;
}

@media (max-width: 992px) {
  .photo-tooltip {
    background-color: white !important;
    color: rgba(0, 0, 0, 0.6) !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}


//
// BACKGROUND
//

.header-background {
  background-color: ${props =>
    props.theme.mode === "dark" ? moonBlue : dayCream};
  transition: 0.2s background-color;
}

#header-mobile {
  background-color: ${props =>
    props.theme.mode === "dark" ? moonBlue : dayCream};
  transition: 0.3s ease-in-out;
}

.background-css-animation {
  background-color: ${props =>
    props.theme.mode === "dark" ? moonBlue : dayCream};
  transition: 0.2s background-color;
}


.about {
  background-color: ${props =>
    props.theme.mode === "dark" ? dayCream : moonBlueSecondary};
  transition: 0.2s background-color;
  position: relative;
  padding-bottom: 10px;
  transform: translate3d(0, 0, 1px);
  padding-bottom: 4px;
  p {
    margin-bottom: 20px;
  }
}

.code-wrapper {
  background-color: ${props =>
    props.theme.mode === "dark" ? dayCreamSecondary : moonBlue};
  transition: 0.2s background-color;
}

.photography {
  background-color: ${props =>
    props.theme.mode === "dark" ? dayCream : moonBlueSecondary};
  transition: 0.2s background-color;
}

.contact {
  background-color: ${props =>
    props.theme.mode === "dark" ? dayCreamSecondary : moonBlue};
  transition: 0.2s background-color;
}

#footer {
  background-color: ${props =>
    props.theme.mode === "dark" ? dayCream : moonBlueSecondary};
  transition: 0.2s background-color;
}

.separator {
  background: ${props =>
    props.theme.mode === "dark"
      ? `linear-gradient(135deg, ${gradedPink}, ${gradedOrange})`
      : `linear-gradient(135deg, ${gradedRed}, ${gradedBlue})`};
}

//
// COMPONENTS
//

.arrow i {
  color:${props =>
    props.theme.mode === "dark" ? lightTextThird : darkTextThird}
}

.bounce { transition: 0.2s }
.bounce:hover {
  text-shadow: 0px 5px 15px ${props =>
    props.theme.mode === "dark" ? "rgba(230,230,230,0.3)" : "rgba(0,0,0,0.15)"};
}

.btn-more, .btn-more i {
  color: ${props =>
    props.theme.mode === "dark" ? lightTextThird : darkTextThird} !important;
}

.btn-more {
  border: 1px solid ${props =>
    props.theme.mode === "dark" ? lightTextThird : darkTextThird};
}

.btn-more:hover {
  color: ${props =>
    props.theme.mode === "dark"
      ? lightTextThird
      : moonBlueSecondary} !important;
  border: 1px solid ${props =>
    props.theme.mode === "dark" ? lightTextThird : dayCream};
  background-color: ${props =>
    props.theme.mode === "dark" ? "white" : dayCream};
  box-shadow: 0px 5px 10px ${props =>
    props.theme.mode === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.3)"};
}
.btn-more:hover i{
  color: ${props =>
    props.theme.mode === "dark"
      ? lightTextThird
      : moonBlueSecondary} !important;
  transition: 0.2s;
}

.btn-more:active {
  box-shadow: 0px 2px 6px ${props =>
    props.theme.mode === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.6)"};
}

#dark-mode-icon-desktop, #dark-mode-icon-mobile {
  transform: ${props =>
    props.theme.mode === "dark" ? "rotateZ(180deg)" : "rotateZ(0deg)"};
  transition: transform 0.3s, text-shadow 0.2s;
}

#dark-mode-icon-desktop:hover, #dark-mode-icon-mobile:hover {
  text-shadow: 0 0 10px ${props =>
    props.theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.6)"
      : "rgba(255, 255, 255, 1)"};
}

.header-tooltip h3 {
  color: ${lightText};
  line-height: 1;
  margin-bottom: 0;
  font-size: 16px;
}

.flick:hover {
  box-shadow: 0px -3px 20px ${props =>
    props.theme.mode === "dark"
      ? "rgba(0, 0, 0, 0.2)"
      : "rgba(255, 255, 255, 0.2)"};
}

.profile-card {
  border: 1px solid ${props =>
    props.theme.mode === "dark" ? "rgba(0, 0, 0, 0.12)" : moonBlueSecondary};
  box-shadow: 10px 10px 0px ${props =>
    props.theme.mode === "dark" ? "rgba(0, 0, 0, 0.12)" : moonBlueSecondary};
  background-color: ${props =>
    props.theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0)"};
  transition: 0.10s;
}

.profile-card:hover {
  transform: translate(3px, 3px);
  box-shadow: 7px 7px 0px ${props =>
    props.theme.mode === "dark" ? "rgba(0, 0, 0, 0.14)" : moonBlue};
}

.profile-card:active {
  transform: translate(7px, 7px);
  box-shadow: 3px 3px 0px ${props =>
    props.theme.mode === "dark" ? "rgba(0, 0, 0, 0.17)" : moonBlue};
}

.nicolas-pdp {
  border: 1px solid ${props =>
    props.theme.mode === "dark" ? "rgba(0, 0, 0, 0.12)" : "rgba(0, 0, 0, 0)"};
}

//
// FX
//

.cube__face--front  {
  background: linear-gradient(159deg, ${cubePink} 0%, ${cubeOrange} 100%);
  transition: 0.3s;
}
.cube__face--right  {
  background: linear-gradient(159deg, ${cubeOrange} 0%, ${cubePink} 100%);
  transition: 0.3s;
}
.cube__face--back   {
  background: linear-gradient(159deg, ${cubePink} 0%, ${cubeOrange} 100%);
  transition: 0.3s;
}
.cube__face--left   {
  background: linear-gradient(159deg, ${cubeOrange} 0%, ${cubePink} 100%);
  transition: 0.3s;
}
.cube__face--top    {
  background: linear-gradient(159deg, ${cubePink} 0%, ${cubeOrange} 100%);
  transition: 0.3s;
}
.cube__face--bottom {
  background: linear-gradient(159deg, ${cubeOrange} 0%, ${cubePink} 100%);
  transition: 0.3s;
}

.social-icon {
  padding: 1px;
}

.social-icon:hover {
  background: ${props =>
    props.theme.mode === "dark"
      ? `linear-gradient(135deg, ${gradedRed}, ${cubePink})`
      : `linear-gradient(135deg, ${gradedRed}, ${gradedOtherBlue})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
}

@media (max-width: 768px) {
  .border-bottom-light {
    border-bottom: 1px solid ${props =>
      props.theme.mode === "dark"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.1)"}
  }
}
`

const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme")
  return savedTheme ? JSON.parse(savedTheme) : { mode: "dark" }
}

const Main = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme))
  })
  return (
    <ThemeProvider theme={theme}>
      <div className="invisible-hover-box"></div>
      <Header
        onClickity={e =>
          setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })
        }
      />
      <GlobalStyle />
      <div className="main">{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default Main
