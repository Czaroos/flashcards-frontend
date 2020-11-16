import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 32px;
  background: var(--secondary);

  & > img {
    display: flex;
    max-width: 260px;
    height: 45px;
    margin: 16px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  & > nav {
    display: flex;
    align-items: center;
    flex-grow: 2;
    padding: 0px 30px;

    @media (max-width: 960px) {
      display: none;
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
