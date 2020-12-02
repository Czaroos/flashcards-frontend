import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Avatar, Button } from "@components";
import { SignIn } from "@modules/sign-in"
import { SignUp } from "@modules/sign-up"

import { useAuthProvider } from "@core/auth";

import LogoWhite from "@images/logo-white.png";
import LogOut from "@images/logout.png";

import { Actions, NavbarContainer, Sidebar, StyledButton } from "./style";

export const Navbar = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const { user, logOut } = useAuthProvider();

  const history = useHistory();

  const handleSignIn = useCallback(() => {
    setSignIn(true);
  }, []);

  const handleSignUp = useCallback(() => {
    setSignUp(true);
  }, []);

  return (
    <>
      {signUp && <SignUp setOpen={setSignUp} open={signUp} />}
      {signIn && <SignIn setOpen={setSignIn} open={signIn} />}
      <NavbarContainer>
        <img
          src={LogoWhite}
          alt="logo"
          onClick={() => history.push(`/`)}
          height="50"
        />
        <nav>
          <ul>
            <li onClick={() => history.push(`/`)} >HOME</li>
            <li onClick={() => history.push(`/about`)}>ABOUT</li>
          </ul>
        </nav>
        <Actions>
          {user ? (
            <>
              <Avatar
                displayName={user.displayName}
                onClick={() => history.push(`/dashboard/${user.id}`)}
              />
              <StyledButton width="75" onClick={logOut} variant="transparent">
                <img src={LogOut} height="20" width="20" />
              </StyledButton>
            </>
          ) : (
              <>
                <Button variant="transparent" onClick={handleSignIn}>
                  SIGN IN
              </Button>
                <StyledButton variant="transparent" width="190px" onClick={handleSignUp}>
                  SIGN UP
              </StyledButton>
              </>
            )}
        </Actions>

        <Sidebar>Icon Button</Sidebar>
      </NavbarContainer>
    </>
  );
};
