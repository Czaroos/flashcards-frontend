import React from "react";

import AuthProvider from "@core/auth";

import { Navbar, Footer } from "@components";

import Router from "./Router";

import { GlobalStyle } from "@styles/GlobalStyle";

export const Modules = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Navbar />
      <Router />
      <Footer />
    </AuthProvider>
  );
};
