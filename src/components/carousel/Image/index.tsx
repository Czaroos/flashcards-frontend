import React from "react";
import { ImageProps } from "./model";
import { ImageContainer } from "./style";

export const Image = ({ width, content, ...props }: ImageProps) => {
  return (
    <ImageContainer width={width} content={content} {...props}></ImageContainer>
  );
};
