import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "@styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <h1>Entry point</h1>
    </BrowserRouter>
  );
};

export default App;
