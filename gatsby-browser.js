import React from "react"
import { Global, css } from "@emotion/core"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            text-size-adjust: none;
          }

          button {
            cursor: pointer;
          }
        `}
      />
      {element}
    </>
  )
}
