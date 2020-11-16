import React, { useCallback } from "react";

import { Button } from "@components";

import LogoWhite from "@images/logo-white.png";

import { Actions, NavbarContainer, Sidebar } from "./style";

export const Navbar = () => {
  const handleSignIn = useCallback(() => {
    // change it to sign in logic
    alert("sign in");
  }, []);

  const handleSignUp = useCallback(() => {
    // change it to sign up logic
    alert("sign up");
  }, []);

  // Add links after routing is added

  return (
    <NavbarContainer>
      <img src={LogoWhite} alt="logo" onClick={() => alert("redirect to /")} />
      <nav>
        <Button onClick={() => alert("redirect to /")} variant="transparent">
          Home
        </Button>
        <Button
          onClick={() => alert("redirect to /about")}
          variant="transparent"
        >
          About
        </Button>
      </nav>
      <Actions>
        <Button variant="transparent" onClick={handleSignIn}>
          SIGN IN
        </Button>
        <Button width="190px" onClick={handleSignUp}>
          <b>SIGN UP</b>
        </Button>
      </Actions>

      <Sidebar>
        <div />
        <div />
        <div />
      </Sidebar>
    </NavbarContainer>
  );
};
