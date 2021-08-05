import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Card,
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
import Seo from '../components/seo'
const classNames = require('classnames')

const ProjectList = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          projects: allProjectsJson {
            edges {
              node {
                id
                title
                description
                link
                repo
              }
            }
          }
        }
      `}
      render={(data) => {
        const projects = data.projects.edges
        return (
          <Columns>
            {projects.map((project, index) => (
              <ProjectItem key={index} item={project.node} />
            ))}
          </Columns>
        )
      }}
    />
  )
}
const ProjectItem = ({ item }) => {
  const btnClass = classNames({
    buttons: true,
    'is-right': true,
    'mt-4': true,
  })

  return (
    <Columns.Column size="one-third">
      <Card>
        <Card.Content>
          <Heading size={5} textFamily="secondary" renderAs="h3">
            {item.title}
          </Heading>
          <Content>
            <p className="text-medium rem-80">{item.description}</p>
          </Content>
          <div className={btnClass}>
            {item.repo && (
              <a
                className="button is-small is-light"
                href={item.repo}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </a>
            )}
            <a
              className="is-accent is-small  button"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              Vizité
            </a>
          </div>
        </Card.Content>
      </Card>
    </Columns.Column>
  )
}
const IndexPage = () => {
  return (
    <Page>
      <Navigation />
      <Seo title="Donévoulapèn" />

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
