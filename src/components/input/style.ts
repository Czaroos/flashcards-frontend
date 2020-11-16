import styled from "styled-components";

import { Input } from "./model";

export const InputContainer = styled.input<Input>`
  width: ${props => props.width ? props.width : "150px"};
  font-size: 25px;
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(0,0,0,0.3);
  padding: 5px;
  transition: all ease-in-out 0.3s;

  &:focus{
    border-bottom: 2px solid rgba(0,0,0,1);
  }

  &::placeholder{
    color: rgba(128, 128, 128,0.4)
  }
`;
