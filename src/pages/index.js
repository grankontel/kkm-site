import React from 'react'
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
const classNames = require('classnames')

const projects = [
  {
    title: 'Règlèman a Grankontel',
    description:
      'Règlèman a korèksyon Grankontel ni pou korijé tout liv ki ka parèt.',
    link: 'https://korije-kreyol-make.readthedocs.io/fr/latest/',
  },
]
const ProjectItem = ({ item }) => {
    const btnClass = classNames({
        'buttons': true,
        'is-right': true,
        'mt-4': true,
      })

  return (
    <Columns.Column size="one-third">
      <Card>
        <Card.Content>
          <Heading size={5} textFamily="secondary"  renderAs="h3">
            {item.title}
          </Heading>
          <Content>
            <p className="text-medium rem-80">{item.description}</p>
          </Content>
          <div className={btnClass}>
            <a className="is-primary is-small  button" href={item.link} target="_blank" rel="noreferrer">
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
          <Heading size={3} textFamily="secondary" textColor="primary" id="projects" renderAs="h2">
            Projets
          </Heading>
          <Columns>
            {projects.map((project, index) => (
              <ProjectItem key={index} item={project} />
            ))}
          </Columns>
        </Section>
      </Container>
    </Page>
  )
}

export default IndexPage
