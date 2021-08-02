import React from 'react'
import { Container } from 'react-bulma-components'

const PageFooter = () => {
  return (
    <footer className="has-background-grey-lighter mt-8 py-4">
      <Container className="copyright" textAlign="center" textSize={7}>
        &copy; TiMalo 2021
      </Container>
    </footer>
  )
}

export default PageFooter
