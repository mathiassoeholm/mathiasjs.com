import merge from "deepmerge"
import defaultStyles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles"

export default merge(defaultStyles, {
  a: {
    textDecoration: "none",
  },
  pre: {
    span: {
      // By default this is set to "inline-block" by node_modules/@theme-ui/prism/src/index.js
      // this causes issues on Safari for iOS with some of the code samples.
      display: "inline",
    },
  },
})
