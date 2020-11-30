import React from "react";

import { BuildImage } from "@icons"

import { StyledDiv, DummyBackground } from "./style"

export const NoPage = () => {

    return (
        <>
            <DummyBackground />
            <StyledDiv>
                <BuildImage />
                <h1>Page not found</h1>
            </StyledDiv>
        </>
    )
}