import styled from "styled-components";

export const BenefitsContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max(1200px) 1fr;
  width: 100%;
  padding: 45px 0;
  color: var(--secondary);
  background: var(--primary);

  img {
    display: block;
    margin: 0 auto;
  }

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
    text-align: right;

    @media (max-width: 960px) {
      flex-direction: column;
      align-items: center;
    }

    div {
      width: 50%;
      margin: 20px;

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

      .carousel {
        background-image: url('https://theapprenticeacademy.co.uk/wp-content/uploads/2016/05/flashcards.png');
        background-position: center;
        background-repeat: no-repeat;
        height: 200px;
        width: 300px;
        margin-right: auto;

        @media (max-width: 960px) {
        margin: auto;
      }
      }
    }
  }
`;