import React, { useEffect, useState } from "react";

import { AlertProps } from "./model";

import { AlertContainer } from "./style"


export const Alert = ({ msg, alertVisibility, variant = 'info' }: AlertProps): JSX.Element => {
    const [value, setValue] = useState<boolean>(true);
    useEffect(() => {
        setValue(alertVisibility)
    }, [alertVisibility])
    return (
        <AlertContainer alertVisibility={value} variant={variant}>
            {msg}
        </AlertContainer>
    )
}

export * from "./model"