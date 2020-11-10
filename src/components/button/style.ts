import { Button } from "react-native";
import styled from "styled-components";

import { ButtonVariant } from "./model";

export const ButtonContainer = styled.div<ButtonVariant>`
  min-width: ${({ variant }) => (variant === "round" ? "60px" : "120px")};
  height: 60px;
  padding: 18px;
  border-radius: ${({ variant }) => (variant === "round" ? "50%" : "4px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gunmetal);
  background: var(--cultured);
  color: var(--gunmetal);
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background: var(--light-gray);
    border: 1px solid var(--gunmetal);
    color: var(--white);
  }
`;
