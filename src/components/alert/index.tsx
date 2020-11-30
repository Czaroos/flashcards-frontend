import React, { useEffect, useState } from "react";

import { AlertProps } from "./model";

import { AlertContainer } from "./style"


export const Alert = ({ msg, visibility, variant = 'info' }: AlertProps): JSX.Element => {
    const [value, setValue] = useState<boolean>(true);
    useEffect(() => {
        setValue(visibility)
    }, [visibility])
    return (
        <AlertContainer visibility={value} variant={variant}>
            {msg}
        </AlertContainer>
    )
}

export * from "./model"