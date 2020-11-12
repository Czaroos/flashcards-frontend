import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Button } from "@components";

storiesOf("Our button", module)
  .add("default", () => (
    <CenteredContainer style={{ background: "var(--secondary)" }}>
      <Button variant="default" onClick={() => alert("clicked default button")}>
        <h3>SIGN UP</h3>
      </Button>
    </CenteredContainer>
  ))
  .add("transparent", () => (
    <CenteredContainer style={{ background: "var(--secondary)" }}>
      <Button
        variant="transparent"
        onClick={() => alert("clicked transparent button")}
      >
        <h3>SIGN IN</h3>
      </Button>
    </CenteredContainer>
  ));
