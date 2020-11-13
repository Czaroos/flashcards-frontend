import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthProvider, { useAuthProvider } from "./core/auth/AuthProvider";

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
  const { user, signInWithGoogle } = useAuthProvider();

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
