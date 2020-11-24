import styled from "styled-components";

export const FlashToolContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  width: 100%;
  padding: 45px 0;
  color: var(--secondary);
  background: var(--primary);

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 30fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 5fr 1fr;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  section {
    grid-column: 2/3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 960px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    .flashTool {
      width: 50%;
    }

    .carouselContainer {
      width: 350px;
      height: 190px;
    }

    div {

      @media (max-width: 960px) {
        width: 100%;
      }

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