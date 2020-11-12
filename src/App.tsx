import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthProvider, { useAuthProvider } from "./core/auth/AuthProvider";

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
  const { user, signInWithGoogle } = useAuthProvider();

  return (
    <div onClick={signInWithGoogle}>
      <>
        SIGN IN WITH GOOGLE
        {console.log(user)}
      </>
    </div>
  );
};

export default App;
