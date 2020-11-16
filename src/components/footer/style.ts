import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  width: 100%;
  padding: 150px 0;
  color: var(--primary-light);
  background: var(--secondary);

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 30fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 5fr 1fr;
  }

  section {
    grid-column: 2/3;
    display: flex;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;

      p {
        font-weight: 1000;
        font-size: 17px;
        margin: 10px 0px;
      }

      a {
        cursor: pointer;
      }
    }
  }
`;