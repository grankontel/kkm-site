import React from 'react'
import {
  Columns,
  Container,
  Content,
  Heading,
  Section,
} from 'react-bulma-components'
import Navigation from '../components/navigation'
import Page from '../layouts/page'
import { StaticImage } from 'gatsby-plugin-image'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import ProjectList from '../components/projectList'

const IndexPage = () => {
  return (
    <Page>
      <Navigation />

      <Container renderAs="main" role="main" pb={4}>
        <Section>
          <Columns>
            <Columns.Column size="three-fifths">
              <StaticImage
                className="image"
                src="../images/alfons-morales-bibliotek.jpg"
                placeholder="blurred"
                layout="constrained"
                alt="Bibliotek"
              />
            </Columns.Column>
            <Columns.Column size="two-fifths">
              <Heading textFamily="secondary">Korijé Kréyòl Maké</Heading>
              <Content>Tout zouti ou bizwen pou korijé kréyòl maké</Content>
            </Columns.Column>
          </Columns>
        </Section>

        <Section>
          <Heading
            size={3}
            textFamily="secondary"
            textColor="primary"
            id="projects"
            renderAs="h2"
          >
            Pwojé
          </Heading>
          <ProjectList />
        </Section>

        <Section>
          <Heading size={3} textFamily="secondary" id="contact" renderAs="h2">
            Kontak
          </Heading>
          <Columns multiline tablet>
            <Columns.Column size="one-third" flexDirection="row">
              <div className="is-flex is-flex-direction-row">
                <a
                  className="level-item footer-link"
                  href="https://twitter.com/timalo_officiel"
                  target="rs_timalo"
                  aria-label="Connect to TiMalo on Twitter"
                >
                  <FaTwitter /> &nbsp;@timalo_officiel
                </a>
              </div>

              <div className="is-flex is-flex-direction-row">
                <a
                  className="level-item footer-link"
                  href="https://github.com/tmalo"
                  target="rs_timalo"
                  aria-label="Connect to TiMalo on GitHub"
                >
                  <FaGithub /> &nbsp;@tmalo
                </a>
              </div>
            </Columns.Column>
          </Columns>
        </Section>
      </Container>
    </Page>
  )
}

export default IndexPage
