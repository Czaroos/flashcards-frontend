import styled from "styled-components";

import { AlertVariant } from "./model"

export const AlertContainer = styled.div<AlertVariant>`
    position:relative;
    width: 500px;
    height: 50px;
    margin-bottom: 15px;
    background: var(--primary-light);
    border-left: 8px solid var(--primary);
    border-radius: 5px;
    transition: all 1s;
    margin-left: ${({ variant }) => variant ? '520px' : '0'};
    display: grid;
    align-items: center;
    padding-left: 15px;
    font-size: 20px;
`;

export const CloseButt = styled.button`
    position: absolute;
    top: 12px;
    right: 10px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    display: grid;
    justify-content: center;
    align-items: center;
`;
