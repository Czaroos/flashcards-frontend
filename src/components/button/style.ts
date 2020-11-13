import styled from "styled-components";

import { ButtonVariant } from "./model";

export const ButtonContainer = styled.div<ButtonVariant>`
  min-width: ${({ width }) => width};
  padding: 12px 16px;
  margin: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ variant }) =>
    variant === "transparent" ? "transparent" : "var(--details)"};
  color: var(--white);
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.7;
    color: ${({ variant }) =>
      variant === "transparent" ? "var(--details)" : "var(--white)"};
  }
`;
