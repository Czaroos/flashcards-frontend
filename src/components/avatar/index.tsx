import React from "react";

import { AvatarProps } from "./model";

import { AvatarContainer } from "./style";

export const Avatar = ({ displayName, onClick }: AvatarProps) => {
  return (
    <AvatarContainer onClick={onClick}>
      <h2>{`${displayName.split(" ")[0].charAt(0).toUpperCase()}${
        displayName.split(" ").length > 1
          ? displayName.split(" ")[1].charAt(0).toUpperCase()
          : ""
      }`}</h2>
    </AvatarContainer>
  );
};
