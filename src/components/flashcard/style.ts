import styled from "styled-components";

import { Button } from "@components";

import { FlashcardVariant } from "./model";

export const FlashcardContainer = styled.div<FlashcardVariant>`
    width: ${({ variant }) => variant === "tiny" && "200px"};
    height: ${({ variant }) => variant === "tiny" && "100px"};
    width: ${({ variant }) => variant === "medium" && "400px"};
    height: ${({ variant }) => variant === "medium" && "100px"};
    width: ${({ variant }) => variant === "large" && "400px"};
    height: ${({ variant }) => variant === "large" && "200px"};
    border-radius: 15px;
    position: absolute;
    padding: 5px;
    background-color: var(--primary);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ModalDiv = styled.div`
    width: 300px;
    height: 100px;
    background: var(--primary-light);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ChangeButton = styled(Button)`
    position: absolute;
    top: -10px;
    right: -10px;
    height: 20px;
    width: 20px;
    padding: 0;
    cursor: pointer;
`;

export const EditButton = styled(ChangeButton)`
    top: auto;
    bottom: -10px;
`;