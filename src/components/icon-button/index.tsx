import React from "react";

import { IconButtonContainer } from "./style";

import { IconButtonProps } from "./model";

export const IconButton = ({
  onClick,
  children,
  fill,
  ...props
}: IconButtonProps) => {
  return (
    <IconButtonContainer onClick={onClick} fill={fill} {...props}>
      {children}
    </IconButtonContainer>
  );
};
