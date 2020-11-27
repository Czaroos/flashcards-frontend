import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--white);
  user-select: none;
  background: rgba(0, 0, 0, 0.2);
  margin-right: 16px;
  font-size: 13px;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
