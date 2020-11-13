import styled from "styled-components";

export const FlashToolContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  width: 100%;
  height: 350px;
  color: var(--secondary);
  background: var(--primary);

  section {
    grid-column: 2/3;
    display: flex;
    justify-content: space-evenly;

    div {
      width: 50%;

      h2 {
        margin: 15px 0;
        font-size: 50px;
      }

      p {
        font-size: 25px;
      }
    }
  }
`;