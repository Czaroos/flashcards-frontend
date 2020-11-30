import styled from "styled-components";
import { Button } from "@components";

import { DropDownMenuModal } from "./model"

export const Container = styled.div`
    position: relative;
`;

export const List = styled.div<DropDownMenuModal>`
    z-index: 99;
    transition: all linear 0.1s;
    position: absolute;
    background: #5E6572;
    min-width: 100px;
    padding: 10px;
    top: 50px;
    left: 16px;
    border-radius: 5px;
    visibility: ${({ open }) => open ? "visible" : "hidden"};
    opacity: ${({ open }) => open ? "1" : "0"};

`;

export const StyledButton = styled(Button)`
    width: 100px;
    border: 2px solid var(--secondary);
    opacity: 1;
    border-radius: 0;
    color: var(--black);
    font-weight: 900;

    img {
        height: 13px;
        margin-left: 8px;
    }

    &:hover{
        background: none;
        color: var(--black);
        opacity: 1;
    }
`; 
