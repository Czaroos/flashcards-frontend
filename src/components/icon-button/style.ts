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
  background: transparent;

  border-right: ${({ isGoogle }) => isGoogle && "1px solid #4285f4"};
  border-bottom: ${({ isGoogle }) => isGoogle && "1px solid #34a853"};
  border-left: ${({ isGoogle }) => isGoogle && "1px solid #fbbc04"};
  border-top: ${({ isGoogle }) => isGoogle && "1px solid #ea4335"};

  cursor: pointer;

  > svg {
    fill: ${({ fill }) => fill};
    width: max-content;
    opacity: 0.8;
  }

  &:hover {

    > svg {
      opacity: 1;
    }
  }
`;
