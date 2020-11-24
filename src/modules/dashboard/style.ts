import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1fr;
  align-items: center;
  border: 2px solid var(--details);
  border-radius: 25px;
  margin: 10px 50px;
  cursor: pointer;

  h2 {
    font-size: 22px;
    margin: 10px 20px;
  }
`;