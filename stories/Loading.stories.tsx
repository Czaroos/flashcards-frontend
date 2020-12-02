import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Loading } from "@components";

storiesOf("Loading", module)
    .add("default", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Loading />
        </CenteredContainer>
    ));
