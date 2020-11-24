import styled from "styled-components";
import { Slider } from "./model";

export const SliderContainer = styled.div<Slider>`
  transform: translateX(-${({transform}) => transform}px);
  transition: transform ease-out ${({transition}) => transition}s;
  height: 100%;
  width: ${({width}) => width}px;
  display: flex;
`;