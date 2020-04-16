import React from "react"
import Main from "../layouts/main.js"
import Container from "../layouts/container.js"
import { Link } from "gatsby"
import '../styles/imports.scss'
import Project from "../components/project.js"
import Categories from "../components/categories.js"

export default () =>

  <Main>
    <Container width='large'>
      <h1>Recent Work</h1>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Categories />
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
