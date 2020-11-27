import styled from "styled-components";

import { ContentProps } from "./model";

import { Button } from "@components";

export const LearningGameContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: -200px;
  margin-bottom: 100px;
  position: relative;
  background-image: linear-gradient(
    30deg,
    var(--primary-light),
    var(--secondary-light)
  );
  border-radius: 0 0 20% 20%;
  color: var(--white);
`;

export const Header = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 10%;
  padding: 32px;

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
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 50% 50%;
  width: 100%;
  height: 100vh;
  background: ${({ again }) => again && "rgba(255, 105, 97, 0.2)"};
  background: ${({ good }) => good && "rgba(80, 200, 120, 0.2)"};

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
  border: 1px solid var(--white);
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--secondary);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 10%;
  width: 100%;
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

export const LoaderContainer = styled.div`
  margin-top: -200px;
  background-image: linear-gradient(
    30deg,
    var(--primary-light),
    var(--secondary-light)
  );
  height: 100vh;
  border-radius: 0 0 50% 50%;
  margin-bottom: 10%;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;
