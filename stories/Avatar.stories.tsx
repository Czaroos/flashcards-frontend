import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Avatar } from "@components";

const oneLetterName = "Walter";
const moreThanOneLetterName = "Walter White";

storiesOf("Avatar", module)
  .add("One letter", () => (
    <CenteredContainer>
      <Avatar displayName={oneLetterName} onClick={() => alert("clicked")} />
    </CenteredContainer>
  ))
  .add("More than one letter", () => (
    <CenteredContainer>
      <Avatar
        displayName={moreThanOneLetterName}
        onClick={() => alert("clicked")}
      />
    </CenteredContainer>
  ));
