import React, { useState } from "react";

import { InputContainer } from "./style";

import { InputProps } from "./model";

export const Input = ({
  onChange = () => {},
  width,
  value = "",
  placeholder = "",
  ...rest
}: InputProps) => {
  const [time, setTime] = useState(setTimeout(() => {}, 500));

  const handleOnChange = (val: string) => {
    if (time) {
      clearTimeout(time);
    }
    setTime(
      setTimeout(() => {
        onChange({ target: { value: val } });
      }, 500)
    );
  };

  return (
    <InputContainer
      width={width}
      onChange={(e) => handleOnChange(e.target.value)}
      defaultValue={value}
      placeholder={placeholder}
      {...rest}
    />
  );
};
