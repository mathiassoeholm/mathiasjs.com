import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

export default merge(defaultThemeColors, {
  subscribeBackground: "#4D41DD",
  subscribeText: defaultThemeColors.modes.dark.text,
  subscribeButton: "#10b377",
  subscribeButtonHover: "#0d6947",
  primary: "#009c8e",
  modes: {
    dark: {
      background: "#1e1a3e",
      primary: "#00ff7e",
      highlight: "#0fb377",
    },
  },
})
