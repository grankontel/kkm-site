import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Card, Columns, Content, Heading } from 'react-bulma-components'
import { FaGithub } from 'react-icons/fa'
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

export default ProjectList
