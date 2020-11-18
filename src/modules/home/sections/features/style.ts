import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  width: 100%;
  padding: 75px 0;
  color: var(--secondary);
  background: var(--primary-light);

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
    text-align: center;

    img{
      margin-left: 10px;
    }

    @media (max-width: 960px) {
      flex-direction: column;
      align-items: center;
    }

    div {
      width: 33%;
      margin: 20px;
      max-width: 360px;

      @media (max-width: 960px) {
        width: 100%;
      }

      h2 {
        margin-bottom: 20px;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        font-size: 22px;
      }
    }
  }
`;