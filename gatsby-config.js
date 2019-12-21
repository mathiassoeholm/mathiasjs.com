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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mathias Soeholm`,
        short_name: `Mathias S.`,
        start_url: `/`,
        background_color: "#1e1a3e",
        theme_color: "#00ff7e",
        display: `standalone`,
        icon: "content/assets/fav-icon.png",
      },
    },
  ],
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
