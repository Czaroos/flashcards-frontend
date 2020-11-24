import styled from "styled-components";
import { ImageProps } from "./model";

export const ImageContainer = styled.div<ImageProps>`
    height: 100%;
    width: ${({width}) => width}px;
    background-image: url('${({content}) => content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;