import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Input } from "@components";

storiesOf("Input", module)
    .add("default with onChange fun", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Input onChange={() => alert("onChange")} />
        </CenteredContainer>
    ))
    .add("width & value", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Input width="300px" value="hello" />
        </CenteredContainer>
    ))
    .add("placeholder", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Input placeholder="name" />
        </CenteredContainer>
    ));
