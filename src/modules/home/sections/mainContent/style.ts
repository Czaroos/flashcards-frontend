import styled from "styled-components";

export const CreateFlashcardContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  padding: 100px 0;
  color: var(--primary-light);
  /* background-image: url('https://4.allegroimg.com/original/015eea/7d7bcc674192bb6359bc876c67c4/ENGLISH-QUEST-3-KARTY-OBRAZKOWE-flashcards-komplet'); */
  background-position: center;
  background-blend-mode: multiply;
  background-color: #41464f;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 30fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 5fr 1fr;
  }

  section {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: inherit;
    text-align: center;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }

  h1 {
    margin: 20px 0;
    font-size: 50px;
    font-weight: 700;
  }

  p {
    margin: 20px 0;
    font-size: 25px;
  }

  div {
    margin: 20px 0;
  }
`;