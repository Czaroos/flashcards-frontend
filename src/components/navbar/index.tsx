import React, { useCallback, useState } from "react";

import { Button, SignIn } from "@components";

import { useAuthProvider } from "@core/auth";

import LogoWhite from "@images/logo-white.png";

import { Actions, NavbarContainer, Sidebar } from "./style";

export const Navbar = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const { user } = useAuthProvider();

  const handleSignIn = useCallback(() => {
    setSignIn(true);
  }, []);

  const handleSignUp = useCallback(() => {
    // change it to sign up logic
    alert("sign up");
  }, []);

  // Add links after routing is added

  return (
    <>
      {signIn && <SignIn setOpen={setSignIn} open={signIn} />}
      <NavbarContainer>
        <img
          src={LogoWhite}
          alt="logo"
          onClick={() => alert("redirect to /")}
        />
        <nav>
          <Button onClick={() => alert("redirect to /")} variant="transparent">
            HOME
          </Button>
          <Button
            onClick={() => alert("redirect to /about")}
            variant="transparent"
          >
            ABOUT
          </Button>
        </nav>
        <Actions>
          {user ? (
            <h3>You are logged in as {user.displayName}</h3>
          ) : (
            <>
              <Button variant="transparent" onClick={handleSignIn}>
                SIGN IN
              </Button>
              <Button width="190px" onClick={handleSignUp}>
                SIGN UP
              </Button>
            </>
          )}
        </Actions>

        <Sidebar>Icon Button</Sidebar>
      </NavbarContainer>
    </>
  );
};
