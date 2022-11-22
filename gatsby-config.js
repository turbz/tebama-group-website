module.exports = {
  pathPrefix: "/tebama-group-website",
  siteMetadata: {
    title: "Tebama Group of Companies (TGC)",
    description:
      "Tebama Group of Companies (TGC) is a transport and logistics brokerage company established in 2020. The company is a located the Vaal Triangle.",
    image: `/tebama-icon.png`,
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
