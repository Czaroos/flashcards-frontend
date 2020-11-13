import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { IconButton } from "@components";
import { GoogleIcon } from "@icons";

storiesOf("Icon Button", module).add("Google", () => (
  <CenteredContainer>
    <IconButton isGoogle={true} onClick={() => alert("clicked google button")}>
      <GoogleIcon />
    </IconButton>
  </CenteredContainer>
));
