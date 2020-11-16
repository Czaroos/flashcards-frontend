import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Flashcard } from "@components";

storiesOf("Flashcard", module)
    .add("tiny", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Flashcard variant="tiny" id="" />
        </CenteredContainer>
    ))
    .add("medium", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Flashcard variant="medium" id="" />
        </CenteredContainer>
    ))
    .add("large with content", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Flashcard variant="large" id="" answer="Jack" question="What is your name?" />
        </CenteredContainer>
    ));
