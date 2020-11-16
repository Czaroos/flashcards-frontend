import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthProvider, { useAuthProvider } from "@core/auth";

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
  const { user } = useAuthProvider();

  return (
    <>
      {console.log(user)}
      <Navbar />
    </>
  );
};

export default App;
