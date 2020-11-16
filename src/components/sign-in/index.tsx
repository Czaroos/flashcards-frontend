import React, { useState, useCallback } from "react";

import { IconButton, Input, Modal } from "@components";

import { useAuthProvider } from "@core/auth";

import { GoogleIcon } from "@icons";

import {
  SignInContainer,
  Header,
  Content,
  Google,
  SubmitButton,
  Inputs,
} from "./style";

import { SignInProps } from "./model";

export const SignIn = ({ setOpen, open }: SignInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInWithGoogle } = useAuthProvider();

  const handleEmailChange = useCallback((e: { target: { value: string } }) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: { target: { value: string } }) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <Modal setOpen={setOpen} open={open}>
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
            <IconButton isGoogle={true} onClick={signInWithGoogle!}>
              <GoogleIcon />
            </IconButton>
          </Google>
          <Inputs>
            <h3>EMAIL: </h3>
            <Input
              width="100%"
              type="email"
              required={true}
              placeholder="Your e-mail address..."
              onChange={handleEmailChange}
            />
            <h3>PASSWORD: </h3>
            <Input
              width="100%"
              type="password"
              required={true}
              placeholder="Your account password..."
              onChange={handlePasswordChange}
            />
          </Inputs>
          <SubmitButton
            width="100%"
            onClick={() => alert("login logic when provided")}
          >
            SUBMIT
          </SubmitButton>
        </Content>
      </SignInContainer>
    </Modal>
  );
};
