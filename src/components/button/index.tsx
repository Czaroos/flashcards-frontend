import React from "react";

import * as S from "./style";

import { ButtonProps } from "./model";

export const Button = ({
  variant = "default",
  onClick,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer onClick={onClick} variant={variant} {...rest}>
      {children}
    </S.ButtonContainer>
  );
};
