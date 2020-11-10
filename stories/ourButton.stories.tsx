import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Button } from "@components";

storiesOf("Our button", module)
  .add("default", () => (
    <CenteredContainer>
      <Button variant="default" onClick={() => alert("clicked default button")}>
        <h3>BUTTON</h3>
      </Button>
    </CenteredContainer>
  ))
  .add("round", () => (
    <CenteredContainer>
      <Button variant="round" onClick={() => alert("clicked round button")}>
        <h3>OK</h3>
      </Button>
    </CenteredContainer>
  ));
