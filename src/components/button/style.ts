import styled from "styled-components";

import { ButtonVariant } from "./model";

export const ButtonContainer = styled.div<ButtonVariant>`
  min-width: 190px;
  padding: 12px 16px;
  margin: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ variant }) =>
    variant === "transparent" ? "transparent" : "var(--details)"};
  border: ${({ variant }) =>
    variant === "transparent" ? "1px solid var(--white)" : "none"};
  color: var(--white);
  cursor: pointer;
  transition: all 0.25s;
  user-select: none;

  &:hover {
    opacity: 0.7;
    border: ${({ variant }) =>
      variant === "transparent" ? "1px solid var(--details)" : "none"};
    color: ${({ variant }) =>
      variant === "transparent" ? "var(--details)" : "var(--white)"};
  }
`;
