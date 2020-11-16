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

  const { signInWithGoogle, signUp } = useAuthProvider();

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

  const handleGoogleSignUp = useCallback(async (e: React.MouseEvent) => {
    await signInWithGoogle!();
    setOpen(false);
  }, []);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    //TODO: provide complete validation
    if (
      displayName == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == ""
    ) {
      alert("Every field must be filled in.");
      return;
    }

    //TODO: provide complete validation
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    //TODO: handle errors (email exists etc.)
    await signUp!(email, password, displayName);
    setOpen(false);
  };

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
            <IconButton isGoogle={true} onClick={handleGoogleSignUp}>
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
          <Button width="100%" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Content>
      </SignUpContainer>
    </Modal>
  );
};
