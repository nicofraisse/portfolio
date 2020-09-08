import React, { useState } from "react"
import '../styles/imports.scss'
import Project from "../components/project.js"
import {useSpring, animated} from 'react-spring'
import Separator from "../components/separator.js"
import ReactTooltip from "react-tooltip";


const Code = () => {
  const [moreCode, setMoreCode] = useState(false);
  const animation = useSpring({
    to: {opacity: moreCode ? 1 : 0, transform: moreCode ? 'translateY(20px)'  : 'translateY(0px)'},
    from: {opacity: 0}
  })
  const handleClick = () => {
    setMoreCode((moreCode) => !moreCode)
  }

  return (
  <div className="code-wrapper">
    <div className="code pt-3">
      <div className="container-lg">
        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h2 className="mb-4 mt-0 pt-5 text-color-shadow">
            Toolkit
          </h2>
          <div
          id="sc1"
          >
            <Separator
              marginBottom="-16px"
              transform="perspective(48px) rotateX(18deg) translate3d(0, 0, 8px)"
            />
          </div>
        </div>
        <div
        className="row justify-content-center mt-1 mt-md-3"
        data-sal="fade"
        data-sal-delay="0"
        data-sal-duration="1000"
        data-sal-easing="ease"
        >
          <div
          className="col-md-4 col-sm-12 header-tooltip"
          data-for="toolkit-tooltip"
          data-tip="<h3 className='icon-tooltip'>Languages & Frameworks</h3>"
          >
            <ReactTooltip id="toolkit-tooltip" effect="solid" html={true}/>
            <i
              className="toolkit-icon fas fa-code text-center w-100 mb-md-4 mb-2"
            />
            <div className="toolkit mb-4 mb-md-0">
              <div className="main-tools">
                <p className="text-center">JavaScript・React.js・Rails</p>
              </div>
              <div className="misc-tools">
                <p className="text-center">Gatsby.js・Wordpress・JQuery・Vanilla JS・AJAX・regex・bash shell・git・npm・yarn・Python</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-5 header-tooltip" data-for="toolkit-tooltip" data-tip="<h3 className='icon-tooltip'>Front-end tools</h3>">
            <i
              className="toolkit-icon fas fa-magic text-center w-100 mb-md-4 mb-2"
            />
            <div className="toolkit mb-4 mb-md-0">
              <div className="main-tools">
                <p className="text-center">HTML・CSS・Bootstrap</p>
              </div>
              <div className="misc-tools">
                <p className="text-center">SCSS/SASS・Figma・React Spring・Sip・Gimp・Inkscape・Adobe Photoshop CC・Adobe Lightroom CC</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-5 header-tooltip" data-for="toolkit-tooltip" data-tip="<h3 className='icon-tooltip'>Back-end tools</h3>">
            <i
              className="toolkit-icon fas fa-database text-center w-100 mb-md-4 mb-2"
            />
            <div className="toolkit mb-5 mb-md-0">
              <div className="main-tools">
                <p className="text-center">PostgreSQL・Active Record・Redis</p>
              </div>
              <div className="misc-tools">
                <p className="text-center">MS SQL Server・Pandas・bs4・Heroku・Netlify・Cloudinary・Mapbox・Stripe</p>
              </div>
            </div>
          </div>
        </div>

        <div data-sal="fade" data-sal-delay="0" data-sal-duration="1000" data-sal-easing="ease">
          <h2 className="mb-4 pt-md-5 pt-3 text-color-shadow title-smaller">Web Development Projects</h2>
          <div id="sc2">
            <Separator
              transform="perspective(30px) rotateX(6deg) translate3d(0, 0, 8px)"
            />
          </div>
        </div>
        <div className="push-higher" data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
          <Project
          img='incorpus.jpg'
          title='inCORPUS'
          site='https://www.in-corpus.com/'
          date='Apr 2020'
          imgWidth='440px'
          description='Creation of webpages & animations for a French tech company developing a training app for professional athletes.'
          icons={['gatsby.png', 'react.png', 'javascript.png', 'react-spring.png' ,'html.png', 'css.png', 'sass.png']}
          borderBottomLight
          />
        </div>


        <div data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
          <Project
          img='portfolio2.jpg'
          title='This Website'
          site='#'
          source='https://github.com/nicofraisse/nf'
          date='Jun 2020'
          imgWidth='400px'
          description='I have designed and built my own portfolio as a single page application using the Gatsby.js react framework. Animations and other dynamic elements were implemented thanks to CSS transformations, CSS keyframes, react hooks, as well as the react sping library.
                      <br>Tip: click the circle icon at the right of the navbar to toggle dark mode!'
          icons={['react.png', 'gatsby.png', 'javascript.png', 'html.png', 'css.png', 'sass.png', 'bootstrap.png', 'netlify.png']}
          noSite
          borderBottomLight
          reverse
          />
        </div>

        <div data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
        <Project
        img='reaction2.png'
        title='Reflex Tester'
        imgWidth='400px'
        site='https://reflex-game-41594.web.app/'
        source='https://github.com/nicofraisse/react-reflex-tester'
        date='July 2020'
        description="Test your reflexes! Click on the square as soon as it becomes red. It will randomly change color every 1 to 10 seconds, and the test lasts for 1 minute. After playing, view the leaderboard to see how you compare!
                    <br>
                    The app's mechanics built with react, and the player score historical data is posted and fetched using Firebase."
        icons={['react.png', 'javascript.png', 'html.png', 'css.png', 'firebase.png']}
        />
        </div>

        <div data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
        <Project
        img='bandwizard.jpg'
        title='BandWizard'
        site='http://bandwizard.co/'
        source='https://github.com/nicofraisse/bandwizard'
        date='Sep 2019'
        description='Is your band looking for a musician, or are you a musician looking for a band? BandWizard is a web application that matches musicians according to musical taste, geographical location, years of experience, and much more!
                    <br><a class="link clicky-effect" href="https://youtu.be/gxGbLhHBCto?t=1292" target="_blank" rel="noopener noreferrer">View demo here</a>
                    <br>
                    This MVP has been designed, implemented and shipped to production in 10 days, using Ruby On Rails and MVC architecture (model, view, controller), as my final project for Le Wagon coding bootcamp.'
        icons={['rails.png', 'postgresql.png', 'heroku.png', 'javascript.png', 'html.png', 'css.png', 'sass.png', 'bootstrap.png', 'figma.png']}
        reverse
        />
        </div>

        <button
          onClick={() => handleClick()}
          className="btn-more">
          View {moreCode ? 'less' : 'more'}
        </button>

        <animated.div id="other-projects" className={moreCode ? 'd-block' : 'd-none'} style={animation}>
          <div data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
            <Project
            img='journalinteret.jpg'
            imgWidth='360px'
            title="Journal L'intéret, HEC Montréal"
            site='http://www.journalinteret.com/'
            date='Oct 2019'
            description='Redesigned HEC Montréal’s student newspaper using a Wordpress and custom CSS. Managed PHP updates as well as conflicts during theme and plugin installations. Implemented back-end features such as an article rating system and an email feedback form. Used google analytics extensively through the year to make webtraffic reports.'
            icons={['wordpress.png', 'css.png']}
            borderBottomLight
            />
          </div>
          <div data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
          <Project
          img='billy-social.jpg'
          title='Billy.Social'
          site='https://billy.social/'
          date='Dec 2019'
          imgWidth='400px'
          description="Created static pages and implemented a payment system for Billy.Social, a Montreal based webmarketing agency, using Wordpress and custom CSS."
          icons={['wordpress.png', 'css.png', 'stripe.png']}
          borderBottomLight
          reverse
          />
          </div>
          <div data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
            <Project
            img='conseil-lgbt.jpg'
            title='Conseil LGBT'
            site='https://www.conseil-lgbt.ca/'
            date='Jul 2019'
            imgWidth='440px'
            description='Designed and implemented UI/UX solutions for a complete redesign of Quebec’s Conseil LGBT website, as part of PrideHacks 2019, a hackathon to build digital products for nonprofit organizations serving the LGBT community.'
            icons={['figma.png', 'wordpress.png', 'html.png', 'css.png']}
            borderBottomLight
            />
          </div>
          <div className="pb-4 pb-md-5" data-sal="fade" data-sal-delay="0" data-sal-duration="600" data-sal-easing="ease">
            <Project
            img='rentmylife.jpg'
            imgWidth='400px'
            title='Rent My Life'
            site='http://rentmylife.herokuapp.com/'
            source='https://github.com/nicofraisse/rentmylife'
            date='Jul 2019'
            description='"Does your life suck? Rent a new one and be someone else!"<br>Rent My Life is a parodical Airbnb clone that was designed, implemented and shipped to production in 5 days as part of the Le Wagon curriculum. It was built using Ruby On Rails and MVC architecture (model, view, controller).'
            icons={['rails.png', 'postgresql.png', 'heroku.png', 'javascript.png', 'html.png', 'css.png', 'sass.png', 'figma.png',]}
            reverse
            />
          </div>

        </animated.div>
      </div>
    </div>
  </div>
  )
}

export default Code;
