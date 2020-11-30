import styled from "styled-components";

import { Button } from "@components";

import { FlashcardVariant } from "./model";

export const FlashcardContainer = styled.div<FlashcardVariant>`
  border-radius: 10px;
  width: ${({ variant }) => variant === "tiny" && "200px"};
  height: ${({ variant }) => variant === "tiny" && "100px"};
  width: ${({ variant }) => variant === "medium" && "400px"};
  height: ${({ variant }) => variant === "medium" && "100px"};
  width: ${({ variant }) => variant === "large" && "400px"};
  height: ${({ variant }) => variant === "large" && "210px"};
  position: relative;
  padding: 5px;
  background: ${({ color }) => color === "gray" && "#98f4f1"};
  background: ${({ color }) => color === "red" && "#72cce4"};
  background: ${({ color }) => color === "blue" && "#6da0d9"};
  background: ${({ color }) => color === "pink" && "#a689e7"};
  background: ${({ color }) => color === "green" && "#bd81d9"};
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: grab;
  box-shadow: 5px 5px 15px -6px #000000;

  &:active {
    cursor: grabbing;
  }
`;

export const ModalDiv = styled.div`
  left: calc(50% - 150px);
  top: 60px;
  width: 300px;
  height: 100px;
  background: var(--white);
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ChangeButton = styled(Button)`
  position: absolute;
  top: -10px;
  right: -10px;
  height: 20px;
  width: 20px;
  padding: 0;
  cursor: pointer;
`;

export const EditButton = styled(ChangeButton)`
  top: auto;
  bottom: -10px;
`;

export const DeleteButton = styled(ChangeButton)`
  top: auto;
  bottom: 20px;
`;
