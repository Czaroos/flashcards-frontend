import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthProvider, { useAuthProvider } from "@core/auth/AuthProvider";

import { Navbar } from "@components";

import { GlobalStyle } from "@styles/GlobalStyle";

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
  return <Navbar />;
};

export default App;
