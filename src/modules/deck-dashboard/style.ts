import styled from "styled-components";

import { Button } from "@components";

export const DashboardContainer = styled.div`
  min-height: 100vh;
`;

export const StyledButton = styled(Button)`
  width: 200px;
  padding: 5px;
  margin: 5px;

  &:hover{
    background: transparent;
    color: var(--white);
  }
`;

export const DummyBackground = styled.div`
  background-image: linear-gradient(30deg,var(--primary-light),var(--secondary-light));
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  z-index: -1;
`;