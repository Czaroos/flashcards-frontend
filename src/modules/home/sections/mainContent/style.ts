import styled from "styled-components";
import { Button } from "@components";

export const CreateFlashcardContainer = styled.div`
  position: absolute;
  top: 0;
  height: 740px;
  width: 100%;
  overflow-x: hidden;
  z-index: 0;
  transition: all 0s;
  color: var(--white);
`;

export const Inner = styled.div`
  background-image: linear-gradient(30deg,var(--primary-light),var(--secondary-light));
  border-radius: 0 0 50% 50%;
  width: 120vw;
  height: 720px;
  position: absolute;
  left: -10vw;
  top: -80px;
  z-index: 5;
  transition: all 0s;
  padding-top: 80;
  display: grid;
  justify-content: center;
  overflow: hidden;
  
`;

export const Content = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-areas: "left right";
  grid-auto-columns: 1fr 1fr;
  width: 1200px;
  height: 100%;

  svg{
    padding: 0 50px;
    grid-area: right;
    width: 100%
  }
`;

export const Aside = styled.div`
  grid-area: left;
  padding: 80px;

  h1{
    margin-bottom: 50px;
  }

  p{
    font-size: 25px;
    margin-bottom: 50px;
  }
`;

export const StyledButton = styled(Button)`
  border: 2px solid var(--white);
  width: 200px;
  margin: 0;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
`;