require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /(\.js$|\.jsx|\.ts|\.tsx)$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-ts",
  ],
};
