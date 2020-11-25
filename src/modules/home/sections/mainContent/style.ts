import styled from "styled-components";
import { Button } from "@components";

export const CreateFlashcardContainer = styled.div`
  background: var(--primary);
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 1fr 1fr;
`;

export const LeftDiv = styled.div`
  grid-area: left;
  display: grid;
  justify-items: center;
  height: 700px;

  h1{
    text-align:center;
    font-size: 35px;
    font-weight: 900;
    margin-bottom: 50px;
    text-align: left;
  }

  h2{
    text-align: left;
    padding-bottom: 100px;
  }
`;

export const RightDiv = styled.div`
  grid-area: right;
  height: 700px;

  svg{
    width: 100%;
  }

`;

export const Content = styled.div`
  width: 400px;
  padding-top: 100px;
`;

export const StyledButton = styled(Button)`
  background: var(--white);
  color: var(--black);
  font-weight: 900;
  margin: 0;
  width: 200px;
`;