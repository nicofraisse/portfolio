import React, { useState } from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Toolkit from "../components/toolkit.js"
import {useSpring, animated} from 'react-spring'



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
        <h2 className="mb-4 mt-0 pt-5">Web Development Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <i
              data-tip="<h3 class='icon-tooltip'>Languages & Frameworks</h3>"
              style={{fontSize: 48}}
              class="fas fa-code text-center w-100 my-4"
            />
            <div className="toolkit">
              <div className="main-tools">
                <p className="text-center text-sm-justify">JavaScript・Python・React.js・Ruby On Rails</p>
              </div>
              <div className="misc-tools">
                <p className="text-center text-sm-justify">Gatsby.js・JQuery・Vanilla JS・AJAX・Shell・Regex・Git・npm・Yarn・Wordpress</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <i
              data-tip="<h3 class='icon-tooltip'>Front-end tools</h3>"
              style={{fontSize: 48}}
              class="fas fa-magic text-center w-100 my-4"
            />
            <div className="toolkit">
              <div className="main-tools">
                <p className="text-center text-sm-justify">HTML・CSS・Bootstrap・Figma・Adobe Photoshop CC</p>
              </div>
              <div className="misc-tools">
                <p className="text-center text-sm-justify">SCSS/SASS・Animate.js・React Spring・Adobe Lightroom CC</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <i
              data-tip="<h3 class='icon-tooltip'>Back-end tools</h3>"
              style={{fontSize: 48}}
              class="fas fa-database text-center w-100 my-4"
            />
            <div className="toolkit">
              <div className="main-tools">
                <p className="text-center text-sm-justify">GraphQL・PostgreSQL・Active Record</p>
              </div>
              <div className="misc-tools">
                <p className="text-center text-sm-justify">Heroku・Netlify・Cloudinary・Mapbox・Stripe・GraphQL・Pandas・BeautifulSoup・Microsoft SQL Server</p>
              </div>
            </div>
          </div>
        </div>

        <Project
        img='incorpus.png'
        title='inCORPUS'
        date='Apr 2020'
        imgWidth='340px'
        description='Creation of webpages & animations for a French tech company developing a training app for professional athletes.'
        icons={['gatsby.png', 'react.png', 'graphql.png', 'javascript.png', 'html.png', 'css.png', 'sass.png']}
        />

        <Project
        img='bandwizard.png'
        title='BandWizard'
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
          date='Oct 2019'
          description='Redesigned HEC Montréal’s student newspaper using a new theme as well as a lot of custom CSS. Managed conflicts during theme change as well as PHP updates. Implemented back-end features such as an article rating system. Used google analytics extensively through the year to give regular webtraffic reports.'
          icons={['wordpress.png', 'css.png']}
          reverse
          />

          <Project
          img='rentmylife2.png'
          imgWidth='440px'
          title='Rent My Life'
          date='Jul 2019'
          description='"Does your life suck? Rent a new one and be someone else!"<br>- Rent My Life is a fun Airbnb clone that was designed, implemented and shipped to production in 5 days as part of the Le Wagon curriculum. It was built using Ruby On Rails and MVC architecture (model-view-controller).'
          icons={['rails.png', 'postgresql.png', 'heroku.png', 'javascript.png', 'figma.png', 'html.png', 'css.png', 'sass.png']}
          />

          <Project
          img='incorpus.png'
          title='This website'
          date='Jun 2020'
          imgWidth='440px'
          description='I have designed and built my own portfolio website from scratch, using the Gatsby.js react framework. Animations and other dynamic elements were made thanks to react hooks as well as the react sping library.'
          icons={['react.png', 'gatsby.png']}
          reverse
          />

          <Project
          img='incorpus.png'
          title='Conseil LGBT'
          date='Jul 2019'
          imgWidth='440px'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut autem, exercitationem, delectus ipsa praesentium!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at ex numquam aliquam obcaecati veniam quia necessitatibus id nemo, perspiciatis recusandae eligendi mollitia? Quos officiis cumque, voluptate voluptatibus dicta similique obcaecati laborum tempore deleniti eligendi veritatis tenetur, numquam recusandae non!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, magni, eligendi. Magni.'
          icons={['figma.png', 'wordpress.png', 'html.png', 'css.png']}
          />
        </animated.div>
      </div>
    </div>
  </div>
  )
}

export default Code;
