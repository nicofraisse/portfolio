import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Toolkit from "../components/toolkit.js"

export default () =>

  <Main>
    <div className="container-md">
      <div className="d-flex my-3 my-sm-5 justify-content-center align-items-center">
        <img src="back.png" className="arrow px-5" alt=""/>
        <h2>Web Development</h2>
        <img src="next.png" className="arrow px-5" alt=""/>
      </div>


      <Toolkit />


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
  </Main>
