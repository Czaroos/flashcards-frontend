import React from "react";

import { ButtonContainer } from "./style";

import { ButtonProps } from "./model";

export const Button = ({
  variant = "default",
  onClick,
  children,
  width = "auto",
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      variant={variant}
      width={width}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};
