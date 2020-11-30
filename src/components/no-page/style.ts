import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
        margin: 50px;
        font-size: 50px;
    }

    svg{
        height: 300px;
        margin-top: 100px;
   }

`;

export const DummyBackground = styled.div`
  background-image: linear-gradient(30deg,var(--primary-light),var(--secondary-light));
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  z-index: -1;
`;