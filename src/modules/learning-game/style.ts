import styled from "styled-components";

import { ContentProps } from "./model";

import { Button } from "@components";

export const LearningGameContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  border: 1px solid var(--primary-dark);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-light);

  > h2 {
    letter-spacing: 10px;

    > span {
      &:first-of-type {
        color: var(--error);
      }

      &:last-of-type {
        color: var(--ok);
      }
    }
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 64px;
  background: ${({ again }) => again && "rgba(255, 105, 97, 0.1)"};
  background: ${({ good }) => good && "rgba(80, 200, 120, 0.1)"};

  > h2 {
    &:first-of-type {
      margin-bottom: 32px;
    }

    &:last-of-type {
      margin-top: 32px;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  border: 1px solid var(--secondary);
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--primary-dark);
`;

export const AgainButton = styled(Button)`
  background: var(--error);
`;

export const GoodButton = styled(Button)`
  background: var(--ok);
`;

export const EasyButton = styled(Button)`
  background: var(--blue);
`;
