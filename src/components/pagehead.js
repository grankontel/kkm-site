import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Head = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <>
      <title>{site.siteMetadata?.title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto+Slab&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default Head
