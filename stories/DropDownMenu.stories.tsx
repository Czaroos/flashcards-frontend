import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { DropDownMenu } from "@components";

import styled from "styled-components";

const StyledDiv = styled.div`
    background: var(--white);
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
`;

storiesOf("DropDownMenu", module)
    .add("default", () => (
        <CenteredContainer style={{ background: "var(--white)" }}>
            <DropDownMenu name="open">
                <StyledDiv onClick={() => alert("hello1")}>Click me 1</StyledDiv>
                <StyledDiv onClick={() => alert("hello2")}>Click me 2</StyledDiv>
                <StyledDiv onClick={() => alert("hello3")}>Click me 3</StyledDiv>
            </DropDownMenu>
        </CenteredContainer>
    ));
