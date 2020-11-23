import React, { useEffect } from "react";

import { AlertProps } from "./model";

import { AlertContainer, CloseButt } from "./style"


export const Alert = ({ msg, onClick, variant }: AlertProps): JSX.Element => {
    return (
        <AlertContainer variant={variant}>
            {msg}
            {variant}
            <CloseButt onClick={() => onClick()}>x</CloseButt>
        </AlertContainer>
    )
}

export * from "./model"