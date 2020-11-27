import styled from "styled-components";

import { AlertStyleProps } from "./model"

export const AlertContainer = styled.div<AlertStyleProps>`
    position:relative;
    width: 500px;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 5px;
    transition: margin-left linear 0.7s;
    margin-left: ${({ visibility }) => visibility ? '520px' : '0'};
    display: grid;
    align-items: center;
    padding-left: 15px;
    font-size: 20px;
    background: ${({ variant }) => variant === 'danger' && 'rgb(255,151,162)'};
    background: ${({ variant }) => variant === 'info' && 'rgb(215,240,254)'};
    background: ${({ variant }) => variant === 'success' && 'rgb(196,243,216)'};
    background: ${({ variant }) => variant === 'warning' && 'rgb(254,219,156)'};
    border-left: 8px solid;
    border-color: ${({ variant }) => variant === 'danger' && 'rgb(254,72,84)'};
    border-color: ${({ variant }) => variant === 'info' && 'rgb(121,194,245)'};
    border-color: ${({ variant }) => variant === 'success' && 'rgb(49,212,116)'};
    border-color: ${({ variant }) => variant === 'warning' && 'rgb(255,164,6)'};
`;