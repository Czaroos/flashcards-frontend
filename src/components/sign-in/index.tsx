import React from "react";

import { IconButton } from "@components";
import { GoogleIcon } from "@icons";

import {
  SignInContainer,
  Header,
  Content,
  Google,
  SubmitButton,
  Inputs,
} from "./style";

export const SignIn = () => {
  return (
    <SignInContainer>
      <Header>
        <h1>Sign In!</h1>
      </Header>
      <Content>
        <Google>
          <h2>
            Log in with <span>G</span>
            <span>o</span>
            <span>o</span>
            <span>g</span>
            <span>l</span>
            <span>e</span>!
          </h2>
          <IconButton isGoogle={true} onClick={() => alert("signinwithgoogle")}>
            <GoogleIcon />
          </IconButton>
        </Google>
        <Inputs>
          <h3>EMAIL: </h3>
          <input />
          <h3>PASSWORD: </h3>
          <input />
        </Inputs>
        <SubmitButton width="100%" onClick={() => alert("asdas")}>
          SUBMIT
        </SubmitButton>
      </Content>
    </SignInContainer>
  );
};
