import styled from "styled-components";

export const ShareContainer = styled.div`
  margin-top: -200px;
  background-image: linear-gradient(
    30deg,
    var(--primary-light),
    var(--secondary-light)
  );
  height: 100vh;
  border-radius: 0 0 50% 50%;
  margin-bottom: 10%;
  padding: 0 32px;
  color: var(--white);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  > h1 {
    margin: 20px 0;

    > span {
      color: var(--secondary);
      margin: 0 4px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
`;
