module.exports = {
  siteMetadata: {
    title: 'Reactor web',
    description: 'JavaScript development done right',
    author: '@reactor3'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'reactor-javascript',
        short_name: 'reactor',
        start_url: '/',
        background_color: '#1A465C',
        theme_color: '#1A465C',
        display: 'minimal-ui',
        icon: 'src/images/reactor.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['SojuzMono-Regular', 'SojuzMono-Bold', 'Inter-Regular'],
          urls: ['/fonts/fonts.css']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
