module.exports = {
  siteMetadata: {
    siteUrl: 'https://kkm.grankontel.com',
    title: 'KKM site',
    author: 'Thierry Malo',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
}
