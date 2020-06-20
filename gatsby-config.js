/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `react-scroll`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
        once: true
      }
    }
  ]
}
