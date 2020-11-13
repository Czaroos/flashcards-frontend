import styled from "styled-components";

export const CreateFlashcardContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  height: 450px;
  color: var(--primary-light);
  background: var(--primary-dark);

  section {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: inherit;
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