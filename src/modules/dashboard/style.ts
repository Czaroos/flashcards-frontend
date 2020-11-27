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

export const ModalContainer = styled.div`
  background: white;
  width: 300px;
  margin: 50px auto;
  float: none;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;

    img {
      cursor: pointer;

      :hover {
        filter: drop-shadow(2px 4px 6px black);
      }
    }

    div {
      font-weight: bold;
      font-size: 20px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 20px;
      margin-bottom: 10px;
      margin-left: 20px;
      margin-right: 20px;
    }

    input {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;
      width: auto;
      border: 1px solid var(--secondary);
      border-radius: 4px;
      padding: 16px;
      margin: 0px 20px;
      margin-bottom: 20px;
      font-size: 18px;
    }

    .button {
      margin: 4px;
    }
  }

  .separator {
    border-bottom: 1px solid #80808075;;
    margin: 0px 20px;
  }
`;