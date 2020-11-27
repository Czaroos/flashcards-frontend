import styled from "styled-components";

export const PresentationContainer = styled.div`
  width: 1200px;
  padding-top: 740px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 0;
  grid-column-gap: 0;
`;

export const Tile0 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  height: 100%;

  h1{
    font-size: 35px;
    text-align: left;
  }
`;

const Common = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 80px 80px 80px;
  font-size: 20px;
  display: grid;
  justify-content: center;

  h2{
    font-size: 30px;
  }

  svg {
    height: 200px;
    width: 400px;
    margin-bottom: 25px;
  }

`;

export const Tile1 = styled(Common)`
  grid-area: 1 / 1 / 2 / 2;
  
`;
export const Tile2 = styled(Common)`
    grid-area: 1 / 2 / 2 / 3;
  `;
export const Tile3 = styled(Common)`
  grid-area: 2 / 1 / 3 / 2;
  `;
export const Tile4 = styled(Common)`
  grid-area: 2 / 2 / 3 / 3;
  `;