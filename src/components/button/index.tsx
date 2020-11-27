import React from "react";

import { ButtonContainer } from "./style";

import { ButtonProps } from "./model";

export const Button = ({
  variant = "default",
  onClick,
  children,
  width = "auto",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={disabled ? () => null : onClick}
      variant={variant}
      width={width}
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};
