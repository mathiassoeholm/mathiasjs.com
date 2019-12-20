import React, { Fragment } from "react"
import { Styled, useColorMode } from "theme-ui"

export default () => {
  const [, setColorMode] = useColorMode()

  return (
    <Fragment>
      Mathias Soeholm, web-developer @{" "}
      <Styled.a href="https://trifork.com/" rel="noopener" target="_blank">
        Trifork
      </Styled.a>
      .
      <br />
      Coding things all{" "}
      <Styled.a
        style={{ cursor: "pointer" }}
        onClick={() => setColorMode("light")}
      >
        day
      </Styled.a>{" "}
      and all{" "}
      <Styled.a
        style={{ cursor: "pointer" }}
        onClick={() => setColorMode("dark")}
      >
        night
      </Styled.a>
      .
    </Fragment>
  )
}
