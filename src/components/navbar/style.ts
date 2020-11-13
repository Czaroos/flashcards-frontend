import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 32px;
  background: var(--secondary);

  & > img {
    display: flex;
    max-width: 260px;
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
`;

export const Sidebar = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid var(--black);

  @media (min-width: 960px) {
    display: none;
  }
`;
