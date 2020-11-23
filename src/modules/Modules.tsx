import React from "react";

import AuthProvider from "@core/auth";
import { AlertProvider } from "@core/alert";

import { Navbar, Footer } from "@components";

import Router from "./Router";

import { GlobalStyle } from "@styles/GlobalStyle";

export const Modules = () => {
  return (
    <AlertProvider>
      <AuthProvider>
        <GlobalStyle />
        <Navbar />
        <Router />
        <Footer />
      </AuthProvider>
    </AlertProvider>
  );
};
