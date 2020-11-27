import styled from "styled-components";

import { ButtonVariant } from "./model";

export const ButtonContainer = styled.div<ButtonVariant>`
  width: ${({ width }) => width};
  padding: 12px 16px;
  margin: 16px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ variant }) =>
    variant === "transparent" ? "transparent" : "var(--secondary)"};
  color: var(--white);
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: ${({ variant }) =>
    variant === "transparent" && "0.7"};
    background: ${({ variant }) =>
    variant === "default" && "var(--primary-dark)"};
    color: ${({ variant }) =>
    variant === "transparent" ? "var(--details)" : "var(--white)"};
  }
`;
