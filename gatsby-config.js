/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Belize Jungle Boys`,
    description: `We offer a wide range of adventures that cater to nature enthusiasts and adrenaline junkies alike. Explore Belize's stunning excursions: Cave Tubing, Zipline, Mayan Temples, ATV Jungle Rides and more!`,
    author: `Jose Urbina`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-us-west-2.hygraph.com/v2/cm2xvnuri011u07wbcvxmmaly/master",
        token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzEwMzY5OTYsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20yeHZudXJpMDExdTA3d2JjdnhtbWFseS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNDUyZmRlMGQtZDNkZS00NjM1LTkwMjItMzU4MGI1YTMzMjgyIiwianRpIjoiY20zODZxZWtyMHZxdjA3bHJoZGtwaGVqdiJ9.BI4KEGHWMJjAaE2I_-lQlfyewPhMIJPIEOHo0ffatqDkS1ozoweGPCQ0-8r1BTslwbuN5Jqe6uSKr5fJy4Mox-Lix-WiJE42qjE1usiNljSFRZTYaZvhyJ3WZB1qoAARZ-DXHT2CjNVqcu624H5889pFJjhtJpLoZX6LXaAhW3FZJIh9n96blmnzPo5CaFBicwzPwj2MhxJQ9qJL_GMrwlB_s-AVA-Wq6aayCpN_PWjeq6WYRMnNYze7fLpG7FKsoWaYWFU0c_hhcP0P5MWYgt59uKKbHnOTIgGJJWLuakdp6YQDR7ekm-Cx67TMPfVUos7Cfww97cCRaObqDo3YnufrHb2_ZR2dyfdNVP1A1ykZoeQKFHmqfXW6hTtRglXkKXEcoggrX6YJoZnp0Jv-T5QTPpuu7Mkm9hGIWTa4mLA2FGDYST0ZMOx7EWqdwOfIN4GeRanYf_-zNDf6Qop0NIKCUt5QHxW-eQbqLE6vmVZGQyIde4HLLsc3LDrM7iECluO7rqjYFg3I3-vap95vG51J27KmpFmby0ur7q7w8IiWzrmEhPOQU_3lA827uE97RmiOyM7OGPuNePOA_ueNeOyuuwOjILpbgcohzsmpUBAzManKa3OsDkbhDSMU7cLndYT8opL2XnKrVVkNiMaevuqHUFQr0PrLuAqUHS5U_5s",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
