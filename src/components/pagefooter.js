import React from 'react'
import { Container } from 'react-bulma-components'

const PageFooter = () => {
  return (
    <Container className="mt-8" renderAs="footer">
      <Container className="copyright" textAlign="center" textSize={7}>
        &copy; TiMalo 2021
      </Container>
    </Container>
  )
}

export default PageFooter
