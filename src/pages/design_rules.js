import React from "react"
import Main from "../layouts/main.js"
import DesignRules from "../components/design_rules.js"
import Container from "../layouts/container.js"

import '../styles/imports.scss'


export default () =>

<Main>
  <Container width='medium'>
    <DesignRules />
  </Container>
</Main>
