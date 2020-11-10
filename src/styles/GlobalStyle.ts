import { createGlobalStyle } from "styled-components";
import Roboto100 from "@fonts/roboto-latin-100.woff2";
import Roboto300 from "@fonts/roboto-latin-100.woff2";
import Roboto400 from "@fonts/roboto-latin-100.woff2";
import Roboto400Italic from "@fonts/roboto-latin-100.woff2";
import Roboto500 from "@fonts/roboto-latin-100.woff2";

export const GlobalStyle = createGlobalStyle`
/* roboto-100 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: url(${Roboto100}) format('woff2');
}
/* roboto-300 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url(${Roboto300}) format('woff2');
}
/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${Roboto400}) format('woff2');
}
/* roboto-italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  src: url(${Roboto400Italic}) format('woff2');
}
/* roboto-500 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(${Roboto500}) format('woff2');
}
  :root{
    /* Colours */
    --white: #FFF;
    --black: #000;
    --gunmetal: #223843;
    --cultured: #EFF1F3;
    --light-gray: #DBD3D8;
    --desert-sand: #D8B4A0;
    --terra-cotta: #D77A61;

    /* Font weight */
    --very-thin: 100;
    --thin: 300;
    --bold: 500;
  }
  html,body,#root{
    height: 100%;
    width: 100%;
  }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto";
        outline: none;
    }
`;

export const customStyles = (props: { customStyles?: string }) =>
  props.customStyles && props.customStyles;
