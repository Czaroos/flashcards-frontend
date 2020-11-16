import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer, Column } from "./style";
import { Input } from "@components";

function input() {
    const [name, setName] = useState("");

    const handleName = (val: string) => {
        setName(val);
    }

    return (
        <>
            <p style={{ color: "white" }}>Name:</p>
            <p style={{ color: "white", height: "20px" }}>{name}</p>
            <Input placeholder="name" onChange={(e) => handleName(e.target.value)} />
        </>
    )
}

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
    ))
    .add("onChange", () => (
        <Column style={{ background: "var(--secondary)" }}>
            {input()}
        </Column>
    ));
