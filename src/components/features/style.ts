import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  width: 100%;
  height: 400px;
  color: var(--secondary);
  background: var(--primary-light);

  section {
    grid-column: 2/3;
    display: flex;
    justify-content: space-evenly;
    text-align: center;

    div {
      width: 33%;
      margin: 20px;

      h2 {
        margin: 15px 0;
        font-size: 40px;
      }

      p {
        font-size: 22px;
      }
    }
  }
`;