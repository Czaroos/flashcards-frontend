import React from "react";

import { InputContainer } from "./style";

import { InputProps } from "./model";

export const Input = ({
    onChange = () => { },
    width,
    value = "",
    placeholder = ""
}: InputProps) => {

    return (
        <InputContainer
            width={width}
            onChange={onChange}
            defaultValue={value}
            placeholder={placeholder} />
    );
};
