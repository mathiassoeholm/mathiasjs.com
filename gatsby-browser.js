import React from "react"
import { Global, css } from "@emotion/core"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Global
        styles={css`
          button {
            cursor: pointer;
          }
        `}
      />
      {element}
    </>
  )
}
