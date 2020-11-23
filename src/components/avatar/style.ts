import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1px solid var(--black);
  color: var(--white);
  user-select: none;
  background: rgba(0, 0, 0, 0.2);
  margin-right: 16px;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
