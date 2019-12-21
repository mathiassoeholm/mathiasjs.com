module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-39072819-4",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Mathias Soeholm`,
    author: `Mathias Soeholm`,
    description: `I'm Mathias, this is where I share things that I learn.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/soeholm`,
      },
      {
        name: `github`,
        url: `https://github.com/mathiassoeholm`,
      },
    ],
  },
}
