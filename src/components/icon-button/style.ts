import styled from "styled-components";

import { SVGProps } from "./model";

export const IconButtonContainer = styled.div<SVGProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  padding: 12px;
  background: var(--primary-light);
  border: 1px solid var(--primary-dark);
  cursor: pointer;

  > svg {
    fill: ${({ fill }) => fill};
    width: max-content;
    opacity: 0.8;
  }

  &:hover {
    border: 1px solid var(--primary-dark);
    background: var(--primary);

    > svg {
      opacity: 1;
    }
  }
`;
