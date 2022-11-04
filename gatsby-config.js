module.exports = {
  pathPrefix: "/tebama-group-website",
  siteMetadata: {
    siteUrl: `https://www.tebamagroup.co.za`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
