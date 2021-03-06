import styled from "styled-components";

import { Button } from "@components";

export const SignInContainer = styled.div`
  left: calc(50% - 300px);
  top: 60px;
  width: 600px;
  border: 1px solid var(--secondary);
  background: var(--white);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  color: var(--white);
  width: 100%;
  padding: 32px;
  background: var(--secondary);
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`;

export const Google = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid var(--secondary);
  border-radius: 4px;
  padding: 12px;
  width: 100%;

  & > h2 > span {
    &:first-child {
      color: #4285f4;
    }

    &:nth-child(2) {
      color: #ea4335;
    }

    &:nth-child(3) {
      color: #fbbc04;
    }

    &:nth-child(4) {
      color: #4285f4;
    }

    &:nth-child(5) {
      color: #34a853;
    }

    &:last-child {
      color: #ea4335;
    }
  }
`;

export const SubmitButton = styled(Button)`
  background: var(--secondary);
`;

export const Inputs = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 360px;
  border: 1px solid var(--secondary);
  border-radius: 4px;
  padding: 16px;
  margin: 24px 0;

  > h3 {
    color: var(--grey);
  }
`;
