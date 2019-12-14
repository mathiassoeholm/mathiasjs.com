import React from "react"
import DefaultFooter from "gatsby-theme-blog/src/components/post-footer"
import { Subscribe } from "./subscribe"

const Footer = props => {
  return (
    <>
      <Subscribe />
      <DefaultFooter {...props} />
    </>
  )
}

export default Footer
