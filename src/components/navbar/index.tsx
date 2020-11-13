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
      <img
        src={LogoWhite}
        alt="logo"
        onClick={() => alert("redirect to home")}
      />
      <nav>
        <Button variant="transparent">HOME</Button>
        <Button variant="transparent">ABOUT</Button>
      </nav>
      <Actions>
        <Button variant="transparent" onClick={handleSignIn}>
          SIGN IN
        </Button>
        <Button width="190px" onClick={handleSignUp}>
          SIGN UP
        </Button>
      </Actions>

      <Sidebar>Icon Button</Sidebar>
    </NavbarContainer>
  );
};
