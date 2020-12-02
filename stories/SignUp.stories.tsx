import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { SignUp } from "@modules/sign-up";

storiesOf("Sign up", module).add("Modal content", () => (
  <CenteredContainer>
    <SignUp setOpen={() => { }} open={true} />
  </CenteredContainer>
));
