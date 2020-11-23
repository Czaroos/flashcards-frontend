import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Flashcard, Board } from "@components";

storiesOf("Flashcard", module)
    .add("tiny", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Flashcard variant="tiny" id="" coords={{ x: 0, y: 0 }} />
        </CenteredContainer>
    ))
    .add("medium", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Flashcard variant="medium" id="" coords={{ x: 0, y: 0 }} />
        </CenteredContainer>
    ))
    .add("large with content", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Flashcard variant="large" id="" answer="Jack" question="What is your name?" coords={{ x: 0, y: 0 }} />
        </CenteredContainer>
    ))
    .add("colors", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Flashcard variant="tiny" id="" coords={{ x: 0, y: 0 }} color="blue" />
            <Flashcard variant="tiny" id="" coords={{ x: 0, y: 0 }} color="gray" />
            <Flashcard variant="tiny" id="" coords={{ x: 0, y: 0 }} color="green" />
            <Flashcard variant="tiny" id="" coords={{ x: 0, y: 0 }} color="pink" />
            <Flashcard variant="tiny" id="" coords={{ x: 0, y: 0 }} color="red" />
        </CenteredContainer>
    ));
