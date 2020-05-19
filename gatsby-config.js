module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /(\.js$|\.jsx|\.ts|\.tsx)$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-ts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
