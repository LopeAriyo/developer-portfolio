module.exports = {
  siteMetadata: {
    title: `Lope Ariyo Developer Portfolio`,
    description: `A developer portfolio website from Lope Ariyo.`,
    author: `Lope Ariyo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://lopeariyo-portfolio-be.herokuapp.com`,
        // apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`project`],
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: "lopeariyo",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lope-ariyo-developer`,
        short_name: `la-dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lope-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },
  ],
}
