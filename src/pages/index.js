import React from 'react'
import { Columns, Container, Content, Heading } from 'react-bulma-components'
import Navigation from '../components/navigation'
import Page from '../layouts/page'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Page>
      <Navigation />
      <Container renderAs="main" role="main" pt={6} pb={4}>
        <Columns>
          <Columns.Column size="three-fifths">
            <StaticImage
              className="image"
              src="../images/alfons-morales-bibliotek.jpg"
              placeholder="blurred"
              layout="fixed"
              width={590}
              height={260}
              alt="Bibliotek"
            />
          </Columns.Column>
          <Columns.Column size="two-fifths">
            <Heading>Korijé Kréyòl Maké</Heading>
            <Content>Tout zouti ou bizwen pou korijé kréyòl maké</Content>
          </Columns.Column>
        </Columns>
      </Container>
    </Page>
  )
}

export default IndexPage
