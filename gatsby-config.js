/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `react-scroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
        once: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "nicolas fraisse · creative freelance developer",
        short_name: "all things code",
        description: `web development portfolio by nicolas fraisse, a creative freelance developer based in montreal · get in touch at info@nicolasfraisse.com" />`,
        background_color: "#f7f3eb",
        theme_color: "#323442",
        lang: `en`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`

      }
    }
  ],
}
