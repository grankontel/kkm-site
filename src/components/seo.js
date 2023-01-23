/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 function Seo({ description, lang, meta, title, image, ogType }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             siteUrl
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title
   const ogTitle = title || defaultTitle
 
   return (
     <Helmet
 
     title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: ogTitle,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: ogType,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,
           content: ogTitle,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
         {
           name: `twitter:image:alt`,
           content: "A Tribe Called GaaM Logo" ,
         },
       ].concat(meta)}
     />
   )
 }
 
 Seo.defaultProps = {
   lang: `cpf_GP`,
   meta: [],
   description: ``,
   ogType: 'website',
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
   image: PropTypes.string,
   ogType: PropTypes.oneOf(['website', 'article']),
 }
 
 export default Seo
 