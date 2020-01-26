import merge from "deepmerge"
import defaultTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
import "typeface-open-sans"

export default merge(defaultTheme, {
  fonts: {
    heading: `Open Sans, Montserrat, sans-serif`,
  },
})
