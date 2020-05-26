import React from "react";
import "normalize.css";

import { GlobalStyle } from "./global-style";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export { Layout };
