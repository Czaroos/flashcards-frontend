import React from "react";

import { ButtonContainer } from "./style";

import { ButtonProps } from "./model";

export const Button = ({
  variant = "default",
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
};
