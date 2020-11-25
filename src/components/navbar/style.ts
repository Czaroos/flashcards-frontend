import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 32px;
  background: var(--primary-light);

  & > img {
    cursor: pointer;
  }

  & > img:hover {
    transform: rotate(5deg);
  }

  & > nav {
    display: flex;
    align-items: center;
    flex-grow: 2;
    padding: 0px 30px;

    @media (max-width: 960px) {
      display: none;
    }

    & > ul {
      list-style-type: none;
      height: 100%;
      display: flex;

      & > li {
        height: 35px;
        color: var(--white);
        font-weight: 900;
        font-size: 20px;
        border-right: 3px solid var(--white);
        padding-right: 20px;
        padding-left: 20px;
        display: grid;
        justify-items: center;
        align-items: center;
        cursor: pointer;
      }

      & > li:last-child{
        border: none;
      }

      & > li:hover{
        background: rgba(255,255,200,0.5);
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }

  & > div {
    padding: 16px 19px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 32px;
  width: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 11;

  & > div {
    width: 32px;
    height: 0.25rem;
    background: var(--primary-light);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;