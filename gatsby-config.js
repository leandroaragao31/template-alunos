module.exports = {
  siteMetadata: {
    siteUrl: "https://studio-sa-east-1.hygraph.com/f8ea42da-edc8-4e7d-8062-29b11568de05/a562299452b04fb4a1c862f04b8acf80",
    title: "site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckv5llfjd3v7n01xv6nlydcw3/master",
      },
    }
  ],
};
