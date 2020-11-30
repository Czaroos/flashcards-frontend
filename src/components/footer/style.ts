import { Button } from "@components";
import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  width: 100%;
  padding: 120px 0;
  color: var(--white);
  background: linear-gradient(10deg,var(--primary-light),var(--secondary-light));

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 30fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 5fr 1fr;
  }

  section {
    grid-column: 2/3;
    display: flex;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;

      h1 {
        letter-spacing: 3px;
        padding: 10px;
      }

      a {
        cursor: pointer;
        text-indent: 20px;
        font-size: 20px;
        margin: 5px;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  border: 2px solid var(--white);
  width: 200px;
  margin: 5px 20px;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
`;
