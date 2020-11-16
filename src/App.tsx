import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "@core/auth";

import { GlobalStyle } from "@styles/GlobalStyle";
import Home from "modules/home";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Home />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
