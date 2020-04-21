import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Toolkit from "../components/toolkit.js"

export default () =>

  <Main>
    <Container>
      <div className="title-arrows d-flex">
        <div>
          <img src="back.png" alt=""/>
        </div>
        <h2>Web Development</h2>
        <div>
          <img src="next.png" alt=""/>
        </div>
      </div>

      <a href="#" className="btn btn-primary">Hi</a>

      <div className="section">
        <Toolkit />
      </div>

      <Project
      img='bandwizard.png'
      title='BandWizard'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut autem, exercitationem, delectus ipsa praesentium!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at ex numquam aliquam obcaecati veniam quia necessitatibus id nemo, perspiciatis recusandae eligendi mollitia? Quos officiis cumque, voluptate voluptatibus dicta similique obcaecati laborum tempore deleniti eligendi veritatis tenetur, numquam recusandae non!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, magni, eligendi. Magni.'
      icons={['javascript.png', 'rails.png']}
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

    </Container>
  </Main>
