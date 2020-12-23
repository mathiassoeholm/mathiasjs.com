import React, { Fragment } from "react"
import { Styled, useColorMode } from "theme-ui"

export default () => {
  const [, setColorMode] = useColorMode()

  return (
    <Fragment>
      Mathias Soeholm, Software Engineer @ LEGO Education
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
