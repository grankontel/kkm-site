import React from 'react'
import { Container } from 'react-bulma-components'

const PageFooter = () => {
  return (
    <footer className="mt-8">
      <Container className="copyright" textAlign="center" textSize={7}>
        &copy; TiMalo 2021
      </Container>
    </footer>
  )
}

export default PageFooter
