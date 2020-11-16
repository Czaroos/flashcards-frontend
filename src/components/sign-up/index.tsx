import React, { useState, useCallback } from "react";

import { IconButton, Input, Modal, Button } from "@components";

import { useAuthProvider } from "@core/auth";

import { GoogleIcon } from "@icons";

import { SignUpContainer, Header, Content, Google, Inputs } from "./style";

import { SignUpProps } from "./model";

export const SignUp = ({ setOpen, open }: SignUpProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

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

  const handleConfirmPasswordChange = useCallback(
    (e: { target: { value: string } }) => {
      setConfirmPassword(e.target.value);
    },
    []
  );

  const handleDisplayNameChange = useCallback(
    (e: { target: { value: string } }) => {
      setDisplayName(e.target.value);
    },
    []
  );

  return (
    <Modal setOpen={setOpen} open={open}>
      <SignUpContainer>
        <Header>
          <h1>Sign Up!</h1>
        </Header>
        <Content>
          <Google>
            <h2>
              Sign up with <span>G</span>
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
            <h3>DISPLAY NAME: </h3>
            <Input
              width="100%"
              required={true}
              placeholder="Set your display name..."
              onChange={handleDisplayNameChange}
            />
            <h3>EMAIL: </h3>
            <Input
              width="100%"
              type="email"
              required={true}
              placeholder="Set your e-mail address..."
              onChange={handleEmailChange}
            />
            <h3>PASSWORD: </h3>
            <Input
              width="100%"
              type="password"
              required={true}
              placeholder="Set your account password..."
              onChange={handlePasswordChange}
            />
            <h3>CONFIRM PASSWORD: </h3>
            <Input
              width="100%"
              type="password"
              required={true}
              placeholder="Confirm your account password..."
              onChange={handleConfirmPasswordChange}
            />
          </Inputs>
          <Button
            width="100%"
            onClick={() => alert("sign up logic when provided")}
          >
            SUBMIT
          </Button>
        </Content>
      </SignUpContainer>
    </Modal>
  );
};
