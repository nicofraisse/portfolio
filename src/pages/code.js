import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Toolkit from "../components/toolkit.js"

export default () =>

  <div id="code">

    <div className="container-md">
      <div className="d-flex my-3 my-sm-5 justify-content-center align-items-center">
      </div>
      <h2 className="mb-4 mt-5">Web Development Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <i
            data-tip="<h3 class='icon-tooltip'>Frameworks</h3>"
            style={{fontSize: 64}}
            class="fas fa-tools text-center w-100 my-4"
          />
          <div className="toolkit">
            <div className="main-tools">
              <p className="text-center text-sm-justify">Ruby On Rails・HTML・CSS・JavaScript・React.js</p>
            </div>
            <div className="misc-tools">
              <p className="text-center text-sm-justify">Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <i
            data-tip="<h3 class='icon-tooltip'>Front-end</h3>"
            style={{fontSize: 64}}
            class="fas fa-magic text-center w-100 my-4"
          />
          <div className="toolkit">
            <div className="main-tools">
              <p className="text-center text-sm-justify">Ruby On Rails・HTML・CSS・JavaScript・React.js</p>
            </div>
            <div className="misc-tools">
              <p className="text-center text-sm-justify">Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <i
            data-tip="<h3 class='icon-tooltip'>Back-end</h3>"
            style={{fontSize: 64}}
            class="fas fa-database text-center w-100 my-4"
          />
          <div className="toolkit">
            <div className="main-tools">
              <p className="text-center text-sm-justify">Ruby On Rails・HTML・CSS・JavaScript・React.js</p>
            </div>
            <div className="misc-tools">
              <p className="text-center text-sm-justify">Heroku・Git・SQL・Active Records・GraphQL・Wordpress・Python・AJAX・Figma・Sublime Text</p>
            </div>
          </div>
        </div>
      </div>



      <Project
      img='bandwizard.png'
      title='BandWizard'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut autem, exercitationem, delectus ipsa praesentium!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at ex numquam aliquam obcaecati veniam quia necessitatibus id nemo, perspiciatis recusandae eligendi mollitia? Quos officiis cumque, voluptate voluptatibus dicta similique obcaecati laborum tempore deleniti eligendi veritatis tenetur, numquam recusandae non!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, magni, eligendi. Magni.'
      icons={['javascript.png', 'rails.png']}
      source='http://www.google.com'
      />

      <Project
      img='rentmylife.png'
      imgWidth='440px'
      title='Rent My Life'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut autem, exercitationem, delectus ipsa praesentium!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at ex numquam aliquam obcaecati veniam quia necessitatibus id nemo, perspiciatis recusandae eligendi mollitia? Quos officiis cumque, voluptate voluptatibus dicta similique obcaecati laborum tempore deleniti eligendi veritatis tenetur, numquam recusandae non!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, magni, eligendi. Magni.'
      icons={['javascript.png', 'rails.png']}
      reverse
      />

      <Project
      img='billy-social.png'
      title='Billy.Social'
      imgWidth='440px'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut autem, exercitationem, delectus ipsa praesentium!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at ex numquam aliquam obcaecati veniam quia necessitatibus id nemo, perspiciatis recusandae eligendi mollitia? Quos officiis cumque, voluptate voluptatibus dicta similique obcaecati laborum tempore deleniti eligendi veritatis tenetur, numquam recusandae non!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, magni, eligendi. Magni.'
      icons={['wordpress.png', 'rails.png']}
      />

      <Project
      img='journalinteret.png'
      imgWidth='400px'
      title="Journal L'intéret, HEC Montréal"
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut autem, exercitationem, delectus ipsa praesentium!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at ex numquam aliquam obcaecati veniam quia necessitatibus id nemo, perspiciatis recusandae eligendi mollitia? Quos officiis cumque, voluptate voluptatibus dicta similique obcaecati laborum tempore deleniti eligendi veritatis tenetur, numquam recusandae non!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, magni, eligendi. Magni.'
      icons={['javascript.png', 'wordpress.png']}
      reverse
      />

      <Project
      img='incorpus.png'
      title='inCorpus'
      imgWidth='440px'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut autem, exercitationem, delectus ipsa praesentium!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at ex numquam aliquam obcaecati veniam quia necessitatibus id nemo, perspiciatis recusandae eligendi mollitia? Quos officiis cumque, voluptate voluptatibus dicta similique obcaecati laborum tempore deleniti eligendi veritatis tenetur, numquam recusandae non!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, magni, eligendi. Magni.'
      icons={['react.png', 'gatsby.png']}
      />

    </div>
  </div>
