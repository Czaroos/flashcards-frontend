import React from "react";

import { AvatarProps } from "./model";

import { AvatarContainer } from "./style";

export const Avatar = ({ displayName, onClick }: AvatarProps) => {
  const letters = `${displayName.split(" ")[0].charAt(0).toUpperCase()}${
    displayName.split(" ").length > 1
      ? displayName.split(" ")[1].charAt(0).toUpperCase()
      : ""
  }`;

  return (
    <AvatarContainer onClick={onClick}>
      <h2>{letters}</h2>
    </AvatarContainer>
  );
};
