import React from "react";
import { SliderProps } from "./model";
import { SliderContainer } from "./style";

export const Slider = ({
  transform,
  transition,
  width,
  children,
  ...props
}: SliderProps) => {
  return (
    <SliderContainer
      transform={transform}
      transition={transition}
      width={width}
      {...props}
    >
      {children}
    </SliderContainer>
  );
};
