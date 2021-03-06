module.exports = {
  siteMetadata: {
    siteUrl: 'https://kkm.grankontel.com',
    title: 'KKM site',
    author: 'Thierry Malo',
    description: 'Zouti pou rédé moun maké é korijé kréyòl maké a yo'
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
}
