import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { SignIn } from "@modules/sign-in";

storiesOf("Sign in", module).add("Modal content", () => (
  <CenteredContainer>
    <SignIn setOpen={() => { }} open={true} />
  </CenteredContainer>
));
