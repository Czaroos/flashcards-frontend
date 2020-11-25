import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Avatar, Button, SignIn, SignUp } from "@components";

import { useAuthProvider } from "@core/auth";

import LogoWhite from "@images/logo-white.png";
import LogOut from "@images/logout.png";

import { Actions, NavbarContainer, Sidebar } from "./style";

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
              <Button width="75" onClick={logOut}>
                <img src={LogOut} height="20" width="20" />
              </Button>
            </>
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
