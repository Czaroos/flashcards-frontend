import React, { useEffect, useState } from "react";

import { AlertProps } from "./model";

import { AlertContainer, CloseButt } from "./style"


export const Alert = ({ msg, onClick, visibility, variant = 'info' }: AlertProps): JSX.Element => {
    const [value, setValue] = useState(true);
    useEffect(() => {
        setValue(visibility)
    }, [visibility])
    return (
        <AlertContainer visibility={value} variant={variant}>
            {msg}
            <CloseButt onClick={() => onClick()}>x</CloseButt>
        </AlertContainer>
    )
}

export * from "./model"