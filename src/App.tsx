import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthProvider, { useAuthProvider } from "@core/auth";

import { GlobalStyle } from "@styles/GlobalStyle";
import Home from "modules/home";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Mock />
      </AuthProvider>
    </BrowserRouter>
  );
};

const Mock = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
