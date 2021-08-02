import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const PageHead = () => {
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
      <Helmet
        titleTemplate="%s — Grankontel"
        defaultTitle={site.siteMetadata?.title}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  )
}

export default PageHead
