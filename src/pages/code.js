import React, { useState } from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Toolkit from "../components/toolkit.js"
import {useSpring, animated} from 'react-spring'
import Separator from "../components/separator.js"



const Code = () => {
  const [moreCode, setMoreCode] = useState(false);

  const animation = useSpring({
    to: {opacity: moreCode ? 1 : 0, transform: moreCode ? 'translateY(20px)'  : 'translateY(0px)'},
    from: {opacity: 0}
  })

  const handleClick = () => {
    console.log(moreCode)
    setMoreCode((moreCode) => !moreCode)
  }

  return (
  <div className="code-wrapper">
    <div className="code">
      <div className="container-md">
        <h2 className="mb-4 mt-0 pt-5 text-color-shadow">Toolkit</h2>
        <Separator
          color='linear-gradient(135deg, rgba(200, 99, 238, 0.6), rgba(86, 99, 238, 0.8))'
          width='160px'
          transform="perspective(48px) rotateX(18deg)"
          marginTop="-64px"
        />
        <div className="row">
          <div className="col-md-4">
            <i
              data-tip="<h3 className='icon-tooltip'>Languages & Frameworks</h3>"
              style={{fontSize: 48}}
              className="fas fa-code text-center w-100 my-4"
            />
            <div className="toolkit">
              <div className="main-tools">
                <p className="text-center">JavaScript・React.js・Rails</p>
              </div>
              <div className="misc-tools">
                <p className="text-center">Gatsby.js・JQuery・Vanilla JS・AJAX・Shell・Python・Regex・Git・npm・Yarn・Wordpress</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <i
              data-tip="<h3 className='icon-tooltip'>Front-end tools</h3>"
              style={{fontSize: 48}}
              className="fas fa-magic text-center w-100 my-4"
            />
            <div className="toolkit">
              <div className="main-tools">
                <p className="text-center">HTML・CSS・Figma</p>
              </div>
              <div className="misc-tools">
                <p className="text-center">SCSS/SASS・Bootstrap・Animate.js・React Spring・Adobe Photoshop CC・Adobe Lightroom CC</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <i
              data-tip="<h3 className='icon-tooltip'>Back-end tools</h3>"
              style={{fontSize: 48}}
              className="fas fa-database text-center w-100 my-4"
            />
            <div className="toolkit">
              <div className="main-tools">
                <p className="text-center">GraphQL・PostgreSQL・Active Record</p>
              </div>
              <div className="misc-tools">
                <p className="text-center">Heroku・Netlify・Cloudinary・Mapbox・Stripe・GraphQL・Pandas・BeautifulSoup・Microsoft SQL Server</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-4 mt-0 pt-5 text-color-shadow">Web Development Projects</h2>
        <Separator
          color='linear-gradient(135deg, rgba(200, 99, 238, 0.6), rgba(86, 99, 238, 0.8))'
          width='580px'
          transform="perspective(30px) rotateX(6deg)"
          marginTop="-64px"
        />

        <Project
        img='incorpus.png'
        title='inCORPUS'
        site='https://www.in-corpus.com/'
        source='https://github.com/amrschmitz/incorpus'
        date='Apr 2020'
        imgWidth='340px'
        description='Creation of webpages & animations for a French tech company developing a training app for professional athletes.'
        icons={['gatsby.png', 'react.png', 'javascript.png', 'html.png', 'css.png', 'sass.png']}
        />

        <Project
        img='bandwizard.png'
        title='BandWizard'
        site='http://bandwizard.co/'
        source='https://github.com/nicofraisse/bandwizard'
        date='Sep 2019'
        description='Is your band looking for a musician, or are you a musician looking for a band? BandWizard is a web-application that matches musicians according to musical taste, geographical location, years of experience, and much more!
                    <br>
                    This MVP has been designed, implemented and shipped to production in 10 days, as the final project at Le Wagon coding bootcamp.'
        icons={['rails.png', 'postgresql.png', 'heroku.png', 'javascript.png', 'figma.png', 'html.png', 'css.png', 'sass.png']}
        source='http://www.google.com'
        reverse
        />

        <Project
        img='billy-social.png'
        title='Billy.Social'
        site='https://billy.social/'
        date='Dec 2019'
        imgWidth='440px'
        description="Created static pages and implemented a payment system for Billy.Social, a Montreal based webmarketing agency, using Wordpress and custom CSS."
        icons={['wordpress.png', 'css.png', 'stripe.png']}
        />

        <button
          onClick={() => handleClick()}
          className="btn-more">
          Show {moreCode ? 'less' : 'more'}
        </button>


        <animated.div id="other-projects" className={moreCode ? 'd-block' : 'd-none'} style={animation}>

          <Project
          img='journalinteret.png'
          imgWidth='400px'
          title="Journal L'intéret, HEC Montréal"
          site='http://www.journalinteret.com/'
          date='Oct 2019'
          description='Redesigned HEC Montréal’s student newspaper using a new theme as well as a lot of custom CSS. Managed conflicts during theme change as well as PHP updates. Implemented back-end features such as an article rating system and an email feedback form. Used google analytics extensively through the year to give regular webtraffic reports.'
          icons={['wordpress.png', 'css.png']}
          reverse
          />

          <Project
          img='rentmylife.png'
          imgWidth='440px'
          title='Rent My Life'
          site='http://rentmylife.herokuapp.com/'
          source='https://github.com/nicofraisse/rentmylife'
          date='Jul 2019'
          description='"Does your life suck? Rent a new one and be someone else!"<br>- Rent My Life is a fun Airbnb clone that was designed, implemented and shipped to production in 5 days as part of the Le Wagon curriculum. It was built using Ruby On Rails and MVC architecture (model-view-controller).'
          icons={['rails.png', 'postgresql.png', 'heroku.png', 'javascript.png', 'figma.png', 'html.png', 'css.png', 'sass.png']}
          />

          <Project
          img='incorpus.png'
          title='This website'
          site='#'
          source='https://github.com/nicofraisse/nf'
          date='Jun 2020'
          imgWidth='440px'
          description='I have designed and built my this --single page application--  portfolio website from scratch, using the Gatsby.js react framework. Animations and other dynamic elements were made thanks to react hooks as well as the react sping library.'
          icons={['react.png', 'gatsby.png']}
          reverse
          />

          <Project
          img='conseil-lgbt.png'
          title='Conseil LGBT'
          site='https://www.conseil-lgbt.ca/'
          date='Jul 2019'
          imgWidth='440px'
          description='Designed and implemented UI/UX solutions for a complete redesign of Quebec’s Conseil LGBT website, as part of PrideHacks 2019, a hackathon to build solutions for nonprofit organizations serving the LGBT community.'
          icons={['figma.png', 'wordpress.png', 'html.png', 'css.png']}
          />
        </animated.div>
      </div>
    </div>
  </div>
  )
}

export default Code;
