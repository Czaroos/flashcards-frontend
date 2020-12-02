import { Button } from "@components";
import styled from "styled-components";

export const DummyBackground = styled.div`
  background-image: linear-gradient(
    30deg,
    var(--primary-light),
    var(--secondary-light)
  );
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  z-index: -1;
`;

export const DashboardContainer = styled.div`
  min-height: 70vh;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 4%;
  max-width: 1300px;
  margin: 100px auto;
  padding: 0px 50px;
  align-items: center;
`;

export const DeckWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  padding: 10px;
  height: 170px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-blend-mode: darken;
  background-color: #c0c0c433;
  color: #212227;
  cursor: pointer;
  border-bottom: 3px solid #802fcd;
  position: relative;

  > h6 {
    position: absolute;
    bottom: 0;
    left: 8px;
  }

  :hover {
    transition: border 0.5s ease-out;
    border-bottom: 3px solid #20cae5;
  }

  > h2 {
    grid-column-start: 2;
    grid-row-start: 2;
    font-size: 25px;
    margin: 2px 0px;
    word-break: break-word;
    text-align: center;
    align-self: flex-end;
  }

  img {
    filter: invert(24%) sepia(3%) saturate(3547%) hue-rotate(230deg)
      brightness(94%) contrast(84%);

    :hover {
      filter: invert(28%) sepia(52%) saturate(2770%) hue-rotate(255deg)
        brightness(84%) contrast(104%);
    }
  }
`;

export const CreateDeck = styled(DeckWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;

  :hover {
    border: none;

    img {
      filter: invert(23%) sepia(65%) saturate(3553%) hue-rotate(262deg)
        brightness(82%) contrast(95%);
    }

    h2 {
      color: #802fcd;
    }
  }

  > h2 {
    align-self: center;
    margin-top: 14px;
  }
`;

export const MyIcon = styled(Button)`
  width: 0px;
  height: 0px;
  padding: 0;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const EditButton = styled(MyIcon)`
  grid-column-start: 3;
  grid-row-start: 2;
  padding-left: 1px;
  align-self: flex-end;
`;

export const DeleteButton = styled(MyIcon)`
  grid-column-start: 3;
  grid-row-start: 1;
`;

export const PlayButton = styled(MyIcon)`
  grid-column-start: 1;
  grid-row-start: 1;
`;

export const ShareButton = styled(MyIcon)`
  grid-column-start: 2;
  grid-row-start: 1;
`;

export const ModalContainer = styled.div`
  top: 150px;
  left: calc(50% - 150px);
  background: white;
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;

  > form {
    display: flex;
    flex-direction: column;

    > label {
      margin: 20px 20px 10px 20px;
    }

    > input {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;
      width: auto;
      border: 1px solid var(--secondary);
      border-radius: 4px;
      padding: 16px;
      margin: 0px 20px;
      margin-bottom: 20px;
      font-size: 18px;
    }
  }

  > p {
    font-size: 20px;
    margin: 20px;
  }
`;

export const MyBtn = styled(Button)`
  margin: 20px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;

  > img {
    cursor: pointer;

    :hover {
      filter: drop-shadow(2px 4px 6px black);
    }
  }

  > div {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Separator = styled.div`
  border-bottom: 1px solid #80808075;
  margin: 0px 20px;
`;
