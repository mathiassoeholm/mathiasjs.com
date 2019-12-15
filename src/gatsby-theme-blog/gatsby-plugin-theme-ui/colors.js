import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

export default merge(defaultThemeColors, {
  subscribeBackground: "#4D41DD",
  subscribeText: defaultThemeColors.modes.dark.text,
  subscribeButton: "#10b110",
  subscribeButtonHover: "#0a237d",
})
